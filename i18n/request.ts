import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { locales } from "./config";
import { notFound } from "next/navigation";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!hasLocale(locales, locale)) {
    notFound();
  }

  return {
    locale,
    messages: (
      await import(`../messages/${locale}.json`)
    ).default,
  };
});