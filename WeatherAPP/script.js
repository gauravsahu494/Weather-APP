//https://api.openweathermap.org/data/2.5/weather?q=london&appid=3265874a2c77ae4a04bb96236a642d2f
let weather={
    "ApiKey":"3265874a2c77ae4a04bb96236a642d2f",
    fetchWeather:function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.ApiKey)
        .then((Response)=>{
            if(!Response.ok){
                alert("No Weather...");
                throw new Error("No Weather...");
            }
            return Response.json()
        })
        .then((data)=>this.displayWeather(data));
    },
    displayWeather: function(data){
        const{name}=data;
        const{icon,description}=data.weather[0];
        const{temp,humidity}=data.main;
        const{speed}=data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerHTML="Weather in "+name;
        document.querySelector(".temp").innerHTML="temp : "+temp+"°C";
        document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerHTML=description;
        document.querySelector(".humidity").innerHTML="Humidity : "+humidity+"%";
        document.querySelector(".wind").innerHTML="Wind speed : "+speed+"km/h";
        document.querySelector(".loading").classList.remove("loading");
        document.body.style.background="url('https://source.unsplash.com/1600x900/?"+name+"')"
    },
    search:function(){
        this.fetchWeather(document.querySelector(".heading").value);
    }
};
document.querySelector(".searching").addEventListener("click",function(){
    weather.search();
})
document.querySelector(".heading").addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        weather.search();
    };
});
weather.fetchWeather("Delhi");