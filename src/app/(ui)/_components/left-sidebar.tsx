import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";

import { NavItem } from "@/app/(ui)/_components/nav-item";
import { Logo } from "@/components/logo";

export function LeftSidebar() {
  return (
    <aside className="h-screen w-72 px-3 hidden lg:flex flex-col sticky top-0 border-r-2 border-gray-900">
      <div className="flex-1 mt-6">
        <Logo size={24} />

        <nav className="mt-11 flex flex-col gap-4">
          <NavItem href="/home" icon={faHome} label="Página inicial" />
          <NavItem href="/profile" icon={faUser} label="Meu perfil" />
        </nav>
      </div>
      <div>...</div>
    </aside>
  );
}
