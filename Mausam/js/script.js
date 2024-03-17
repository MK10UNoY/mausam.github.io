const APIKey="dbe7b212bbd9a2a575d75e6ed7c02a46";
const APIurl="https://api.openweathermap.org/data/2.5/weather?appid=dbe7b212bbd9a2a575d75e6ed7c02a46&units=metric&q="

const searchBox=document.querySelector(".searchbar input");
const searchBtn=document.querySelector(".button");
const modeBtn=document.querySelector(".mode");
const linkCss=document.querySelector(".cssLinker");
var count=0;


async function checkWeather(city){
    const response= await fetch(APIurl+ city + `&appid=${APIKey}`);
    var alldata = await response.json();
    
    console.log(alldata);
    
    document.getElementById("cityname").innerHTML = alldata.name;
    document.getElementById("temp").innerHTML = Math.round(alldata.main.temp)+"&deg; C";
    document.getElementById("hvalue").innerHTML = alldata.main.humidity + " %";
    document.getElementById("wvalue").innerHTML = ((alldata.wind.speed)) + " km/hr";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
    searchBox.value="";
    })


checkWeather('delhi');

modeBtn.addEventListener("click",()=>{
    if(count==0)
        {
        modeBtn.innerHTML=" Dark ";
        linkCss.href="../css/styledark.css";
        count=1;
        }
    else if(count==1){
        modeBtn.innerHTML=" Light ";
        linkCss.href="../css/style.css";
        count=0;
    }
})

// function getLocation(){
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition);
//     } else { 
//       x.innerHTML = "Geolocation is not supported by this browser.";
//     }
//   }

