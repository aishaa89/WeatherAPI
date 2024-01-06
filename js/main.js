"use strict"


let searchInput=document.getElementById("search");
let searchBtnInput=document.getElementById("searchBtn");
let warningMsgValue=document.getElementById("warningMsg");
let currentToday=document.getElementById("today");
let tomorrow=document.getElementById("tomorrow");
let afterTomorrow=document.getElementById("aftertomorow");



var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
async function getCurrentdata(){
    let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=46e26642635d4c96979184516240501&q=Cairo&days=7`)
    let result= await response.json();
    let d = new Date(result.current.last_updated);
     let dayName = days[d.getDay()];
     currentToday.innerHTML=`
     <h5  class="card-header">${dayName}</h5>
     <div class="card-body ">
       <h1 class="card-title ">${result.location.name}</h1>
       <div class="weather d-flex justify-content-between">
         <h1 class="card-text fs-1 ">${result.current.temp_c+" ْ C"}</h1>
         <img src="https:${result.current.condition.icon}" id="icontemp" alt="" class="d-block">
       </div>
       <span class="text-primary">${result.current.condition.text}</span>
    
         <ul class="d-flex justify-content-around ms-0 align-content-end mt-3">
         <li><img src="image/icon-umberella.png" alt="">20%</li>
         <li><img src="image/icon-wind.png" alt="">18Km/h</li>
         <li><img src="image/icon-compass.png" alt="">East</li>

         </ul>
     </div>
     
     `;
    let afterToday=result.forecast.forecastday[1].date;
    let datetomorrow = new Date(afterToday);
    let afterDayName = days[datetomorrow.getDay()];
    tomorrow.innerHTML=`
    <h5 class="card-header">${afterDayName}</h5>
    <div class="card-body d-flex flex-column align-items-center pt-5">
      <img src="https:${result.forecast.forecastday[1].day.condition.icon}" alt="" class="d-block">
      <h2 class="card-text">${result.forecast.forecastday[1].day.maxtemp_c} ْ C</h2>
      <h5 class="card-title">${result.forecast.forecastday[1].day.mintemp_c}</h5>
      <span class="text-primary">${result.forecast.forecastday[1].day.condition.text}</span>
    </div>
    
    `;
    let afterTomorowday=result.forecast.forecastday[2].date;
    let dateaftertomorrow = new Date(afterTomorowday);
    let aftertomorrowName = days[dateaftertomorrow.getDay()];
    afterTomorrow.innerHTML=`
    <h5 class="card-header">${aftertomorrowName}</h5>
    <div class="card-body d-flex flex-column align-items-center pt-5">
      <img src="https:${result.forecast.forecastday[2].day.condition.icon}" alt=""  class="d-block ">
      <h2 class="card-text">${result.forecast.forecastday[2].day.maxtemp_c}  ْ C</h2>
      <h5 class="card-title">${result.forecast.forecastday[1].day.mintemp_c}</h5>
      <span class="text-primary">${result.forecast.forecastday[1].day.condition.text}</span>
    </div>
    
    `
}
getCurrentdata();




async function getqueryData(query){
    let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=46e26642635d4c96979184516240501&q=${query}&days=7`)
    let result= await response.json();
    let d = new Date(result.current.last_updated);
     let dayName = days[d.getDay()];

     currentToday.innerHTML=`
     <h5  class="card-header">${dayName}</h5>
     <div class="card-body pt-4">
       <h5 class="card-title ">${result.location.name}</h5>
       <div class="weather d-flex justify-content-between">
         <h1 class="card-text fs-1 ">${result.current.temp_c+" ْ C"}</h1>
         <img src="https:${result.current.condition.icon}" id="icontemp" alt="" class="d-block">
       </div>
       <span class="text-primary">${result.current.condition.text}</span>
       <div class="list mt-3">
         <ul class="d-flex justify-content-around  align-content-end">
           <li><img src="image/icon-umberella.png" alt="">20%</li>
           <li><img src="image/icon-wind.png" alt="">18Km/h</li>
           <li><img src="image/icon-compass.png" alt="">East</li>

         </ul>
       </div>
     </div>
     
     `;
    let afterToday=result.forecast.forecastday[1].date;
    let datetomorrow = new Date(afterToday);
    let afterDayName = days[datetomorrow.getDay()];
    tomorrow.innerHTML=`
    <h5 class="card-header text-center">${afterDayName}</h5>
    <div class="card-body d-flex flex-column align-items-center pt-5">
      <img src="https:${result.forecast.forecastday[1].day.condition.icon}" alt="" class="d-block">
      <h2 class="card-text">${result.forecast.forecastday[1].day.maxtemp_c} ْ C</h2>
      <h5 class="card-title">${result.forecast.forecastday[1].day.mintemp_c}</h5>
      <span class="text-primary">${result.forecast.forecastday[1].day.condition.text}</span>
    </div>
    
    `;
    let afterTomorowday=result.forecast.forecastday[2].date;
    let dateaftertomorrow = new Date(afterTomorowday);
    let aftertomorrowName = days[dateaftertomorrow.getDay()];
    afterTomorrow.innerHTML=`
    <h5 class="card-header">${aftertomorrowName}</h5>
    <div class="card-body d-flex flex-column align-items-center pt-5">
      <img src="https:${result.forecast.forecastday[2].day.condition.icon}" alt=""  class="d-block ">
      <h2 class="card-text">${result.forecast.forecastday[2].day.maxtemp_c}  ْ C</h2>
      <h5 class="card-title">${result.forecast.forecastday[1].day.mintemp_c}</h5>
      <span class="text-primary">${result.forecast.forecastday[1].day.condition.text}</span>
    </div>
    
    `
}



searchBtnInput.addEventListener('click' ,function(eventInfo){
    if(searchInput.value==""){
        warningMsgValue.classList.remove("d-none");
    }else{
        warningMsgValue.classList.add("d-none");
        getqueryData(searchInput.value.toUpperCase());
  
    }
   
    });


searchInput.addEventListener("input",function(){
    getqueryData(searchInput.value.toUpperCase());
})
