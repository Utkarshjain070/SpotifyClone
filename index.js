
let audioElement = new Audio("Songs/1.mpeg");
let songProgressBar = document.getElementById('songProgressBar');

let songList = Array.from(document.getElementsByClassName('songList'));
let mainPlay = document.getElementById('mainPlay');
let playBtn = document.getElementsByClassName('playBtn');
let index = 1;
/*
1 - Teri Jhalak Asharfi Srivalli - Pushpa
2 - arambh
3 - milkha
4- chidiya
5-dil deewana
6-ek raat
7-kal ho na ho
8-kar har maidan
9-radha krishna
10- tera yaar hoon main
11 - allah ke bande*/
let songs = [
    { songName: "Teri Jhalak Srivalli - Pushpa", coverPath: "songs banner/2.png", songPath: "Songs/1.mpeg", songNumber: '1', duration: "03:44" },


    { songName: "Aarambh Hai Prachand", coverPath: "songs banner/3.png", songPath: "Songs/2.mpeg", songNumber: '2', duration: "04:55" },
    { songName: "Bhaag Milkha Bhaag", coverPath: "songs banner/5.jfif", songPath: "Songs/3.mpeg", songNumber: '3', duration: "04:29" },
    { songName: "Chidiya - Villan", coverPath: "songs banner/9.jpg", songPath: "Songs/4.mpeg", songNumber: '4', duration: "04:13" },
    { songName: "Dil Deewana - Sonu Nigam", coverPath: "songs banner/6.jfif", songPath: "Songs/5.mpeg", songNumber: '5', duration: "07:06" },
    { songName: "Ek Raat - Villain", coverPath: "songs banner/7.jfif", songPath: "Songs/6.mpeg", songNumber: '6', duration: "03:44" },
    { songName: "Kal Ho Na Ho", coverPath: "songs banner/10.jfif", songPath: "Songs/7.mpeg", songNumber: '7', duration: "05:21" },
    { songName: "Kar Har Maidan Fateh", coverPath: "songs banner/1.jfif", songPath: "Songs/8.mpeg", songNumber: '8', duration: "05:11" },
    { songName: "Radha Krishna", coverPath: "songs banner/4.jpg", songPath: "Songs/9.mpeg", songNumber: '9', duration: "01:30" },
    { songName: "Tera Yaar Hoon Main ", coverPath: "songs banner/8.jfif", songPath: "Songs/10.mpeg", songNumber: '10', duration: "04:24" },
    { songName: "Allah ke Bande", coverPath: "songs banner/2.png", songPath: "Songs/11.mpeg", songNumber: '11', duration: "04:06" },
]




songList.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
    element.getElementsByTagName('span')[2].innerText = songs[i].duration;


});

const pauseAll = () => {
    Array.from(document.getElementsByClassName('playBtn')).forEach(element => {
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');

    });

}

Array.from(document.getElementsByClassName('playBtn')).forEach(element => {

    element.addEventListener('click', (e) => {


        index = parseInt(e.target.id);
        document.getElementsByClassName('songInfo')[0].innerText = songs[index - 1].songName;



        audioElement.src = songs[index - 1].songPath;



        if (e.target.classList == ('fa playBtn fa-circle-pause')) {
            audioElement.currentTime = progress;
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
            mainPlay.classList.remove('fa-circle-pause');
            mainPlay.classList.add('fa-circle-play');
            audioElement.pause();
            document.getElementsByClassName('gif')[0].getElementsByTagName('img')[0].style.opacity = 0;

        }
        else {
            pauseAll();
            audioElement.currentTime = 0;
            e.target.classList.add('fa-circle-pause');
            e.target.classList.remove('fa-circle-play');

            audioElement.play();
            document.getElementsByClassName('gif')[0].getElementsByTagName('img')[0].style.opacity = 1;
            mainPlay.classList.remove('fa-circle-play');
            mainPlay.classList.add('fa-circle-pause');


        }


    });




});




backward.addEventListener('click', () => {
    if (index <= 1) {
        pauseAll();
        audioElement.src = `Songs/11.mpeg`;
        audioElement.currentTime = 0;
        audioElement.play();
        document.getElementsByClassName('gif')[0].getElementsByTagName('img')[0].style.opacity = 1;
        mainPlay.classList.remove('fa-circle-play');
        mainPlay.classList.add('fa-circle-pause');
        document.getElementsByClassName('songInfo')[0].innerText = songs[10].songName;
        index = 11;




    }
    else {
        pauseAll();
        audioElement.src = `Songs/${index - 1}.mpeg`;
        audioElement.currentTime = 0;
        audioElement.play();
        document.getElementsByClassName('gif')[0].getElementsByTagName('img')[0].style.opacity = 1;
        mainPlay.classList.remove('fa-circle-play');
        mainPlay.classList.add('fa-circle-pause');
        document.getElementsByClassName('songInfo')[0].innerText = songs[index - 2].songName;
        index = index - 1;

    }


});
forward.addEventListener('click', () => {

    if (index == 11) {
        pauseAll();
        audioElement.src = `Songs/1.mpeg`;
        audioElement.currentTime = 0;
        audioElement.play();
        document.getElementsByClassName('gif')[0].getElementsByTagName('img')[0].style.opacity = 1;
        mainPlay.classList.remove('fa-circle-play');
        mainPlay.classList.add('fa-circle-pause');
        document.getElementsByClassName('songInfo')[0].innerText = songs[0].songName;
        index = 1;


    }
    else {

        pauseAll();
        audioElement.src = `Songs/${index + 1}.mpeg`;
        audioElement.currentTime = 0;
        audioElement.play();
        document.getElementsByClassName('gif')[0].getElementsByTagName('img')[0].style.opacity = 1;
        mainPlay.classList.remove('fa-circle-play');
        mainPlay.classList.add('fa-circle-pause');
        document.getElementsByClassName('songInfo')[0].innerText = songs[index].songName;
        index = index + 1;
    }


});

