async function getInfoInConsole() {
    try {
        const data = await axios.get('/getData')
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}

getInfoInConsole();