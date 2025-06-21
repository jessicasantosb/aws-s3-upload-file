"use client";

import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  label: string;
  icon: IconDefinition;
  href: string;
  active?: boolean;
}

export function NavItem({ label, icon, href, active }: NavItemProps) {
  const pathname = usePathname();

  const isPath = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-6  ${
        active || isPath ? "opacity-100" : "opacity-60"
      } hover:opacity-100`}
    >
      <FontAwesomeIcon icon={icon} className="size-6" />
      <p className="text-lg">{label}</p>
    </Link>
  );
}
