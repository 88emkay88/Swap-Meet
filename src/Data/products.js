const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 899,
        category: "Electronics",
        subcategory: "Headphones",
        images: [
            "https://www.boredbox.co.za/wp-content/uploads/2024/03/M1-Wireless-Bluetooth-Headphones-BLACK-11.jpg",
            "https://www.boredbox.co.za/wp-content/uploads/2024/03/M1-Wireless-Bluetooth-Headphones-WHITE.jpg",
            "https://www.boredbox.co.za/wp-content/uploads/2024/03/M1-Wireless-Bluetooth-Headphones-PINK.jpg"

        ],
        rating: 2,
        color: "Black",
        condition: "Used",
        location: "Cape Town",
        seller: {
            name: "Emkay Musia",
            avatar: "",
            sellerRating: 3.9,
            joinDate: "June 2022",
            responseRate: 72,
            completedSales: 3
        },
       datePosted: "2024-05-29T14:30:00Z",
        description: "Comfortable over-ear wireless headphones with crystal-clear audio and noise isolation. Ideal for long listening sessions.",
        details: ["Bluetooth 5.0", "Noise Isolation", "20h Battery Life", "Built-in Mic"]
    },
    {
        id: 2,
        name: "Stylish Jacket",
        price: 499,
        category: "Clothing",
        subcategory: "Jacket",
        images: [
            "https://levelshoes.co.za/cdn/shop/files/pixelcut-export-1713638358993.png",
            "https://levelshoes.co.za/cdn/shop/files/pixelcut-export-1713638368437.png",
            "https://levelshoes.co.za/cdn/shop/files/pixelcut-export-1713638407424.png"
        ],
        rating: 4,
        color: "Black",
        condition: "Like New",
        location: "Johannesburg",
        seller: {
            name: "Dracos Revenge",
            avatar: "", // don't need
            sellerRating: 4.2,
            joinDate: "February 2023",  // don't need
            responseRate: 93,
            completedSales: 17
        },
       datePosted: "2024-05-29T14:30:00Z",
        description: "A fashionable, warm jacket perfect for winter. Minimal signs of wear, suitable for casual or semi-formal use.",
        details: ["Size: Medium", "Material: Polyester", "Zipper Closure", "Hooded"]
    },
    {
        id: 3,
        name: "Power Drill",
        price: 1199,
        category: "Tools",
        subcategory: "Major Appliances",
        images: [
            "https://macire.co.ke/wp-content/uploads/2021/12/Drill-Cordless-Hammer-Drill-2.0Ah-18V-Li-Ion-Metal-Body-Chuck-Type-%E2%80%93-2-X-Batteries-20.jpg",
            "https://macire.co.ke/wp-content/uploads/2021/12/Drill-Cordless-Hammer-Drill-2.0Ah-18V-Li-Ion-Metal-Body-Chuck-Type-%E2%80%93-2-X-Batteries-20.jpg",
            "https://macire.co.ke/wp-content/uploads/2021/12/Drill-Cordless-Hammer-Drill-2.0Ah-18V-Li-Ion-Metal-Body-Chuck-Type-%E2%80%93-2-X-Batteries-20.jpg",
        ],
        rating: 3,
        color: "Green",
        condition: "New",
        location: "Bloemfontein",
        seller: {
            name: "Bob Viganna",
            avatar: "https://randomuser.me/api/portraits/men/69.jpg",
            sellerRating: 3.8,
            joinDate: "June 2024",
            responseRate: 95,
            completedSales: 12
        },
        datePosted: "2024-06-01T12:00:00Z",
        description: "Brand new cordless power drill with a strong motor, perfect for heavy-duty DIY and professional tasks.",
        details: ["Cordless", "2 Speed Settings", "Includes Battery", "LED Light"]
    },
    {
        id: 4,
        name: "Cookware Set",
        price: 799,
        category: "Kitchen",
        subcategory: "cooking",
        images: [
            "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQYPoYt3ddN4qveljf7l_tNMIuwa8BSa9QhAicw1tm7CnxzvPtjMsto7RHC7mUyFutcQKSf0jGogYMiddLTW4h2kO1scjWzvrUxlBZi-Be7Fk06zfEdX00",
            "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQMQCtNyCx0vz5bCbRoat3PP7Z8mLTTd1TEDzc6HYHFaRucSzl3TML9q5QRu29fCdeq4ncYCx8x4_rimr5SBcBdD_H4Y5l2wHb-sy_SqRF25XX9T90AXdy3aTk",
            "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQdN9saTtKyygmgX7TACTSTlzSq2tT6izUYqfmY6-7t4iQMbnB2QO1-DYTccA1myeb7WdIj2vNkNXeR8vxiYDqTKkf2W78S2Ib6B5QzqjjSjPeZbswidA"
        ],
        rating: 5,
        color: "Black",
        condition: "Good",
        location: "Cape Town",
        seller: {
            name: "Casper Nyovest",
            avatar: "https://randomuser.me/api/portraits/men/54.jpg",
            sellerRating: 2.4,
            joinDate: "August 2021",
            responseRate: 89,
            completedSales: 4
        },
        datePosted: "2024-05-30T09:00:00Z",
        description: "Complete 10-piece non-stick cookware set. Gently used and well maintained, great for any home kitchen.",
        details: ["10 Pieces", "Non-Stick Coating", "Dishwasher Safe", "Ergonomic Handles"]
    },
    {
        id: 5,
        name: "Smartphone Stand",
        price: 150,
        category: "Electronics",
        subcategory: "Accessories",
        images: [
            "https://images.pexels.com/photos/5082583/pexels-photo-5082583.jpeg",
            "https://images.pexels.com/photos/5082584/pexels-photo-5082584.jpeg",
            "https://images.pexels.com/photos/5082585/pexels-photo-5082585.jpeg"
        ],
        rating: 4,
        color: "Silver",
        condition: "New",
        location: "Durban",
        seller: {
            name: "Liam Smith",
            avatar: "https://randomuser.me/api/portraits/men/5.jpg",
            sellerRating: 4.7,
            joinDate: "March 2023",
            responseRate: 92,
            completedSales: 20
        },
       datePosted: "2024-05-29T14:30:00Z",
        description: "Adjustable smartphone stand suitable for all phone sizes. Perfect for video calls and watching videos.",
        details: ["Adjustable Height", "Non-Slip Base", "Aluminum Alloy", "Portable Design"]
    },
    {
        id: 6,
        name: "Bluetooth Speaker",
        price: 650,
        category: "Electronics",
        subcategory: "Audio",
        images: [
            "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg",
            "https://images.pexels.com/photos/63704/pexels-photo-63704.jpeg",
            "https://images.pexels.com/photos/63705/pexels-photo-63705.jpeg"
        ],
        rating: 5,
        color: "Black",
        condition: "Like New",
        location: "Pretoria",
        seller: {
            name: "Emma Johnson",
            avatar: "https://randomuser.me/api/portraits/women/6.jpg",
            sellerRating: 4.9,
            joinDate: "January 2022",
            responseRate: 98,
            completedSales: 35
        },
       datePosted: "2024-05-29T14:30:00Z",
        description: "Portable Bluetooth speaker with excellent sound quality and long battery life.",
        details: ["Bluetooth 5.0", "10h Battery Life", "Water-Resistant", "Built-in Mic"]
    },
    {
        id: 7,
        name: "Gaming Mouse",
        price: 350,
        category: "Electronics",
        subcategory: "Computer Accessories",
        images: [
            "https://images.pexels.com/photos/411228/pexels-photo-411228.jpeg",
            "https://images.pexels.com/photos/411229/pexels-photo-411229.jpeg",
            "https://images.pexels.com/photos/411230/pexels-photo-411230.jpeg"
        ],
        rating: 4,
        color: "Red",
        condition: "New",
        location: "Johannesburg",
        seller: {
            name: "Noah Williams",
            avatar: "https://randomuser.me/api/portraits/men/7.jpg",
            sellerRating: 4.6,
            joinDate: "July 2023",
            responseRate: 90,
            completedSales: 18
        },
       datePosted: "2024-05-29T14:30:00Z",        description: "High-precision gaming mouse with customizable DPI settings and RGB lighting.",
        details: ["Adjustable DPI", "Ergonomic Design", "RGB Lighting", "6 Programmable Buttons"]
    },
    {
        id: 8,
        name: "Yoga Mat",
        price: 250,
        category: "Fitness",
        subcategory: "Exercise Equipment",
        images: [
            "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg",
            "https://images.pexels.com/photos/4056724/pexels-photo-4056724.jpeg",
            "https://images.pexels.com/photos/4056725/pexels-photo-4056725.jpeg"
        ],
        rating: 5,
        color: "Purple",
        condition: "New",
        location: "Cape Town",
        seller: {
            name: "Olivia Brown",
            avatar: "https://randomuser.me/api/portraits/women/8.jpg",
            sellerRating: 4.8,
            joinDate: "May 2022",
            responseRate: 95,
            completedSales: 25
        },
        datePosted: "2024-05-30T09:00:00Z",
        description: "Non-slip yoga mat with comfortable cushioning, ideal for all types of workouts.",
        details: ["Non-Slip Surface", "Eco-Friendly Material", "6mm Thickness", "Lightweight"]
    },
    {
        id: 9,
        name: "Mountain Bike",
        price: 4500,
        category: "Sports",
        subcategory: "Cycling",
        images: [
            "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg",
            "https://images.pexels.com/photos/100583/pexels-photo-100583.jpeg",
            "https://images.pexels.com/photos/100584/pexels-photo-100584.jpeg"
        ],
        rating: 4,
        color: "Blue",
        condition: "Used",
        location: "Bloemfontein",
        seller: {
            name: "William Davis",
            avatar: "https://randomuser.me/api/portraits/men/9.jpg",
            sellerRating: 4.2,
            joinDate: "September 2021",
            responseRate: 88,
            completedSales: 12
        },
       datePosted: "2024-05-29T14:30:00Z",
        description: "Durable mountain bike suitable for off-road trails and city commuting.",
        details: ["21-Speed Gear", "Front Suspension", "Aluminum Frame", "Disc Brakes"]
    },
    {
        id: 10,
        name: "Electric Kettle",
        price: 300,
        category: "Kitchen",
        subcategory: "Appliances",
        images: [
            "https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg",
            "https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg",
            "https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg"
        ],
        rating: 5,
        color: "White",
        condition: "New",
        location: "Durban",
        seller: {
            name: "Sophia Miller",
            avatar: "https://randomuser.me/api/portraits/women/10.jpg",
            sellerRating: 4.9,
            joinDate: "November 2022",
            responseRate: 97,
            completedSales: 28
        },
       datePosted: "2024-05-29T14:30:00Z",
        description: "Fast-boiling electric kettle with auto shut-off and boil-dry protection.",
        details: ["1.7L Capacity", "Stainless Steel", "Auto Shut-Off", "360° Swivel Base"]
    },
    {
        id: 5,
        name: "Smartphone Stand",
        price: 150,
        category: "Electronics",
        subcategory: "Accessories",
        images: [
            "https://images.pexels.com/photos/5082583/pexels-photo-5082583.jpeg",
            "https://images.pexels.com/photos/5082584/pexels-photo-5082584.jpeg",
            "https://images.pexels.com/photos/5082585/pexels-photo-5082585.jpeg"
        ],
        rating: 4,
        color: "Silver",
        condition: "New",
        location: "Durban",
        seller: {
            name: "Liam Smith",
            avatar: "https://randomuser.me/api/portraits/men/5.jpg",
            sellerRating: 4.7,
            joinDate: "March 2023",
            responseRate: 92,
            completedSales: 20
        },
       datePosted: "2024-05-29T14:30:00Z",
        description: "Adjustable smartphone stand suitable for all phone sizes. Perfect for video calls and watching videos.",
        details: ["Adjustable Height", "Non-Slip Base", "Aluminum Alloy", "Portable Design"]
    },
    {
        id: 6,
        name: "Bluetooth Speaker",
        price: 650,
        category: "Electronics",
        subcategory: "Audio",
        images: [
            "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg",
            "https://images.pexels.com/photos/63704/pexels-photo-63704.jpeg",
            "https://images.pexels.com/photos/63705/pexels-photo-63705.jpeg"
        ],
        rating: 5,
        color: "Black",
        condition: "Like New",
        location: "Pretoria",
        seller: {
            name: "Emma Johnson",
            avatar: "https://randomuser.me/api/portraits/women/6.jpg",
            sellerRating: 4.9,
            joinDate: "January 2022",
            responseRate: 98,
            completedSales: 35
        },
       datePosted: "2024-05-29T14:30:00Z",
        description: "Portable Bluetooth speaker with excellent sound quality and long battery life.",
        details: ["Bluetooth 5.0", "10h Battery Life", "Water-Resistant", "Built-in Mic"]
    },
    {
        id: 7,
        name: "Gaming Mouse",
        price: 350,
        category: "Electronics",
        subcategory: "Computer Accessories",
        images: [
            "https://images.pexels.com/photos/411228/pexels-photo-411228.jpeg",
            "https://images.pexels.com/photos/411229/pexels-photo-411229.jpeg",
            "https://images.pexels.com/photos/411230/pexels-photo-411230.jpeg"
        ],
        rating: 4,
        color: "Red",
        condition: "New",
        location: "Johannesburg",
        seller: {
            name: "Noah Williams",
            avatar: "https://randomuser.me/api/portraits/men/7.jpg",
            sellerRating: 4.6,
            joinDate: "July 2023",
            responseRate: 90,
            completedSales: 18
        },
       datePosted: "2024-05-29T14:30:00Z",        description: "High-precision gaming mouse with customizable DPI settings and RGB lighting.",
        details: ["Adjustable DPI", "Ergonomic Design", "RGB Lighting", "6 Programmable Buttons"]
    },
    {
        id: 8,
        name: "Yoga Mat",
        price: 250,
        category: "Fitness",
        subcategory: "Exercise Equipment",
        images: [
            "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg",
            "https://images.pexels.com/photos/4056724/pexels-photo-4056724.jpeg",
            "https://images.pexels.com/photos/4056725/pexels-photo-4056725.jpeg"
        ],
        rating: 5,
        color: "Purple",
        condition: "New",
        location: "Cape Town",
        seller: {
            name: "Olivia Brown",
            avatar: "https://randomuser.me/api/portraits/women/8.jpg",
            sellerRating: 4.8,
            joinDate: "May 2022",
            responseRate: 95,
            completedSales: 25
        },
       datePosted: "2024-05-29T14:30:00Z",
        description: "Non-slip yoga mat with comfortable cushioning, ideal for all types of workouts.",
        details: ["Non-Slip Surface", "Eco-Friendly Material", "6mm Thickness", "Lightweight"]
    },
    {
        id: 9,
        name: "Mountain Bike",
        price: 4500,
        category: "Sports",
        subcategory: "Cycling",
        images: [
            "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg",
            "https://images.pexels.com/photos/100583/pexels-photo-100583.jpeg",
            "https://images.pexels.com/photos/100584/pexels-photo-100584.jpeg"
        ],
        rating: 4,
        color: "Blue",
        condition: "Used",
        location: "Bloemfontein",
        seller: {
            name: "William Davis",
            avatar: "https://randomuser.me/api/portraits/men/9.jpg",
            sellerRating: 4.2,
            joinDate: "September 2021",
            responseRate: 88,
            completedSales: 12
        },
       datePosted: "2024-05-29T14:30:00Z",
        description: "Durable mountain bike suitable for off-road trails and city commuting.",
        details: ["21-Speed Gear", "Front Suspension", "Aluminum Frame", "Disc Brakes"]
    },
    {
        id: 10,
        name: "Electric Kettle",
        price: 300,
        category: "Kitchen",
        subcategory: "Appliances",
        images: [
            "https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg",
            "https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg",
            "https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg"
        ],
        rating: 5,
        color: "White",
        condition: "New",
        location: "Durban",
        seller: {
            name: "Sophia Miller",
            avatar: "https://randomuser.me/api/portraits/women/10.jpg",
            sellerRating: 4.9,
            joinDate: "November 2022",
            responseRate: 97,
            completedSales: 28
        },
       datePosted: "2024-05-29T14:30:00Z",
        description: "Fast-boiling electric kettle with auto shut-off and boil-dry protection.",
        details: ["1.7L Capacity", "Stainless Steel", "Auto Shut-Off", "360° Swivel Base"]
    },
    {
        id: 11,
        name: "Wireless Earbuds",
        price: 899,
        category: "Electronics",
        subcategory: "Audio",
        images: [
            "https://images.pexels.com/photos/373945/pexels-photo-373945.jpeg",
            "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg"
        ],
        rating: 4,
        color: "Black",
        condition: "New",
        location: "Johannesburg",
        seller: {
            name: "Zoe Thomas",
            avatar: "https://randomuser.me/api/portraits/women/11.jpg",
            sellerRating: 4.8,
            joinDate: "August 2023",
            responseRate: 96,
            completedSales: 19
        },
       datePosted: "2024-05-29T14:30:00Z",    description: "High-quality earbuds with noise cancellation and charging case.",
        details: ["Bluetooth 5.1", "Noise Cancellation", "Touch Controls", "Water-Resistant"]
    },
    {
        id: 12,
        name: "Adjustable Dumbbells",
        price: 1999,
        category: "Sports",
        subcategory: "Weights",
        images: [
            "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg"
        ],
        rating: 5,
        color: "Black",
        condition: "Like New",
        location: "Cape Town",
        seller: {
            name: "James White",
            avatar: "https://randomuser.me/api/portraits/men/12.jpg",
            sellerRating: 4.7,
            joinDate: "March 2023",
            responseRate: 91,
            completedSales: 21
        },
       datePosted: "2024-05-29T14:30:00Z",
        description: "Adjustable dumbbells from 5kg to 25kg, great for home workouts.",
        details: ["5–25kg", "Easy Adjustment", "Compact Storage"]
    },
    {
        id: 13,
        name: "Mini Projector",
        price: 1300,
        category: "Electronics",
        subcategory: "Home Theater",
        images: [
            "https://images.pexels.com/photos/4397876/pexels-photo-4397876.jpeg"
        ],
        rating: 4,
        color: "White",
        condition: "Used",
        location: "Port Elizabeth",
        seller: {
            name: "Grace Evans",
            avatar: "https://randomuser.me/api/portraits/women/13.jpg",
            sellerRating: 4.5,
            joinDate: "January 2024",
            responseRate: 93,
            completedSales: 11
        },
       datePosted: "2024-05-29T14:30:00Z",
        description: "Portable mini projector with HDMI and USB ports, ideal for movies.",
        details: ["1080p Supported", "HDMI/USB", "Built-in Speaker"]
    },
    {
        id: 14,
        name: "Wooden Bookshelf",
        price: 700,
        category: "Sports",
        subcategory: "Storage",
        images: [
            "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg"
        ],
        rating: 4,
        color: "Brown",
        condition: "Used",
        location: "Pretoria",
        seller: {
            name: "Lucas Green",
            avatar: "https://randomuser.me/api/portraits/men/14.jpg",
            sellerRating: 4.3,
            joinDate: "October 2022",
            responseRate: 85,
            completedSales: 9
        },
       datePosted: "2024-05-29T14:30:00Z",        description: "5-tier wooden bookshelf with a classic design. Good condition.",
        details: ["Pine Wood", "5 Shelves", "1.8m Tall"]
    },
    {
        id: 15,
        name: "Air Fryer",
        price: 1100,
        category: "Home Appliances",
        subcategory: "Appliances",
        images: [
            "https://images.pexels.com/photos/5900085/pexels-photo-5900085.jpeg"
        ],
        rating: 5,
        color: "Black",
        condition: "New",
        location: "Durban",
        seller: {
            name: "Mila Carter",
            avatar: "https://randomuser.me/api/portraits/women/15.jpg",
            sellerRating: 4.9,
            joinDate: "July 2023",
            responseRate: 98,
            completedSales: 33
        },
       datePosted: "2024-05-29T14:30:00Z",
        description: "4L digital air fryer with timer and temperature control.",
        details: ["4L Capacity", "Digital Display", "Non-Stick Basket"]
    },
    {
        id: 16,
        name: "Gaming Keyboard",
        price: 490,
        category: "Gaming",
        subcategory: "Computer Accessories",
        images: [
            "https://images.pexels.com/photos/159651/keybord-computer-empty-white-159651.jpeg"
        ],
        rating: 4,
        color: "RGB",
        condition: "Like New",
        location: "Johannesburg",
        seller: {
            name: "Ethan Lewis",
            avatar: "https://randomuser.me/api/portraits/men/16.jpg",
            sellerRating: 4.6,
            joinDate: "June 2022",
            responseRate: 89,
            completedSales: 15
        },
       datePosted: "2024-05-29T14:30:00Z",
        description: "RGB mechanical keyboard with blue switches and full-size layout.",
        details: ["Mechanical", "RGB Lighting", "Anti-Ghosting"]
    },
    {
        id: 17,
        name: "Nikon DSLR Camera",
        price: 4200,
        category: "Gaming",
        subcategory: "Cameras",
        images: [
            "https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg"
        ],
        rating: 5,
        color: "Black",
        condition: "Used",
        location: "Cape Town",
        seller: {
            name: "Isla Martin",
            avatar: "https://randomuser.me/api/portraits/women/17.jpg",
            sellerRating: 4.7,
            joinDate: "February 2024",
            responseRate: 94,
            completedSales: 14
        },
       datePosted: "2024-05-29T14:30:00Z",
        description: "Nikon D3500 DSLR camera with 18-55mm lens. Lightly used.",
        details: ["24.2MP", "Wi-Fi Enabled", "Includes Strap"]
    },
    {
        id: 18,
        name: "Portable BBQ Grill",
        price: 560,
        category: "Home Appliances",
        subcategory: "Cooking",
        images: [
            "https://images.pexels.com/photos/1860207/pexels-photo-1860207.jpeg"
        ],
        rating: 4,
        color: "Silver",
        condition: "New",
        location: "East London",
        seller: {
            name: "Jack Robinson",
            avatar: "https://randomuser.me/api/portraits/men/18.jpg",
            sellerRating: 4.5,
            joinDate: "May 2023",
            responseRate: 87,
            completedSales: 13
        },
       datePosted: "2024-05-29T14:30:00Z",
        description: "Compact BBQ grill for patios and camping trips.",
        details: ["Stainless Steel", "Foldable Legs", "Charcoal Powered"]
    },
    {
        id: 19,
        name: "Acoustic Guitar",
        price: 1450,
        category: "Accessories",
        subcategory: "Watches",
        images: [
            "https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg"
        ],
        rating: 4,
        color: "Natural Wood",
        condition: "Used",
        location: "Polokwane",
        seller: {
            name: "Ella Walker",
            avatar: "https://randomuser.me/api/portraits/women/19.jpg",
            sellerRating: 4.4,
            joinDate: "September 2023",
            responseRate: 90,
            completedSales: 17
        },
       datePosted: "2024-05-29T14:30:00Z",
        description: "Beginner-friendly acoustic guitar. Recently restrung.",
        details: ["6 String", "Steel Strings", "Natural Finish"]
    },
    {
        id: 20,
        name: "Office Chair",
        price: 899,
        category: "Accessories",
        subcategory: "Office",
        images: [
            "https://images.pexels.com/photos/159144/pexels-photo-159144.jpeg"
        ],
        rating: 5,
        color: "Black",
        condition: "Like New",
        location: "Johannesburg",
        seller: {
            name: "Mason Hall",
            avatar: "https://randomuser.me/api/portraits/men/20.jpg",
            sellerRating: 4.9,
            joinDate: "December 2022",
            responseRate: 99,
            completedSales: 30
        },
       datePosted: "2024-05-29T14:30:00Z",
        description: "Ergonomic office chair with adjustable height and lumbar support.",
        details: ["Mesh Back", "Swivel Base", "Adjustable Armrests"]
    }
];

export default products;
