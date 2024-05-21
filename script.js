console.log("Welcome to Spotify");
// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("Music/1.aac");
// Masterplay Buttons
let masterPlay = document.getElementById("masterPlay");
let masterPlayGreen = document.getElementById("masterPlayGreen");
// Progress Bar
let myProgressBar = document.getElementById("myProgressBar");
let gridElement = Array.from(document.getElementsByClassName("gridElement"));
// Master Items
let jsMusicCover = document.getElementById("jsMusicCover");
let jsMusicSong = document.getElementById("jsMusicSong");
let jsMusicArtist = document.getElementById("jsMusicArtist");
let songTimerEnd = document.getElementById("songTimerEnd");
// Queue Items
let queueSongCover = document.getElementById("queueSongCover");
let queueSongName = document.getElementById("queueSongName");
let queueSongArtist = document.getElementById("queueSongArtist");
//Right Side Items
let rightMusicCover = document.getElementById("rightMusicCover");
let rightMusicName = document.getElementById("rightMusicName");
let rightaArtistName = document.getElementById("rightaArtistName");
let rightaArtistName2 = document.getElementById("rightaArtistName2");
// About the artist change
let aboutTheArtistImage = document.getElementById("aboutTheArtistImage");
let monthlyListeners = document.getElementById("monthlyListeners");
let creditsMainArtist = document.getElementById("creditsMainArtist");
let creditsMainArtist2 = document.getElementById("creditsMainArtist2");
let creditsComposer = document.getElementById("creditsComposer");
// songnumber gif
let songNumber = document.getElementsByClassName("songNumber");
//MasterVolume
let masterVolume = document.getElementById("masterVolume");
const volumeIcon = document.getElementById("volumeIcon");

