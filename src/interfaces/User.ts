
import { ISubOrders ,IOrders } from './order'
export interface IUser {
    id?: number
    firstName_ar ?: string;
    firstName_en ?: string;
    firstName_fr ?: string;  
    lastName_ar ?: string;
    lastName_en ?: string;
    lastName_fr ?: string;
    email?: string;
    password?: string; 
    sexe?: number; 
    type?: number; 
    phone1?: string; 
    phone2?: string; 
    img ?: string; 
}
export interface IData {  
    email: string;
    password: string;
}
export interface IForm {
    oldPassword : string; 
    newPassword : string; 
    confirmPassword : string; 
}
export interface IWilaya {    
    id?: number;
    code?:  string;
    name_ar: string  ;
    name_en: string  ;
    name_fr: string  ;
    created_at?: string | null;
    updated_at?: string | null; 
}
export interface ICommune extends IWilaya {    
    daira_id: number; 
}

export interface IDaira extends IWilaya{     
    wilaya_id:number;
}

export interface IAllAdress {
    wilayas : IWilaya;
    communes : ICommune;
    dairas : IDaira;
}

export interface IAddresse { 
    id?:  number;
    default?: boolean;
    address_fr?: string;
    address_en?: string;
    address_ar?: string;
    delivery_price?: number;
    wilaya?: IWilaya;
    wilaya_id: number | any;
    commune_id: number | any;
    commune? : ICommune;
    daira? : IDaira;
    daira_id: number | any;
    user_id?: number;
    created_at?: string | null;
    updated_at?: string | null;
}
export interface IProfile extends IUser { 
    addresse ?: IAddresse[];
    orders?:IOrders[];
}