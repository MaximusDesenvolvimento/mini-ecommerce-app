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
    phoneNumber: z.string().regex(/^\(?\d{2}\)?\s?\d{5}-\d{4}$/, {
      message:
        "Número de celular inválido. Verifique se ele está no padrão: (99) 99999-9999 or 99999-9999",
    }),
    zipCode: z
      .string()
      .min(8, {
        message: "O CEP contém no minímo 8 digitos",
      })
      .max(8, {
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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    try {
      // const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/login`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(values),
      // });
      // const data = await response.json();
      // console.log("response: ", data);
      toast({
        title: "Login bem sucedido!",
        description: "Você está sendo redirecionado.",
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
