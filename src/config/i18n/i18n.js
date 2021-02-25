import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-locize-backend';
// import Editor from 'locize-editor';
import LanguageDetector from 'i18next-browser-languagedetector'

// OPTIONAL IF YOU LIKE TO SEE ALL (LOGIN TO TRANSLATION MANAGEMENT EDITOR)
// 1) signup at https://locize.com/register and login
// 2) create a new project
// 3) copy/paste your projectId, apiKey below
// 4) add de as additional language
// 5a) import en from: http://api.locize.app/ce0cf818-32e5-44a5-b7f0-4ea9e840d962/latest/en/translation
// 5b) import de from: http://api.locize.app/ce0cf818-32e5-44a5-b7f0-4ea9e840d962/latest/de/translation
const locizeOptions = {
  projectId: '818058bf-938a-4f9e-b432-9a4948398255',
  apiKey: 'b7b0b395-18e2-4add-a6b0-fd33207c4cd5', // YOU should not expose your apps API key to production!!!
  referenceLng: 'vi-VN',
  version: '1.0.0',
};

i18n
  // i18next-locize-backend
  // loads translations from your project, saves new keys to it (saveMissing: true)
  // https://github.com/locize/i18next-locize-backend
  .use(Backend)
  // locize-lastused
  // sets a timestamp of last access on every translation segment on locize
  // -> safely remove the ones not being touched for weeks/months
  // https://github.com/locize/locize-lastused
//   .use(LastUsed)
  // locize-editor
  // InContext Editor of locize ?locize=true to show it
  // https://github.com/locize/locize-editor
  // .use(Editor)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'vi-VN',
    // debug: true,
    // saveMissing: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    backend: locizeOptions,
    // editor: {
    //   ...locizeOptions,
    //   onEditorSaved: async (lng, ns) => {
    //     // reload that namespace in given language
    //     await i18n.reloadResources(lng, ns);
    //     // trigger an event on i18n which triggers a rerender
    //     // based on bindI18n below in react options
    //     i18n.emit('editorSaved');
    //   },
    // },
    // react: {
    //   bindI18n: 'languageChanged editorSaved',
    // },
  });

export default i18n;