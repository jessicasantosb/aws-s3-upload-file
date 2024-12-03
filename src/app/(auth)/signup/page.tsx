import { Logo } from "@/components/logo";
import Link from "next/link";
import { SignupForm } from "../_components/signup-form";

export default function Register() {
  return (
    <main className="max-w-lg mx-auto mt-12 px-6">
      <div className="w-16">
        <Logo size={56} />
      </div>

      <h1 className="mt-10 text-2xl">Entre na sua conta</h1>

      <SignupForm />

      <p className="mt-8 text-white/50">
        Já tem uma conta?{" "}
        <Link href={"/signin"} className="text-white hover:opacity-95">
          Entrar no Z
        </Link>
      </p>
    </main>
  );
}
