async function defaultcity(){
    var cityName=document.getElementById("search").value;
    var city= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4f004be0292b47f2a86141247230508&q=${cityName}&days=7`);
    var cityy= await city.json();
    Day(cityy.current.is_day);
    Day2(cityy.current.is_day+1);
    Day3(cityy.current.is_day+2);
    diplay(cityy,cityName);

}

async function currentcity(e){
     var city= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4f004be0292b47f2a86141247230508&q=${e}&days=7`);
    var cityy= await city.json();
    console.log(cityy);
    Day(cityy.current.is_day);
    Day2(cityy.current.is_day+1);
    Day3(cityy.current.is_day+2);
    diplay(cityy,e);

}

async function Position(position) {
var decity= await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`)
var defcity=await decity.json();
console.log(defcity.city)
currentcity(defcity.city)
}
var cityName=document.getElementById("search").value;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(Position);
} 

  var day;
  var day2;
  var day3;

  function Day(x){
   if(x===0){
        day="Saturday";

    }else if(x===1){
        day="Sunday";
    }
    else if(x===2){
        day="Monday";
    }
    else if(x===3){
        day="Tuesday";
    }
    else if(x===4){
        day="Wednesday";
    }
    else if(x===5){
        day="Thursday";
    }
    else if(x===6){
        day="friday";
    }
}

 function Day2(x){
    if(x===0){
        day2="Saturday";

    }else if(x===1){
        day2="Sunday";
    }
    else if(x===2){
        day2="Monday";
    }
    else if(x===3){
        day2="Tuesday";
    }
    else if(x===4){
        day2="Wednesday";
    }
    else if(x===5){
        day2="Thursday";
    }
    else if(x===6){
        day2="friday";
    }
 }

 function Day3(x){
    if(x===0){
        day3="Saturday";

    }else if(x===1){
        day3="Sunday";
    }
    else if(x===2){
        day3="Monday";
    }
    else if(x===3){
        day3="Tuesday";
    }
    else if(x===4){
        day3="Wednesday";
    }
    else if(x===5){
        day3="Thursday";
    }
    else if(x===6){
        day3="friday";
    }
 }


function diplay(cityy,cityName){
    document.getElementById("row").innerHTML=`
    <div class="col-lg-4"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
    <div class="box  mb-4  shadow-sm pb-5 text-light">
  
      <div class="headd  px-2 py-2">
        <div class="day text-secondary">${day}
      <span class="date text-secondary ms-4">${cityy.current.last_updated} </span>
      </div>
      </div>
      <div class="ms-3 mt-4">
      <div class="city">${cityName}</div>
      <div class="degree fs-1">${cityy.current.temp_c}<sup>o</sup>C <span><img src="https:${cityy.forecast.forecastday[0].day.condition.icon}" alt="" width="90"></span></div>
    <div class="clear mb-4">${cityy.current.condition.text}</div>
    <div class="g-5">
    <span><img src="https://routeweather.netlify.app/images/icon-umberella.png" class="pe-2">20%</span>
    <span><img src="https://routeweather.netlify.app/images/icon-wind.png" class="pe-2"> ${cityy.current.wind_kph}km/h</span>
    <span><img src="https://routeweather.netlify.app/images/icon-compass.png" class="pe-2">${cityy.current.wind_dir}</span>
    </div>
      </div>
    </div>
  </div>

  <div class="col-lg-4"  data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200"> 
  <div class="box1  mb-4  shadow-sm pb-5 text-light">

    <div class="headd  px-2 py-2">
      <div class="day text-secondary text-center">${day2}</div>
    </div>
    <div class="text-center mt-5">
      <div class=" pb-4">
          <img src="https:${cityy.forecast.forecastday[1].day.condition.icon}" " alt="" width="48">
      </div>
      <div class="degree">${cityy.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</div>
      <small class="pb-3">${cityy.forecast.forecastday[1].day.mintemp_c}<sup>o</sup></small>
      <div class="clear pt-4">${cityy.forecast.forecastday[1].day.condition.text}</div>
  </div>
  </div>
</div> 
 
<div class="col-lg-4"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
<div class="box  mb-4  shadow-sm pb-5 text-light">

  <div class="headd  px-2 py-2">
    <div class="day text-secondary text-center">${day3}</div>
  </div>
  <div class="text-center mt-5">
    <div class=" pb-4">
        <img src="https:${cityy.forecast.forecastday[2].day.condition.icon}" alt="" width="48">
    </div>
    <div class="degree">${cityy.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</div>
    <small class="pb-3">${cityy.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></small>
    <div class="clear pt-4">${cityy.forecast.forecastday[2].day.condition.text}</div>

</div>
</div>
</div>`
}




