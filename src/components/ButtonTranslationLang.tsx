import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HiOutlineTranslate } from "react-icons/hi";
import i18n from "../lang/i18n";

export interface PButtonTranslationLang {
  uniqueId: string;
}

export default function ButtonTranslationLang({ uniqueId }: PButtonTranslationLang) {
  const { t } = useTranslation();
  const [lang, setLang] = useState(false);

  const changeLanguage = () => {
    setLang((prev) => {
      const result = !prev;
      const fallbackLng = result ? "en-US" : "ko-KR";
      i18n.changeLanguage(fallbackLng);
      return result;
    });
  };

  return (
    <label htmlFor={`buttonTranslationLang-${uniqueId}`} className="buttonTranslationLang">
      <input
        id={`buttonTranslationLang-${uniqueId}`}
        type="checkbox"
        name=""
        checked={lang}
        onChange={() => changeLanguage()}
      />
      <HiOutlineTranslate /> {t(`header.lang`)}
    </label>
  );
}
