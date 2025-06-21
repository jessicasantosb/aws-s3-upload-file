import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";

import {
  NavItem,
  NavLogout,
  NavMyProfile,
} from "@/app/(ui)/_components/_left-sidebar";
import { Logo } from "@/components/logo";

export function LeftSidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-72 flex-col border-r-2 border-gray-900 px-3 lg:flex">
      <div className="mt-6 flex-1">
        <Logo size={24} />

        <nav className="mt-11 flex flex-col gap-4">
          <NavItem href="/home" icon={faHome} label="Página inicial" />
          <NavItem href="/profile" icon={faUser} label="Meu perfil" />
        </nav>
      </div>

      <div className="mb-6 flex flex-col gap-4">
        <NavLogout />
        <NavMyProfile />
      </div>
    </aside>
  );
}
