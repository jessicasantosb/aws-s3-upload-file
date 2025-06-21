"use client";

import { useState } from "react";

import { Button, Input } from "@/components/ui";

export function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleSignup = () => {};

  return (
    <form className="mt-10 flex flex-col gap-4" onSubmit={handleSignup}>
      <Input
        placeholder="Digite seu nome"
        value={name}
        onChange={({ target }) => { setName(target.value); }}
      />
      <Input
        type="email"
        placeholder="Digite seu email"
        value={email}
        onChange={({ target }) => { setEmail(target.value); }}
      />
      <Input
        type="password"
        placeholder="Digite sua senha"
        value={password}
        onChange={({ target }) => { setPassword(target.value); }}
      />
      <Input
        type="password"
        placeholder="Confirme sua senha"
        value={confirmPassword}
        onChange={({ target }) => { setConfirmPassword(target.value); }}
      />
      <Button type="submit">cadastrar</Button>
    </form>
  );
}
