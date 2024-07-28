import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContainerLogin } from "@/container/Login";
import { ContainerRegister } from "@/container/Register";

export default function LoginRegister() {
  return (
    <Tabs defaultValue="login" className="w-[90%] mx-auto mt-24 md:w-[480px]">
      <TabsList className="grid w-[90%] grid-cols-2 mx-auto">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Cadastro</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <ContainerLogin />
      </TabsContent>

      <TabsContent value="register">
        <ContainerRegister />
      </TabsContent>
    </Tabs>
  );
}
