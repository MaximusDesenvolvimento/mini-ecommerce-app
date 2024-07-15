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
import { useToast } from "@/components/ui/use-toast";

export default function CreateProduct() {
  const { toast } = useToast();

  const formSchema = z.object({
    name: z
      .string()
      .min(3, {
        message: "O produto precisa ter no mínimo 3 letras",
      })
      .regex(/^([a-zA-ZÀ-ÿ0-9\s\-]+)$/i, {
        message: "O produto pode ter apenas letras, números e hifens.",
      }),
    oldPrice: z.string().transform((oldpriceString) => {
      const oldPriceNumber = oldpriceString.replace(/[^\d.-]/g, "");
      return parseFloat(oldPriceNumber) / 100;
    }),
    price: z.string().transform((priceString) => {
      const priceNumber = priceString.replace(/[^\d.-]/g, "");
      return parseFloat(priceNumber) / 100;
    }),
    category: z
      .string()
      .min(4, {
        message: "A categoria precisa ter no mínimo 4 letras",
      })
      .regex(/^([a-zA-ZÀ-ÿ0-9\s\-]+)$/i, {
        message: "A categoria pode ter apenas letras, números e hifens.",
      }),
    image: z.any(),
    // .string()
    // .url()
    // .refine(
    //   (url) => {
    //     return imageExtensions.some((ext) => url.toLowerCase().endsWith(ext));
    //   },
    //   {
    //     message:
    //       "Sua imagem não tem uma das extensões permitidas: .jpg, .jpeg, .png, .gif, .bmp, .webp",
    //   }
    // ),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_API}/product`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      const data = await response.json();
      console.log("response: ", data);

      toast({
        title: "Parabéns 🚀🚀",
        description: `Produto ${values.name} criado com sucesso`,
      });
    } catch (error) {
      console.log(error);

      toast({
        variant: "destructive",
        title: "Aconteceu algo inesperado. ❌",
        description: "Entre em contato com a nossa equipe.",
      });
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      const fileIsTypeImage = file.type.startsWith("image/");

      if (!fileIsTypeImage) {
        form.setError("image", file);
        form.setError("image", {
          type: "custom",
          message:
            "Escolha um arquivo de imagem válido com uma dessas extenções: .jpg, .jpeg, .png, .gif, .bmp, .webp ",
        });
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const imgBase64 = reader.result;
        if (typeof imgBase64 === "string") {
          form.setValue(
            "image",
            imgBase64.replace(/^data:image\/[a-z]+;base64,/, "")
          );
        }

        // if (typeof imgBase64 === "string") {
        //   const base64String = `data:${file.type};base64,${
        //     imgBase64.split(",")[1]
        //   }`;
        //   console.log(base64String);
        // }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mt-8 md:max-w-[470px] mx-auto">
      <div className="flex flex-col justify-center items-center gap-8 px-4 mb-4">
        <h1 className=" text-2xl font-semibold ">Cadastro de produto</h1>
        <p>
          Uma boa imagem irá chamar mais atenção para seu produto, então escolha
          uma imagem bonita e com uma ótima qualidade. Para um melhor uso,
          reduza o peso da imagem,{" "}
          <a
            href="https://compressjpeg.com/pt/"
            target="_blank"
            className="underline text-yellow-400"
          >
            click aqui.{" "}
          </a>
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center gap-4 px-4 pb-8"
        >
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Imagem *</FormLabel>
                <FormControl>
                  <Input
                    className="h-12 rounded-lg pt-3 border-primary md:h-10 md:pt-2"
                    type="file"
                    onChange={(e) => {
                      handleFileChange(e);
                    }}
                    name={field.name}
                    ref={field.ref}
                    onBlur={field.onBlur}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Nome do produto *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ex: Martelo"
                    className="h-12 rounded-lg border-primary md:h-10"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="oldPrice"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Preço antigo *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ex: R$ 12,00"
                    className="h-12 rounded-lg border-primary md:h-10"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Preço *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ex: R$ 10,00"
                    className="h-12 rounded-lg border-primary md:h-10"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Categoria *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ex: material de construção"
                    className="h-12 rounded-lg border-primary md:h-10"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full h-12 rounded-lg text-white md:max-w-[470px] md:h-10"
          >
            Cadastrar
          </Button>
        </form>
      </Form>
    </div>
  );
}
