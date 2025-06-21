import { ReactNode } from "react";

import { LeftSidebar } from "@/app/(ui)/_components/_left-sidebar";
import { RightSidebar } from "@/app/(ui)/_components/_right-sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto flex min-h-screen justify-center ">
      <LeftSidebar />
      <section className="max-w-lg flex-1">{children}</section>
      <RightSidebar />
    </main>
  );
}
