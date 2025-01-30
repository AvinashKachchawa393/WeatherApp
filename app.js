const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const ejs_mate = require('ejs-mate');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
const api='&appid=2ee6ac6b23279869dbf14bed308d5373';
const forcast_url = 'https://api.openweathermap.org/data/2.5/forecast?q=';

app.set('view engine','ejs');
app.set('views',path.join(__dirname,"views"));
app.engine('ejs', ejs_mate);
app.use(express.static(path.join(__dirname,"public")));

app.get('/',(req,res)=>{
    res.send('Hi I am a root');
});

app.get('/weather',async(req,res)=>{
    let rowData = await fetch(`${url}bangalore${api}`);
    let data = await rowData.json();
    let forcastRowData = await fetch(`${forcast_url}bangalore${api}`);
    let forcastData = await forcastRowData.json();
    forcastData = forcastData.list;
    let weather_img = "";
    if(data.weather[0].main=="Clouds"){
        weather_img = "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_2-512.png";
    }
    else if(data.weather[0].main=="Clear"){
        weather_img = "https://static-00.iconduck.com/assets.00/weather-clear-symbolic-icon-2048x2048-v4afvu7m.png";
    }
    else if(data.weather[0].main=="Rain"){
        weather_img = "https://www.pngall.com/wp-content/uploads/11/Weather-PNG-Background.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weather_img = "https://cdn1.iconfinder.com/data/icons/weather-flat-8/50/Weather_Flat-29-1024.png";
    }
    else if(data.weather[0].main=="Thunderstorm"){
        weather_img = "https://cdn-icons-png.flaticon.com/512/1779/1779927.png";
    }
    else if(data.weather[0].main=="Snow"){
        weather_img = "https://www.freeiconspng.com/thumbs/snow-icon/snow-icon-14.png";
    }
    else if(data.weather[0].main=="Haze"){
        weather_img = "https://cdn-icons-png.flaticon.com/512/1779/1779807.png";
    }
    else if(data.weather[0].main=="Smoke"){
        weather_img = "https://cdn-icons-png.flaticon.com/512/11717/11717603.png";
    }
    else if(data.weather[0].main=="Dust"){
        weather_img = "https://cdn1.iconfinder.com/data/icons/weather-flat-8/50/Weather_Flat-28-512.png";
    }
    else if(data.weather[0].main=="Fog"){
        weather_img = "https://cdn-icons-png.flaticon.com/512/1197/1197102.png";
    }
    else if(data.weather[0].main=="Mist"){
        weather_img = "https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-foggy-sunny-1024.png";
    }
    else{
        weather_img = "https://cdn3.iconfinder.com/data/icons/disaster-and-weather-conditions/48/40-512.png"
    }
    res.render('index.ejs',{weather_data : data, weather_img : weather_img, forcast_data : forcastData});
});

// Serach bar
app.get('/weather/search',async(req,res)=>{
    let {search} = req.query;
    let rowData = await fetch(`${url}${search}${api}`);
    let data = await rowData.json();
    let forcastRowData = await fetch(`${forcast_url}${search}${api}`);
    let forcastData = await forcastRowData.json();
    forcastData = forcastData.list;
    let weather_img = "";
    if(data.weather[0].main=="Clouds"){
        weather_img = "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_2-512.png";
    }
    else if(data.weather[0].main=="Clear"){
        weather_img = "https://static-00.iconduck.com/assets.00/weather-clear-symbolic-icon-2048x2048-v4afvu7m.png";
    }
    else if(data.weather[0].main=="Rain"){
        weather_img = "https://www.pngall.com/wp-content/uploads/11/Weather-PNG-Background.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weather_img = "https://cdn1.iconfinder.com/data/icons/weather-flat-8/50/Weather_Flat-29-1024.png";
    }
    else if(data.weather[0].main=="Thunderstorm"){
        weather_img = "https://cdn-icons-png.flaticon.com/512/1779/1779927.png";
    }
    else if(data.weather[0].main=="Snow"){
        weather_img = "https://www.freeiconspng.com/thumbs/snow-icon/snow-icon-14.png";
    }
    else if(data.weather[0].main=="Haze"){
        weather_img = "https://cdn-icons-png.flaticon.com/512/1779/1779807.png";
    }
    else if(data.weather[0].main=="Smoke"){
        weather_img = "https://cdn-icons-png.flaticon.com/512/11717/11717603.png";
    }
    else if(data.weather[0].main=="Dust"){
        weather_img = "https://cdn1.iconfinder.com/data/icons/weather-flat-8/50/Weather_Flat-28-512.png";
    }
    else if(data.weather[0].main=="Fog"){
        weather_img = "https://cdn-icons-png.flaticon.com/512/1197/1197102.png";
    }
    else if(data.weather[0].main=="Mist"){
        weather_img = "https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-foggy-sunny-1024.png";
    }
    else{
        weather_img = "https://cdn3.iconfinder.com/data/icons/disaster-and-weather-conditions/48/40-512.png"
    }
    res.render('index.ejs',{weather_data : data, weather_img : weather_img, forcast_data : forcastData});
});

// Filters
app.get('/weather/:id',async(req,res)=>{
    let {id} = req.params;
    let rowData = await fetch(`${url}${id}${api}`);
    let data = await rowData.json();
    let forcastRowData = await fetch(`${forcast_url}${id}${api}`);
    let forcastData = await forcastRowData.json();
    forcastData = forcastData.list;
    let weather_img = "";
    if(data.weather[0].main=="Clouds"){
        weather_img = "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_2-512.png";
    }
    else if(data.weather[0].main=="Clear"){
        weather_img = "https://static-00.iconduck.com/assets.00/weather-clear-symbolic-icon-2048x2048-v4afvu7m.png";
    }
    else if(data.weather[0].main=="Rain"){
        weather_img = "https://www.pngall.com/wp-content/uploads/11/Weather-PNG-Background.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weather_img = "https://cdn1.iconfinder.com/data/icons/weather-flat-8/50/Weather_Flat-29-1024.png";
    }
    else if(data.weather[0].main=="Thunderstorm"){
        weather_img = "https://cdn-icons-png.flaticon.com/512/1779/1779927.png";
    }
    else if(data.weather[0].main=="Snow"){
        weather_img = "https://www.freeiconspng.com/thumbs/snow-icon/snow-icon-14.png";
    }
    else if(data.weather[0].main=="Haze"){
        weather_img = "https://cdn-icons-png.flaticon.com/512/1779/1779807.png";
    }
    else if(data.weather[0].main=="Smoke"){
        weather_img = "https://cdn-icons-png.flaticon.com/512/11717/11717603.png";
    }
    else if(data.weather[0].main=="Dust"){
        weather_img = "https://cdn1.iconfinder.com/data/icons/weather-flat-8/50/Weather_Flat-28-512.png";
    }
    else if(data.weather[0].main=="Fog"){
        weather_img = "https://cdn-icons-png.flaticon.com/512/1197/1197102.png";
    }
    else if(data.weather[0].main=="Mist"){
        weather_img = "https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-foggy-sunny-1024.png";
    }
    else{
        weather_img = "https://cdn3.iconfinder.com/data/icons/disaster-and-weather-conditions/48/40-512.png"
    }
    res.render('index.ejs',{weather_data : data, weather_img : weather_img, forcast_data : forcastData});
});

app.listen(port,()=>{
    console.log(`server is listing to port ${port}`);
});