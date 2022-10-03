let audio = document.getElementById("myAudio1")
let play = document.getElementById("play")
let pause = document.getElementById("pause")
let audiosrc = document.getElementById('audiosrc');

function playf() {
    audio.play()
    play.style.display = "none"
    pause.style.display = "block"
    document.getElementById("diskimg").style.transform = "rotate(360deg)";
}

function pausef() {
    audio.pause()
    play.style.display = "block"
    pause.style.display = "none"
    document.getElementById("diskimg").style.transform = "rotate(0deg)";
}


// click on music functions 
// https: 
function music(e) {
    let audio = document.getElementById("myAudio1")
    let song_name = document.getElementById('song-name')
    let singer = document.getElementById('singer')
    let audiosrc = document.getElementById('audiosrc');


    switch (e) {
        case 'Music-1':
            audio.src = "https://pagalsong.in/uploads/systemuploads/mp3/Coolie No. 1 (2020)/Husnn Hai Suhaana - Coolie No. 1 (2020) 128 Kbps.mp3"
            song_name.innerHTML = "Husnn hai Suhana"
            singer.innerHTML = "Singer : Abhijeet , Chandana Dixit "
            audio.play()
            play.style.display = "none"
            pause.style.display = "block"
            document.getElementById("diskimg").style.transform = "rotate(360deg)";
            break;

        case 'Music-2':
            audio.src = "https://pagalsong.in/uploads/systemuploads/mp3/Coolie No. 1 (2020)/Mirchi Lagi Toh - Coolie No. 1 (2020) 128 Kbps.mp3"
            song_name.innerHTML = "Mirchi Lahi Toh"
            singer.innerHTML = "Singer : Kumar Sanu, Alka Yagnik"
            audio.play()
            play.style.display = "none"
            pause.style.display = "block"
            document.getElementById("diskimg").style.transform = "rotate(360deg)";
            break;

        case 'Music-3':
            audio.src = "https://pagalsong.in/uploads/systemuploads/mp3/Dil Bechara/Main Tumhara - Dil Bechara 128 Kbps.mp3"
            song_name.innerHTML = "Main Tumhara"
            singer.innerHTML = "Singer: A.R.Rahman, Jonita Gandhi "
            audio.play()
            play.style.display = "none"
            pause.style.display = "block"
            document.getElementById("diskimg").style.transform = "rotate(360deg)";
            break;
        case 'Music-4':
            audio.src = "   https://pagalsong.in/uploads/systemuploads/mp3/Paani Paani - Badshah/Paani Paani - Badshah 128 Kbps.mp3"
            song_name.innerHTML = "Paani Paani"
            singer.innerHTML = "Singer : Badshah,Aastha Gill "
            audio.play()
            play.style.display = "none"
            pause.style.display = "block"
            document.getElementById("diskimg").style.transform = "rotate(360deg)";
            break;
        case 'Music-5':
            audio.src = "https: //pagalsong.in/uploads/systemuploads/mp3/Ginny Weds Sunny/Sawan Mein Lag Gayi Aag - Ginny Weds Sunny 128 Kbps.mp3"
            song_name.innerHTML = "Sawan Mein Lag Gayi Aag"
            singer.innerHTML = "Singer : Neha Kakkar, Badshah "
            audio.play()
            play.style.display = "none"
            pause.style.display = "block"
            document.getElementById("diskimg").style.transform = "rotate(360deg)";
            break;

        case 'Music-6':
            audio.src = "https://pagalsong.in/uploads/systemuploads/mp3/Housefull 4/Chammo - Housefull 4 128 Kbps.mp3"
            song_name.innerHTML = "Chammo"
            singer.innerHTML = "Singer : Sukhwinder Singh, Shadab Faridi"
            audio.play()
            play.style.display = "none"
            pause.style.display = "block"
            document.getElementById("diskimg").style.transform = "rotate(360deg)";
            break;

        case 'Music-7':
            audio.src = "https://pagalsong.in/uploads/systemuploads/mp3/Housefull 4/Shaitan Ka Saala - Housefull 4 128 Kbps.mp3"
            song_name.innerHTML = "Shaitan Ka Saala "
            singer.innerHTML = "Singer : Sohail Sen, Vishal Dadlani"
            audio.play()
            play.style.display = "none"
            pause.style.display = "block"
            document.getElementById("diskimg").style.transform = "rotate(360deg)";
            break;
        case 'Music-8':
            audio.src = " https://pagalsong.in/uploads/systemuploads/mp3/Batla House/O Saki Saki - Batla House 128 Kbps.mp3"
            song_name.innerHTML = "O Saki Saki"
            singer.innerHTML = "Singer : Neha Kakkar, B Praak"
            audio.play()
            play.style.display = "none"
            pause.style.display = "block"
            document.getElementById("diskimg").style.transform = "rotate(360deg)";
            break;
        case 'Music-9':
            audio.src = " https://pagalsong.in/uploads/systemuploads/mp3/Kalank/First Class - Kalank 128 Kbps.mp3"
            song_name.innerHTML = "First Class"
            singer.innerHTML = "Singer : Arijit Singh, Neeti Mohan "
            audio.play()
            play.style.display = "none"
            pause.style.display = "block"
            document.getElementById("diskimg").style.transform = "rotate(360deg)";
            break;

        case 'Music-10':
            audio.src = "https://pagalsong.in/uploads/systemuploads/mp3/Kesari/Teri Mitti - Kesari 128 Kbps.mp3"
            song_name.innerHTML = "Mirchi Lahi Toh"
            singer.innerHTML = "Singer : B Praak"
            audio.play()
            play.style.display = "none"
            pause.style.display = "block"
            document.getElementById("diskimg").style.transform = "rotate(360deg)";
            break;
    }
}