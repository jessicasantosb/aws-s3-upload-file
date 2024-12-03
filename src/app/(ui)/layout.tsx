import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen flex justify-center mx-auto ">
      <aside className="h-screen w-72 px-3 hidden lg:flex flex-col sticky top-0 border-r-2 border-gray-900">
        left
      </aside>

      <section className="flex-1 max-w-lg">{children}</section>

      <aside className="h-fit w-96 px-8 py-6 hidden lg:flex flex-col gap-6 sticky top-0 border-l-2 border-gray-900">
        right
      </aside>
    </main>
  );
}
