const apiKey = "7150eabbf2a52944d6d58061c2a03528";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector('.weathericon');
async function checkWeather(city) {
                
    try {
                    
        const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
                    
        var data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
                    document.querySelector(".cityname").innerHTML= data.name;
                    document.querySelector(".temp").innerHTML= Math.round(data.main.temp )+ "℃";
                    document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
                    document.querySelector(".wind").innerHTML= data.wind.speed + " Km/Hr";
                    
                    if(data.weather[0].main == "Clouds"){
                        weatherIcon.src ="img/clouds.png";
                        document.getElementById("now").innerHTML = "Cloudy";
                    }else if(data.weather[0].main == "Clear"){
                        weatherIcon.src ="img/clear.png";
                        document.getElementById("now").innerHTML = "Clear sky";
                    }else if(data.weather[0].main == "Rain"){
                        weatherIcon.src ="img/rain.png";
                        document.getElementById("now").innerHTML = "Rainy";
                    }else if(data.weather[0].main == "Drizzle"){
                        weatherIcon.src ="img/drizzle.png";
                        document.getElementById("now").innerHTML = "Drizzling"
                    }else if(data.weather[0].main == "Mist"){
                        weatherIcon.src = "img/mist.png";
                        document.getElementById("now").innerHTML = "Foggy";
                        document.querySelector(".weathericon").style.backgroundColor = 'white';
                    }


                    // document.getElementById("now").innerHTML = data.weather[0].main;
            }
        searchBtn.addEventListener("click",() =>{

         checkWeather(searchBox.value);
        });