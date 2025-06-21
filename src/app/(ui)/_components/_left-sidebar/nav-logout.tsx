"use client";

import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export function NavLogout() {
  const route  = useRouter();

  return (
    <Button
      onClick={() => { route.replace("/signin"); }}
      variant={"outline"}
      className="flex items-center justify-start gap-6 p-0 opacity-50 hover:opacity-100"
    >
      <FontAwesomeIcon icon={faArrowRightFromBracket} className="size-6" />
      Sair
    </Button>
  );
}
