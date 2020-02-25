var video =document.querySelector('video');
var juice =document.querySelector('.orange-juice');
var btn =document.getElementById('play-pause');

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

video.addEventListener('timeupdate',function(){
    let juicePos = video.currentTime/video.duration;
    juice.style.width=juicePos * 100 + "%";
    if(video.ended)
    {
        // btn.className="play";
    }
});