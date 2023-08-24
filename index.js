// Darkmode
const darkmode_btn = document.querySelector("#darkmode-btn");
darkmode_btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkmode_btn.innerHTML = '☀';
    }
    else {
        darkmode_btn.innerHTML = '☾';
    }
});

// Caluclate age
const nameage = document.querySelector("#nameage");

const currentdate = new Date();
const currentyear = currentdate.getFullYear();
const currentmonth = currentdate.getMonth() + 1;
const currentday = currentdate.getDate();
const currenthour = currentdate.getHours();
const currentminute = currentdate.getMinutes();
const currentsecond = currentdate.getSeconds();
const currentage = currentyear - 2006
console.log(currentmonth, currentday, currentyear);
nameage.innerHTML = `Mein Name ist Nils Fischer und ich bin ${currentage} Jahre alt. Im Moment besuche ich die IMS an der Kantonsschule Hottingen und am Bildungszentrum Zürichsee in Horgen.`;
if (currentmonth == 1 && 22 <= currentday >= 1 ) {
    currentage = currentyear - 2007;
    nameage.innerHTML = `Mein Name ist Nils Fischer und ich bin ${currentage} Jahre alt. Im Moment besuche ich die IMS an der Kantonsschule Hottingen und am Bildungszentrum Zürichsee in Horgen.`;
   
}


