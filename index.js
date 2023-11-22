function load() {
    const app = document.getElementById('app');
const greetings = document.getElementById('greetings');
const hrs = document.getElementById('hrs');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
const img = document.getElementById('image');

setInterval(() => {const data = new Date();
    const hour = data.getHours();
    const minutes = data.getMinutes();
    const seconds = data.getSeconds();
    
    
    hrs.innerText = (hour < 10? "0":"") + hour;
    min.innerText = (minutes < 10? "0":"") +minutes; 
    sec.innerText = (seconds < 10? "0":"") + seconds;

    if(hour > 0 && hour < 12) {
        greetings.innerHTML = "Bom Dia!";
        img.src = "./img/1.jpg";
        app.style.background = '#eaeae1'

    }
 if( hour > 0 && hour < 18) {
    greetings.innerHTML = "Boa Tarde!";
    img.src = ""
    app.style.background = 'gray'

 }
else {
    greetings.innerHTML = "Boa Noite!";
    img.src = "";
    app.style.background = 'gray'
}
}, 1000) 


}