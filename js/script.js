let video =document.querySelector('video');
let juice =document.querySelector('.orange-juice');
let myButton =document.getElementById('playPause');

function togglePlayPause(){
    if(video.paused){
        myButton.className='pause';
        video.play();
        // alert('checks');
    }
    else{
        myButton.className='play';
        video.pause();
    }
}
myButton.onclick=function(){
    // alert('checks');
    togglePlayPause();
};

video.addEventListener('timeupdate',function(){
    let juicePos = video.currentTime/video.duration;
    juice.style.width=juicePos * 100 + "%";
    if(video.ended)
    {
        myButton.className="play";
    }
});