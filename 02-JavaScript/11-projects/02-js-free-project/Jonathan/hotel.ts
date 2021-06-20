function handleSumbit(event:any):void{
    
    event.preventDefault();

    const name = event.target.elements.name.value;
    const city = event.target.elements.cities.value;
    const stars = event.target.elements.stars.value;
    const status = event.target.elements.status.value;
    const fromdate = event.target.elements.fromdate.value;
    const todate = event.target.elements.todate.value;
    const price = event.target.elements.cash.value;
    
    //const customer = new Customer(name,city,stars,status,fromdate,todate,price);

   

    localStorage.setItem('name',name);
    localStorage.setItem('city',city);
    localStorage.setItem('stars',stars);
    localStorage.setItem('status',status);
    localStorage.setItem('fromdate',fromdate);
    localStorage.setItem('todate',todate);
    localStorage.setItem('price',price);

    window.location.href = "sumbit_hotel.html"

    //booking.getCustomer(customer);
    //booking.renderBooking();

}