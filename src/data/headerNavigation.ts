import { INav } from '~/interfaces/menus/nav'

const dataHeaderNavigation: INav = [
    {
        icon: 'fas fa-home',
        title: '',
        url: '/', 
    }, 
    {
        icon: 'fas fa-store',
        title: 'shopping',
        url: '/shop', 
    },
    // {
    //     icon: 'fas fa-newspaper',
    //     title: 'compare',
    //     url: '/shop/compare', 
    // },
    {
        icon: 'far fa-address-card',
        title: 'aPropos',
        url: '/site/about-us', 
    },
    {
        icon: 'fas fa-phone',
        title: 'contant',
        url: '/site/contact-us-alt', 
    }, 
    {
        icon: 'fas fa-question-circle',
        title: 'faq',
        url: '/site/faq', 
    }, 
    {
        icon: 'fas fa-synagogue',
        title: 'terms',
        url: '/site/terms', 
    }, 

    // {
    //     icon: 'fas fa-boxes',
    //     title: 'product',
    //     url: '',
    //     submenu: {
    //         type: 'megamenu',
    //         menu: {
    //             size: 'nl',
    //             columns: [
    //                 {
    //                     size: 6,
    //                     links: [
    //                         {
    //                             title: 'INSTRUMENTATION	',
    //                             url: '', 
    //                         },
    //                         {
    //                             title: 'SOINS DE SANTÉ',
    //                             url: '',
    //                             children: [
    //                                 { title: 'Contrôle de la santé', url: '' },
    //                                 { title: 'Diagnostic', url: '' },
    //                                 { title: 'Massage & bien-être', url: '' },
    //                                 { title: 'Mesure', url: '' }
    //                             ]
    //                         },
    //                         {
    //                             title: 'MOBILIER MÉDICAL',
    //                             url: '',
    //                         },
    //                         {
    //                             title: 'ORL & OPHTALMOLOGIE',
    //                             url: '',
    //                         },
    //                         {
    //                             title: 'ORTHOPÉDIE',
    //                             url: '',
    //                             children: [
    //                                 { title: 'Thread Cutting', url: '' },
    //                                 { title: 'Chip Blowers', url: '' },
    //                                 { title: 'Sharpening Machines', url: '' },
    //                                 { title: 'Pipe Cutters', url: '' },
    //                                 { title: 'Slotting machines', url: '' },
    //                                 { title: 'Lathes', url: '' }
    //                             ]
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     size: 6,
    //                     links: [
    //                         {
    //                             title: 'Hand Tools',
    //                             url: '',
    //                             children: [
    //                                 { title: 'Screwdrivers', url: '' },
    //                                 { title: 'Handsaws', url: '' },
    //                                 { title: 'Knives', url: '' },
    //                                 { title: 'Axes', url: '' },
    //                                 { title: 'Multitools', url: '' },
    //                                 { title: 'Paint Tools', url: '' }
    //                             ]
    //                         },
    //                         {
    //                             title: 'Garden Equipment',
    //                             url: '',
    //                             children: [
    //                                 { title: 'Motor Pumps', url: '' },
    //                                 { title: 'Chainsaws', url: '' },
    //                                 { title: 'Electric Saws', url: '' },
    //                                 { title: 'Brush Cutters', url: '' }
    //                             ]
    //                         }
    //                     ]
    //                 }
    //             ]
    //         }
    //     } 
    // },
]

export default dataHeaderNavigation
