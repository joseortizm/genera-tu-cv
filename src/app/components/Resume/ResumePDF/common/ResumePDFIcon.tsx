import { Svg, Path } from "@react-pdf/renderer";
import { styles } from "components/Resume/ResumePDF/styles";

/**
 * Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License
 * - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.
 */
const EMAIL_PATH_D =
  "M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z";
const PHONE_PATH_D =
  "M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z";
const LOCATION_PATH_D =
  "M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z";
const URL_PATH_D =
  "M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z";
const GITHUB_PATH_D =
  "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.7 1.3 4.9.7 1.3-.7 1.3-2.4.7-3.7-1.6-1-3.7-1.3-4.9-.7-1.3.7-1.3 2.4-.7 3.7zm44.6-3.6c-1 1.3-1.9 2.4-3.7 3.2-1.7 1-3.3 1.6-5 1-1.3-.7-1.6-2.4-1-3.6 1.3-1.3 3.2-1.6 5-1 1.4.7 1.6 2.4 1 3.6z";
const LINKEDIN_PATH_D =
  "M96 0C42.7 0 0 42.7 0 96v320c0 53.3 42.7 96 96 96h320c53.3 0 96-42.7 96-96V96c0-53.3-42.7-96-96-96H96zm80 352h-64v-192h64v192zm-32-224c-21.8 0-32-14.8-32-29.9s14.8-29.9 32-29.9c17.5 0 32 12.8 32 29.9s-14.5 29.9-32 29.9zm256 224h-64v-104c0-26.1-20.9-47.1-46.7-47.1-25.7 0-46.3 20.4-46.3 47.1v104h-64v-192h64v27.1h.9c9.4-14 27.3-23.2 47.5-23.2 38.1 0 68.1 31.1 68.1 69.3v119.8z";

const ICONS_PATHS = {
  email: EMAIL_PATH_D,
  phone: PHONE_PATH_D,
  location: LOCATION_PATH_D,
  url: URL_PATH_D,
  url_github: GITHUB_PATH_D,
  url_linkedin: LINKEDIN_PATH_D,
};

type IconType = keyof typeof ICONS_PATHS;

interface SVGIconProps {
  pathD: string;
  type: IconType;
}

const PDFIcon = ({ pathD, type }: SVGIconProps) => {
  const iconLabels: Record<IconType, string> = {
    email: 'Ícono de correo electrónico',
    phone: 'Ícono de teléfono',
    location: 'Ícono de ubicación',
    url: 'Ícono de sitio web',
    url_github: 'Ícono de GitHub',
    url_linkedin: 'Ícono de LinkedIn',
  };

  return (
    <Svg viewBox="0 0 512 512" style={{ width: '24px', height: '24px' }} aria-label={iconLabels[type]}>
      <Path d={pathD} />
    </Svg>
  );
};

const SVGIcon = ({ pathD, type }: SVGIconProps) => {
  const iconLabels: Record<IconType, string> = {
    email: 'Ícono de correo electrónico',
    phone: 'Ícono de teléfono',
    location: 'Ícono de ubicación',
    url: 'Ícono de sitio web',
    url_github: 'Ícono de GitHub',
    url_linkedin: 'Ícono de LinkedIn',
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      style={{ width: '24px', height: '24px', fill: '#000' }}
      aria-label={iconLabels[type]}
    >
      <path d={pathD} />
    </svg>
  );
};

export const ResumePDFIcon = ({ type, isPDF }: { type: IconType; isPDF: boolean }) => {
  const pathD = ICONS_PATHS[type]; // Obtener el path correspondiente

  if (isPDF) {
    return <PDFIcon pathD={pathD} type={type} />;
  }

  return <SVGIcon pathD={pathD} type={type} />;
};
