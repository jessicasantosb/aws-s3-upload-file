import { LeftSidebar } from "@/app/(ui)/_components/_left-sidebar";
import { RightSidebar } from "@/app/(ui)/_components/_right-sidebar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen flex justify-center mx-auto ">
      <LeftSidebar />
      <section className="flex-1 max-w-lg">{children}</section>
      <RightSidebar />
    </main>
  );
}
