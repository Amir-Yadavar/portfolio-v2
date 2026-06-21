export const locales = ["fa" , "en"] as const

export const defaultLocale = "en"

export type Locale = (typeof locales)[number]