import { INav } from '~/interfaces/menus/nav'

const dataHeaderDepartments: INav = [
    { title: 'INSTRUMENTATION', url: '/' },
    {
        title: 'SOINS DE SANTÉ',
        url: '',
        submenu: {
            type: 'megamenu',
            menu: {
                size: 'nl',
                image: {
                    ltr: '/images/megamenu/megamenu-2-ltr.jpg',
                    rtl: '/images/megamenu/megamenu-2-rtl.jpg'
                },
                columns: [
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Hand Tools',
                                url: '',
                                children: [
                                    { title: 'Screwdrivers', url: '' },
                                    { title: 'Handsaws', url: '' },
                                    { title: 'Knives', url: '' },
                                    { title: 'Axes', url: '' },
                                    { title: 'Multitools', url: '' },
                                    { title: 'Paint Tools', url: '' }
                                ]
                            },
                            {
                                title: 'Garden Equipment',
                                url: '',
                                children: [
                                    { title: 'Motor Pumps', url: '' },
                                    { title: 'Chainsaws', url: '' },
                                    { title: 'Electric Saws', url: '' },
                                    { title: 'Brush Cutters', url: '' }
                                ]
                            }
                        ]
                    }, 
                ]
            }
        }
    },
    {
        title: 'Machine Tools',
        url: '',
        submenu: {
            type: 'megamenu',
            menu: {
                size: 'nl',
                image: {
                    ltr: '/images/megamenu/megamenu-3-ltr.jpg',
                    rtl: '/images/megamenu/megamenu-3-rtl.jpg'
                },
                columns: [
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Hand Tools',
                                url: '',
                                children: [
                                    { title: 'Screwdrivers', url: '' },
                                    { title: 'Handsaws', url: '' },
                                    { title: 'Knives', url: '' },
                                    { title: 'Axes', url: '' },
                                    { title: 'Multitools', url: '' },
                                    { title: 'Paint Tools', url: '' }
                                ]
                            },
                            {
                                title: 'Garden Equipment',
                                url: '',
                                children: [
                                    { title: 'Motor Pumps', url: '' },
                                    { title: 'Chainsaws', url: '' },
                                    { title: 'Electric Saws', url: '' },
                                    { title: 'Brush Cutters', url: '' }
                                ]
                            }
                        ]
                    },
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Instruments',
                                url: '',
                                children: [
                                    { title: 'Welding Equipment', url: '' },
                                    { title: 'Power Tools', url: '' },
                                    { title: 'Hand Tools', url: '' },
                                    { title: 'Measuring Tool', url: '' }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    },
    {
        title: 'Building Supplies',
        url: '',
        submenu: {
            type: 'megamenu',
            menu: {
                size: 'sm',
                columns: [
                    {
                        size: 12,
                        links: [
                            {
                                title: 'Hand Tools',
                                url: '',
                                children: [
                                    { title: 'Screwdrivers', url: '' },
                                    { title: 'Handsaws', url: '' },
                                    { title: 'Knives', url: '' },
                                    { title: 'Axes', url: '' },
                                    { title: 'Multitools', url: '' },
                                    { title: 'Paint Tools', url: '' }
                                ]
                            },
                            {
                                title: 'Garden Equipment',
                                url: '',
                                children: [
                                    { title: 'Motor Pumps', url: '' },
                                    { title: 'Chainsaws', url: '' },
                                    { title: 'Electric Saws', url: '' },
                                    { title: 'Brush Cutters', url: '' }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    },
    {
        title: 'Electrical',
        url: '',
        submenu: {
            type: 'menu',
            menu: [
                {
                    title: 'Soldering Equipment',
                    url: '',
                    children: [
                        { title: 'Soldering Station', url: '' },
                        { title: 'Soldering Dryers', url: '' },
                        { title: 'Gas Soldering Iron', url: '' },
                        { title: 'Electric Soldering Iron', url: '' }
                    ]
                },
                { title: 'Light Bulbs', url: '' },
                { title: 'Batteries', url: '' },
                { title: 'Light Fixtures', url: '' },
                { title: 'Warm Floor', url: '' },
                { title: 'Generators', url: '' },
                { title: 'UPS', url: '' }
            ]
        }
    },
    { title: 'Power Machinery', url: '' },
    { title: 'Measurement', url: '' },
    { title: 'Clothes & PPE', url: '' },
    { title: 'Plumbing', url: '' },
    { title: 'Storage & Organization', url: '' },
    { title: 'Welding & Soldering', url: '' }
]

export default dataHeaderDepartments
