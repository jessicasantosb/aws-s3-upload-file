"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import { Input } from "@/components/ui/input";

interface SearchInputProps {
  defaultValue?: string;
  hideOnSearch?: boolean;
}

export function SearchInput({ defaultValue, hideOnSearch }: SearchInputProps) {
  const [query, setQuery] = useState(defaultValue ?? "");
  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = ({ code }: { code: string }) => {
    if (code.toLowerCase() !== "enter") return;
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  if (hideOnSearch && pathname === "/search") return null;

  return (
    <Input
      icon={faMagnifyingGlass}
      placeholder="Buscar"
      value={query}
      onChange={({ target }) => {
        setQuery(target.value);
      }}
      onKeyUp={handleSearch}
    />
  );
}
