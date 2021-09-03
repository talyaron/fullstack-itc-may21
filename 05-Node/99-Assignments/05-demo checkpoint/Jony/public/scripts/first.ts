const form = document.querySelector('#form') as HTMLFormElement;
// const link = document.querySelector('.link') as HTMLLinkElement;

form.onsubmit = addUser

async function addUser(ev) {
    ev.preventDefault();
    try {
        let { name, image, color } = ev.target.elements
        name = name.value;
        image = image.value;
        color = color.value;

        const newUser = {
            name: name,
            image: image,
            color: color,
        }

        const user = await addUserAxios(newUser)

        if (typeof user === 'string') throw new Error(`${user}`)
        else {
            alert(user.data.message)
        }

        ev.target.reset();
    } catch (e) {
        alert(e)
    }
}