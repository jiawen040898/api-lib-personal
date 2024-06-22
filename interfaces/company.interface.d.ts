import { LookupCategory } from '../constants';
export interface CompanyRes {
    id: number;
    name: string;
    slug: string;
    timezone: string;
    locales: CompanyLocale[];
    logo_url: string;
    products: CompanyProductRes[];
}
export interface CompanyLocale {
    locale: string;
    is_default: boolean;
}
export interface CompanyProductRes {
    module: string;
}
interface LookupSettingsItem {
    value: string;
    label: string;
}
export interface CompanyLookupSettings {
    category: LookupCategory;
    items: LookupSettingsItem[];
}
export {};
