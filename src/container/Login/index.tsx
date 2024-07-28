"use client";

import { useEffect } from "react";

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
import { useToast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";

export function ContainerLogin() {
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
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      console.log("response: ", data);
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

  function salvedLoginLocal() {
    const isValueLogin =
      form.getValues("email") !== "" || form.getValues("email") !== undefined;

    const isValuePassword =
      form.getValues("password") !== "" ||
      form.getValues("password") !== undefined;

    if (isValueLogin && isValuePassword) {
      const values = {
        email: form.getValues("email"),
        password: form.getValues("password"),
      };

      localStorage.setItem(
        "@miniEcommerce:login&password-v0.1",
        JSON.stringify(values)
      );
    }
  }

  function getLoginLocal() {
    const existLogin = localStorage.getItem(
      "@miniEcommerce:login&password-v0.1"
    );

    if (existLogin) {
      const values = JSON.parse(existLogin);
      form.setValue("email", values.email);
      form.setValue("password", values.password);
    }
  }

  useEffect(() => {
    getLoginLocal();
  });

  return (
    <div>
      <h2 className="text-gray-950 text-center text-sm -tracking-[0.32px] my-4">
        Se você tiver uma conta, entre com seu e-mail e senha.
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>E-mail*</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="exemplo@exemplo.com"
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
              <FormItem>
                <FormLabel>Senha*</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center space-x-2 my-4">
            <Checkbox
              id="salved-login"
              onClick={salvedLoginLocal}
              disabled={
                (form.getValues("email") === "" ||
                  form.getValues("email") === undefined) &&
                (form.getValues("password") === "" ||
                  form.getValues("password") === undefined)
              }
            />
            <div>
              <label
                htmlFor="salved-login"
                className="text-xs peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Lembrar meu acesso
              </label>
            </div>
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
}
