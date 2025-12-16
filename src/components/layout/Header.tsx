import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full h-16 flex items-center bg-primary text-primary-fg px-6 shadow-md">
      <Link href="/">
        <h1 className="font-bold text-3xl">Donto</h1>
      </Link>
    </header>
  );
}