mainPlay.addEventListener('click', (e) => {
    pauseAll();

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        document.getElementsByClassName('gif')[0].getElementsByTagName('img')[0].style.opacity = 1;
        mainPlay.classList.remove('fa-circle-play');
        mainPlay.classList.add('fa-circle-pause');

    }



    else {
        audioElement.pause();
        document.getElementsByClassName('gif')[0].getElementsByTagName('img')[0].style.opacity = 0;
        mainPlay.classList.add('fa-circle-play');
        mainPlay.classList.remove('fa-circle-pause');

    }
});
if (audioElement.currentTime == audioElement.duration) {
    audioElement.pause();
    document.getElementsByClassName('gif')[0].getElementsByTagName('img')[0].style.opacity = 0;
    mainPlay.classList.add('fa-circle-play');
    mainPlay.classList.remove('fa-circle-pause');
}

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    songProgressBar.value = progress;
    if (Math.floor(audioElement.currentTime - Math.floor(audioElement.currentTime / 60) * 60) <= 9) {
        Array.from(document.getElementsByClassName('timeUpdate'))[0].innerText = "0" + Math.floor(audioElement.currentTime / 60)
            + " : " + "0" + Math.floor(audioElement.currentTime - Math.floor(audioElement.currentTime / 60) * 60);
    }
    else {
        Array.from(document.getElementsByClassName('timeUpdate'))[0].innerText = "0" + Math.floor(audioElement.currentTime / 60)
            + " : " + Math.floor(audioElement.currentTime - Math.floor(audioElement.currentTime / 60) * 60);

    }
});

songProgressBar.addEventListener('change', () => {
    audioElement.currentTime = songProgressBar.value * audioElement.duration / 100;

});

var screenSize = window.matchMedia('(max-width:700px)');
if (screenSize.matches) {
    backward.classList.remove('fa-3x');
    backward.classList.add('fa-2x');
    forward.classList.remove('fa-3x');
    forward.classList.add('fa-2x');
    mainPlay.classList.remove('fa-3x');
    mainPlay.classList.add('fa-2x');
}

document.addEventListener('keyup', event => {
    if (event.code === 'Space' || event.code === 'Enter') {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            document.getElementsByClassName('gif')[0].getElementsByTagName('img')[0].style.opacity = 1;
            mainPlay.classList.remove('fa-circle-play');
            mainPlay.classList.add('fa-circle-pause');
    
        }
    
    
    
        else {
            audioElement.pause();
            document.getElementsByClassName('gif')[0].getElementsByTagName('img')[0].style.opacity = 0;
            mainPlay.classList.add('fa-circle-play');
            mainPlay.classList.remove('fa-circle-pause');
    
        }
    }
  });

  document.addEventListener('keydown', event => {
    
    if (event.code === 'ArrowLeft') {
        if (index <= 1) {
        
            pauseAll();
            audioElement.src = `Songs/11.mpeg`;
            audioElement.currentTime = 0;
            audioElement.play();
            document.getElementsByClassName('gif')[0].getElementsByTagName('img')[0].style.opacity = 1;
            mainPlay.classList.remove('fa-circle-play');
            mainPlay.classList.add('fa-circle-pause');
            document.getElementsByClassName('songInfo')[0].innerText = songs[9].songName;
            index = 10;
    
    
    
    
        }
        else {
           
            pauseAll();

            audioElement.src = `Songs/${index - 1}.mpeg`;
            audioElement.currentTime = 0;
            audioElement.play();
            document.getElementsByClassName('gif')[0].getElementsByTagName('img')[0].style.opacity = 1;
            mainPlay.classList.remove('fa-circle-play');
            mainPlay.classList.add('fa-circle-pause');
            document.getElementsByClassName('songInfo')[0].innerText = songs[index - 2].songName;
            index = index - 1;
    
        }
    
    }
  });

  document.addEventListener('keydown', event => {
    
    if (event.code === 'ArrowRight') {
        if (index == 11) {
            pauseAll();
            audioElement.src = `Songs/1.mpeg`;
            audioElement.currentTime = 0;
            audioElement.play();
            document.getElementsByClassName('gif')[0].getElementsByTagName('img')[0].style.opacity = 1;
            mainPlay.classList.remove('fa-circle-play');
            mainPlay.classList.add('fa-circle-pause');
            document.getElementsByClassName('songInfo')[0].innerText = songs[0].songName;
            index = 1;
    
    
        }
        else {
    
            pauseAll();
            audioElement.src = `songs/${index + 1}.mpeg`;
            audioElement.currentTime = 0;
            audioElement.play();
            document.getElementsByClassName('gif')[0].getElementsByTagName('img')[0].style.opacity = 1;
            mainPlay.classList.remove('fa-circle-play');
            mainPlay.classList.add('fa-circle-pause');
            document.getElementsByClassName('songInfo')[0].innerText = songs[index].songName;
            index = index + 1;
        }
    }
    
  });

  







