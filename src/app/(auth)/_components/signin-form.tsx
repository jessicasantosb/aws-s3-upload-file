"use client";

import { useState } from "react";

import { Button, Input } from "@/components/ui";

export function SigninForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSigin = () => {};

  return (
    <form className="mt-10 flex flex-col gap-4" onSubmit={handleSigin}>
      <Input
        type="email"
        placeholder="Digite seu email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <Input
        type="password"
        placeholder="Digite sua senha"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <Button type="submit">entrar</Button>
    </form>
  );
}
