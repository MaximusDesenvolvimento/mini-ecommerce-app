"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { InputMask } from "@/components/MaskedInput";
import { useToast } from "@/components/ui/use-toast";

interface CepProps {
  status: number;
  data: {
    bairro: string;
    localidade: string;
    logradouro: string;
    uf: string;
  };
}

export function ContainerRegister() {
  const { toast } = useToast();
  const pattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).*$/;

  const formSchema = z.object({
    email: z.string().email({
      message: "E-mail inválido!",
    }),
    password: z
      .string()
      .min(8, {
        message: "A senha precisa ter pelo menos 8 digitos",
      })
      .refine((value) => pattern.test(value), {
        message:
          "A senha deve conter pelo menos um letra maiúscula e um caractere especial.",
      }),
    name: z
      .string()
      .min(3, {
        message: "Seu nome precisa ter pelo menos três letras",
      })
      .regex(/^([a-zA-ZÀ-ÿ0-9\s\-]+)$/i, {
        message: "O produto pode ter apenas letras, números e hifens.",
      }),
    age: z
      .string()
      .regex(/^(?:1[01][0-9]|120|[1-9]?[0-9])$/, {
        message: "Idade inválida. Deve ser um número entre 0 e 120.",
      })
      .refine((value) => parseInt(value) >= 18, {
        message: "Você deve ser maior de 18 anos",
      }),
    gender: z.string(),
    phoneNumber: z.string().regex(/^\(?\d{2}\)?\s?\d{5}-\d{4}$/, {
      message:
        "Número de celular inválido. Verifique se ele está no padrão: (99) 99999-9999 or 99999-9999",
    }),
    zipCode: z
      .string()
      .min(9, {
        message: "O CEP contém no minímo 8 digitos",
      })
      .max(9, {
        message: "O CEP contém no máximo 8 digitos",
      })
      .regex(/^\d{5}-\d{3}$/, {
        message: "CEP inválido, verifique se ele está neste padrão: 00000-000",
      }),
    street: z.string().regex(/^([a-zA-ZÀ-ÿ0-9\s\-]+)$/i, {
      message: "O produto pode ter apenas letras, números e hifens.",
    }),
    district: z.string().regex(/^([a-zA-ZÀ-ÿ0-9\s\-]+)$/i, {
      message: "O produto pode ter apenas letras, números e hifens.",
    }),
    city: z.string().regex(/^([a-zA-ZÀ-ÿ0-9\s\-]+)$/i, {
      message: "O produto pode ter apenas letras, números e hifens.",
    }),
    state: z.string().regex(/^([a-zA-ZÀ-ÿ0-9\s\-]+)$/i, {
      message: "O produto pode ter apenas letras, números e hifens.",
    }),
    number: z.string(),
    complement: z.string().regex(/^([a-zA-ZÀ-ÿ0-9\s\-]+)$/i, {
      message: "O produto pode ter apenas letras, números e hifens.",
    }),
    referencePoint: z.string().regex(/^([a-zA-ZÀ-ÿ0-9\s\-]+)$/i, {
      message: "O produto pode ter apenas letras, números e hifens.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function getCEp(cep: string) {
    if (cep.length === 9) {
      const sendCep = await fetch(`api/cep?cep=${cep.replace("-", "")}`, {
        cache: "no-cache",
      });

      const response: CepProps = await sendCep.json();
      if (response.status === 404) {
        form.setError("zipCode", { message: "Cep inválido!" });
        form.setValue("city", "");
        form.setValue("state", "");
        form.setValue("street", "");
        form.setValue("district", "");
      } else {
        const { bairro, localidade, logradouro, uf } = response.data;
        form.clearErrors("zipCode");
        form.setValue("zipCode", cep);
        form.setValue("city", localidade);
        form.setValue("state", uf);
        form.setValue("street", logradouro);
        form.setValue("district", bairro);
      }
    }
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const requestData = {
      name: values.name,
      age: values.age,
      gender: values.gender,
      phoneNumber: values.phoneNumber,
      email: values.email,
      password: values.password,
      address: {
        zipCode: values.zipCode,
        street: values.street,
        district: values.district,
        city: values.city,
        number: values.number,
        state: values.state,
        complement: values.complement,
        referencePoint: values.referencePoint,
      },
    };
    console.log("Enviar para a API: ", requestData);
    try {
      // const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/login`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(requestData),
      // });
      // const data = await response.json();
      // console.log("response: ", data);
      toast({
        title: `É bom te ver por aqui ${requestData.name}!`,
        description:
          "Estamos realizando seu cadastro em instantes você será redirecionado.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Aconteceu algo inesperado. ❌",
        description:
          "Tente novamente mais tarde, caso o problema persista entre em contato com nosso suporte.",
      });
    }
  }
  return (
    <div>
      <h2 className="text-gray-950 text-center text-sm -tracking-[0.32px] my-4">
        Para você conseguir finalizar uma compra é necessário criar uma conta.
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Nome Completo*</FormLabel>
                <FormControl>
                  <Input placeholder="Digite seu nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center gap-4">
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem className="mb-4 w-1/2">
                  <FormLabel>Idade*</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: 18" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="mb-4 w-1/2">
                  <FormLabel>Genero*</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Feminino" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Número do Celular*</FormLabel>
                <FormControl>
                  <InputMask
                    maskType="phone"
                    placeholder="(99) 99999-9999"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Email*</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="exemplo@email.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Senha*</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Digite sua senha"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>CEP*</FormLabel>
                <FormControl>
                  <InputMask
                    maskType="cep"
                    placeholder="Digite sua senha"
                    {...field}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      getCEp(e.target.value)
                    }
                    onBlur={field.onBlur}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center gap-4">
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="mb-4 w-1/2">
                  <FormLabel>Cidade*</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: João Pessoa" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem className="mb-4 w-1/2">
                  <FormLabel>Estado*</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Paraíba" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Rua*</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Pernambuco" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="district"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Bairro*</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Bairro dos Estados" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center gap-4">
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem className="mb-4 w-1/2">
                  <FormLabel>Número*</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: 121" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="complement"
              render={({ field }) => (
                <FormItem className="mb-4 w-1/2">
                  <FormLabel>Complemento*</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: apto 301" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="referencePoint"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Ponto de referência*</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Perto do mercado" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full mb-10 h-12">
            Cadastrar
          </Button>
        </form>
      </Form>
    </div>
  );
}
