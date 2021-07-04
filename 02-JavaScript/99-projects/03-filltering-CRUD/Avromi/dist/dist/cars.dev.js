"use strict";

var carsData = [{
  "Name": "chevrolet chevelle malibu",
  "Miles_per_Gallon": 18,
  "Cylinders": 8,
  "Displacement": 307,
  "Horsepower": 130,
  "Weight_in_lbs": 3504,
  "Acceleration": 12,
  "Year": "1970-01-01",
  "Origin": "USA"
}, {
  "Name": "buick skylark 320",
  "Miles_per_Gallon": 15,
  "Cylinders": 8,
  "Displacement": 350,
  "Horsepower": 165,
  "Weight_in_lbs": 3693,
  "Acceleration": 11.5,
  "Year": "1970-01-01",
  "Origin": "USA"
}, {
  "Name": "plymouth satellite",
  "Miles_per_Gallon": 18,
  "Cylinders": 8,
  "Displacement": 318,
  "Horsepower": 150,
  "Weight_in_lbs": 3436,
  "Acceleration": 11,
  "Year": "1970-01-01",
  "Origin": "USA"
}, {
  "Name": "amc rebel sst",
  "Miles_per_Gallon": 16,
  "Cylinders": 8,
  "Displacement": 304,
  "Horsepower": 150,
  "Weight_in_lbs": 3433,
  "Acceleration": 12,
  "Year": "1970-01-01",
  "Origin": "USA"
}, {
  "Name": "ford torino",
  "Miles_per_Gallon": 17,
  "Cylinders": 8,
  "Displacement": 302,
  "Horsepower": 140,
  "Weight_in_lbs": 3449,
  "Acceleration": 10.5,
  "Year": "1970-01-01",
  "Origin": "USA"
}, {
  "Name": "ford galaxie 500",
  "Miles_per_Gallon": 15,
  "Cylinders": 8,
  "Displacement": 429,
  "Horsepower": 198,
  "Weight_in_lbs": 4341,
  "Acceleration": 10,
  "Year": "1970-01-01",
  "Origin": "USA"
}, {
  "Name": "chevrolet impala",
  "Miles_per_Gallon": 14,
  "Cylinders": 8,
  "Displacement": 454,
  "Horsepower": 220,
  "Weight_in_lbs": 4354,
  "Acceleration": 9,
  "Year": "1970-01-01",
  "Origin": "USA"
}, {
  "Name": "plymouth fury iii",
  "Miles_per_Gallon": 14,
  "Cylinders": 8,
  "Displacement": 440,
  "Horsepower": 215,
  "Weight_in_lbs": 4312,
  "Acceleration": 8.5,
  "Year": "1970-01-01",
  "Origin": "USA"
}, {
  "Name": "pontiac catalina",
  "Miles_per_Gallon": 14,
  "Cylinders": 8,
  "Displacement": 455,
  "Horsepower": 225,
  "Weight_in_lbs": 4425,
  "Acceleration": 10,
  "Year": "1970-01-01",
  "Origin": "USA"
}, {
  "Name": "amc ambassador dpl",
  "Miles_per_Gallon": 15,
  "Cylinders": 8,
  "Displacement": 390,
  "Horsepower": 190,
  "Weight_in_lbs": 3850,
  "Acceleration": 8.5,
  "Year": "1970-01-01",
  "Origin": "USA"
}, {
  "Name": "citroen ds-21 pallas",
  "Miles_per_Gallon": null,
  "Cylinders": 4,
  "Displacement": 133,
  "Horsepower": 115,
  "Weight_in_lbs": 3090,
  "Acceleration": 17.5,
  "Year": "1970-01-01",
  "Origin": "Europe"
}, {
  "Name": "chevrolet chevelle concours (sw)",
  "Miles_per_Gallon": null,
  "Cylinders": 8,
  "Displacement": 350,
  "Horsepower": 165,
  "Weight_in_lbs": 4142,
  "Acceleration": 11.5,
  "Year": "1970-01-01",
  "Origin": "USA"
}, {
  "Name": "ford torino (sw)",
  "Miles_per_Gallon": null,
  "Cylinders": 8,
  "Displacement": 351,
  "Horsepower": 153,
  "Weight_in_lbs": 4034,
  "Acceleration": 11,
  "Year": "1970-01-01",
  "Origin": "USA"
}, {
  "Name": "plymouth satellite (sw)",
  "Miles_per_Gallon": null,
  "Cylinders": 8,
  "Displacement": 383,
  "Horsepower": 175,
  "Weight_in_lbs": 4166,
  "Acceleration": 10.5,
  "Year": "1970-01-01",
  "Origin": "USA"
}, {
  "Name": "amc rebel sst (sw)",
  "Miles_per_Gallon": null,
  "Cylinders": 8,
  "Displacement": 360,
  "Horsepower": 175,
  "Weight_in_lbs": 3850,
  "Acceleration": 11,
  "Year": "1970-01-01",
  "Origin": "USA"
}, {
  "Name": "dodge challenger se",
  "Miles_per_Gallon": 15,
  "Cylinders": 8,
  "Displacement": 383,
  "Horsepower": 170,
  "Weight_in_lbs": 3563,
  "Acceleration": 10,
  "Year": "1970-01-01",
  "Origin": "USA"
}, {
  "Name": "plymouth 'cuda 340",
  "Miles_per_Gallon": 14,
  "Cylinders": 8,
  "Displacement": 340,
  "Horsepower": 160,
  "Weight_in_lbs": 3609,
  "Acceleration": 8,
  "Year": "1970-01-01",
  "Origin": "USA"
}, {
  "Name": "plymouth sapporo",
  "Miles_per_Gallon": 23.2,
  "Cylinders": 4,
  "Displacement": 156,
  "Horsepower": 105,
  "Weight_in_lbs": 2745,
  "Acceleration": 16.7,
  "Year": "1978-01-01",
  "Origin": "USA"
}, {
  "Name": "oldsmobile starfire sx",
  "Miles_per_Gallon": 23.8,
  "Cylinders": 4,
  "Displacement": 151,
  "Horsepower": 85,
  "Weight_in_lbs": 2855,
  "Acceleration": 17.6,
  "Year": "1978-01-01",
  "Origin": "USA"
}, {
  "Name": "datsun 200-sx",
  "Miles_per_Gallon": 23.9,
  "Cylinders": 4,
  "Displacement": 119,
  "Horsepower": 97,
  "Weight_in_lbs": 2405,
  "Acceleration": 14.9,
  "Year": "1978-01-01",
  "Origin": "Japan"
}, {
  "Name": "audi 5000",
  "Miles_per_Gallon": 20.3,
  "Cylinders": 5,
  "Displacement": 131,
  "Horsepower": 103,
  "Weight_in_lbs": 2830,
  "Acceleration": 15.9,
  "Year": "1978-01-01",
  "Origin": "Europe"
}, {
  "Name": "volvo 264gl",
  "Miles_per_Gallon": 17,
  "Cylinders": 6,
  "Displacement": 163,
  "Horsepower": 125,
  "Weight_in_lbs": 3140,
  "Acceleration": 13.6,
  "Year": "1978-01-01",
  "Origin": "Europe"
}, {
  "Name": "saab 99gle",
  "Miles_per_Gallon": 21.6,
  "Cylinders": 4,
  "Displacement": 121,
  "Horsepower": 115,
  "Weight_in_lbs": 2795,
  "Acceleration": 15.7,
  "Year": "1978-01-01",
  "Origin": "Europe"
}, {
  "Name": "peugeot 604sl",
  "Miles_per_Gallon": 16.2,
  "Cylinders": 6,
  "Displacement": 163,
  "Horsepower": 133,
  "Weight_in_lbs": 3410,
  "Acceleration": 15.8,
  "Year": "1978-01-01",
  "Origin": "Europe"
}, {
  "Name": "volkswagen scirocco",
  "Miles_per_Gallon": 31.5,
  "Cylinders": 4,
  "Displacement": 89,
  "Horsepower": 71,
  "Weight_in_lbs": 1990,
  "Acceleration": 14.9,
  "Year": "1978-01-01",
  "Origin": "Europe"
}, {
  "Name": "honda Accelerationord lx",
  "Miles_per_Gallon": 29.5,
  "Cylinders": 4,
  "Displacement": 98,
  "Horsepower": 68,
  "Weight_in_lbs": 2135,
  "Acceleration": 16.6,
  "Year": "1978-01-01",
  "Origin": "Japan"
}, {
  "Name": "pontiac lemans v6",
  "Miles_per_Gallon": 21.5,
  "Cylinders": 6,
  "Displacement": 231,
  "Horsepower": 115,
  "Weight_in_lbs": 3245,
  "Acceleration": 15.4,
  "Year": "1979-01-01",
  "Origin": "USA"
}, {
  "Name": "mercury zephyr 6",
  "Miles_per_Gallon": 19.8,
  "Cylinders": 6,
  "Displacement": 200,
  "Horsepower": 85,
  "Weight_in_lbs": 2990,
  "Acceleration": 18.2,
  "Year": "1979-01-01",
  "Origin": "USA"
}, {
  "Name": "ford fairmont 4",
  "Miles_per_Gallon": 22.3,
  "Cylinders": 4,
  "Displacement": 140,
  "Horsepower": 88,
  "Weight_in_lbs": 2890,
  "Acceleration": 17.3,
  "Year": "1979-01-01",
  "Origin": "USA"
}, {
  "Name": "amc concord dl 6",
  "Miles_per_Gallon": 20.2,
  "Cylinders": 6,
  "Displacement": 232,
  "Horsepower": 90,
  "Weight_in_lbs": 3265,
  "Acceleration": 18.2,
  "Year": "1979-01-01",
  "Origin": "USA"
}, {
  "Name": "dodge aspen 6",
  "Miles_per_Gallon": 20.6,
  "Cylinders": 6,
  "Displacement": 225,
  "Horsepower": 110,
  "Weight_in_lbs": 3360,
  "Acceleration": 16.6,
  "Year": "1979-01-01",
  "Origin": "USA"
}, {
  "Name": "chevrolet caprice classic",
  "Miles_per_Gallon": 17,
  "Cylinders": 8,
  "Displacement": 305,
  "Horsepower": 130,
  "Weight_in_lbs": 3840,
  "Acceleration": 15.4,
  "Year": "1979-01-01",
  "Origin": "USA"
}, {
  "Name": "ford ltd landau",
  "Miles_per_Gallon": 17.6,
  "Cylinders": 8,
  "Displacement": 302,
  "Horsepower": 129,
  "Weight_in_lbs": 3725,
  "Acceleration": 13.4,
  "Year": "1979-01-01",
  "Origin": "USA"
}, {
  "Name": "mercury grand marquis",
  "Miles_per_Gallon": 16.5,
  "Cylinders": 8,
  "Displacement": 351,
  "Horsepower": 138,
  "Weight_in_lbs": 3955,
  "Acceleration": 13.2,
  "Year": "1979-01-01",
  "Origin": "USA"
}, {
  "Name": "dodge st. regis",
  "Miles_per_Gallon": 18.2,
  "Cylinders": 8,
  "Displacement": 318,
  "Horsepower": 135,
  "Weight_in_lbs": 3830,
  "Acceleration": 15.2,
  "Year": "1979-01-01",
  "Origin": "USA"
}, {
  "Name": "buick estate wagon (sw)",
  "Miles_per_Gallon": 16.9,
  "Cylinders": 8,
  "Displacement": 350,
  "Horsepower": 155,
  "Weight_in_lbs": 4360,
  "Acceleration": 14.9,
  "Year": "1979-01-01",
  "Origin": "USA"
}, {
  "Name": "ford country squire (sw)",
  "Miles_per_Gallon": 15.5,
  "Cylinders": 8,
  "Displacement": 351,
  "Horsepower": 142,
  "Weight_in_lbs": 4054,
  "Acceleration": 14.3,
  "Year": "1979-01-01",
  "Origin": "USA"
}, {
  "Name": "chevrolet malibu classic (sw)",
  "Miles_per_Gallon": 19.2,
  "Cylinders": 8,
  "Displacement": 267,
  "Horsepower": 125,
  "Weight_in_lbs": 3605,
  "Acceleration": 15,
  "Year": "1979-01-01",
  "Origin": "USA"
}, {
  "Name": "chrysler lebaron town @ country (sw)",
  "Miles_per_Gallon": 18.5,
  "Cylinders": 8,
  "Displacement": 360,
  "Horsepower": 150,
  "Weight_in_lbs": 3940,
  "Acceleration": 13,
  "Year": "1979-01-01",
  "Origin": "USA"
}, {
  "Name": "vw rabbit custom",
  "Miles_per_Gallon": 31.9,
  "Cylinders": 4,
  "Displacement": 89,
  "Horsepower": 71,
  "Weight_in_lbs": 1925,
  "Acceleration": 14,
  "Year": "1979-01-01",
  "Origin": "Europe"
}, {
  "Name": "maxda glc deluxe",
  "Miles_per_Gallon": 34.1,
  "Cylinders": 4,
  "Displacement": 86,
  "Horsepower": 65,
  "Weight_in_lbs": 1975,
  "Acceleration": 15.2,
  "Year": "1979-01-01",
  "Origin": "Japan"
}, {
  "Name": "dodge colt hatchback custom",
  "Miles_per_Gallon": 35.7,
  "Cylinders": 4,
  "Displacement": 98,
  "Horsepower": 80,
  "Weight_in_lbs": 1915,
  "Acceleration": 14.4,
  "Year": "1979-01-01",
  "Origin": "USA"
}, {
  "Name": "amc spirit dl",
  "Miles_per_Gallon": 27.4,
  "Cylinders": 4,
  "Displacement": 121,
  "Horsepower": 80,
  "Weight_in_lbs": 2670,
  "Acceleration": 15,
  "Year": "1979-01-01",
  "Origin": "USA"
}, {
  "Name": "mercedes benz 300d",
  "Miles_per_Gallon": 25.4,
  "Cylinders": 5,
  "Displacement": 183,
  "Horsepower": 77,
  "Weight_in_lbs": 3530,
  "Acceleration": 20.1,
  "Year": "1979-01-01",
  "Origin": "Europe"
}, {
  "Name": "cadillac eldorado",
  "Miles_per_Gallon": 23,
  "Cylinders": 8,
  "Displacement": 350,
  "Horsepower": 125,
  "Weight_in_lbs": 3900,
  "Acceleration": 17.4,
  "Year": "1979-01-01",
  "Origin": "USA"
}, {
  "Name": "peugeot 504",
  "Miles_per_Gallon": 27.2,
  "Cylinders": 4,
  "Displacement": 141,
  "Horsepower": 71,
  "Weight_in_lbs": 3190,
  "Acceleration": 24.8,
  "Year": "1979-01-01",
  "Origin": "Europe"
}, {
  "Name": "oldsmobile cutlass salon brougham",
  "Miles_per_Gallon": 23.9,
  "Cylinders": 8,
  "Displacement": 260,
  "Horsepower": 90,
  "Weight_in_lbs": 3420,
  "Acceleration": 22.2,
  "Year": "1979-01-01",
  "Origin": "USA"
}, {
  "Name": "plymouth horizon",
  "Miles_per_Gallon": 34.2,
  "Cylinders": 4,
  "Displacement": 105,
  "Horsepower": 70,
  "Weight_in_lbs": 2200,
  "Acceleration": 13.2,
  "Year": "1979-01-01",
  "Origin": "USA"
}, {
  "Name": "plymouth horizon tc3",
  "Miles_per_Gallon": 34.5,
  "Cylinders": 4,
  "Displacement": 105,
  "Horsepower": 70,
  "Weight_in_lbs": 2150,
  "Acceleration": 14.9,
  "Year": "1979-01-01",
  "Origin": "USA"
}, {
  "Name": "datsun 210",
  "Miles_per_Gallon": 31.8,
  "Cylinders": 4,
  "Displacement": 85,
  "Horsepower": 65,
  "Weight_in_lbs": 2020,
  "Acceleration": 19.2,
  "Year": "1979-01-01",
  "Origin": "Japan"
}, {
  "Name": "fiat strada custom",
  "Miles_per_Gallon": 37.3,
  "Cylinders": 4,
  "Displacement": 91,
  "Horsepower": 69,
  "Weight_in_lbs": 2130,
  "Acceleration": 14.7,
  "Year": "1979-01-01",
  "Origin": "Europe"
}, {
  "Name": "buick skylark limited",
  "Miles_per_Gallon": 28.4,
  "Cylinders": 4,
  "Displacement": 151,
  "Horsepower": 90,
  "Weight_in_lbs": 2670,
  "Acceleration": 16,
  "Year": "1979-01-01",
  "Origin": "USA"
}, {
  "Name": "chevrolet citation",
  "Miles_per_Gallon": 28.8,
  "Cylinders": 6,
  "Displacement": 173,
  "Horsepower": 115,
  "Weight_in_lbs": 2595,
  "Acceleration": 11.3,
  "Year": "1979-01-01",
  "Origin": "USA"
}, {
  "Name": "oldsmobile omega brougham",
  "Miles_per_Gallon": 26.8,
  "Cylinders": 6,
  "Displacement": 173,
  "Horsepower": 115,
  "Weight_in_lbs": 2700,
  "Acceleration": 12.9,
  "Year": "1979-01-01",
  "Origin": "USA"
}, {
  "Name": "pontiac phoenix",
  "Miles_per_Gallon": 33.5,
  "Cylinders": 4,
  "Displacement": 151,
  "Horsepower": 90,
  "Weight_in_lbs": 2556,
  "Acceleration": 13.2,
  "Year": "1979-01-01",
  "Origin": "USA"
}, {
  "Name": "vw rabbit",
  "Miles_per_Gallon": 41.5,
  "Cylinders": 4,
  "Displacement": 98,
  "Horsepower": 76,
  "Weight_in_lbs": 2144,
  "Acceleration": 14.7,
  "Year": "1980-01-01",
  "Origin": "Europe"
}, {
  "Name": "toyota corolla tercel",
  "Miles_per_Gallon": 38.1,
  "Cylinders": 4,
  "Displacement": 89,
  "Horsepower": 60,
  "Weight_in_lbs": 1968,
  "Acceleration": 18.8,
  "Year": "1980-01-01",
  "Origin": "Japan"
}, {
  "Name": "chevrolet chevette",
  "Miles_per_Gallon": 32.1,
  "Cylinders": 4,
  "Displacement": 98,
  "Horsepower": 70,
  "Weight_in_lbs": 2120,
  "Acceleration": 15.5,
  "Year": "1980-01-01",
  "Origin": "USA"
}, {
  "Name": "datsun 310",
  "Miles_per_Gallon": 37.2,
  "Cylinders": 4,
  "Displacement": 86,
  "Horsepower": 65,
  "Weight_in_lbs": 2019,
  "Acceleration": 16.4,
  "Year": "1980-01-01",
  "Origin": "Japan"
}, {
  "Name": "chevrolet citation",
  "Miles_per_Gallon": 28,
  "Cylinders": 4,
  "Displacement": 151,
  "Horsepower": 90,
  "Weight_in_lbs": 2678,
  "Acceleration": 16.5,
  "Year": "1980-01-01",
  "Origin": "USA"
}, {
  "Name": "ford fairmont",
  "Miles_per_Gallon": 26.4,
  "Cylinders": 4,
  "Displacement": 140,
  "Horsepower": 88,
  "Weight_in_lbs": 2870,
  "Acceleration": 18.1,
  "Year": "1980-01-01",
  "Origin": "USA"
}, {
  "Name": "amc concord",
  "Miles_per_Gallon": 24.3,
  "Cylinders": 4,
  "Displacement": 151,
  "Horsepower": 90,
  "Weight_in_lbs": 3003,
  "Acceleration": 20.1,
  "Year": "1980-01-01",
  "Origin": "USA"
}, {
  "Name": "dodge aspen",
  "Miles_per_Gallon": 19.1,
  "Cylinders": 6,
  "Displacement": 225,
  "Horsepower": 90,
  "Weight_in_lbs": 3381,
  "Acceleration": 18.7,
  "Year": "1980-01-01",
  "Origin": "USA"
}, {
  "Name": "audi 4000",
  "Miles_per_Gallon": 34.3,
  "Cylinders": 4,
  "Displacement": 97,
  "Horsepower": 78,
  "Weight_in_lbs": 2188,
  "Acceleration": 15.8,
  "Year": "1980-01-01",
  "Origin": "Europe"
}, {
  "Name": "toyota corona liftback",
  "Miles_per_Gallon": 29.8,
  "Cylinders": 4,
  "Displacement": 134,
  "Horsepower": 90,
  "Weight_in_lbs": 2711,
  "Acceleration": 15.5,
  "Year": "1980-01-01",
  "Origin": "Japan"
}, {
  "Name": "mazda 626",
  "Miles_per_Gallon": 31.3,
  "Cylinders": 4,
  "Displacement": 120,
  "Horsepower": 75,
  "Weight_in_lbs": 2542,
  "Acceleration": 17.5,
  "Year": "1980-01-01",
  "Origin": "Japan"
}, {
  "Name": "datsun 510 hatchback",
  "Miles_per_Gallon": 37,
  "Cylinders": 4,
  "Displacement": 119,
  "Horsepower": 92,
  "Weight_in_lbs": 2434,
  "Acceleration": 15,
  "Year": "1980-01-01",
  "Origin": "Japan"
}, {
  "Name": "toyota corolla",
  "Miles_per_Gallon": 32.2,
  "Cylinders": 4,
  "Displacement": 108,
  "Horsepower": 75,
  "Weight_in_lbs": 2265,
  "Acceleration": 15.2,
  "Year": "1980-01-01",
  "Origin": "Japan"
}, {
  "Name": "mazda glc",
  "Miles_per_Gallon": 46.6,
  "Cylinders": 4,
  "Displacement": 86,
  "Horsepower": 65,
  "Weight_in_lbs": 2110,
  "Acceleration": 17.9,
  "Year": "1980-01-01",
  "Origin": "Japan"
}, {
  "Name": "dodge colt",
  "Miles_per_Gallon": 27.9,
  "Cylinders": 4,
  "Displacement": 156,
  "Horsepower": 105,
  "Weight_in_lbs": 2800,
  "Acceleration": 14.4,
  "Year": "1980-01-01",
  "Origin": "USA"
}, {
  "Name": "datsun 210",
  "Miles_per_Gallon": 40.8,
  "Cylinders": 4,
  "Displacement": 85,
  "Horsepower": 65,
  "Weight_in_lbs": 2110,
  "Acceleration": 19.2,
  "Year": "1980-01-01",
  "Origin": "Japan"
}, {
  "Name": "vw rabbit c (diesel)",
  "Miles_per_Gallon": 44.3,
  "Cylinders": 4,
  "Displacement": 90,
  "Horsepower": 48,
  "Weight_in_lbs": 2085,
  "Acceleration": 21.7,
  "Year": "1980-01-01",
  "Origin": "Europe"
}, {
  "Name": "vw dasher (diesel)",
  "Miles_per_Gallon": 43.4,
  "Cylinders": 4,
  "Displacement": 90,
  "Horsepower": 48,
  "Weight_in_lbs": 2335,
  "Acceleration": 23.7,
  "Year": "1980-01-01",
  "Origin": "Europe"
}, {
  "Name": "audi 5000s (diesel)",
  "Miles_per_Gallon": 36.4,
  "Cylinders": 5,
  "Displacement": 121,
  "Horsepower": 67,
  "Weight_in_lbs": 2950,
  "Acceleration": 19.9,
  "Year": "1980-01-01",
  "Origin": "Europe"
}, {
  "Name": "mercedes-benz 240d",
  "Miles_per_Gallon": 30,
  "Cylinders": 4,
  "Displacement": 146,
  "Horsepower": 67,
  "Weight_in_lbs": 3250,
  "Acceleration": 21.8,
  "Year": "1980-01-01",
  "Origin": "Europe"
}, {
  "Name": "honda civic 1500 gl",
  "Miles_per_Gallon": 44.6,
  "Cylinders": 4,
  "Displacement": 91,
  "Horsepower": 67,
  "Weight_in_lbs": 1850,
  "Acceleration": 13.8,
  "Year": "1980-01-01",
  "Origin": "Japan"
}, {
  "Name": "renault lecar deluxe",
  "Miles_per_Gallon": 40.9,
  "Cylinders": 4,
  "Displacement": 85,
  "Horsepower": null,
  "Weight_in_lbs": 1835,
  "Acceleration": 17.3,
  "Year": "1980-01-01",
  "Origin": "Europe"
}, {
  "Name": "subaru dl",
  "Miles_per_Gallon": 33.8,
  "Cylinders": 4,
  "Displacement": 97,
  "Horsepower": 67,
  "Weight_in_lbs": 2145,
  "Acceleration": 18,
  "Year": "1980-01-01",
  "Origin": "Japan"
}, {
  "Name": "vokswagen rabbit",
  "Miles_per_Gallon": 29.8,
  "Cylinders": 4,
  "Displacement": 89,
  "Horsepower": 62,
  "Weight_in_lbs": 1845,
  "Acceleration": 15.3,
  "Year": "1980-01-01",
  "Origin": "Europe"
}, {
  "Name": "datsun 280-zx",
  "Miles_per_Gallon": 32.7,
  "Cylinders": 6,
  "Displacement": 168,
  "Horsepower": 132,
  "Weight_in_lbs": 2910,
  "Acceleration": 11.4,
  "Year": "1980-01-01",
  "Origin": "Japan"
}, {
  "Name": "mazda rx-7 gs",
  "Miles_per_Gallon": 23.7,
  "Cylinders": 3,
  "Displacement": 70,
  "Horsepower": 100,
  "Weight_in_lbs": 2420,
  "Acceleration": 12.5,
  "Year": "1980-01-01",
  "Origin": "Japan"
}, {
  "Name": "triumph tr7 coupe",
  "Miles_per_Gallon": 35,
  "Cylinders": 4,
  "Displacement": 122,
  "Horsepower": 88,
  "Weight_in_lbs": 2500,
  "Acceleration": 15.1,
  "Year": "1980-01-01",
  "Origin": "Europe"
}, {
  "Name": "ford mustang cobra",
  "Miles_per_Gallon": 23.6,
  "Cylinders": 4,
  "Displacement": 140,
  "Horsepower": null,
  "Weight_in_lbs": 2905,
  "Acceleration": 14.3,
  "Year": "1980-01-01",
  "Origin": "USA"
}, {
  "Name": "honda Accelerationord",
  "Miles_per_Gallon": 32.4,
  "Cylinders": 4,
  "Displacement": 107,
  "Horsepower": 72,
  "Weight_in_lbs": 2290,
  "Acceleration": 17,
  "Year": "1980-01-01",
  "Origin": "Japan"
}, {
  "Name": "plymouth reliant",
  "Miles_per_Gallon": 27.2,
  "Cylinders": 4,
  "Displacement": 135,
  "Horsepower": 84,
  "Weight_in_lbs": 2490,
  "Acceleration": 15.7,
  "Year": "1982-01-01",
  "Origin": "USA"
}, {
  "Name": "buick skylark",
  "Miles_per_Gallon": 26.6,
  "Cylinders": 4,
  "Displacement": 151,
  "Horsepower": 84,
  "Weight_in_lbs": 2635,
  "Acceleration": 16.4,
  "Year": "1982-01-01",
  "Origin": "USA"
}, {
  "Name": "dodge aries wagon (sw)",
  "Miles_per_Gallon": 25.8,
  "Cylinders": 4,
  "Displacement": 156,
  "Horsepower": 92,
  "Weight_in_lbs": 2620,
  "Acceleration": 14.4,
  "Year": "1982-01-01",
  "Origin": "USA"
}, {
  "Name": "chevrolet citation",
  "Miles_per_Gallon": 23.5,
  "Cylinders": 6,
  "Displacement": 173,
  "Horsepower": 110,
  "Weight_in_lbs": 2725,
  "Acceleration": 12.6,
  "Year": "1982-01-01",
  "Origin": "USA"
}, {
  "Name": "plymouth reliant",
  "Miles_per_Gallon": 30,
  "Cylinders": 4,
  "Displacement": 135,
  "Horsepower": 84,
  "Weight_in_lbs": 2385,
  "Acceleration": 12.9,
  "Year": "1982-01-01",
  "Origin": "USA"
}, {
  "Name": "toyota starlet",
  "Miles_per_Gallon": 39.1,
  "Cylinders": 4,
  "Displacement": 79,
  "Horsepower": 58,
  "Weight_in_lbs": 1755,
  "Acceleration": 16.9,
  "Year": "1982-01-01",
  "Origin": "Japan"
}, {
  "Name": "plymouth champ",
  "Miles_per_Gallon": 39,
  "Cylinders": 4,
  "Displacement": 86,
  "Horsepower": 64,
  "Weight_in_lbs": 1875,
  "Acceleration": 16.4,
  "Year": "1982-01-01",
  "Origin": "USA"
}, {
  "Name": "honda civic 1300",
  "Miles_per_Gallon": 35.1,
  "Cylinders": 4,
  "Displacement": 81,
  "Horsepower": 60,
  "Weight_in_lbs": 1760,
  "Acceleration": 16.1,
  "Year": "1982-01-01",
  "Origin": "Japan"
}, {
  "Name": "subaru",
  "Miles_per_Gallon": 32.3,
  "Cylinders": 4,
  "Displacement": 97,
  "Horsepower": 67,
  "Weight_in_lbs": 2065,
  "Acceleration": 17.8,
  "Year": "1982-01-01",
  "Origin": "Japan"
}, {
  "Name": "datsun 210",
  "Miles_per_Gallon": 37,
  "Cylinders": 4,
  "Displacement": 85,
  "Horsepower": 65,
  "Weight_in_lbs": 1975,
  "Acceleration": 19.4,
  "Year": "1982-01-01",
  "Origin": "Japan"
}, {
  "Name": "toyota tercel",
  "Miles_per_Gallon": 37.7,
  "Cylinders": 4,
  "Displacement": 89,
  "Horsepower": 62,
  "Weight_in_lbs": 2050,
  "Acceleration": 17.3,
  "Year": "1982-01-01",
  "Origin": "Japan"
}, {
  "Name": "mazda glc 4",
  "Miles_per_Gallon": 34.1,
  "Cylinders": 4,
  "Displacement": 91,
  "Horsepower": 68,
  "Weight_in_lbs": 1985,
  "Acceleration": 16,
  "Year": "1982-01-01",
  "Origin": "Japan"
}, {
  "Name": "plymouth horizon 4",
  "Miles_per_Gallon": 34.7,
  "Cylinders": 4,
  "Displacement": 105,
  "Horsepower": 63,
  "Weight_in_lbs": 2215,
  "Acceleration": 14.9,
  "Year": "1982-01-01",
  "Origin": "USA"
}, {
  "Name": "ford escort 4w",
  "Miles_per_Gallon": 34.4,
  "Cylinders": 4,
  "Displacement": 98,
  "Horsepower": 65,
  "Weight_in_lbs": 2045,
  "Acceleration": 16.2,
  "Year": "1982-01-01",
  "Origin": "USA"
}, {
  "Name": "ford escort 2h",
  "Miles_per_Gallon": 29.9,
  "Cylinders": 4,
  "Displacement": 98,
  "Horsepower": 65,
  "Weight_in_lbs": 2380,
  "Acceleration": 20.7,
  "Year": "1982-01-01",
  "Origin": "USA"
}, {
  "Name": "volkswagen jetta",
  "Miles_per_Gallon": 33,
  "Cylinders": 4,
  "Displacement": 105,
  "Horsepower": 74,
  "Weight_in_lbs": 2190,
  "Acceleration": 14.2,
  "Year": "1982-01-01",
  "Origin": "Europe"
}, {
  "Name": "renault 18i",
  "Miles_per_Gallon": 34.5,
  "Cylinders": 4,
  "Displacement": 100,
  "Horsepower": null,
  "Weight_in_lbs": 2320,
  "Acceleration": 15.8,
  "Year": "1982-01-01",
  "Origin": "Europe"
}, {
  "Name": "honda prelude",
  "Miles_per_Gallon": 33.7,
  "Cylinders": 4,
  "Displacement": 107,
  "Horsepower": 75,
  "Weight_in_lbs": 2210,
  "Acceleration": 14.4,
  "Year": "1982-01-01",
  "Origin": "Japan"
}, {
  "Name": "toyota corolla",
  "Miles_per_Gallon": 32.4,
  "Cylinders": 4,
  "Displacement": 108,
  "Horsepower": 75,
  "Weight_in_lbs": 2350,
  "Acceleration": 16.8,
  "Year": "1982-01-01",
  "Origin": "Japan"
}, {
  "Name": "datsun 200sx",
  "Miles_per_Gallon": 32.9,
  "Cylinders": 4,
  "Displacement": 119,
  "Horsepower": 100,
  "Weight_in_lbs": 2615,
  "Acceleration": 14.8,
  "Year": "1982-01-01",
  "Origin": "Japan"
}, {
  "Name": "mazda 626",
  "Miles_per_Gallon": 31.6,
  "Cylinders": 4,
  "Displacement": 120,
  "Horsepower": 74,
  "Weight_in_lbs": 2635,
  "Acceleration": 18.3,
  "Year": "1982-01-01",
  "Origin": "Japan"
}, {
  "Name": "peugeot 505s turbo diesel",
  "Miles_per_Gallon": 28.1,
  "Cylinders": 4,
  "Displacement": 141,
  "Horsepower": 80,
  "Weight_in_lbs": 3230,
  "Acceleration": 20.4,
  "Year": "1982-01-01",
  "Origin": "Europe"
}, {
  "Name": "saab 900s",
  "Miles_per_Gallon": null,
  "Cylinders": 4,
  "Displacement": 121,
  "Horsepower": 110,
  "Weight_in_lbs": 2800,
  "Acceleration": 15.4,
  "Year": "1982-01-01",
  "Origin": "Europe"
}, {
  "Name": "volvo diesel",
  "Miles_per_Gallon": 30.7,
  "Cylinders": 6,
  "Displacement": 145,
  "Horsepower": 76,
  "Weight_in_lbs": 3160,
  "Acceleration": 19.6,
  "Year": "1982-01-01",
  "Origin": "Europe"
}, {
  "Name": "toyota cressida",
  "Miles_per_Gallon": 25.4,
  "Cylinders": 6,
  "Displacement": 168,
  "Horsepower": 116,
  "Weight_in_lbs": 2900,
  "Acceleration": 12.6,
  "Year": "1982-01-01",
  "Origin": "Japan"
}, {
  "Name": "datsun 810 maxima",
  "Miles_per_Gallon": 24.2,
  "Cylinders": 6,
  "Displacement": 146,
  "Horsepower": 120,
  "Weight_in_lbs": 2930,
  "Acceleration": 13.8,
  "Year": "1982-01-01",
  "Origin": "Japan"
}, {
  "Name": "buick century",
  "Miles_per_Gallon": 22.4,
  "Cylinders": 6,
  "Displacement": 231,
  "Horsepower": 110,
  "Weight_in_lbs": 3415,
  "Acceleration": 15.8,
  "Year": "1982-01-01",
  "Origin": "USA"
}, {
  "Name": "oldsmobile cutlass ls",
  "Miles_per_Gallon": 26.6,
  "Cylinders": 8,
  "Displacement": 350,
  "Horsepower": 105,
  "Weight_in_lbs": 3725,
  "Acceleration": 19,
  "Year": "1982-01-01",
  "Origin": "USA"
}, {
  "Name": "ford granada gl",
  "Miles_per_Gallon": 20.2,
  "Cylinders": 6,
  "Displacement": 200,
  "Horsepower": 88,
  "Weight_in_lbs": 3060,
  "Acceleration": 17.1,
  "Year": "1982-01-01",
  "Origin": "USA"
}, {
  "Name": "chrysler lebaron salon",
  "Miles_per_Gallon": 17.6,
  "Cylinders": 6,
  "Displacement": 225,
  "Horsepower": 85,
  "Weight_in_lbs": 3465,
  "Acceleration": 16.6,
  "Year": "1982-01-01",
  "Origin": "USA"
}, {
  "Name": "chevrolet cavalier",
  "Miles_per_Gallon": 28,
  "Cylinders": 4,
  "Displacement": 112,
  "Horsepower": 88,
  "Weight_in_lbs": 2605,
  "Acceleration": 19.6,
  "Year": "1982-01-01",
  "Origin": "USA"
}, {
  "Name": "chevrolet cavalier wagon",
  "Miles_per_Gallon": 27,
  "Cylinders": 4,
  "Displacement": 112,
  "Horsepower": 88,
  "Weight_in_lbs": 2640,
  "Acceleration": 18.6,
  "Year": "1982-01-01",
  "Origin": "USA"
}, {
  "Name": "chevrolet cavalier 2-door",
  "Miles_per_Gallon": 34,
  "Cylinders": 4,
  "Displacement": 112,
  "Horsepower": 88,
  "Weight_in_lbs": 2395,
  "Acceleration": 18,
  "Year": "1982-01-01",
  "Origin": "USA"
}, {
  "Name": "pontiac j2000 se hatchback",
  "Miles_per_Gallon": 31,
  "Cylinders": 4,
  "Displacement": 112,
  "Horsepower": 85,
  "Weight_in_lbs": 2575,
  "Acceleration": 16.2,
  "Year": "1982-01-01",
  "Origin": "USA"
}, {
  "Name": "dodge aries se",
  "Miles_per_Gallon": 29,
  "Cylinders": 4,
  "Displacement": 135,
  "Horsepower": 84,
  "Weight_in_lbs": 2525,
  "Acceleration": 16,
  "Year": "1982-01-01",
  "Origin": "USA"
}, {
  "Name": "pontiac phoenix",
  "Miles_per_Gallon": 27,
  "Cylinders": 4,
  "Displacement": 151,
  "Horsepower": 90,
  "Weight_in_lbs": 2735,
  "Acceleration": 18,
  "Year": "1982-01-01",
  "Origin": "USA"
}, {
  "Name": "ford fairmont futura",
  "Miles_per_Gallon": 24,
  "Cylinders": 4,
  "Displacement": 140,
  "Horsepower": 92,
  "Weight_in_lbs": 2865,
  "Acceleration": 16.4,
  "Year": "1982-01-01",
  "Origin": "USA"
}, {
  "Name": "amc concord dl",
  "Miles_per_Gallon": 23,
  "Cylinders": 4,
  "Displacement": 151,
  "Horsepower": null,
  "Weight_in_lbs": 3035,
  "Acceleration": 20.5,
  "Year": "1982-01-01",
  "Origin": "USA"
}, {
  "Name": "volkswagen rabbit l",
  "Miles_per_Gallon": 36,
  "Cylinders": 4,
  "Displacement": 105,
  "Horsepower": 74,
  "Weight_in_lbs": 1980,
  "Acceleration": 15.3,
  "Year": "1982-01-01",
  "Origin": "Europe"
}, {
  "Name": "mazda glc custom l",
  "Miles_per_Gallon": 37,
  "Cylinders": 4,
  "Displacement": 91,
  "Horsepower": 68,
  "Weight_in_lbs": 2025,
  "Acceleration": 18.2,
  "Year": "1982-01-01",
  "Origin": "Japan"
}, {
  "Name": "mazda glc custom",
  "Miles_per_Gallon": 31,
  "Cylinders": 4,
  "Displacement": 91,
  "Horsepower": 68,
  "Weight_in_lbs": 1970,
  "Acceleration": 17.6,
  "Year": "1982-01-01",
  "Origin": "Japan"
}, {
  "Name": "plymouth horizon miser",
  "Miles_per_Gallon": 38,
  "Cylinders": 4,
  "Displacement": 105,
  "Horsepower": 63,
  "Weight_in_lbs": 2125,
  "Acceleration": 14.7,
  "Year": "1982-01-01",
  "Origin": "USA"
}, {
  "Name": "mercury lynx l",
  "Miles_per_Gallon": 36,
  "Cylinders": 4,
  "Displacement": 98,
  "Horsepower": 70,
  "Weight_in_lbs": 2125,
  "Acceleration": 17.3,
  "Year": "1982-01-01",
  "Origin": "USA"
}, {
  "Name": "nissan stanza xe",
  "Miles_per_Gallon": 36,
  "Cylinders": 4,
  "Displacement": 120,
  "Horsepower": 88,
  "Weight_in_lbs": 2160,
  "Acceleration": 14.5,
  "Year": "1982-01-01",
  "Origin": "Japan"
}, {
  "Name": "honda Accelerationord",
  "Miles_per_Gallon": 36,
  "Cylinders": 4,
  "Displacement": 107,
  "Horsepower": 75,
  "Weight_in_lbs": 2205,
  "Acceleration": 14.5,
  "Year": "1982-01-01",
  "Origin": "Japan"
}, {
  "Name": "toyota corolla",
  "Miles_per_Gallon": 34,
  "Cylinders": 4,
  "Displacement": 108,
  "Horsepower": 70,
  "Weight_in_lbs": 2245,
  "Acceleration": 16.9,
  "Year": "1982-01-01",
  "Origin": "Japan"
}, {
  "Name": "honda civic",
  "Miles_per_Gallon": 38,
  "Cylinders": 4,
  "Displacement": 91,
  "Horsepower": 67,
  "Weight_in_lbs": 1965,
  "Acceleration": 15,
  "Year": "1982-01-01",
  "Origin": "Japan"
}, {
  "Name": "honda civic (auto)",
  "Miles_per_Gallon": 32,
  "Cylinders": 4,
  "Displacement": 91,
  "Horsepower": 67,
  "Weight_in_lbs": 1965,
  "Acceleration": 15.7,
  "Year": "1982-01-01",
  "Origin": "Japan"
}, {
  "Name": "datsun 310 gx",
  "Miles_per_Gallon": 38,
  "Cylinders": 4,
  "Displacement": 91,
  "Horsepower": 67,
  "Weight_in_lbs": 1995,
  "Acceleration": 16.2,
  "Year": "1982-01-01",
  "Origin": "Japan"
}, {
  "Name": "buick century limited",
  "Miles_per_Gallon": 25,
  "Cylinders": 6,
  "Displacement": 181,
  "Horsepower": 110,
  "Weight_in_lbs": 2945,
  "Acceleration": 16.4,
  "Year": "1982-01-01",
  "Origin": "USA"
}, {
  "Name": "oldsmobile cutlass ciera (diesel)",
  "Miles_per_Gallon": 38,
  "Cylinders": 6,
  "Displacement": 262,
  "Horsepower": 85,
  "Weight_in_lbs": 3015,
  "Acceleration": 17,
  "Year": "1982-01-01",
  "Origin": "USA"
}, {
  "Name": "chrysler lebaron medallion",
  "Miles_per_Gallon": 26,
  "Cylinders": 4,
  "Displacement": 156,
  "Horsepower": 92,
  "Weight_in_lbs": 2585,
  "Acceleration": 14.5,
  "Year": "1982-01-01",
  "Origin": "USA"
}, {
  "Name": "ford granada l",
  "Miles_per_Gallon": 22,
  "Cylinders": 6,
  "Displacement": 232,
  "Horsepower": 112,
  "Weight_in_lbs": 2835,
  "Acceleration": 14.7,
  "Year": "1982-01-01",
  "Origin": "USA"
}, {
  "Name": "toyota celica gt",
  "Miles_per_Gallon": 32,
  "Cylinders": 4,
  "Displacement": 144,
  "Horsepower": 96,
  "Weight_in_lbs": 2665,
  "Acceleration": 13.9,
  "Year": "1982-01-01",
  "Origin": "Japan"
}, {
  "Name": "dodge charger 2.2",
  "Miles_per_Gallon": 36,
  "Cylinders": 4,
  "Displacement": 135,
  "Horsepower": 84,
  "Weight_in_lbs": 2370,
  "Acceleration": 13,
  "Year": "1982-01-01",
  "Origin": "USA"
}, {
  "Name": "chevrolet camaro",
  "Miles_per_Gallon": 27,
  "Cylinders": 4,
  "Displacement": 151,
  "Horsepower": 90,
  "Weight_in_lbs": 2950,
  "Acceleration": 17.3,
  "Year": "1982-01-01",
  "Origin": "USA"
}, {
  "Name": "ford mustang gl",
  "Miles_per_Gallon": 27,
  "Cylinders": 4,
  "Displacement": 140,
  "Horsepower": 86,
  "Weight_in_lbs": 2790,
  "Acceleration": 15.6,
  "Year": "1982-01-01",
  "Origin": "USA"
}, {
  "Name": "vw pickup",
  "Miles_per_Gallon": 44,
  "Cylinders": 4,
  "Displacement": 97,
  "Horsepower": 52,
  "Weight_in_lbs": 2130,
  "Acceleration": 24.6,
  "Year": "1982-01-01",
  "Origin": "Europe"
}, {
  "Name": "dodge rampage",
  "Miles_per_Gallon": 32,
  "Cylinders": 4,
  "Displacement": 135,
  "Horsepower": 84,
  "Weight_in_lbs": 2295,
  "Acceleration": 11.6,
  "Year": "1982-01-01",
  "Origin": "USA"
}, {
  "Name": "ford ranger",
  "Miles_per_Gallon": 28,
  "Cylinders": 4,
  "Displacement": 120,
  "Horsepower": 79,
  "Weight_in_lbs": 2625,
  "Acceleration": 18.6,
  "Year": "1982-01-01",
  "Origin": "USA"
}, {
  "Name": "chevy s-10",
  "Miles_per_Gallon": 31,
  "Cylinders": 4,
  "Displacement": 119,
  "Horsepower": 82,
  "Weight_in_lbs": 2720,
  "Acceleration": 19.4,
  "Year": "1982-01-01",
  "Origin": "USA"
}];