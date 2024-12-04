"use client";

import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function NavLogout() {
  const { replace } = useRouter();

  return (
    <Button
      onClick={() => replace("/signin")}
      variant={"outline"}
      className="p-0 flex items-center justify-start gap-6 opacity-50 hover:opacity-100"
    >
      <FontAwesomeIcon icon={faArrowRightFromBracket} className="size-6" />
      Sair
    </Button>
  );
}
