const artists = [
    {
        id: 1,
        name: "Zee Pruk",
        nickname: "Zee",
        generation: 1,
        imageSources: ["https://images.weserv.nl/?url=kprofiles.com/wp-content/uploads/2022/07/DOMUNDI-ZEE1-1.jpg"],
        image: "assets/artists/zee.jpg",
        role: "Actor / Singer",
        instagram: "https://www.instagram.com/zeepruk/",
        x: "https://x.com/zee_pruk",
        tiktok: "https://www.tiktok.com/@zee.pruk",
        pairing: "ZeeNuNew",
        series: ["Cutie Pie", "The Next Prince"]
    },
    {
        id: 2,
        name: "Chawarin Perdpiriyawong",
        nickname: "NuNew",
        generation: 2,
        imageSources: ["https://images.weserv.nl/?url=kprofiles.com/wp-content/uploads/2022/07/DOMUNDI-NUNEW1-scaled.jpg"],
        image: "assets/artists/nunew.jpg",
        role: "Actor / Singer",
        instagram: "https://www.instagram.com/new_cwr/",
        x: "https://x.com/CwrNew",
        tiktok: "https://www.tiktok.com/@nunew_cwr",
        pairing: "ZeeNuNew",
        series: ["Cutie Pie", "The Next Prince"]
    },
    {
        id: 3,
        name: "Wanpichit Nimitparkpoom",
        nickname: "TeeTee",
        generation: 3,
        imageSources: ["https://images.weserv.nl/?url=kprofiles.com/wp-content/uploads/2022/07/DOMUNDI-TEETEE1-scaled.jpg"],
        image: "assets/artists/teetee.jpg",
        role: "Actor",
        instagram: "https://www.instagram.com/twnpich/",
        x: "https://x.com/twnpich",
        tiktok: "https://www.tiktok.com/@teetee.wpc",
        pairing: "TeeTeePor",
        series: ["Your Sky", "Duang With You"]
    },
    {
        id: 4,
        name: "Suppakarn Jirachotikul",
        nickname: "Por",
        generation: 4,
        imageSources: ["https://images.weserv.nl/?url=kprofiles.com/wp-content/uploads/2022/07/DOMUNDI-POR1-scaled.jpg"],
        image: "assets/artists/por.jpg",
        role: "Actor",
        instagram: "",
        x: "",
        tiktok: "",
        pairing: "TeeTeePor",
        series: ["Duang With You"]
    },
    {
        id: 5,
        name: "Kornthas Rujeerattanavorapan",
        nickname: "Max",
        generation: 1,
        imageSources: ["https://images.weserv.nl/?url=kprofiles.com/wp-content/uploads/2022/07/DOMUNDI-MAX1-1-scaled.jpg"],
        image: "assets/artists/max.jpg",
        role: "Actor",
        instagram: "",
        x: "",
        tiktok: "",
        pairing: "MaxNat",
        series: ["Cutie Pie", "Naughty Babe"]
    },
    {
        id: 6,
        name: "Natasit Uareksit",
        nickname: "Nat",
        generation: 2,
        imageSources: ["https://images.weserv.nl/?url=kprofiles.com/wp-content/uploads/2022/07/DOMUNDI-NAT1-scaled.jpg"],
        image: "assets/artists/nat.jpg",
        role: "Actor",
        instagram: "",
        x: "",
        tiktok: "",
        pairing: "MaxNat",
        series: ["Cutie Pie", "Naughty Babe"]
    },
    {
        id: 7,
        name: "Koraphat Lamnoi",
        nickname: "Tutor",
        generation: 2,
        imageSources: ["https://images.weserv.nl/?url=kprofiles.com/wp-content/uploads/2022/07/DOMUNDI-TUTOR1.jpg"],
        image: "assets/artists/tutor.jpg",
        role: "Actor",
        instagram: "",
        x: "",
        tiktok: "",
        pairing: "TutorYim",
        series: ["Middleman's Love"]
    },
    {
        id: 8,
        name: "Prarinyakorn Kansawa",
        nickname: "Yim",
        generation: 2,
        imageSources: ["https://images.weserv.nl/?url=kprofiles.com/wp-content/uploads/2022/07/DOMUNDI-YIM1-scaled.jpg"],
        image: "assets/artists/yim.jpg",
        role: "Actor",
        instagram: "",
        x: "",
        tiktok: "",
        pairing: "TutorYim",
        series: ["Middleman's Love"]
    },
    {
        id: 9,
        name: "Siraphop Manithikhun",
        nickname: "Net",
        generation: 2,
        imageSources: ["https://images.weserv.nl/?url=kprofiles.com/wp-content/uploads/2022/07/DOMUNDI-NET1.jpg"],
        image: "assets/artists/net.jpg",
        role: "Actor",
        instagram: "",
        x: "",
        tiktok: "",
        pairing: "NetJJ",
        series: ["Bed Friend", "Love Upon a Time"]
    },
    {
        id: 10,
        name: "Radchapon Phornpinit",
        nickname: "JJ",
        generation: 4,
        imageSources: ["https://images.weserv.nl/?url=kprofiles.com/wp-content/uploads/2022/07/DOMUNDI-JJ1.jpg"],
        image: "assets/artists/jj.jpg",
        role: "Actor",
        instagram: "",
        x: "",
        tiktok: "",
        pairing: "NetJJ",
        series: ["Love Upon a Time"]
    },
    {
        id: 11,
        name: "Harit Buayoi",
        nickname: "Keng",
        generation: 3,
        imageSources: ["https://images.weserv.nl/?url=kprofiles.com/wp-content/uploads/2022/07/DOMUNDI-KENG1-scaled.jpg"],
        image: "assets/artists/keng.jpg",
        role: "Actor",
        instagram: "",
        x: "",
        tiktok: "",
        pairing: "KengNamping",
        series: ["Khemjira", "Still Holding Up Like the Moon"]
    },
    {
        id: 12,
        name: "Namping Napatsakorn",
        nickname: "Namping",
        generation: 3,
        imageSources: ["https://images.weserv.nl/?url=kprofiles.com/wp-content/uploads/2022/07/DOMUNDI-NAMPING1.jpg"],
        image: "assets/artists/namping.jpg",
        role: "Actor",
        instagram: "",
        x: "",
        tiktok: "",
        pairing: "KengNamping",
        series: ["Khemjira", "Still Holding Up Like the Moon"]
    }
];

