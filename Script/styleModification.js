function iconesHeader() {

    var tamanho = document.getElementsByClassName("iconTitulo");

    if(document.getElementById("logo") == null) {
        for(var i=0; i<tamanho.length; i++) {
            tamanho[i].style.width = "4em";
            tamanho[i].style.height = "4em";
        }
    }
}
function htmlArco() {
    var arco1 = document.getElementById("canvas1"),
        circle1 = arco1.getContext('2d');  
    var spanPercent1 = document.getElementById("percent1");      
    var arco1X = arco1.width/2,
        arco1Y = arco1.height/2,
        fps1 = 1000 / 200;
    var porcentoHTML = 0,
        onePorcento1 = 360/100,
        html = onePorcento1 * 70,
        deegresHTML = 0;
    
    circle1.lineCap = "round";
    var arcoInterval = setInterval (function(){
        deegresHTML += 1;
        circle1.clearRect(0, 0, arco1.width, arco1.height);
        porcentoHTML = deegresHTML / onePorcento1;
        spanPercent1.innerHTML = porcentoHTML.toFixed();
        
        circle1.beginPath();
        circle1.arc(arco1X, arco1Y, 60, (Math.PI/180) * 270, (Math.PI/180) * (270+360));
        circle1.strokeStyle = "#FFFFFF";
        circle1.lineWidth = "10";
        circle1.stroke();
        circle1.beginPath();
        circle1.strokeStyle = '#DA3333';
        circle1.lineWidth = '15';
        circle1.arc(arco1X, arco1Y, 60, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegresHTML));
        circle1.stroke();

        if(deegresHTML >= html) clearInterval(arcoInterval);
    }, fps1);
}
function phpArco() {
    var arco2 = document.getElementById("canvas2"),
        circle2 = arco2.getContext('2d');
    var spanPercent2 = document.getElementById("percent2");
    var arco2X = arco2.width/2,
        arco2Y = arco2.height/2,
        fps2 = 1000 / 200;
    var porcentoPHP = 0,
        onePorcento2 = 360/100,
        php = onePorcento2 * 50,
        deegresPHP = 0;
        
    circle2.lineCap = "round";

    var arcoInterval = setInterval (function(){
        deegresPHP += 1;
        circle2.clearRect(0, 0, arco2.width, arco2.height);
        porcentoPHP = deegresPHP / onePorcento2;
        spanPercent2.innerHTML = porcentoPHP.toFixed();
        
        circle2.beginPath();
        circle2.arc(arco2X, arco2Y, 60, (Math.PI/180) * 270, (Math.PI/180) * (270+360));
        circle2.strokeStyle = "#FFFFFF";
        circle2.lineWidth = "10";
        circle2.stroke();
        circle2.beginPath();
        circle2.strokeStyle = '#DA3333';
        circle2.lineWidth = '15';
        circle2.arc(arco2X, arco2Y, 60, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegresPHP));
        circle2.stroke();

        if(deegresPHP >= php) clearInterval(arcoInterval);
    }, fps2);
}
function mysqlArco() {
    var arco3 = document.getElementById("canvas3"),
        circle3 = arco3.getContext('2d');
    var spanPercent3 = document.getElementById("percent3");
    var arco3X = arco3.width/2,
        arco3Y = arco3.height/2,
        fps3 = 1000 / 200;
    var porcentoMySQL = 0,
        onePorcento3 = 360/100,
        mysql = onePorcento3 * 50,
        deegresMySQL = 0;
        
    circle3.lineCap = "round";

    var arcoInterval = setInterval (function(){
        deegresMySQL += 1;
        circle3.clearRect(0, 0, arco3.width, arco3.height);
        porcentoMySQL = deegresMySQL / onePorcento3;
        spanPercent3.innerHTML = porcentoMySQL.toFixed();
        
        circle3.beginPath();
        circle3.arc(arco3X, arco3Y, 60, (Math.PI/180) * 270, (Math.PI/180) * (270+360));
        circle3.strokeStyle = "#FFFFFF";
        circle3.lineWidth = "10";
        circle3.stroke();
        circle3.beginPath();
        circle3.strokeStyle = '#DA3333';
        circle3.lineWidth = '15';
        circle3.arc(arco3X, arco3Y, 60, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegresMySQL));
        circle3.stroke();

        if(deegresMySQL >= mysql) clearInterval(arcoInterval);
    }, fps3);
}
function javascriptArco() {
    var arco4 = document.getElementById("canvas4"),
        circle4 = arco4.getContext('2d');
    var spanPercent4 = document.getElementById("percent4");
    var arco4X = arco4.width/2,
        arco4Y = arco4.height/2,
        fps4 = 1000 / 200;
    var porcentoJavascript = 0,
        onePorcento4 = 360/100,
        javascript = onePorcento4 * 35,
        deegresJavascript = 0;
        
    circle4.lineCap = "round";

    var arcoInterval = setInterval (function(){
        deegresJavascript += 1;
        circle4.clearRect(0, 0, arco4.width, arco4.height);
        porcentoJavascript = deegresJavascript / onePorcento4;
        spanPercent4.innerHTML = porcentoJavascript.toFixed();
        
        circle4.beginPath();
        circle4.arc(arco4X, arco4Y, 60, (Math.PI/180) * 270, (Math.PI/180) * (270+360));
        circle4.strokeStyle = "#FFFFFF";
        circle4.lineWidth = "10";
        circle4.stroke();
        circle4.beginPath();
        circle4.strokeStyle = '#DA3333';
        circle4.lineWidth = '15';
        circle4.arc(arco4X, arco4Y, 60, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegresJavascript));
        circle4.stroke();

        if(deegresJavascript >= javascript) clearInterval(arcoInterval);
    }, fps4);
}
function javaArco() {
    var arco5 = document.getElementById("canvas5"),
        circle5 = arco5.getContext('2d');
    var spanPercent5 = document.getElementById("percent5");
    var arco5X = arco5.width/2,
        arco5Y = arco5.height/2,
        fps5 = 1000 / 200;
    var porcentoJava = 0,
        onePorcento5 = 360/100,
        java = onePorcento5 * 40,
        deegresJava = 0;
        
    circle5.lineCap = "round";

    var arcoInterval = setInterval (function(){
        deegresJava += 1;
        circle5.clearRect(0, 0, arco5.width, arco5.height);
        porcentoJava = deegresJava / onePorcento5;
        spanPercent5.innerHTML = porcentoJava.toFixed();
        
        circle5.beginPath();
        circle5.arc(arco5X, arco5Y, 60, (Math.PI/180) * 270, (Math.PI/180) * (270+360));
        circle5.strokeStyle = "#FFFFFF";
        circle5.lineWidth = "10";
        circle5.stroke();
        circle5.beginPath();
        circle5.strokeStyle = '#DA3333';
        circle5.lineWidth = '15';
        circle5.arc(arco5X, arco5Y, 60, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegresJava));
        circle5.stroke();

        if(deegresJava >= java) clearInterval(arcoInterval);
    }, fps5);
}
function pythontArco() {
    var arco6 = document.getElementById("canvas6"),
        circle6 = arco6.getContext('2d');
    var spanPercent6 = document.getElementById("percent6");
    var arco6X = arco6.width/2,
        arco6Y = arco6.height/2,
        fps6 = 1000 / 200;
    var porcentoPyhton = 0,
        onePorcento6 = 360/100,
        python = onePorcento6 * 10,
        deegresPython = 0;
        
    circle6.lineCap = "round";

    var arcoInterval = setInterval (function(){
        deegresPython += 1;
        circle6.clearRect(0, 0, arco6.width, arco6.height);
        porcentoPyhton = deegresPython / onePorcento6;
        spanPercent6.innerHTML = porcentoPyhton.toFixed();
        
        circle6.beginPath();
        circle6.arc(arco6X, arco6Y, 60, (Math.PI/180) * 270, (Math.PI/180) * (270+360));
        circle6.strokeStyle = "#FFFFFF";
        circle6.lineWidth = "10";
        circle6.stroke();
        circle6.beginPath();
        circle6.strokeStyle = '#DA3333';
        circle6.lineWidth = '15';
        circle6.arc(arco6X, arco6Y, 60, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegresPython));
        circle6.stroke();

        if(deegresPython >= python) clearInterval(arcoInterval);
    }, fps6);
}
function startARCO() {
    htmlArco();
    phpArco();
    mysqlArco();
    javascriptArco();
    javaArco();
    pythontArco();
}
function scrollHeader() {
    var scrollPosition;
    var containerHEADER = document.querySelector('.header-paralax');
    var containerICON = document.querySelector('.icon-paralax');

    scrollPosition = window.scrollY;
    if(scrollPosition <= 577) {
        containerICON.style.position = "";
        containerHEADER.style.opacity = 1 - (scrollPosition / 577);
        containerICON.style.boxShadow = "0 0 0";
        console.log(scrollPosition);
        console.log(containerICON.style.transform);
    }else {
        containerICON.style.position = "fixed";
        containerICON.style.top = "0";
        containerICON.style.width = "100%";
        containerICON.style.background = "rgba(255, 255, 255, 0.85)";
        containerICON.style.boxShadow = "0 2px 6px #636363";        
    }
}
window.addEventListener('scroll', scrollHeader);