import Link from "next/link";

export const TopNavBar = () => {
  return (
    <header
      role="banner" 
      className="flex h-[var(--top-nav-bar-height)] items-center border-b-2 border-gray-100 px-3 lg:px-12"
    >
      <Link
        href="/"
        className="text-purple-500 font-bold"
        title="Ir a la página principal"
        aria-label="Ir a la página de inicio Genera tu CV" 
      >
        Genera tu CV
      </Link>
    </header>
  );
};