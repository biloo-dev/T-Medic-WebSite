import { IMobileMenu } from '~/interfaces/menus/mobile-menu'

const dataMobileMenu: IMobileMenu = [
    {
        type: 'link',
        title: 'Home',
        title_ar: 'الرئيسية',
        icon: 'fas fa-home',
        url: '/', 
    },

    {
        type: 'link',
        icon: 'fas fa-boxes',
        title: 'Categories', 
        title_ar: 'الأصناف', 
        url: '',
        children: [
            {
                type: 'link',
                title: 'INSTRUMENTATION',
                title_ar: "الأجهزة",
                url: '',
            },
            {
                type: 'link',
                title: 'SOINS DE SANTÉ',
                title_ar: "الرعاية الصحية",
                url: '',
                children: [
                    { type: 'link', title_ar: "فحص طبي", title: 'Contrôle de la santé', url: '' },
                    { type: 'link', title_ar: "التشخيص", title: 'Diagnostic', url: '' },
                    { type: 'link', title_ar: "التدليك والرفاهية", title: 'Massage & bien-être', url: '' },
                    { type: 'link', title_ar: "القياسات", title: 'Mesure', url: '' }
                ]
            },
             {
                type: 'link',
                title: 'MOBILIER MÉDICAL',
                title_ar: "أثاث طبي",
                url: '',
            },
             {
                type: 'link',
                title: 'ORL & OPHTALMOLOGIE',
                title_ar: "أورل وطب العيون",
                url: '',
            },
            {
                type: 'link',
                title_ar: "طب العظام",
                title: 'ORTHOPÉDIE',
                url: '',
                children: [{
                    type: 'link', 
                    title: "Béquilles Et Cannes",
                    title_ar: " العكازات والعكازات",
                    url: ""
                  },
                  {
                    type: 'link',
                    title: "Déambulateurs Et Rollators",
                    title_ar: " مشايات وبكرات",
                    url: ""
                  },
                  {
                    type: 'link',
                    title: "Fauteuils Et Chaises Garde-robe",
                    title_ar: " الكراسي والكراسي خزانة الملابس",
                    url: ""
                  },
                  {
                    type: 'link',
                    title: "Fauteuils Roulants",
                    title_ar: " الكراسي المتحركة",
                    url: ""
                  }
                ]
            }
        ]
    },

    {
        type: 'link',
        title: 'shopping' ,
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
