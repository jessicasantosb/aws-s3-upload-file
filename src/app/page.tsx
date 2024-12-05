import { Logo } from "@/components/logo";
import { redirect } from "next/navigation";

export default function Home() {
  redirect('/home')

  return (
    <main className="h-screen flex items-center justify-center">
      <Logo size={80} />
    </main>
  );
}
