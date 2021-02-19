import { IMobileMenu } from '~/interfaces/menus/mobile-menu'

const dataMobileMenu: IMobileMenu = [
    {
        type: 'link',
        title: 'Home',
        icon: 'fas fa-home',
        url: '/', 
    },

    {
        type: 'link',
        icon: 'fas fa-boxes',
        title: 'Categories', 
        url: '',
        children: [
            {
                type: 'link',
                title: 'INSTRUMENTATION',
                url: '',
            },
            {
                type: 'link',
                title: 'SOINS DE SANTÉ',
                url: '',
                children: [
                    { type: 'link', title: 'Contrôle de la santé', url: '' },
                    { type: 'link', title: 'Diagnostic', url: '' },
                    { type: 'link', title: 'Massage & bien-être', url: '' },
                    { type: 'link', title: 'Mesure', url: '' }
                ]
            },
             {
                type: 'link',
                title: 'MOBILIER MÉDICAL',
                url: '',
            },
             {
                type: 'link',
                title: 'ORL & OPHTALMOLOGIE',
                url: '',
            },
            {
                type: 'link',
                title: 'ORTHOPÉDIE',
                url: '',
                children: [
                    { type: 'link', title: 'Thread Cutting', url: '' },
                    { type: 'link', title: 'Chip Blowers', url: '' },
                    { type: 'link', title: 'Sharpening Machines', url: '' },
                    { type: 'link', title: 'Pipe Cutters', url: '' },
                    { type: 'link', title: 'Slotting machines', url: '' },
                    { type: 'link', title: 'Lathes', url: '' }
                ]
            }
        ]
    },

    {
        type: 'link',
        title: ' CE ',
        icon: 'fas fa-clipboard-list',
        url: '/shop/category-grid-3-columns-sidebar'
    },
    {
        type: 'link',
        icon: 'fas fa-newspaper',
        title: 'actualites',
        url: '/account', 
    },

    {
        type: 'link',
        icon: 'far fa-question-circle',
        title: 'aPropos',
        url: '/blog/category-classic',
    },

    {
        type: 'link',
        icon: 'fas fa-phone-alt',
        title: 'contant',
        url: '/site/about-us', 
    }
]

export default dataMobileMenu
