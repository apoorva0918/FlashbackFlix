import logo from './logo.png'
import movieLogo from './movieLogo.png'
import googlePlay from './googlePlay.svg'
import appStore from './appStore.svg'
import screenImage from './screenImage.svg'
import profile from './profile.png'

export const assets = {
    logo,
    movieLogo,
    googlePlay,
    appStore,
    screenImage,
    profile
}

export const dummyTrailers = [
    {
        image: "https://img.youtube.com/vi/WJK45r-j6TU/maxresdefault.jpg",
        videoUrl: 'https://youtu.be/93evoW782eg?si=W4KlEuj7zF5S5UR2'
    },
    {
        image: "https://img.youtube.com/vi/p166dlyxt5g/maxresdefault.jpg",
        videoUrl: 'https://youtu.be/wP5yudlccro?si=Q58B_h15uvAEtC28'
    },
    {
        image: "https://img.youtube.com/vi/B9pDag0jB1k/maxresdefault.jpg",
        videoUrl: 'https://youtu.be/B9pDag0jB1k?si=Wxuv-VdOjsHenxY0'
    },
    {
        image: "https://img.youtube.com/vi/e7m707Txg0A/maxresdefault.jpg",
        videoUrl: 'https://youtu.be/hy5dxXY81tE?si=-LUG_xlv1NDOdk3Q'
    },
]

