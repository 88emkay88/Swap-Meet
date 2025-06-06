const mockAuctions = [
    {
        id: "auction1",
        title: "Vintage Gibson Guitar",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "A beautiful vintage Gibson Les Paul in excellent condition. This guitar has been well-maintained and features the classic humbucker pickups that Gibson is famous for. Perfect for both studio recording and live performances.",
        images: [
            "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        ],
        currentBid: 850,
        startingBid: 200,
        bidCount: 23,
        timeLeft: "2h 34m",
        category: "Musical Instruments",
        condition: "Excellent",
        seller: "MusicLover92",
        sellerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        isHot: true,
        endTime: new Date(Date.now() + 2 * 60 * 60 * 1000),
        bids: [
            { bidder: "GuitarHero", amount: 850, time: "2 minutes ago" },
            { bidder: "MusicFan123", amount: 820, time: "15 minutes ago" },
            { bidder: "RockStar", amount: 780, time: "32 minutes ago" },
            { bidder: "VintageCollector", amount: 750, time: "1 hour ago" },
        ]
    },
    {
        id: "auction2",
        title: "Sony PlayStation 5",
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        currentBid: 420,
        startingBid: 300,
        bidCount: 15,
        timeLeft: "1d 12h",
        category: "Electronics",
        condition: "Like New",
        seller: "GamerGirl",
        sellerAvatar: "",
        isHot: false,
        endTime: new Date(Date.now() + 36 * 60 * 60 * 1000),
        bids: [
            { bidder: "GuitarHero", amount: 850, time: "2 minutes ago" },
            { bidder: "MusicFan123", amount: 820, time: "15 minutes ago" },
            { bidder: "RockStar", amount: 780, time: "32 minutes ago" },
            { bidder: "VintageCollector", amount: 750, time: "1 hour ago" },
        ]
    },
    {
        id: "auction3",
        title: "Designer Leather Jacket",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        currentBid: 125,
        startingBid: 50,
        bidCount: 8,
        timeLeft: "6h 15m",
        category: "Clothing",
        condition: "Good",
        seller: "FashionForward",
        sellerAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        isHot: false,
        endTime: new Date(Date.now() + 6 * 60 * 60 * 1000),
        bids: [
            { bidder: "GuitarHero", amount: 850, time: "2 minutes ago" },
            { bidder: "MusicFan123", amount: 820, time: "15 minutes ago" },
            { bidder: "RockStar", amount: 780, time: "32 minutes ago" },
            { bidder: "VintageCollector", amount: 750, time: "1 hour ago" },
        ]
    },
    {
        id: "auction4",
        title: "Professional Camera Kit",
        image: "https://images.unsplash.com/photo-1580707221190-bd94d9087b7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        currentBid: 680,
        startingBid: 400,
        bidCount: 31,
        timeLeft: "3d 8h",
        category: "Electronics",
        condition: "Excellent",
        seller: "PhotoPro",
        sellerAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        isHot: true,
        endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        bids: [
            { bidder: "GuitarHero", amount: 850, time: "2 minutes ago" },
            { bidder: "MusicFan123", amount: 820, time: "15 minutes ago" },
            { bidder: "RockStar", amount: 780, time: "32 minutes ago" },
            { bidder: "VintageCollector", amount: 750, time: "1 hour ago" },
        ]
    },
    {
        id: "auction5",
        title: "Antique Wooden Desk",
        image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        currentBid: 200,
        startingBid: 100,
        bidCount: 12,
        timeLeft: "4h 22m",
        category: "Furniture",
        condition: "Good",
        seller: "AntiqueCollector",
        sellerAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
        isHot: false,
        endTime: new Date(Date.now() + 4 * 60 * 60 * 1000),
        bids: [
            { bidder: "GuitarHero", amount: 850, time: "2 minutes ago" },
            { bidder: "MusicFan123", amount: 820, time: "15 minutes ago" },
            { bidder: "RockStar", amount: 780, time: "32 minutes ago" },
            { bidder: "VintageCollector", amount: 750, time: "1 hour ago" },
        ]
    },
    {
        id: "auction6",
        title: "Mountain Bike - High End",
        image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        currentBid: 520,
        startingBid: 250,
        bidCount: 19,
        timeLeft: "1d 6h",
        category: "Sports & Outdoors",
        condition: "Like New",
        seller: "CyclingEnthusiast",
        sellerAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
        isHot: false,
        endTime: new Date(Date.now() + 30 * 60 * 60 * 1000),
        bids: [
            { bidder: "GuitarHero", amount: 850, time: "2 minutes ago" },
            { bidder: "MusicFan123", amount: 820, time: "15 minutes ago" },
            { bidder: "RockStar", amount: 780, time: "32 minutes ago" },
            { bidder: "VintageCollector", amount: 750, time: "1 hour ago" },
        ]
    },
];

export default mockAuctions;