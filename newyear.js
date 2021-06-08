//const dayE1=document.getElementById('day');
//const hourE1=document.getElementById('hour');
//const minuteE1=document.getElementById('minute');
//const secondE1=document.getElementById('seconds');

const newyears="1 jan 2022"

function countdown(){
    /*const newyearsdate=new Date(newyears);
    const currentdate=new Date(); 
    
    console.log(newyearsdate - currentdate);  //this will print difference in milliseconds
    
     second=(newyearsdate - currentdate)/1000;
    console.log(second);
    
     days=Math.floor(second/3600/24);
    hour=Math.floor(second/3600);
     minute=Math.floor(hour*60);
    s=Math.floor((second/1000)%60);
    */
    var t = Date.parse(newyears) - Date.parse(new Date());
        const seconds = Math.floor((t / 1000) % 60);
        const minutes = Math.floor((t / 1000 / 60) % 60);
        const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        const days = Math.floor(t / (1000 * 60 * 60 * 24));
        console.log(days,hours,minutes,seconds);
        
       // dayE1.innerHTML=days;
        //hourE1.innerHTML=hours;
        //minuteE1.innerHTML=minutes;
        //secondE1.innerHTML=seconds;
        document.getElementById("day").innerHTML= days;
        document.getElementById("hour").innerHTML= hours;
        document.getElementById("minute").innerHTML= minutes;
        document.getElementById("second").innerHTML= seconds;        
}
countdown();
setInterval(countdown, 900);
