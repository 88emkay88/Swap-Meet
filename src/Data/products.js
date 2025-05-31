const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 899,
        category: "Electronics",
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
        datePosted: "Posted 5 days ago",
        description: "Comfortable over-ear wireless headphones with crystal-clear audio and noise isolation. Ideal for long listening sessions.",
        details: ["Bluetooth 5.0", "Noise Isolation", "20h Battery Life", "Built-in Mic"]
    },
    {
        id: 2,
        name: "Stylish Jacket",
        price: 499,
        category: "Clothing",
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
            avatar: "",
            sellerRating: 4.2,
            joinDate: "February 2023",
            responseRate: 93,
            completedSales: 17
        },
        datePosted: "Posted 1 week ago",
        description: "A fashionable, warm jacket perfect for winter. Minimal signs of wear, suitable for casual or semi-formal use.",
        details: ["Size: Medium", "Material: Polyester", "Zipper Closure", "Hooded"]
    },
    {
        id: 3,
        name: "Power Drill",
        price: 1199,
        category: "Tools",
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
        datePosted: "Posted 2 days ago",
        description: "Brand new cordless power drill with a strong motor, perfect for heavy-duty DIY and professional tasks.",
        details: ["Cordless", "2 Speed Settings", "Includes Battery", "LED Light"]
    },
    {
        id: 4,
        name: "Cookware Set",
        price: 799,
        category: "Kitchen",
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
        datePosted: "Posted 3 week ago",
        description: "Complete 10-piece non-stick cookware set. Gently used and well maintained, great for any home kitchen.",
        details: ["10 Pieces", "Non-Stick Coating", "Dishwasher Safe", "Ergonomic Handles"]
    }
];

export default products;
