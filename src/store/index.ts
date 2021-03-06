import { OffcanvasCartState } from '~/store/offcanvasCart'
import { MobileMenuState } from '~/store/mobileMenu'
import { OptionsState } from '~/store/options'
import { CurrencyState } from '~/store/currency'
import { QuickviewState } from '~/store/quickview'
import { WishlistState } from '~/store/wishlist'
import { CartState } from '~/store/cart'
import { LocaleState } from '~/store/locale'
import { ShopState } from '~/store/shop'
import { ConfigState } from '~/store/config'
import { SettingsState } from '~/store/settings'
import { AuthState } from '~/store/auth'

export interface RootState {
    cart: CartState;
    offcanvasCart: OffcanvasCartState;
    mobileMenu: MobileMenuState;
    options: OptionsState;
    currency: CurrencyState;
    quickview: QuickviewState;
    wishlist: WishlistState;
    locale: LocaleState;
    shop: ShopState;
    settings: SettingsState;
    auth: AuthState;
}
