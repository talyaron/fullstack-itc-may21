const personalDataList: Array<personalData> =
    [
        {
            "name": 'Jonathan',
            "city": 'Buenos Aires',
            "gender": 'male',
            "tel": '972-555-2232',
            "status": 'single',
            "salary": 500,
            "id": Math.random().toString(16).slice(2),
        },
        {
            "name": 'Agustina',
            "city": 'Madrid',
            "gender": 'female',
            "tel": '5-55-232',
            "status": 'single',
            "salary": 1000,
            "id": Math.random().toString(16).slice(2),
        }
    ]   

localStorage.setItem("oldPeople", JSON.stringify(personalDataList))
