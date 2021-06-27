var getCheckedHotel = JSON.parse(localStorage.getItem('checkedHotel'));
var boardCheckedRoot = document.querySelector('#boardCheked');
var Hotels = [
    {
        imageURL: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/56431315.jpg?k=659e126bcf6b4aed537ea28f9c3085ae4a25e72164670ef7192af495120d12e6&o=&hp=1',
        name: "Cucu Hotel",
        description: "Este hotel boutique ecléctico en una calle animada se encuentra a 13 minutos a pie de la playa Frishman en el mar Mediterráneo y a 16 minutos a pie del mercado Carmel. Las coloridas habitaciones tienen un ambiente peculiar y cuentan con Wi-Fi gratis y TV de pantalla plana, además de frigobar y duchas de lluvia. Algunas incluyen vistas al jardín o a la calle. Las habitaciones superiores incluyen balcones con hamacas. Las suites cuentan con bañeras independientes, máquinas Nespresso y salas de estar con sofás cama.El desayuno es extra. Los servicios consisten en un spa, un jardín amueblado y un café / restaurante informal con vista a la calle"
    },
    {
        imageURL: 'https://cf.bstatic.com/xdata/images/hotel/square600/13274862.webp?k=bf0a35e9accb7f8bc68500adbe6549e2effc4da9eae15face3d9e63fd1457f7c&o=',
        name: "Embassy",
        description: "This unpretentious hotel is located opposite the US Embassy, a 6-minute walk from the closest beach along the Mediterranean Sea."
    },
    {
        imageURL: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/109512203.jpg?k=530a61f98c4ba39fddfc3c831504e28b31cde3764ecc4d324afebea8fdc195bd&o=&hp=1',
        name: "Abraham Hostel Jerusalem",
        description: "The Abraham Hostel Jerusalem is located in Davidka Square, 350 m from Mahne Yehuda Market. It offers rooms and dormitories with free WiFi and air conditioning.Rooms at the Abraham Hostel have a private bathroom. Dormitories include private lockers, and further storage space is provided in the lounge.When booking a rate inclusive of breakfast, this is served at a partner bar nearby.The Abraham Hostel Jerusalem is right in front of a tram and bus stop providing connections to the city's most important landmarks. The Old City is a 20-minute walk away.The hostel features an evening bar with a selection of Israeli beers and nightly entertainment. The tour desk can organize excursions in Jerusalem and to different destinations in Israel."
    },
    {
        imageURL: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/40888968.jpg?k=543a1a0c9e1616444e1407237df26c4c8a7bd1c5587a848ac404fc21ac751a2b&o=&hp=1',
        name: "Club Hotel Eilat - 5 Stars Superior",
        description: "Less than 5-minute walk from both the sea and Hayam shopping center in Eilat, Club Hotel Eilat has over 10 acres of grounds including a water park with 6 swimming pools, a children's pool, a water slide and tropical gardens with waterfalls. Free private parking is available on site.Air-conditioned suites and studios at Club Hotel feature a fully equipped kitchenette and a seating area. Some also offer a private hot tub on the balcony. Most have panoramic views of the sea, mountain, and city.Guests can relax in the gym or at the spa including 15 treatment rooms, a sauna and 4 hot tubs. Massages can also be booked. The staff provides entertainment activities for children and adults, both during the day and at night. 3 games rooms and table tennis are also available. The on-site restaurant serves Israeli cuisine at breakfast and dinner. Guests can enjoy lunch and have snacks and drinks at the lobby restaurant, at the poolside bar or at the kid's club restaurant"
    },
    {
        imageURL: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/250744836.jpg?k=c0831284c5bafa39a02fb1691c5d0faaee80441f204a1d2366b28f9015246ead&o=&hp=1',
        name: "Eden Hotel",
        description: "Set in an 20th-century historical building in the center of Haifa, the family-run Eden Hotel offers free parking and comfortable accommodations. Each room offers free WiFi and an LCD TV.Rooms are air-conditioned and come with a fridge, a microwave and a mini-bar. They feature either a private balcony or access to a shared terrace on the top floor, offering beautiful views of Mount Carmel and the Bahai Temple.The Eden is a 2-minute walk from the Israel National Museum of Science, and 0.6 mi from the Bahai gardens. A large shopping center is just around the corner. City tours of Haifa are free on weekends.Busses stop right next to the hotel, connecting you around Haifa as well as Tel Aviv, other cities and Ben Gurion Airport. The Hanevi'im Metro stop is 50 m away."
    },
    {
        imageURL: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/229779320.jpg?k=5cdc43ee0fd39adbd8991edf983d56cb281b3af71b3460cff8fc84c84a08b680&o=&hp=1',
        name: "Hashimi Hotel",
        description: "The HaShimi Hotel is in the heart of the Old City of Jerusalem. It has a beautiful roof top terrace with magnificent views of the city, and an elegantly landscaped garden.The very modern and artistic interiors feature marble floors, stairs and railings. The entire hotel's color scheme is beautifully done in whites, beiges and maroons, with rich gold detailing.The building is over 425 years old, and is a perfect place to relax and unwind after a long day sight seeing in the city. All historic and religious sites are walking distance from the hotel."
    }
];
function renderDescription() {
    var html = " ";
    try {
        if (!boardCheckedRoot)
            throw new Error("The board checked root does not exist");
        if (!getCheckedHotel)
            throw new Error("Empty LocalStorage");
        getCheckedHotel.forEach(function (hotel) {
            // for YS, maybe the green message is a problem because of VS?
            var indexHotel = Hotels.findIndex(function (hotelslist) { return hotelslist.name === hotel.name; }); //Nice, why not use filter or just find? 
            html += "<p class=\"boardCheked--name\">" + Hotels[indexHotel].name + "</p>    \n                    <div class=\"boardCheked__box\">\n                        <img src = \"" + Hotels[indexHotel].imageURL + "\" class=\"boardCheked__box--img\">\n                        <p class = \"boardCheked__box--description\">" + Hotels[indexHotel].description + "</p>\n                    </div>";
        });
        boardCheckedRoot.innerHTML = html;
    }
    catch (e) {
        console.log(e);
    }
}
renderDescription();
function handleReturnHotel(event) {
    event.preventDefault();
    window.location.href = "second.html";
}
