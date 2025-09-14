import Link from "next/link";
import { FlexboxSpacer } from "components/FlexboxSpacer";

export const Hero = () => {
  return (
    <section className="lg:flex lg:h-[825px] lg:justify-center">
      <FlexboxSpacer maxWidth={75} minWidth={0} className="hidden lg:block" />
      <div className="mx-auto max-w-xl pt-8 text-center lg:mx-0 lg:grow lg:pt-32 lg:text-left">
        <h1 className="text-purple-500 pb-2 text-4xl font-bold lg:text-5xl">
          Crea tu currículum vitae 
          <br />
          en formato PDF de forma accesible.
        </h1>
        <p className="mt-3 text-lg lg:mt-5 lg:text-xl">
          Este es un proyecto de código abierto, construido con ❤️ para nuestros estudiantes de Capacitadero. 
        </p>
        <Link href="/resume-builder" className="mt-6 lg:mt-14">
          Ir a crear CV <span aria-hidden="true"></span>
        </Link>
        <p className="mt-3 text-lg text-gray-600 lg:mt-36">
          ¿Quieres colaborar con el proyecto? 
        </p>
        <Link target="_blank" href="https://github.com/joseortizm/genera-tu-cv" className="underline underline-offset-2">
            Ir al repositorio de GitHub
        </Link>
      </div>
    </section>
  );
};
