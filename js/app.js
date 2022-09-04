const API_KEY = `d602c7cc603786e3fb6dd48f7b500a0a`;

const loadTemperature = city =>{
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch (url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}

const displayTemperature = data => {
    // const temperature = document.getElementById('temperature');
    // temperature.innerText = data.main.temp;
    console.log(data);
    setInnerTextById('temperature',data.main.temp);
    setInnerTextById('condition', data.weather[0].main);
    console.log(data.weather[0].main);
}

const setInnerTextById = (id, text) =>{
    console.log(id,text);
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}



document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    // set city
    document.getElementById('city').innerText = city;

    loadTemperature(city);
})

loadTemperature('dhaka')