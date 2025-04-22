import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import es from "./es.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
  lng: "es", // Idioma inicial
  fallbackLng: "es", // Idioma por defecto si no encuentra la traducción

  interpolation: {
    escapeValue: false, // React ya escapa los valores
  },
});

export default i18n;
