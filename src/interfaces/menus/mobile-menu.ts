import { INestedLink } from './link'

export interface INestedLinkLang extends INestedLink {
    title_ar?: string
}
export interface IMobileMenuLink extends INestedLinkLang  {
    type: 'link' | 'button';
    data?: any;
}

export type IMobileMenu = IMobileMenuLink[];
