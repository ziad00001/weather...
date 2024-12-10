
async function getWeather() {
   try{
    var res = await fetch('http://api.weatherapi.com/v1/search.json?key=733a1a923af9449a856113701240512&q=lond',{
        method:'post'
    })
    .then(function(x) {

    return x.json()
}).then(function(data){
    console.log(data);
});
var data = await res.json()
   }
   catch(err){
    console.log(err);
   }

console.log(data);




}


getWeather();

function displayData(list){
    //var containeer='';
    //console.log(list[0].name);
    //console.log(list[0].region);
    //console.log(list[0].country);
   // console.log(list[0].lat);
    //console.log(list[0].lon);
    //console.log(list[0].url);
    //for (var i=0 ;  i < list.linght ; i++){
    //}
}





async function getWeather(city) {
    try {
       var res = await fetch('http://api.weatherapi.com/v1/forecast.json?key=733a1a923af9449a856113701240512&q=$=${city}&days=3',{
        method:'post'
       });
       var data = await res.json();
 
 

document.getElementById('temp1').textContent = data.forecast.forecastday[0].day.avgtemp_c;
document.getElementById('condition1').textContent = data.forecast.forecastday[0].day.condition.text;
document.getElementById('temp2').textContent = data.forecast.forecastday[1].day.avgtemp_c;
document.getElementById('condition2').textContent = data.forecast.forecastday[1].day.condition.text;
document.getElementById('temp3').textContent = data.forecast.forecastday[2].day.avgtemp_c;
document.getElementById('condition3').textContent = data.forecast.forecastday[2].day.condition.text;

} catch (err) {
console.error('Error fetching the weather data:', err);
}
}

function find() {
var city = document.getElementById('cityInput').value;
getWeather(city);
}








