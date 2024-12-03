import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SigninForm() {
  return (
    <form className="mt-10 flex flex-col gap-4">
      <Input type="email" placeholder="Digite seu email" />
      <Input type="password" placeholder="Digite sua senha" />
      <Button>entrar</Button>
    </form>
  );
}
