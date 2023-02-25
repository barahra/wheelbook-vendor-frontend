let menus = [
    {
        menu_name: "Dashboard",
        icon: "faDashboard",
        sub_menu: [
            {
                menu_name: "Overview",
                icon: "faSearch",
                link:""
            },
            {
                menu_name: "Reports",
                icon: "faHandPaper",
                link:""
            }
        ]

    },

    {
        menu_name: "Vehicles",
        icon: "faCar",
        sub_menu: [
            {
                menu_name: "All Vehicles",
                icon: "faCar",
                link:""
            },
            {
                menu_name: "Add Vehicles",
                icon: "faAdd",
            },
            {
                menu_name: "Sales / Job",
                icon: "faMoneyBill",
            },
            {
                menu_name: "Purchase Order",
                icon: "faCircleDollarToSlot",
            }
        ]

    },
    {
        menu_name: "Spares",
        icon: "faCog",
        sub_menu: [
            {
                menu_name: "All Spares",
                icon: "faCogs",
            },
            {
                menu_name: "Add Spares",
                icon: "faAdd",
            },
            {
                menu_name: "Sales / Job",
                icon: "faMoneyBill",
            },
            {
                menu_name: "Purchase Order",
                icon: "faCircleDollarToSlot",
            }
        ]

    },
    {
        menu_name: "Activities",
        icon: "faAddressBook",
        sub_menu: [
            {
                menu_name: "Vehicles",
                icon: "faCar",
            },
            {
                menu_name: "Spares",
                icon: "faCogs",
            },
            {
                menu_name: "Adminstration",
                icon: "faUser",
            },
            {
                menu_name: "Services",
                icon: "faUsers",
            }
        ]
    },
    {
        menu_name: "Insurance",
        icon: "faContactBook",
        sub_menu: [
            {
                menu_name: "All Insurance",
                icon: "faGuaraniSign",
            },
            {
                menu_name: "Add Insurance",
                icon: "faAdd",
            }
        ]

    },
    {
        menu_name: "Settings",
        icon: "faCogs",
        sub_menu: [
            {
                menu_name: "Users account",
                icon: "faUsers",
            },
            {
                menu_name: "Customer Mangement",
                icon: "faUsers",
                nav : '/customer/list'
            },
            {
                menu_name: "Dealer Mangement",
                icon: "faBuildingShield",
                nav : '/dealer/list'
            },
            {
                menu_name: "Vendor Mangement",
                icon: "faSnowman",
                nav : '/vendor/list'
            },
            {
                menu_name: "GST",
                icon: "faPercentage",
            },
            {
                menu_name: "Discount",
                icon: "faPercentage",
            },
            {
                menu_name: "Vehicles Model",
                icon: "faCar",
            },
            {
                menu_name: "Notification / Messaging",
                icon: "faGlobe",
            },
            {
                menu_name: "Campaign",
                icon: "faDigitalTachograph",
            }
        ]

    },
]

export default menus