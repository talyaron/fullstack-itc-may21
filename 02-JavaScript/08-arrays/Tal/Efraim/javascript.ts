interface AFLPlayers {
    guernseyNumber: Number
    PlayerName: String
}

let aflPlayers: Array<AFLPlayers> = [

    {
        guernseyNumber: 1,
        PlayerName: 'Nick Vlaustin'
    },

    {
        guernseyNumber: 2,
        PlayerName: 'Dylan Grimes'
    },

    {
        guernseyNumber: 3,
        PlayerName: 'Dion Prestia'
    },

    {
        guernseyNumber: 4,
        PlayerName: 'Dustin Martin'
    },

    {
        guernseyNumber: 5,
        PlayerName: 'Jack Ross'
    },
    {
        guernseyNumber: 6,
        PlayerName: 'Patrick Naish'
    },
    {
        guernseyNumber: 7,
        PlayerName: 'Liam Baker'
    },
    {
        guernseyNumber: 8,
        PlayerName: 'Jack Riewoldt'
    },
    {
        guernseyNumber: 9,
        PlayerName: 'Trent Cotchin'
    },
    {
        guernseyNumber: 10,
        PlayerName: 'Shane Edwards'
    }

]
console.log(aflPlayers.sort((b, a) => a.guernseyNumber - b.guernseyNumber));