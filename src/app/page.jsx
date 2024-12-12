import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Bem-vindo ao GURPS Online</h1>
      <Link href="/ficha">
        <div className="text-blue-500 underline">Criar nova ficha</div>
      </Link>
    </div>
  );
}
