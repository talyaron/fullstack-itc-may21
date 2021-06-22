const getCheckedHotel = JSON.parse(localStorage.getItem('checkedHotel'))
const boardCheckedRoot: HTMLElement = document.querySelector('#boardCheked')

interface Hotel {
    imageURL: string;
    description: string;
    name: string;

}

const Hotels: Array<Hotel> = [
    {
        imageURL: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/56431315.jpg?k=659e126bcf6b4aed537ea28f9c3085ae4a25e72164670ef7192af495120d12e6&o=&hp=1',
        name: "Cucu Hotel",
        description: "Este hotel boutique ecléctico en una calle animada se encuentra a 13 minutos a pie de la playa Frishman en el mar Mediterráneo y a 16 minutos a pie del mercado Carmel. Las coloridas habitaciones tienen un ambiente peculiar y cuentan con Wi-Fi gratis y TV de pantalla plana, además de frigobar y duchas de lluvia. Algunas incluyen vistas al jardín o a la calle. Las habitaciones superiores incluyen balcones con hamacas. Las suites cuentan con bañeras independientes, máquinas Nespresso y salas de estar con sofás cama.El desayuno es extra. Los servicios consisten en un spa, un jardín amueblado y un café / restaurante informal con vista a la calle",
    },
    {
        imageURL: 'https://cf.bstatic.com/xdata/images/hotel/square600/13274862.webp?k=bf0a35e9accb7f8bc68500adbe6549e2effc4da9eae15face3d9e63fd1457f7c&o=',
        name: "Embassy",
        description: "This unpretentious hotel is located opposite the US Embassy, a 6-minute walk from the closest beach along the Mediterranean Sea.",

    },
    {
        imageURL: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/109512203.jpg?k=530a61f98c4ba39fddfc3c831504e28b31cde3764ecc4d324afebea8fdc195bd&o=&hp=1',
        name: "Abraham Hostel Jerusalem",
        description: "The Abraham Hostel Jerusalem is located in Davidka Square, 350 m from Mahne Yehuda Market. It offers rooms and dormitories with free WiFi and air conditioning.Rooms at the Abraham Hostel have a private bathroom. Dormitories include private lockers, and further storage space is provided in the lounge.When booking a rate inclusive of breakfast, this is served at a partner bar nearby.The Abraham Hostel Jerusalem is right in front of a tram and bus stop providing connections to the city's most important landmarks. The Old City is a 20-minute walk away.The hostel features an evening bar with a selection of Israeli beers and nightly entertainment. The tour desk can organize excursions in Jerusalem and to different destinations in Israel.",
    }

]


function renderDescription() {

    let html: string = " ";

    try {
        if(!boardCheckedRoot) throw new Error("The board checked root does not exist");
        if(!getCheckedHotel) throw new Error("Empty LocalStorage");

        getCheckedHotel.forEach(hotel => {
            let indexHotel = Hotels.findIndex(hotelslist => hotelslist.name === hotel.name);
            html += `<p class="boardCheked--name">${Hotels[indexHotel].name}</p>
                    <div class="boardCheked__box">
                        <img src = "${Hotels[indexHotel].imageURL}" class="boardCheked__box--img">
                        <p class = "boardCheked__box--description">${Hotels[indexHotel].description}</p>
                    </div>`
        });

        boardCheckedRoot.innerHTML = html;
    } catch (e) {
        console.log(e)
    }
}

renderDescription();


function handleReturnHotel(event: any): void {
    event.preventDefault();
    window.location.href = "second.html"
}