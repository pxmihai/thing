let video =document.querySelector('video');
let juice =document.querySelector('.orange-juice');
let btn =document.getElementById('play-pause');

function togglePlayPause(){

    if(video.paused){
        btn.className='pause';
        video.play();
        // alert('checks');
    }
    else{
        btn.className='play';
        video.pause();
    }
}

btn.onclick=function(){
    // alert('checks');
    togglePlayPause();
};

// video.addEventListener('timeupdate',function(){
//     let juicePos = video.currentTime/video.duration;
//     juice.style.width=juicePos*100 +"%";
// });