// Array of Objects is made
let songs = [
  {
    coverPath: "Images/Covers/1.jpg",
    songPath: "Music/1.aac",
    songName: "絆ノ奇跡",
    artistName: "MAN WITH A MISSION, milet",
    albumName: "絆ノ奇跡",
    songDuration: "3:43",
    songNumber: "1",
    aboutTheArtistImage: "Images/Artist/1.jpg",
    monthlyListeners: "2,065,875",
    creditsMainArtist: "MAN WITH A MISSION",
    creditsMainArtist2: "milet",
    creditsComposer: "Jean-Ken Johnny",
    creditsAbout:
      "In the year 19XX the earth was engulfed in war. There lived a genius biologist named Dr. Jimi...",
  },
  {
    coverPath: "Images/Covers/2.jpg",
    songPath: "Music/2.aac",
    songName: "BROKEN GAMES",
    artistName: "FZMZ",
    albumName: "BROKEN GAMES",
    songDuration: "3:56",
    songNumber: "2",
    aboutTheArtistImage: "Images/Artist/2.jpg",
    monthlyListeners: "2,567,871",
    creditsMainArtist: "FZMZ",
    creditsMainArtist2: "MAQUMA",
    creditsComposer: "JACK",
    creditsAbout:
      "Masked Avatar Band in Tokyo & Metaverse. Five artists at the forefront of the music scene, wh...",
  },
  {
    coverPath: "Images/Covers/3.jpg",
    songPath: "Music/3.aac",
    songName: "Happy Nation",
    artistName: "Ace of Base",
    albumName: "The Sign",
    songDuration: "4:15",
    songNumber: "3",
    aboutTheArtistImage: "Images/Artist/3.jpg",
    monthlyListeners: "1,122,568",
    creditsMainArtist: "Ace of Base",
    creditsMainArtist2: "Jonas Berggren",
    creditsComposer: "Ulf Ekberg",
    creditsAbout:
      "Originally comprised of vocalists Jenny Berggern and Malin 'Linn' Berggren, and Jonas 'Joker'...",
  },
  {
    coverPath: "Images/Covers/4.jpg",
    songPath: "Music/4.aac",
    songName: "アイドル",
    artistName: "YOASOBI",
    albumName: "アイドル",
    songDuration: "3:33",
    songNumber: "4",
    aboutTheArtistImage: "Images/Artist/4.jpg",
    monthlyListeners: "3,254,765",
    creditsMainArtist: "YOASOBI",
    creditsMainArtist2: "AYASE",
    creditsComposer: "AYASE",
    creditsAbout:
      "YOASOBI is a band that creates 'music from novels'. The band members are Ayase (composer)...",
  },
  {
    coverPath: "Images/Covers/5.jpg",
    songPath: "Music/5.aac",
    songName: "(I Just) Died In Your Arms",
    artistName: "Cutting Crew",
    albumName: "The Best Of Cutting...",
    songDuration: "3:43",
    songNumber: "5",
    aboutTheArtistImage: "Images/Artist/5.jpg",
    monthlyListeners: "889,651",
    creditsMainArtist: "The Cutting Crew",
    creditsMainArtist2: "Nicholas Eede",
    creditsComposer: "Terry Brown",
    creditsAbout:
      "Cutting Crew founding members Kevin Scott Macmichael and Nick Van Eede met in Halifax in 1982...",
  },
  {
    coverPath: "Images/Covers/6.jpg",
    songPath: "Music/6.aac",
    songName: "SPECIALZ",
    artistName: "King Gnu",
    albumName: "The Greatest Union...",
    songDuration: "3:53",
    songNumber: "6",
    aboutTheArtistImage: "Images/Artist/6.jpg",
    monthlyListeners: "257,980",
    creditsMainArtist: "King Gnu",
    creditsMainArtist2: "Daiki Tsuneta",
    creditsComposer: "Ryomen Sukuna",
    creditsAbout:
      "東京藝術大学出身で独自の活動を展開するクリエイター常田大希が2015年にSrv.Vinciという名前で...",
  },
  {
    coverPath: "Images/Covers/7.jpg",
    songPath: "Music/7.aac",
    songName: "Kuru Kuru - Brazillian Phonk",
    artistName: "S3XIN",
    albumName: "KRUR KURU",
    songDuration: "1:14",
    songNumber: "7",
    aboutTheArtistImage: "Images/Artist/7.jpg",
    monthlyListeners: "12,231,740",
    creditsMainArtist: "S3XIN",
    creditsMainArtist2: "Hertha",
    creditsComposer: "Star Rail",
    creditsAbout:
      "Can 'S3XIN' is a Phonk House and Brazilian Funk is a 20 years old producer from Türkiye. At the ag...",
  },
  {
    coverPath: "Images/Covers/8.jpg",
    songPath: "Music/8.aac",
    songName: "Lay All Your Love On Me",
    artistName: "ABBA",
    albumName: "Super Trouper",
    songDuration: "4:26",
    songNumber: "8",
    aboutTheArtistImage: "Images/Artist/8.jpg",
    monthlyListeners: "2,395,773",
    creditsMainArtist: "ABBA",
    creditsMainArtist2: "Benny Anderson",
    creditsComposer: "Bjorn Ulvaeus",
    creditsAbout:
      "ABBA, whose name is made up of the initials of the four members first names - Agnetha Fältskog...",
  },
  {
    coverPath: "Images/Covers/9.jpg",
    songPath: "Music/9.aac",
    songName: "Shayad - Lofi Flip",
    artistName: "VIBIE, Arijit Singh",
    albumName: "Shayad (Lofi Flip)",
    songDuration: "3:28",
    songNumber: "9",
    aboutTheArtistImage: "Images/Artist/9.jpg",
    monthlyListeners: "5,03,881",
    creditsMainArtist: "VIBIE",
    creditsMainArtist2: "Arijit Singh",
    creditsComposer: "Pritam",
    creditsAbout:
      "VIBIE is known for making every song in chill & ambient vibes.started music career in 2016, his...",
  },
  {
    coverPath: "Images/Covers/10.jpg",
    songPath: "Music/10.aac",
    songName: "Am I Dreaming",
    artistName: "Metro Boomin, A$AP Rocky",
    albumName: "METRO BOOMIN",
    songDuration: "4:16",
    songNumber: "10",
    aboutTheArtistImage: "Images/Artist/10.jpg",
    monthlyListeners: "23,208,1856",
    creditsMainArtist: "Metro Boomin",
    creditsMainArtist2: "A$AP Rocky",
    creditsComposer: "Rosiee",
    creditsAbout:
      "St. Louis-raised, Atlanta-based producer Metro Boomin is the master of street-oriented sound...",
  },
];

// Html integration
gridElement.forEach((element) => {
  console.log(element, songIndex);
  element.getElementsByClassName("songNumber")[0].innerHTML =
    songs[songIndex].songNumber;
  element.getElementsByTagName("img")[0].src = songs[songIndex].coverPath;
  element.getElementsByClassName("songName")[0].innerHTML =
    songs[songIndex].songName;
  element.getElementsByClassName("artistName")[0].innerHTML =
    songs[songIndex].artistName;
  element.getElementsByClassName("albumName")[0].innerHTML =
    songs[songIndex].albumName;
  element.getElementsByClassName("songDuration")[0].innerHTML =
    songs[songIndex].songDuration;
  songIndex++;
});

