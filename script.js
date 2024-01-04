const dials = document.getElementsByClassName("clock-dials")[0];
const dialLines = document.getElementsByClassName("diallines");

for (let i = 1; i< 61; i++) {
    dials.innerHTML += "<div class='diallines'></div>";
    dialLines[i - 1].style.transform = "rotate(" + 6 * i + "deg)";

}

const hour = document.querySelector(".hours");
const minute = document.querySelector(".minutes");
const second = document.querySelector(".seconds");

setInterval(() => {
    const d = new Date();
    const htime = d.getHours();
    const mtime = d.getMinutes();
    const stime = d.getSeconds();

    const hrotation = 30 * htime + mtime / 2;
    const mrotation = 6  *  mtime / 2;
    const srotation = 6  *  stime / 2;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);