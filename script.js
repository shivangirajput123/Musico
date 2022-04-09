console.log("Welcome to Musico");

var songIndex = 0;
// var audioElement;
var audioElement = new Audio('1.mp3');
var masterPlay = document.getElementById('masterPlay');
var myProgressBar = document.getElementById('myProgressBar');
var masterSongName = document.getElementById('masterSongName');
var songsItem = Array.from(document.getElementsByClassName('songsItem'));

var songs = [
    {songName: "var me Love You", filePath: "1.mp3", coverPath: "1.jpg"},    
    {songName: "Warriyo - Mortals (feat. Laura Brehm) [NCS Reslease]", filePath: "2.mp3", coverPath: "2.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "3.mp3", coverPath: "3.jpg"},
    {songName: "DEAF KEV - Invincible [ NCS Release]-320k", filePath: "4.mp3", coverPath: "4.jpg"},
    {songName: "Different Heaven & EHIDE - My Heart [NCS Release]-320k", filePath: "5.mp3", coverPath: "5.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release-(kanhai80.wapkiz)", filePath: "6.mp3", coverPath: "6.jpg"},
    {songName: "Something Just Like This-The Chainsmokers ", filePath: "7.mp3", coverPath: "7.jpg"},
    {songName: "Bad Liar-Selena Gomez", filePath: "8.mp3", coverPath: "8.jpg"},
    {songName: "Witness-Katy Perry", filePath: "9.mp3", coverPath: "9.jpg"},
    {songName: "Hymn-Cold Play", filePath: "10.mp3", coverPath: "10.jpg"},
]

songsItem.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

masterPlay.addEventListener('click', ()=>{
    console.log('masterplayworking')
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime =myProgressBar.value * audioElement.duration;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');    
})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    console.log(element);
    element.addEventListener('click', (e)=>{        
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        console.log(e.target);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = '${songIndex+1}.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = '${songIndex+1}.mp3';
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = '${songIndex+1}.mp3';
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})