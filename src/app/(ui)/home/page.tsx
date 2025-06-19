import { CreatePost } from "../_components/_create-post";

export default function Home() {
  return (
    <main className="px-4 py-8">
      <h1 className="pb-8 text-center text-xl">Galeria</h1>

      <CreatePost />
    </main>
  );
}
