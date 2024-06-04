import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const [t, i18n] = useTranslation("global");
  return (
    <footer>
      <div className="text-center p-5 bg-slate-400 bg-opacity-30">
        <p>{t("footer.description")}</p>
      </div>
    </footer>
  );
}
