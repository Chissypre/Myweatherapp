const apiUrl="https://api.open-meteo.com/v1/forecast?latitude=6.4541&longitude=3.3947&current_weather=true&timezone=GMT&forecast_days=16";

const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(){
    const response = await fetch(apiUrl);

 if(response.status == 404){
    document.querySelector(".error").style.display="block"
} else{
    const data =await response.json();
    console.log(data)
    document.querySelector(".temp").innerHTML = Math.round(data.current_weather.temperature) + "°c";
    document.querySelector(".humidity").innerHTML =data.current_weather.winddirection + "°";
    document.querySelector(".wind").innerHTML = data.current_weather.windspeed + " km/h";

    if(data.current_weather.weathercode ==1||2||3){
      weatherIcon.src = "images/clouds.png"
    }
    else if(data.current_weather.weathercode == 0){
    weatherIcon.src = "images/clear.png"   
    }
    else if(data.current_weather.weathercode ==80||81||82||85||86||61||63||65||66||67||95||96||99){
    weatherIcon.src = "images/rain.png"   
    }
    else if(data.current_weather.weathercode ==51||53||55||56||57){
    weatherIcon.src = "images/drizzle.png"   
    }
    else if(data.current_weather.weathercode ==45||48||71||73||75||77){
    weatherIcon.src = "images/mist.png"   
    }
    document.querySelector(".error").style.display="none"  
}  
}

checkWeather()