// Handel Play Pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    masterPlayGreen.src = `Images/pause.png`;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    masterPlayGreen.src = `Images/play.png`;
  }
});

masterPlayGreen.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    masterPlayGreen.src = `Images/pause.png`;
    document.getElementById("0").style.color = "#1ed760";
    document.getElementById("equalizers0").innerHTML =
      '<img class="size-4" src="Images/equaizerr.gif" alt="">';
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    masterPlayGreen.src = `Images/play.png`;
  }
});

// Listening to events

audioElement.addEventListener("timeupdate", () => {
  // Update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

// creating a master content change function
function masterChange() {
  jsMusicCover.src = `Images/Covers/${songIndex + 1}.jpg`;
  jsMusicSong.innerHTML = `${songs[songIndex].songName}`;
  jsMusicArtist.innerHTML = `${songs[songIndex].artistName}`;
  //Right Panel Change
  rightMusicCover.src = `Images/Covers/${songIndex + 1}.jpg`;
  rightMusicName.innerHTML = `${songs[songIndex].songName}`;
  rightaArtistName.innerHTML = `${songs[songIndex].artistName}`;
  rightaArtistName2.innerHTML = `${songs[songIndex].artistName}`;

  // About Change
  aboutTheArtistImage.src = `Images/Artist/${songIndex + 1}.jpg`;
  monthlyListeners.innerHTML = `${songs[songIndex].monthlyListeners}`;
  creditsMainArtist.innerHTML = `${songs[songIndex].creditsMainArtist}`;
  creditsMainArtist2.innerHTML = `${songs[songIndex].creditsMainArtist2}`;
  creditsComposer.innerHTML = `${songs[songIndex].creditsComposer}`;
  creditsAbout.innerHTML = `${songs[songIndex].creditsAbout}`;
  //Duration Change
  songTimerEnd.innerHTML = `${songs[songIndex].songDuration}`;
  // Queue
  if (songIndex >= 9) {
    queueSongArtist.innerHTML = `${songs[0].artistName}`;
    queueSongName.innerHTML = `${songs[0].songName}`;
    queueSongCover.src = `Images/Covers/1.jpg`;
  } else {
    queueSongArtist.innerHTML = `${songs[songIndex + 1].artistName}`;
    queueSongName.innerHTML = `${songs[songIndex + 1].songName}`;
    queueSongCover.src = `Images/Covers/${songIndex + 2}.jpg`;
  }
  //playing gif
  songNumber.innerHTML = `<img class="size-5" src="Images/equaizerr.gif" alt="">`;
}

Array.from(document.getElementsByClassName("gridElement")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      songIndex = parseInt(e.target.id);
      masterChange();
      console.log(songIndex);
      console.log(e.target);
      audioElement.src = `Music/${songIndex + 1}.aac`;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
      masterPlayGreen.src = `Images/pause.png`;
      songNumber.innerHTML = `<img class="size-5" src="Images/equaizerr.gif" alt="">`;
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex++;
  }
  masterChange();
  audioElement.src = `Music/${songIndex + 1}.aac`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
  masterPlayGreen.src = `Images/pause.png`;
  passingPlayingGreen();
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 9;
  } else {
    songIndex--;
  }
  masterChange();
  audioElement.src = `Music/${songIndex + 1}.aac`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
  masterPlayGreen.src = `Images/pause.png`;
  passingPlayingGreen();
});

