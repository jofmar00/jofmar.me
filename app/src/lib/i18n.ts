import type { LocalizedString } from "@/types";

export const DEFAULT_LOCALE = "es";

export function t(value: LocalizedString, locale?: string): string {
    return value[locale === "en" ? "en" : "es"];
}
