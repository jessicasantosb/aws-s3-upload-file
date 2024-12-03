import { Logo } from "@/components/logo";
import Link from "next/link";
import { SigninForm } from "../_components/signin-form";

export default function Login() {
  return (
    <main className="max-w-lg mx-auto mt-12 px-6">
      <div className="w-16">
        <Logo size={56} />
      </div>

      <h1 className="mt-10 text-2xl">Entre na sua conta</h1>

      <SigninForm />

      <p className="mt-8 text-white/50">
        Ainda não possui uma conta?{" "}
        <Link href={"/signup"} className="text-white hover:opacity-95">
          Cadastre-se
        </Link>
      </p>
    </main>
  );
}
