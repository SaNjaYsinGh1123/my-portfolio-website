console.log('welcome');

let songIndex = 0;
let audioElement = new Audio('/sounds/song/1.mp3');
let currentPlay = document.getElementById('current-song'); 
let prevPlay = document.getElementById('prev-song'); 
let nextPlay = document.getElementById('next-song'); 
let progressBar = document.getElementById('slider');
let container = document.getElementsByClassName('container')[0];
let songBannergif = document.getElementsByClassName('songBannergif')[0];
let songGif = document.getElementById('song-gif');

let songItems = document.getElementsByClassName('songItem');

let songs = [
    {songName:"let me down slowly",songDuration:"0.5:34",filepath:"/sounds/song/1.mp3", coverPath: "/images/covers/1.jpg"},
    {songName:"Excuses",songDuration:"0.2:56",filepath:"/sounds/song/2.mp3", coverPath: "/images/covers/2.jpg"},
    {songName:"Love Nwantiti",songDuration:"0.2:42",filepath:"/sounds/song/3.mp3", coverPath: "/images/covers/3.jpg"},
    {songName:"let me down slowly",songDuration:"0.5:34",filepath:"/sounds/song/1.mp3", coverPath: "/images/covers/4.jpg"},
    {songName:"Excuses",songDuration:"0.2:56",filepath:"/sounds/song/2.mp3", coverPath: "/images/covers/5.jpg"},
    {songName:"Love Nwantiti ",songDuration:"0.2:42",filepath:"/sounds/song/3.mp3", coverPath: "/images/covers/6.jpg"},
    {songName:"let me down slowly ",songDuration:"0.5:34",filepath:"/sounds/song/1.mp3", coverPath: "/images/covers/1.jpg"},
    {songName:"Love Nwantiti",songDuration:"0.2:42",filepath:"/sounds/song/3.mp3", coverPath: "/images/covers/2.jpg"},
    {songName:"let me down slowly",songDuration:"0.5:34",filepath:"/sounds/song/1.mp3", coverPath: "/images/covers/1.jpg"},
    {songName:"Excuses",songDuration:"0.2:56",filepath:"/sounds/song/2.mp3", coverPath: "/images/covers/2.jpg"},
]
 
console.log(songItems.length);

//----------showing the songs on screen--------
for(let i=0;i<songItems.length;i++){
    songItems[i].getElementsByTagName('img')[0].src = songs[i].coverPath;
    songItems[i].getElementsByClassName('SongName')[0].innerText = songs[i].songName;
    songItems[i].getElementsByClassName('song-duration')[0].innerText = songs[i].songDuration;
}



//--------------- updating range---------------
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime / audioElement.duration)*100); 
    progressBar.value = progress;
   // console.log(progress);
});

//----------------if someone change the range element---------
progressBar.addEventListener('change',()=>{
    audioElement.currentTime = ((progressBar.value * audioElement.duration) /100);
});

const setDefault = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-circle-play');
     });
    }
    
let songInfoName = document.getElementById('song-info-name');
let songInfoDuration = document.getElementById('song-info-duration');

const setAudioPath = function(){

    songInfoName.innerText = songs[songIndex].songName;
    songInfoDuration.innerText = songs[songIndex].songDuration;
    songBannergif.getElementsByTagName('img')[0].src = songs[songIndex].coverPath;
    songBannergif.classList.add('border');
    songGif.classList.remove('opacity');
    audioElement.src = '/sounds/song/' + (songIndex)+'.mp3';

}

const idealCondition = function(){
    currentPlay.classList.remove('fa-circle-play');
    currentPlay.classList.add('fa-pause-circle');
     //changeSongIcon();
     songIcon[songIndex].classList.remove('fa-circle-play');
     songIcon[songIndex].classList.add('fa-pause-circle');

}



//-----------------change the icons play to pause if song is playing-----
let songIcon = document.getElementsByClassName('songItemPlay');

//---------------bottom----------------------
const currentPlayIconChange = function (){
    if(audioElement.paused || audioElement.currentTime <=0){
       
        idealCondition();
        songGif.classList.remove('opacity');
         audioElement.play();
    }
    else{
        currentPlay.classList.remove('fa-pause-circle');
        currentPlay.classList.add('fa-circle-play');
        //changeSongIcon();
        songGif.classList.add('opacity');
        songIcon[songIndex].classList.remove('fa-pause-circle');
        songIcon[songIndex].classList.add('fa-circle-play');
        audioElement.pause();
    }
};

currentPlay.addEventListener('click',function(){
    currentPlayIconChange();
});

prevPlay.addEventListener('click',function(){
        songIndex--;
        setDefault();
        idealCondition();
        setAudioPath();
        audioElement.play();      
    
});

nextPlay.addEventListener('click',function(){
    songIndex++;
    setDefault();
    idealCondition();
    setAudioPath();
    audioElement.play();
});



 const bottom = document.getElementsByClassName('bottom')[0];
//---------
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
        element.addEventListener('click',(e)=>{
         
          //let songItemplayIconElement = element.children[2];
          
          songIndex = element.getAttribute("value");  
          console.log(songIndex);
          bottom.classList.remove('display');

          setDefault();
          setAudioPath(); 
          currentPlayIconChange();
        })
    });


    //console.log(songItemplayIconElement);
          //console.log(songItemplayIconElement.getElementsByClassName('songItemPlay')[0].innerText);
          // console.log(songItemplayIconElement.target);
          //songItemplayIconElement.target.classList.remove('fa-circle-play');
          //songItemplayIconElement.target.classList.add('fa-pause-circle');


    //       const changeSongIcon = ()=>{
    //         setAudioPath();
    //         if(audioElement.paused || audioElement.currentTime <=0){
    //             console.log(songIndex);
    //             songIcon[songIndex].classList.remove('fa-circle-play');
    //             songIcon[songIndex].classList.add('fa-pause-circle');
    //             audioElement.play();
    //         }
    //         else{
    //             //audioElement.pause();
    //             console.log(songIndex);
    //             songIcon[songIndex].classList.remove('fa-pause-circle');
    //             songIcon[songIndex].classList.add('fa-circle-play');
    //             audioElement.pause();
    //  }
    // }
    
