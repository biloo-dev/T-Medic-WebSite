import Vue from 'vue'
import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { IProduct } from '~/interfaces/product'
import { Cart, CartItem, CartItemOption, CartTotal } from '~/interfaces/cart'
import { ISubOrders ,IOrders,IOrderFilters } from '~/interfaces/order'
import shopApi from '~/api/shop'
export interface CartState extends Cart {
    lastItemId: number;
    withShop : boolean;
    
}
let initCaet = {
        lastItemId: 0,
        items: [],
        quantity: 0,
        subtotal: 0,
        isFacture: true,
        isLoading: false,
        totalHt: 0,
        totalTva: 0,
        withShop: false,
        totalTtc: 0,
        totals: [],
        total: 0
    }
function getDefaultState (): CartState {
    return initCaet
}

export const state = getDefaultState

export interface CartItemQuantity {
    itemId: number;
    value: number;
}
export interface ICheckout { withShopping : boolean, selected : number}
 

export type CartAddPayload = {
    product: IProduct;
    options?: CartItemOption[];
    quantity?: number;
};

export type CartRemovePayload = {
    itemId: number;
};

export type CartUpdateQuantitiesPayload = CartItemQuantity[];

function findItemIndex (items: CartItem[], product: IProduct, options: CartItemOption[]): number {
    return items.findIndex((item) => {
        if (item.product.id !== product.id || item.options.length !== options.length) {
            return false
        }

        for (let i = 0; i < options.length; i += 1) {
            const option = options[i]
            const itemOption = item.options.find(itemOption => (
                itemOption.optionId === option.optionId && itemOption.valueId === option.valueId
            ))

            if (!itemOption) {
                return false
            }
        }

        return true
    })
}

function calcSubtotal (items: CartItem[]): number {
    return items.reduce((subtotal, item) => subtotal + item.total, 0)
}

function calcTotalHt (items: CartItem[]): number {
    return items.reduce((totalHt, item) => totalHt + (item.totalHt ? item.totalHt : 0 ) , 0)
}

function calcTotalNetTva (items: CartItem[]): number {
    return items.reduce((totalTva, item) => totalTva + (item.totalTva ? item.totalTva : 0 ) , 0)
}

function calcTotalTtc (items: CartItem[]): number {
    return items.reduce((totalTtc, item) => totalTtc + (item.totalTtc ? item.totalTtc : 0 ) , 0)
}

function calcQuantity (items: CartItem[]): number {
    return items.reduce((quantity, item) => quantity + item.quantity || 0, 0)
}

function calcTotals (items: CartItem[]): CartTotal[] {
    if (items.length === 0) {
        return []
    }

    const subtotal = calcSubtotal(items)

    return [
        {
            type: 'shipping',
            title: 'Shipping',
            price: 25
        },
        {
            type: 'tax',
            title: 'Tax',
            price: subtotal * 0.2
        }
    ]
}

function calcTotal (subtotal: number, totals: CartTotal[]): number {
    return totals.reduce((acc, extraLine) => acc + extraLine.price, subtotal)
}

function calcTotalTva (TotalHt: number, tva : any , isFacture : boolean) : number {
    if(tva && isFacture){
        return TotalHt * (parseInt(tva.value) / 100)
    }
    return 0 
}

