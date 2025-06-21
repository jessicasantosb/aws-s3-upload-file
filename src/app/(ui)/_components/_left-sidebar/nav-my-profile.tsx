import Image from "next/image";
import Link from "next/link";

import { user } from "@/data/user";

export function NavMyProfile() {
  const { avatar, slug, name } = user;

  return (
    <div className="flex items-center gap-2">
      <Link href={`/${slug}`}>
        <Image
          alt="avatar"
          src={avatar}
          width={40}
          height={40}
          className="rounded-full"
        />
      </Link>

      <div className="flex-1 overflow-hidden">
        <Link href={`/${slug}`} className="block truncate">
          {name}
        </Link>
        <p className="truncate text-sm text-slate-300">@{slug}</p>
      </div>
    </div>
  );
}
