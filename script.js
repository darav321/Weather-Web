const apikey = "02dba84ec32997119d0dd30263327ad8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const inputField = document.querySelector('.search input');
const inputBtn = document.querySelector('.search button')
const image = document.querySelector('.weather-icon');



async function checkWeather(city){
    try {
        const response = await fetch(apiUrl + city + `&appid=${apikey}`);
        let data = await response.json();
        console.log(data);
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
        if(data.weather[0].main == "Rain"){
            image.src = "rain.png";
        }
        if(data.weather[0].main == "Clouds"){
            image.src = "clouds.png";
        }
        if(data.weather[0].main == "Clear"){
            image.src = "clear.png";
        }
        if(data.weather[0].main == "Mist"){
            image.src = "mist.png";
        }
        if(data.weather[0].main == "Snow"){
            image.src = "snow.png";
        }
        if(data.weather[0].main == "Drizzle"){
            image.src = "drizzle.png";
        }
        
    
    } catch (error) {
        document.querySelector('.city').innerHTML = "Not Found";
        setTimeout(function(){alert("Give a valid City Name")},100)
    }
}

inputBtn.addEventListener('click', function(){
    checkWeather(inputField.value);
    
})


