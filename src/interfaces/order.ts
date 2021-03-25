import { IAddress } from './address'
import { IProduct } from './product'
import { CartItem } from './cart'

export interface IOrderItemOption {
    label: string;
    value: string;
}

export interface IOrderItem {
    id: number;
    slug: string;
    name: string;
    image: string;
    options?: IOrderItemOption[];
    price: number;
    quantity: number;
    total: number;
}

export interface IOrderAdditionalLine {
    label: string;
    total: number;
} 

export interface IOrderFilters {
    limit: number;
    page: number;
    status : number;
    sort : string; 
} 

export interface ISubOrders {
    id: number;
    qty: number;
    totla_ht: number;
    totla_ttc: number;
    order_id: number;
    product_id: number;
    created_at?: string;
    updated_at?: string;
}
 
export interface IOrders { 
    isFactor: boolean;
    status: number;
    code?: string;
    paymentMode?: number;
    with_delivery?: boolean;
    totla_ht: number;
    totla_ttc: number;
    totla_tva: number;
    credit?: boolean;
    user_id?: number;
    address_id?: number;
    products ?: ISubOrders[];
    sub_orders ?: CartItem[];
    created_at?: string;
    updated_at?: string; 
}

export interface IOrder {
    id: number;
    date: string;
    status: string;
    items: IOrderItem[];
    additionalLines: IOrderAdditionalLine[];
    quantity: number;
    subtotal: number;
    total: number;
    paymentMethod: string;
    shippingAddress: IAddress;
    billingAddress: IAddress;
}

export interface IOrderSummary {
    id: number;
    date: string;
    status: string;
    quantity: number;
    total: number;
}