const alertMsg = ($this: any, product : any) => {
    let lang = $this.getters['locale/language'].locale
    $this.$Swal.success(
        `${$this.app.i18n.t('general.product')} "${product['name_' + lang]}" ${$this.app.i18n.t('general.addedToCart')} !`,
        `<svg id="Layer_3" style="background: #fff;" height="50" viewBox="0 0 64 64" width="50" xmlns="http://www.w3.org/2000/svg" data-name="Layer 3"><path d="m4 22h8.413a2 2 0 0 1 1.948 1.546l5.557 23.817a6 6 0 0 0 5.843 4.637h34.239a2 2 0 0 0 2-2 2 2 0 0 0 -2-2h-34.413a2 2 0 0 1 -1.948-1.546l-5.918-25.363a4 4 0 0 0 -3.895-3.091h-9.826a2 2 0 0 0 -2 2 2 2 0 0 0 2 2z" fill="#3b5892"/><path d="m62.782 21.375a1 1 0 0 0 -.782-.375h-40a1 1 0 0 0 -.975 1.222l5 22a1 1 0 0 0 .975.778h30a1 1 0 0 0 .975-.778l5-22a1 1 0 0 0 -.193-.847zm-13.7 14.625h-6.082v-6h6.9zm2.836-6h7.238l-1.363 6h-6.693zm-27.074 0h7.238l.818 6h-6.692zm9.256 0h6.9v6h-6.082zm-.273-2-.681-5h7.854v5zm7.173 10v5h-5.127l-.682-5zm2 0h5.809l-.682 5h-5.127zm0-10v-5h7.855l-.682 5zm-11.873-5 .682 5h-7.42l-1.136-5zm-4.465 15h6.511l.682 5h-6.055zm29.538 5h-6.054l.681-5h6.511zm3.409-15h-7.42l.682-5h7.874z" fill="#5e87ca"/><circle cx="32" cy="57" fill="#b5b5b5" r="5"/><circle cx="52" cy="57" fill="#b5b5b5" r="5"/><path d="m32 59a2 2 0 1 1 2-2 2 2 0 0 1 -2 2z" fill="#939393"/><path d="m52 59a2 2 0 1 1 2-2 2 2 0 0 1 -2 2z" fill="#939393"/><circle cx="42" cy="10" fill="#b52f28" r="8"/><ellipse cx="41" cy="10" fill="#d23f34" rx="7" ry="7.931"/><path d="m47 9h-4v-4h-2v4h-4v2h4v4h2v-4h4z" fill="#f2f2f2"/></svg>`
    )
}
// noinspection JSUnusedGlobalSymbols
export const mutations: MutationTree<CartState> = {
    add (state, payload: CartAddPayload) {
        state.isLoading = true
        const { product, options = [], quantity = 1 } = payload 
        const itemIndex = findItemIndex(state.items, product, options)

        if (itemIndex === -1) {
            let TotalHt = product.price * quantity
            let TotalTva = calcTotalTva(TotalHt,product.tva,state.isFacture)
            let TotalTtc = TotalTva + TotalHt
            state.items.push({
                id: ++state.lastItemId,
                product: JSON.parse(JSON.stringify(product)),
                options: JSON.parse(JSON.stringify(options)),
                price: product.price,
                quantity,
                total: product.price * quantity,
                totalHt: TotalHt,
                totalTva: TotalTva,
                totalTtc:TotalTtc
            })
        } else {
            const item = state.items[itemIndex]
            item.quantity += quantity
            item.total = item.price * item.quantity
            item.totalHt = item.total
            item.totalTva = calcTotalTva(item.total,item.tva,state.isFacture)
            item.totalTtc = item.totalHt + item.totalTva
        }
        alertMsg(this, product)
        state.quantity = calcQuantity(state.items)
        state.subtotal = calcSubtotal(state.items)
        state.totalHt = calcTotalHt(state.items)
        state.totalTva = calcTotalNetTva(state.items)
        state.totalTtc = calcTotalTtc(state.items)
        state.totals = calcTotals(state.items)
        state.total = calcTotal(state.subtotal, state.totals)
        state.isLoading = false
       
    },
    remove (state, payload: CartRemovePayload) {
        state.isLoading = true
        const { itemId } = payload 
        state.items = state.items.filter(item => item.id !== itemId)
        state.quantity = calcQuantity(state.items)
        state.subtotal = calcSubtotal(state.items)
        state.totalHt = calcTotalHt(state.items)
        state.totalTva = calcTotalNetTva(state.items)
        state.totalTtc = calcTotalTtc(state.items)
        state.totals = calcTotals(state.items)
        state.total = calcTotal(state.subtotal, state.totals)
        state.isLoading = false
    },
    updateWithShop (state, payload: boolean) {
        state.isLoading = true  
        state.isLoading = false
    },
    
    updateIsFacture (state, payload: boolean) {
        let needUpdate = false 
        state.isLoading = true
        state.items.forEach((item) => {  
            state.isFacture = payload
            item.total = item.price * item.quantity
            item.totalHt = item.total
            item.totalTva = calcTotalTva(item.total,item.product.tva,payload)
            item.totalTtc = item.totalHt + item.totalTva
        })
        console.log('state.items',state.items)
        state.quantity = calcQuantity(state.items)
        state.subtotal = calcSubtotal(state.items)
        state.totalHt = calcTotalHt(state.items)
        state.totalTva = calcTotalNetTva(state.items)
        state.totalTtc = calcTotalTtc(state.items)
        state.totals = calcTotals(state.items)
        state.total = calcTotal(state.subtotal, state.totals) 
        state.isLoading = false
    }, 
    updateQuantitie (state, {id , quantity}: { id : number , quantity : number}) {
        let needUpdate = false 
        state.isLoading = true
        state.items.forEach((item) => {
            const qty = id === item.id && item.quantity !== quantity 

            if (!qty) {
                return
            }

            needUpdate = true 
            item.quantity = quantity
            item.total = item.price * item.quantity
            item.totalHt = item.total
            item.totalTva = calcTotalTva(item.total,item.product.tva,state.isFacture)
            item.totalTtc = item.totalHt + item.totalTva
        })

        if (needUpdate) {
            state.quantity = calcQuantity(state.items)
            state.subtotal = calcSubtotal(state.items)
            state.totalHt = calcTotalHt(state.items)
            state.totalTva = calcTotalNetTva(state.items)
            state.totalTtc = calcTotalTtc(state.items)
            state.totals = calcTotals(state.items)
            state.total = calcTotal(state.subtotal, state.totals)
        }
        state.isLoading = false
    },
 
}