// Creating masterVolume
masterVolume.addEventListener("change", () => {
  audioElement.volume = masterVolume.value / 100;
  if (audioElement.volume >= 0.5 && audioElement.volume <= 1.0) {
    volumeIcon.classList.remove("fa-volume-xmark");
    volumeIcon.classList.remove("fa-volume-low");
    volumeIcon.classList.add("fa-volume-high");
  } else if (audioElement.volume < 0.5 && audioElement.volume > 0.0) {
    volumeIcon.classList.remove("fa-volume-xmark");
    volumeIcon.classList.remove("fa-volume-high");
    volumeIcon.classList.add("fa-volume-low");
  } else if (audioElement.volume === 0.0) {
    volumeIcon.classList.remove("fa-volume-low");
    volumeIcon.classList.add("fa-volume-xmark");
  }
});
{
  function greenTextEqualizerReset() {
    document.getElementById("0").style.color = "rgb(156,163,175 )";
    document.getElementById("1").style.color = "rgb(156,163,175 )";
    document.getElementById("2").style.color = "rgb(156,163,175 )";
    document.getElementById("3").style.color = "rgb(156,163,175 )";
    document.getElementById("4").style.color = "rgb(156,163,175 )";
    document.getElementById("5").style.color = "rgb(156,163,175 )";
    document.getElementById("6").style.color = "rgb(156,163,175 )";
    document.getElementById("7").style.color = "rgb(156,163,175 )";
    document.getElementById("8").style.color = "rgb(156,163,175 )";
    document.getElementById("9").style.color = "rgb(156,163,175 )";
    document.getElementById("equalizers0").innerHTML = "1";
    document.getElementById("equalizers1").innerHTML = "2";
    document.getElementById("equalizers2").innerHTML = "3";
    document.getElementById("equalizers3").innerHTML = "4";
    document.getElementById("equalizers4").innerHTML = "5";
    document.getElementById("equalizers5").innerHTML = "6";
    document.getElementById("equalizers6").innerHTML = "7";
    document.getElementById("equalizers7").innerHTML = "8";
    document.getElementById("equalizers8").innerHTML = "9";
    document.getElementById("equalizers9").innerHTML = "10";
  }
  function greenTextEqualizer0() {
    greenTextEqualizerReset();
    document.getElementById("0").style.color = "#1ed760";
    document.getElementById("equalizers0").innerHTML =
      '<img class="size-4" src="Images/equaizerr.gif" alt="">';
  }
  function greenTextEqualizer1() {
    greenTextEqualizerReset();
    document.getElementById("1").style.color = "#1ed760";
    document.getElementById("equalizers1").innerHTML =
      '<img class="size-4" src="Images/equaizerr.gif" alt="">';
  }
  function greenTextEqualizer2() {
    greenTextEqualizerReset();
    document.getElementById("2").style.color = "#1ed760";
    document.getElementById("equalizers2").innerHTML =
      '<img class="size-4" src="Images/equaizerr.gif" alt="">';
  }
  function greenTextEqualizer3() {
    greenTextEqualizerReset();
    document.getElementById("3").style.color = "#1ed760";
    document.getElementById("equalizers3").innerHTML =
      '<img class="size-4" src="Images/equaizerr.gif" alt="">';
  }
  function greenTextEqualizer4() {
    greenTextEqualizerReset();
    document.getElementById("4").style.color = "#1ed760";
    document.getElementById("equalizers4").innerHTML =
      '<img class="size-4" src="Images/equaizerr.gif" alt="">';
  }
  function greenTextEqualizer5() {
    greenTextEqualizerReset();
    document.getElementById("5").style.color = "#1ed760";
    document.getElementById("equalizers5").innerHTML =
      '<img class="size-4" src="Images/equaizerr.gif" alt="">';
  }
  function greenTextEqualizer6() {
    greenTextEqualizerReset();
    document.getElementById("6").style.color = "#1ed760";
    document.getElementById("equalizers6").innerHTML =
      '<img class="size-4" src="Images/equaizerr.gif" alt="">';
  }
  function greenTextEqualizer7() {
    greenTextEqualizerReset();
    document.getElementById("7").style.color = "#1ed760";
    document.getElementById("equalizers7").innerHTML =
      '<img class="size-4" src="Images/equaizerr.gif" alt="">';
  }
  function greenTextEqualizer8() {
    greenTextEqualizerReset();
    document.getElementById("8").style.color = "#1ed760";
    document.getElementById("equalizers8").innerHTML =
      '<img class="size-4" src="Images/equaizerr.gif" alt="">';
  }
  function greenTextEqualizer9() {
    greenTextEqualizerReset();
    document.getElementById("9").style.color = "#1ed760";
    document.getElementById("equalizers9").innerHTML =
      '<img class="size-4" src="Images/equaizerr.gif" alt="">';
  }
}
function passingPlayingGreen() {
  if (songIndex == 0) {
    greenTextEqualizer0();
  }
  if (songIndex == 1) {
    greenTextEqualizer1();
  }
  if (songIndex == 2) {
    greenTextEqualizer2();
  }
  if (songIndex == 3) {
    greenTextEqualizer3();
  }
  if (songIndex == 4) {
    greenTextEqualizer4();
  }
  if (songIndex == 5) {
    greenTextEqualizer5();
  }
  if (songIndex == 6) {
    greenTextEqualizer6();
  }
  if (songIndex == 7) {
    greenTextEqualizer7();
  }
  if (songIndex == 8) {
    greenTextEqualizer8();
  }
  if (songIndex == 9) {
    greenTextEqualizer9();
  }
}
