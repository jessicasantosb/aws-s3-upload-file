import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SignupForm() {
  return (
    <form className="mt-10 flex flex-col gap-4">
      <Input placeholder="Digite seu nome" />
      <Input type="email" placeholder="Digite seu email" />
      <Input type="password" placeholder="Digite sua senha" />
      <Input type="password" placeholder="Confirme sua senha" />
      <Button>cadastrar</Button>
    </form>
  );
}
