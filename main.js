
if(localStorage.getItem("city") !== null){
    getprayerofcity(localStorage.getItem("city"))
}
// show date and timing
let cities = ["Ad Daqahlīyah","Al Baḩr al Aḩmar","Al Buḩayrah","Al Iskandarīyah","Al Jīzah","Al Qāhirah","Al Uqşur","Sohag"]
cities.map((city)=>{
    let content = `<option value='${city}'>${city}</option>`
    document.querySelector(".select").innerHTML +=content;
})

document.querySelector(".select").addEventListener("change",function(){
    var vla = document.querySelector(".select").value
    localStorage.setItem("city",vla)
        getprayerofcity(vla)
    
})










const event = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

var engdate = event.toLocaleDateString(undefined,options)
document.querySelector(".endate").innerHTML = engdate;
// var ardate = event.toLocaleDateString('ar-EG', options);
// document.querySelector(".ardate").innerHTML = ardate;


function showtime(){
    var nowdate = new Date()
    var hours = nowdate.getHours()
    var minuts = nowdate.getMinutes()
    var secends = nowdate.getSeconds();

    
    var year = nowdate.getFullYear();

    // console.log(nowdate.)
    ampm = hours >=12?"pm":"am";
    hours = hours % 12;
    hours = hours ? hours:12;
    if(hours<10){
        hours = `0${hours}`
    }
    if(minuts<10){
        minuts = `0${minuts}`
    }
    if(secends<10){
        secends = `0${secends}`
    }

    document.querySelector(".clock").innerHTML=`${hours}:${minuts}:${secends} ${ampm}`
}


window.onload = function(){
    setInterval(() => {
        showtime()
    }, 500);
}

// fetch api
function getprayerofcity(city){
    let params ={
        country:"EG",
        city:city,
    }
    
    
    
    axios.get('http://api.aladhan.com/v1/timingsByCity', {
        params: params
        })
        .then(function (response) {
        let data = response.data.data.timings
        document.getElementById("alfjr").innerHTML= data.Fajr
        document.getElementById("sunrise").innerHTML= data.Sunrise
        document.getElementById("aduhr").innerHTML= data.Dhuhr
        document.getElementById("asr").innerHTML= data.Asr
        document.getElementById("wise").innerHTML= data.Maghrib
        document.getElementById("isha").innerHTML= data.Isha
        document.getElementById("imsak").innerHTML= data.Imsak
        document.getElementById("city").innerHTML = params.city;
        })
        .catch(function (error) {
        alert(error);
        })
    
        var select = document.querySelector(".select")
    
    
    
    console.log(select.value)
}




































