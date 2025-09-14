import { BaseForm } from "components/ResumeForm/Form";
import { Input, Textarea } from "components/ResumeForm/Form/InputGroup";
import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import { changeProfile, selectProfile } from "lib/redux/resumeSlice";
import { ResumeProfile } from "lib/redux/types";

export const ProfileForm = () => {
  const profile = useAppSelector(selectProfile);
  const dispatch = useAppDispatch();
  const { name, email, phone, url, summary, location } = profile;

  const handleProfileChange = (field: keyof ResumeProfile, value: string) => {
    dispatch(changeProfile({ field, value }));
  };

  return (
    <BaseForm>
      <div className="grid grid-cols-6 gap-3">
        <Input
          label="Nombre y apellido"
          labelClassName="col-span-full"
          name="name"
          placeholder="Maria Ortiz"
          value={name}
          onChange={handleProfileChange}
        />
        <Textarea
          label="Resumen profesional"
          labelClassName="col-span-full"
          name="summary"
          placeholder="Ej: Profesional en Negocios Internacionales con experiencia en gestión de proyectos y desarrollo de aplicaciones digitales..."
          value={summary}
          onChange={handleProfileChange}
        />
        <Input
          label="Email"
          labelClassName="col-span-4"
          name="email"
          placeholder="maria@gmail.com"
          value={email}
          onChange={handleProfileChange}
        />
        <Input
          label="Celular"
          labelClassName="col-span-2"
          name="phone"
          placeholder="(123)456-7890"
          value={phone}
          onChange={handleProfileChange}
        />
        <Input
          label="Website"
          labelClassName="col-span-4"
          name="url"
          placeholder="Ej: http://joseortizm.com/"
          value={url}
          onChange={handleProfileChange}
        />
        <Input
          label="Ciudad"
          labelClassName="col-span-2"
          name="location"
          placeholder="Lima, Perú"
          value={location}
          onChange={handleProfileChange}
        />
      </div>
    </BaseForm>
  );
};
