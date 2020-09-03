function getRandomLetters() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for (var i = 0; i < 3; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

async function getLocation() {
    let response = await fetch("https://api.skypicker.com/locations?term=" + getRandomLetters() + "&location_types=airport&limit=1");
    let body = await response.json();
    let location = body.locations[0];
    document.querySelector('h1.code').textContent = location.id;
    document.querySelector('h2.result').textContent = location.name;
    document.querySelector('h3.resultCountry').textContent = location.city.name + ", " + location.city.country.name;
}