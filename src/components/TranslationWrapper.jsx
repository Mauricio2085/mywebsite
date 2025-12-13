"use client";

import { useTranslation } from "react-i18next"; // Esto requiere el contexto del cliente

/**
 * Componente Wrapper para traducir una clave de texto.
 * Esto permite que el componente padre (como ProjectData) sea un Server Component.
 * @param {object} props
 * @param {string} props.translationKey - La clave del texto a traducir (ej: "portfolio.title").
 */
export default function TranslationWrapper({ translationKey }) {
  const { t } = useTranslation();

  return <>{t(translationKey)}</>;
}