const pairings = [
    {
        id: 1,
        name: "TeeTeePor",
        members: "TeeTee & Por",
        description: "A DMD on-screen pairing.",
        series: ["Duang With You"]
    },
    {
        id: 2,
        name: "ZeeNuNew",
        members: "Zee & NuNew",
        description: "A popular on-screen pairing.",
        series: ["Cutie Pie", "The Next Prince"]
    },
    {
        id: 3,
        name: "MaxNat",
        members: "Max & Nat",
        description: "A DMD on-screen pairing.",
        series: ["Cutie Pie", "Naughty Babe"]
    },
    {
        id: 4,
        name: "TutorYim",
        members: "Tutor & Yim",
        description: "A DMD on-screen pairing.",
        series: ["Middleman's Love"]
    },
    {
        id: 5,
        name: "NetJJ",
        members: "Net & JJ",
        description: "A DMD on-screen pairing.",
        series: ["Love Upon a Time"]
    },
    {
        id: 6,
        name: "KengNamping",
        members: "Keng & Namping",
        description: "A DMD on-screen pairing.",
        series: ["Khemjira"]
    }
];

const series = [
    {
        id: 1,
        title: "Cutie Pie",
        year: 2022,
        status: "Released",
        genre: "Romance",
        cast: ["Zee", "NuNew", "Max", "Nat"],
        imageSources: ["https://images.plex.tv/photo?size=large-1280&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FwErkJHHVjxezm6unGOSXYwIInQm.jpg"],
        image: "assets/series/cutie-pie.jpg"
    },
    {
        id: 2,
        title: "Naughty Babe",
        year: 2023,
        status: "Released",
        genre: "Romance",
        cast: ["Max", "Nat"],
        imageSources: ["https://image.tmdb.org/t/p/w600_and_h900_bestv2/wjZsWck95XPhlbLDoT8kx8m9wTB.jpg"],
        image: "assets/series/naughty-babe.jpg"
    },
    {
        id: 3,
        title: "Middleman's Love",
        year: 2023,
        status: "Released",
        genre: "Romance / Comedy",
        cast: ["Tutor", "Yim"],
        imageSources: ["https://image.tmdb.org/t/p/w600_and_h900_face/xkonMwqxR6Tb7LgqqUgrtn8yd87.jpg"],
        image: "assets/series/middlemans-love.jpg"
    },
    {
        id: 4,
        title: "Bed Friend",
        year: 2023,
        status: "Released",
        genre: "Romance / Drama",
        cast: ["Net"],
        imageSources: ["https://pictures.betaseries.com/fonds/poster/a92bcec1f271ed47e7eeddd05126a20c.jpg"],
        image: "assets/series/bed-friend.jpg"
    },
    {
        id: 5,
        title: "Your Sky",
        year: 2024,
        status: "Released",
        genre: "Romance",
        cast: ["TeeTee"],
        imageSources: ["https://cdn.bingebase.com/tv_shows/27226/posters/g581Ja76fFNjj3GcB94fCLw3NHY.webp"],
        image: "assets/series/your-sky.jpg"
    },
    {
        id: 6,
        title: "The Next Prince",
        year: 2025,
        status: "Released",
        genre: "Romance / Fantasy",
        cast: ["Zee", "NuNew"],
        imageSources: ["https://image.idntimes.com/post/20250412/1000304550-25b277b5899ff4bfcd882abc3691af9e-641d359df4f6402bdd49175f43b7197c.jpg"],
        image: "assets/series/the-next-prince.jpg"
    },
    {
        id: 7,
        title: "Duang With You",
        year: 2026,
        status: "Released",
        genre: "Romance",
        cast: ["TeeTee", "Por"],
        imageSources: ["https://p16-va.lemon8cdn.com/tos-alisg-v-a3e477-sg/okbiaAZ1dbiAY7FYiOEAAPv7PB5KioBCN2kkI~tplv-tej9nj120t-origin.webp"],
        image: "assets/series/duang-with-you.jpg"
    },
    {
        id: 8,
        title: "Your Third",
        year: 2026,
        status: "Announced",
        genre: "Romance",
        cast: ["Max", "Nat"],
        imageSources: ["https://newsplus.co.th/wp-content/uploads/2026/08/VXrBWm_4f.jpg"],
        image: "assets/series/your-third.jpg"
    },
    {
        id: 9,
        title: "Mr. Fanboy",
        year: 2026,
        status: "Announced",
        genre: "Romance",
        cast: ["Auau", "Save"],
        imageSources: ["https://image.tmdb.org/t/p/original/vNo2ik8L1NdlgKdV2MJzU3mYKLV.jpg"],
        image: "assets/series/mr-fanboy.jpg"
    },
    {
        id: 10,
        title: "30 Days of Us",
        year: 2026,
        status: "Announced",
        genre: "Romance",
        cast: ["Net", "JJ"],
        imageSources: [],
        image: "assets/series/30-days-of-us.jpg"
    }
];