const dummyCastsData = [
  { name: "Guru Dutt", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/pV6Fm2rXGRZZHv2QIFsHllohGyI.jpg" },
  { name: "Waheeda Rehman", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/iErQ38ChGV6989lh1TU4SExMkWS.jpg" },
  { name: "Dev Anand", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/6YUuO8APqEEfmYjN3IAjkaopHMV.jpg" },
  { name: "Mala Sinha", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/aFMZlh1BCSuVIRUw1TgavpHPL4k.jpg" },
  { name: "Neetu Singh", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/sErXXqb3YkKCYAvlFv7FrZHHxhg.jpg" },
  { name: "Amitabh Bachchan", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/u69PvpWqGkywSm0YjFiw77j9eqS.jpg" },
  { name: "Shashi Kapoor", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/hw7mZh6gPtkUViE9jPWh8nKSJY4.jpg" },
  { name: "Farooq Sheikh", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/kyFjIskG6dscyH02aiAGbNqz6YD.jpg" },
  { name: "Deepti Naval", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/6G0miCgpQcXVJqsY7nt1wPn4evK.jpg" },
];

export const dummyShowsData = [
    {
        "_id": "324544",
        "id": 324544,
        "title": "Pyaasa",
        "overview": "A haunting tale of a struggling poet in a materialistic world, Pyaasa explores love, rejection, and the thirst for meaning in a society that values fame over humanity.",
        "poster_path": "https://media.themoviedb.org/t/p/w440_and_h660_face/z6JS8EhpyryZBNbaqVlvlgVa2hj.jpg",
        "backdrop_path": "https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/hvtRa9AZ2mKnR32fRow356vsdSf.jpg",
        "genres": [
            { "id": 28, "name": "Drama" },
            { "id": 14, "name": "Romance" },
            { "id": 12, "name": "Social Commentary" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-02-27",
        "original_language": "en",
        "tagline": "She seeks the power to free her people.",
        "vote_average": 6.4,
        "vote_count": 15000,
        "runtime": 102,
    },
    {
        "_id": "1232546",
        "id": 1232546,
        "title": "Guide",
        "overview": "A mesmerizing journey of love, betrayal, and spiritual awakening, Guide follows a tourist guide’s transformation from a fallen man to a revered saint.",
        "poster_path": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/crJkaIn41tuaN1QJPwliOzotIRv.jpg",
        "backdrop_path": "https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/jZCwmzwyUe61VKqroxJta3Z4vnU.jpg",
        "genres": [
            { "id": 28, "name": "Drama" },
            { "id": 14, "name": "Romance" },
            { "id": 96, "name": "Spiritual" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-04-23",
        "original_language": "en",
        "tagline": "Every night a different nightmare.",
        "vote_average": 6.405,
        "vote_count": 18000,
        "runtime": 103,
    },
    {
        "_id": "552524",
        "id": 552524,
        "title": "Deewaar",
        "overview": "A powerful tale of two brothers on opposite sides of the law, Deewaar explores the clash between duty and defiance in a corrupt society.",
        "poster_path": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/alVHFaerbSgnuKhzSddJRNiCs8g.jpg",
        "backdrop_path": "https://media.themoviedb.org/t/p/w1000_and_h563_face/wHoRT3jemMh3TmnmSXD1UaNSmG4.jpg",
        "genres": [
            { "id": 10, "name": "Family Drama" },
            { "id": 35, "name": "Crime" },
            { "id": 87, "name": "Action" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-05-17",
        "original_language": "en",
        "tagline": "Hold on to your coconuts.",
        "vote_average": 7.117,
        "vote_count": 27500,
        "runtime": 108,
    },
    {
        "_id": "668489",
        "id": 668489,
        "title": "Chasme Buddoorr",
        "overview": "Three friends, one girl, and a comedy of errors—Chashme Buddoor is a sweet slice of 80s Delhi with love, laughter, and a lot of jugaad.",
        "poster_path": "https://www.themoviedb.org/t/p/w1280/6J69y5YMvzPp3g1nHptG1bST8lq.jpg",
        "backdrop_path": "https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/aBMG8TPWCMhHWCGuRLF6HHHHQOB.jpg",
        
        
        "genres": [
            { "id": 29, "name": "Comedy" },
            { "id": 14, "name": "Romance" },
            { "id": 53, "name": "Slice Of Life" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-04-25",
        "original_language": "en",
        "tagline": "No law. Only disorder.",
        "vote_average": 6.537,
        "vote_count": 35960,
        "runtime": 107,
    },
    {
        "_id": "950387",
        "id": 950387,
        "title": "Mausam",
        "overview": "A poignant tale of lost love and redemption, Mausam follows a man’s search for closure as he confronts the ghosts of his past and the consequences of time.",
        "poster_path": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/t8r0gTH4qbbPwctMEuGUC2ZDddp.jpg",
        "backdrop_path": "https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/1bd9iE4rUCOyO1vrZ5jaAog2aS9.jpg",
        "genres": [
            { "id": 14, "name": "Romance" },
            { "id": 35, "name": "Tragedy" },
            { "id": 28, "name": "Drama" },
        ],
        "casts": dummyCastsData,
        "release_date": "2025-03-31",
        "original_language": "en",
        "tagline": "Be there and be square.",
        "vote_average": 6.516,
        "vote_count": 15225,
        "runtime": 101,
    },
    {
        "_id": "575265",
        "id": 575265,
        "title": "Abhimaan",
        "overview": "When love meets rivalry and applause turns into silence—Abhimaan is the echo of a relationship tested by pride.",
        "poster_path": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/ahxwfzpYlDAWdikl3rLT2oVWpjl.jpg",
        "backdrop_path": "https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/h23aOGIcQJZvomRpC5GI3UmCMtW.jpg",
        "genres": [
            { "id": 34, "name": "Musical" },
            { "id": 12, "name": "Drama" },
            { "id": 14, "name": "Romance" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-05-17",
        "original_language": "en",
        "tagline": "Our lives are the sum of our choices.",
        "vote_average": 7.042,
        "vote_count": 19885,
        "runtime": 170,
    },
    {
        "_id": "986056",
        "id": 986056,
        "title": "Angoor",
        "overview": "A classic comedy of errors, Angoor revolves around two pairs of identical twins and the chaos that unfolds from mistaken identities.",
        "poster_path": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/wijF2sW1MDq9c1u5m9ezealO9KC.jpg",
        "backdrop_path": "https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/ztJF7L4n0F146U9agRbW13Eebkg.jpg",
        "genres": [
            { "id": 29, "name": "Comedy" },
            { "id": 87, "name": "Mistaken Identity" },
            { "id": 28, "name": "Drama" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-04-30",
        "original_language": "en",
        "tagline": "Everyone deserves a second shot.",
        "vote_average": 7.443,
        "vote_count": 23569,
        "runtime": 127,
    },
    {
        "_id": "986078",
        "id": 986078,
        "title": "Rajnigandha",
        "overview": "Between familiar comfort and new excitement, Rajnigandha blooms as a delicate tale of indecision and the fragrance of forgotten feelings.",
        "poster_path": "https://media.themoviedb.org/t/p/w440_and_h660_face/xtYPlhyUAWMKwG9XwMQ4yY6k5ES.jpg",
        "backdrop_path": "https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/f10SGuVX9u86GZdmOd7R2zbFjtA.jpg",
        "genres": [
            { "id": 14, "name": "Romance" },
            { "id": 28, "name": "Drama" },
            { "id": 17, "name": "Realistic" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-04-30",
        "original_language": "en",
        "tagline": "Everyone deserves a second shot.",
        "vote_average": 7.443,
        "vote_count": 23569,
        "runtime": 127,
    },
    {
        "_id": "985634",
        "id": 985634,
        "title": "Sahib Bibi aur Ghulam",
        "overview": "A haunting portrait of a decaying feudal world, Sahib Bibi Aur Ghulam tells the tragic tale of a lonely wife seeking love and meaning in a crumbling haveli.",
        "poster_path": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/tUVjkGSe7ZRhFoWirqZOh00kNlz.jpg",
        "backdrop_path": "https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/A8LkKJjpeU7jAPYcCUImZ3ausu.jpg",
        "genres": [
            { "id": 35, "name": "Tragedy" },
            { "id": 80, "name": "Historical" },
            { "id": 12, "name": "Social Commentary" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-04-30",
        "original_language": "en",
        "tagline": "Everyone deserves a second shot.",
        "vote_average": 7.443,
        "vote_count": 23569,
        "runtime": 127,
    },
    {
        "_id": "984321",
        "id": 984321,
        "title": "Aradhana",
        "overview": "A heartfelt saga of eternal love, sacrifice, and motherhood, Aradhana weaves romance into destiny across generations.",
        "poster_path": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/wpAYC3kWt9VpDDY2a3jWt4sF3wc.jpg",
        "backdrop_path": "https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/7CTx02MMqqcOBFsSCWM3HSbI20X.jpg",
        "genres": [
            { "id": 14, "name": "Romance" },
            { "id": 34, "name": "Musical" },
            { "id": 28, "name": "Drama" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-04-30",
        "original_language": "en",
        "tagline": "Everyone deserves a second shot.",
        "vote_average": 7.443,
        "vote_count": 23569,
        "runtime": 127,
    }
]

export const dummyDateTimeData = {
    "2025-07-24": [
        { "time": "2025-07-24T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd1" },
        { "time": "2025-07-24T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd2" },
        { "time": "2025-07-24T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd3" }
    ],
    "2025-07-25": [
        { "time": "2025-07-25T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd4" },
        { "time": "2025-07-25T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd5" },
        { "time": "2025-07-25T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd6" }
    ],
    "2025-07-26": [
        { "time": "2025-07-26T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd7" },
        { "time": "2025-07-26T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd8" },
        { "time": "2025-07-26T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd9" }
    ],
    "2025-07-27": [
        { "time": "2025-07-27T01:00:00.000Z", "showId": "68395b407f6329be2bb45bda" },
        { "time": "2025-07-27T03:00:00.000Z", "showId": "68395b407f6329be2bb45bdb" },
        { "time": "2025-07-27T05:00:00.000Z", "showId": "68395b407f6329be2bb45bdc" }
    ]
}

export const dummyDashboardData = {
    "totalBookings": 14,
    "totalRevenue": 1517,
    "totalUser": 5,
    "activeShows": [
        {
            "_id": "68352363e96d99513e4221a4",
            "movie": dummyShowsData[0],
            "showDateTime": "2025-06-30T02:30:00.000Z",
            "showPrice": 59,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "C1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "6835238fe96d99513e4221a8",
            "movie": dummyShowsData[1],
            "showDateTime": "2025-06-30T15:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221a9",
            "movie": dummyShowsData[2],
            "showDateTime": "2025-06-30T03:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221aa",
            "movie": dummyShowsData[3],
            "showDateTime": "2025-07-15T16:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A4": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "683682072b5989c29fc6dc0d",
            "movie": dummyShowsData[4],
            "showDateTime": "2025-06-05T15:30:00.000Z",
            "showPrice": 49,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
            "__v": 0
        },
        {
            "_id": "68380044686d454f2116b39a",
            "movie": dummyShowsData[5],
            "showDateTime": "2025-06-20T16:00:00.000Z",
            "showPrice": 79,
            "occupiedSeats": {
                "A1": "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
                "A2": "user_2xl7eCSUHddibk5lRxfOtw9RMwX"
            }
        }
    ]
}


export const dummyBookingData = [
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "Apoorva", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 98,
        "bookedSeats": ["D1", "D2"],
        "isPaid": false,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "Amar", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 49,
        "bookedSeats": ["A1"],
        "isPaid": true,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "Ayush", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 147,
        "bookedSeats": ["A1", "A2","A3"],
        "isPaid": true,
    },
]