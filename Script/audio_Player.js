var execucao = 0;
var executando = 0;
var barra = 0;
var faixaAnterior = 0;
var clicado;
var idMusic;
var tocarID;
var playlist = document.querySelectorAll('.LineUP');
var idMusic = document.getElementsByClassName('btn-player');
var tempo = document.querySelectorAll('.tempo');
var barra_progresso = document.querySelectorAll('.barra_progresso');
var span_Contador = document.querySelectorAll('.cont_Exe');
var contador = [span_Contador.length];

function play_evento(){
    console.log(tempo.length);
    console.log(span_Contador.length);
    for(var j = 0; j < tempo.length; j++) {
        tempo[j].innerHTML = secToStr(playlist[j].duration);
        barra_progresso[j].max = playlist[j].duration;
        contador[j] = 0;
    }
}

function clique(e) {  
    for(var i = 0; i < idMusic.length; i++) {
        if(e.id == idMusic[i].id) {
            tocarID = 'audio' + idMusic[i].id;
            barra = i;
        }
    }
}

function play() {
    if(clicado != tocarID && executando == 0) {
        audio = document.getElementById(tocarID);
        faixaAnterior = barra;
    }else {
        if(executando == 1 && clicado != tocarID) {
            audio.pause();
            audio.currentTime = 0;
            execucao = 0;
            tempo[faixaAnterior].innerHTML = secToStr(audio.duration);
            barra_progresso[faixaAnterior].value = 0;
            faixaAnterior = barra;
            audio = document.getElementById(tocarID);
        }
    }
    if(execucao > 0) {
        if(audio.currentTime == audio.duration) {
            audio.currentTime = 0;
        }
        audio.pause();
        execucao = 0;
    }else {
        audio.play();
        execucao = 1;
        executando = execucao;   
        clicado = tocarID;
    }
    audio.addEventListener('play', false);
    audio.addEventListener('timeupdate', atualizar, false);
}

function atualizar(){
    tempo[barra].innerHTML = secToStr(audio.currentTime);
    barra_progresso[barra].value = audio.currentTime;
}

function contador_execucao() {
    if(execucao == 1 && audio.currentTime == 0) {
        contador[barra] += 1;
        span_Contador[barra].innerHTML = contador[barra];
    }
}

function secToStr(sec_num) {
    sec_num = Math.floor(sec_num);
    var horas = Math.floor(sec_num / 3600);
    var minutos = Math.floor((sec_num - (horas * 3600)) / 60);
    var segundos = sec_num - (horas * 3600) - (minutos * 60);
    if (minutos < 10)  minutos = "0" + minutos;
    if (segundos < 10) segundos = "0" + segundos;
    var tempo_da_Musica = minutos + ':' + segundos;
    
    return tempo_da_Musica;
}