// noinspection JSUnusedGlobalSymbols
export const actions: ActionTree<CartState, {}> = {
    async add ({ commit }, payload: CartAddPayload): Promise<void> {
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 500)
        })

        commit('add', payload)
    },
    async remove ({ commit }, payload: CartRemovePayload): Promise<void> {
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 500)
        })

        commit('remove', payload)
    }, 
    async updateWithShop ({ commit }, payload : boolean): Promise<void> {
        await new Promise((resolve) => {
            setTimeout(() => {
                commit('updateWithShop', payload)
                resolve()
            }, 500)
        })
    },
    async updateQuantitie ({ commit }, payload : {id:number , quantity : number}): Promise<void> {
        await new Promise((resolve) => {
            setTimeout(() => {
                commit('updateQuantitie', payload)
                resolve()
            }, 500)
        })
    },
    async updateIsFacture ({ commit }, payload: boolean): Promise<void> {
        await new Promise((resolve) => {
            setTimeout(() => {
                commit('updateIsFacture', payload)
                resolve()
            }, 500)
        })
    },
    async proceedToCheckout ({ state } :any, payload: ICheckout): Promise<void> {
         try {   
            let request: Promise<any> 
            request = shopApi.proceedToCheckout({
                isFactor : state.isFacture,
                code : "0",
                status : 0,
                paymentMode : 1,
                with_delivery : payload.withShopping,
                totla_ht : state.totalHt,
                totla_tva : state.totalTva,
                totla_ttc : state.totalTtc,
                credit :false,
                address_id : payload.selected,
                sub_orders : state.items
            })
            const isDeleted = await request
            if (isDeleted) {
                await this.$auth.fetchUser()
                await this.app.$Swal.success("successfuly save Order")  
                state = initCaet
            } 
            return isDeleted
        } catch (err) {  
            console.log('errr' , err)
        }
    }
}

export const getters: GetterTree<CartState, {}> = {
    quantity (store) {
        return store.quantity
    }
}
