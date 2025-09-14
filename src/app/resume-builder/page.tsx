"use client";
import { Provider } from "react-redux";
import { store } from "lib/redux/store";
import { ResumeForm } from "components/ResumeForm";
import { Resume } from "components/Resume";

export default function Create() {
  return (
    <Provider store={store}>
      <main className="relative h-full w-full overflow-hidden bg-gray-50">
        <div className="grid grid-cols-3 md:grid-cols-6">
          <h1 className="sr-only">Crear tu CV</h1>
          <section aria-labelledby="resumeFormTitle" className="col-span-3">
            <h2 id="resumeFormTitle" className="sr-only">Formulario de CV</h2>
            <ResumeForm />
          </section>
          <section aria-labelledby="resumePreviewTitle" className="col-span-3">
            <h2 id="resumePreviewTitle" className="sr-only">Vista previa del CV</h2>
            <Resume />
          </section>
        </div>
      </main>
    </Provider>
  );
}
