const contacts: Array<LocalContact> = [
    {
    "name": "Leo Paredes",
    "phone": 1130561780,
    "profileImg": "img/leo.jpg",
    "id" : Math.random().toString(16).slice(2),
    },
    {
     "name": "Kevin Szuchet",
    "phone": 1187344356,
    "profileImg": "img/kevin.jpg",
    "id" : Math.random().toString(16).slice(2),

    },
    {
        "name": "Yaniv",
        "phone": 1130561780,
        "profileImg": "img/noPhoto.jpg",
        "id" : Math.random().toString(16).slice(2),
    },
    {
        "name": "Eric Kobrinsky",
        "phone": 1183651780,
        "profileImg": "img/eric.jpg",
        "id" : Math.random().toString(16).slice(2),
    },
    {
        "name": "Jonathan Nisembaum",
        "phone": 1130564379,
        "profileImg": "img/joni.jpg",
        "id" : Math.random().toString(16).slice(2),

    },
    {
        "name": "Julie",
        "phone": 1154781780,
        "profileImg": "img/noPhoto.jpg",
        "id" : Math.random().toString(16).slice(2),
    },
    {
        "name": "Tal Yaron",
        "phone": 1130563458,
        "profileImg": "img/noPhoto.jpg",
        "id" : Math.random().toString(16).slice(2),

    },
    {
        "name": "Avromi Russell",
        "phone": 1156471780,
        "profileImg": "img/noPhoto.jpg",
        "id" : Math.random().toString(16).slice(2),
    },
    {
        "name": "Tomas Leon",
        "phone": 1130565640,
        "profileImg": "img/tomas.jpg",
        "id" : Math.random().toString(16).slice(2),
    }
]

localStorage.setItem("contactos", JSON.stringify(contacts));
