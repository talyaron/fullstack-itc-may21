const getHotel = JSON.parse(localStorage.getItem('checkedHotel')) //check the hotel
const boardRoot = document.querySelector('#board')

interface Hotel {
    imageURL: string;
    name: string;
    description: string;
}

const Hotels: Array<Hotel> = [
    {
        imageURL: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/56431315.jpg?k=659e126bcf6b4aed537ea28f9c3085ae4a25e72164670ef7192af495120d12e6&o=&hp=1',
        name: "Cucu Hotel",
        description: "Este hotel boutique ecléctico en una calle animada se encuentra a 13 minutos a pie de la playa Frishman en el mar Mediterráneo y a 16 minutos a pie del mercado Carmel. Las coloridas habitaciones tienen un ambiente peculiar y cuentan con Wi-Fi gratis y TV de pantalla plana, además de frigobar y duchas de lluvia. Algunas incluyen vistas al jardín o a la calle. Las habitaciones superiores incluyen balcones con hamacas. Las suites cuentan con bañeras independientes, máquinas Nespresso y salas de estar con sofás cama.El desayuno es extra. Los servicios consisten en un spa, un jardín amueblado y un café / restaurante informal con vista a la calle",
    },
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
        description: "67 Hanevi'im Street, Davidka Square, Jerusalén, 94702, Israel",
    }

]


function renderDescription():void{

    let html:string = " ";
    getHotel.forEach(element => {
            let encontrarIndex = Hotels.findIndex(algo => algo.name === element.name);
            //console.log(Hotels[encontrarIndex].description);
            html += `<div><img src = "${Hotels[encontrarIndex].imageURL}"
                        <p>"${Hotels[encontrarIndex].name}"</p>
                        <p>"${Hotels[encontrarIndex].description}"</p>
                    </div>`
    });

    boardRoot.innerHTML = html;
}

renderDescription();


function handleReturnHotel(event: any): void {
    event.preventDefault();
    window.location.href = "hotel.html"
}