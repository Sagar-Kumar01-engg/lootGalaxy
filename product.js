 const products = [
            {
                id: 1,
                name: "Boat earbuds",
                description: "Boat Nirvana Space, 360 Spatial Audio, Active Noise Cancellation (~32dB), 100Hrs Battery,4Mics ENx, Fast Charge, v5.3 Bluetooth TWS in Ear Earbuds Wireless Earphones with mic (Celestial White)",
                price: 1299,
                image: "https://m.media-amazon.com/images/I/710VcK4-WQL._SX522_.jpg", // Leave empty for emoji
                icon: "",
                badge: "New",
                link: "https://www.amazon.in/dp/B0D4VNVP7K?social_share=cm_sw_r_cso_wa_apan_dp_S55RRVV7CV574WJQQCES&tag=azhtml-21"
            },
            {
                id: 2,
                name: "waterproof Smartwatch",
                description: "Safari Crescent 8 Wheels Set of 3 (Cabin + Medium + Large) Trolley Bags Hard Case Polycarbonate 360 Degree Wheeling Luggage, Travel Bags, Suitcase for Travel, Trolley Bags for Travel, Thyme Green",
                price: 5999,
                image: "https://m.media-amazon.com/images/I/71WkRP7k6VL._SX679_.jpg", // Leave empty for emoji
                icon: "",
                badge: "Bestseller",
                link: "https://www.amazon.in/dp/B097JN7YBH?social_share=cm_sw_r_cso_wa_apan_dp_JYG9H2MZ706ZQAD2JMHZ&tag=azhtml-21"
            },
            {
                id: 3,
                name: "Fire-Boltt Legacy Smart Watch",
                description: "Fire-Boltt Legacy Luxury Round Smart Watch 1.43″ Super AMOLED,Bluetooth Calling,Wireless Charging,Voice Assistant,SpO₂ & Heart Rate Monitor,110+ Sports Modes, Metal Smart Watch for Men & Women - Black",
                price: 1799,
                image: "https://m.media-amazon.com/images/I/41jf8V-H2cL._SY300_SX300_QL70_FMwebp_.jpg", // Leave empty for emoji
                icon: "",
                badge: "New",
                link: "https://www.amazon.in/dp/B0F993RN8H?social_share=cm_sw_r_cso_wa_apan_dp_8SAE1G014FNRD21MN2QA&tag=azhtml-21"
            },
            {
                id: 4,
                name: "Amazon Echo Pop",
                description: "Amazon Echo Pop| Smart speaker with Alexa and Bluetooth| Full sound, balanced bass, crisp vocals| Purple",
                price: 4499,
                image: "https://m.media-amazon.com/images/I/81aMuyDLANL._SY450_.jpg", // Leave empty for emoji
                icon: "",
                badge: "",
                link: "https://www.amazon.in/dp/B09ZXD1CX2?social_share=cm_sw_r_cso_wa_apan_dp_GJC5C3WAAMV6N080VBBB&tag=azhtml-21"
            },
            {
                id: 5,
                name: "Havells Ceiling Fan",
                description: "Havells 1200mm Festiva ES Ceiling Fan | Premium Finish, Decorative Fan, Elegant Looks, High Air Delivery, Energy Saving, 100% Pure Copper Motor | 2 Year Warranty | (Pack of 2, Mist)",
                price: 7199,
                image: "https://m.media-amazon.com/images/I/51xDyP0ptZL._SX679_.jpg", // Leave empty for emoji
                icon: "",
                badge: "Limited",
                link: "https://www.amazon.in/dp/B0CKZCVMDR?social_share=cm_sw_r_cso_wa_apan_dp_0BE4Z9VZXDE7Z9NBB3E6&tag=azhtml-21"
            },
            {
                id: 6,
                name: "Lenovo Yoga Slim 7 AI Laptop",
                description: "Lenovo Yoga Slim 7 AI Laptop PC, 2025 Aura Edition Intel Core Ultra 7 258V, 14/OLED/AI Now Screen, 47 Tops/Copilot+/Windows 11 (Office/Home 2024), 1.19 Kg, 83JX001MIN, 1Yr ADP, 32GB RAM/1TB SSD, Grey",
                price: 138999,
                image: "https://m.media-amazon.com/images/I/81aZPvpkQ0L._SX679_.jpg", // Leave empty for emoji
                icon: "",
                badge: "",
                link: "https://www.amazon.in/dp/B0F5QC5BXH?social_share=cm_sw_r_cso_wa_apan_dp_1QP9706SDM53WN7682EV&tag=azhtml-21"
            },
            {
                id: 7,
                name: "IFB 197L 5 Star Direct Cool Single Door Refrigerator",
                description: "IFB 197L 5 Star Direct Cool Single Door Refrigerator (IFBDC-2235DBSE, Brush Grey, Advanced Inverter Compressor, Extraordinary Storage with Humidity Controller)",
                price: 15990,
                image: "https://m.media-amazon.com/images/I/31kgBZdHKAL._SX342_SY445_QL70_FMwebp_.jpg", // Leave empty for emoji
                icon: "🧥",
                badge: "",
                link: "https://www.amazon.in/dp/B0CZRJ3MRZ?s=kitchen&social_share=cm_sw_r_cso_wa_apan_dp_NG3E7D2XJAQY61347V45&tag=azhtml-21"
            },
            {
                id: 8,
                name: "Panasonic AC",
                description: "Panasonic 1.5 Ton 3 Star Premium Wi-Fi Inverter Smart Split AC (Matter Enabled, Higher Airflow, Copper Condenser, 7in1 Convertible, True AI, 2-Way, PM 0.1 Filter, CS/CU-SU18AKY3W, White)",
                price: 34430,
                image: "https://m.media-amazon.com/images/I/61pCN-nzuwL._SX679_.jpg", // Leave empty for emoji
                icon: "⌚",
                badge: "New",
                link: "https://www.amazon.in/dp/B0DSVS6P6G?social_share=cm_sw_r_cso_wa_apan_dp_LIGHTSABER4GT0EHDR8G&tag=azhtml-21"
            },
            {
                id: 9,
                name: "Men's Shirt",
                description: "Men’s Premium Long Sleeve Shirt Fabric, Elegant & Comfortable Fit",
                price: 222,
                image: "https://m.media-amazon.com/images/I/71e4At03YUL._SX679_.jpg", // Leave empty for emoji
                icon: "🎒",
                badge: "",
                link: "https://www.amazon.in/dp/B0DZX8GJ1X?s=bazaar&social_share=cm_sw_r_cso_wa_apan_dp_bzr_FK6P50C0Q4Z7VZFFE3TH&tag=azhtml-21"
            },
            {
                id: 10,
                name: "OnePlus 15R Smartphone",
                description: "OnePlus 15R | 12GB+256GB | Mint Breeze | World's First Snapdragon® 8 Gen 5 | 7400mAh Battery | Personalised AI | Game-Changing 165Hz Display | IP66 IP68 IP69 & IP69K | 4K 120fps Video",
                price: 47998,
                image: "https://m.media-amazon.com/images/I/41Hmn9tuI1L._SY300_SX300_QL70_FMwebp_.jpg", // Leave empty for emoji
                icon: "🧣",
                badge: "Bestseller",
                link: "https://www.amazon.in/dp/B0FZT1LXPZ?social_share=cm_sw_r_cso_wa_apan_dp_LIGHTSABER2B114R02TA&tag=azhtml-21"
            },
        ];
