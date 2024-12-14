let city=document.getElementById('city');
city.value="Cairo";
city.addEventListener('input',function(){
  let url ;


  url = `https://api.weatherapi.com/v1/forecast.json?key=c32d75ced7574f2a979142324241312&q=${city.value}&days=3`;


let dataRow=document.getElementById('tableRow');
// جلب البيانات من API
fetch(url)
 .then((response) => response.json())
 .then((data) => {
   // استخراج بيانات الطقس
   console.log(data);
   const forecastDays = data.forecast.forecastday;
   let box='';
   forecastDays.forEach((day) => {
     const date = day.date;
     const maxTemp = day.day.maxtemp_c;
     const minTemp = day.day.mintemp_c;
     const condition = day.day.condition.text;

     // عرض النتيجة
     box+=`
     <div class="col-md-4">
         <h2>Date : ${date}</h2>
         <h3>Max Temp : ${maxTemp}°C</h3>
         <h3>Min Temp :${minTemp}°C</h3>
         <p>Condition : ${condition}</p>
       </div>
     `
   
   });
   dataRow.innerHTML=box;
 })
 .catch((error) => console.error("Error fetching data:", error));
});

