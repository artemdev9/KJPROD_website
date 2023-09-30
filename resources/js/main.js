// Define a function named "reveal"
function animationUp() {
  // Select all elements with the class "reveal" and store them in a NodeList

  var reveals = document.querySelectorAll(".animationUp"); // works

  // Iterate through each element with the class "reveal"
  for (var i = 0; i < reveals.length; i++) {
    // Calculate the height of the browser window
    var windowHeight = window.innerHeight;

    // Get the distance between the top of the current element and the top of the viewport
    var elementTop = reveals[i].getBoundingClientRect().top;

    // Define a threshold for an element to be considered visible (150 pixels)
    var elementVisible = 50;

    // Check if the top of the element is within the visible range of the window
    if (elementTop < windowHeight - elementVisible) {
      // If the element is within the visible range, add the "active" class to it
      reveals[i].classList.add("active");
    } else {
      // If the element is not within the visible range, remove the "active" class from it
      reveals[i].classList.remove("active");
    }
  }
}

function animationBackgroundColor() {
  var reveals = document.querySelectorAll(".animationBackgroundColor"); // works

  // Iterate through each element with the class "reveal"
  for (var i = 0; i < reveals.length; i++) {
    // Calculate the height of the browser window
    var windowHeight = window.innerHeight;

    // Get the distance between the top of the current element and the top of the viewport
    var elementTop = reveals[i].getBoundingClientRect().top;

    // Define a threshold for an element to be considered visible (150 pixels)
    var elementVisible = 150;

    // Check if the top of the element is within the visible range of the window
    if (elementTop < windowHeight - elementVisible) {
      // If the element is within the visible range, add the "active" class to it
      reveals[i].classList.add("active");
    } else {
      // If the element is not within the visible range, remove the "active" class from it
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", animationUp);
window.addEventListener("scroll", animationBackgroundColor);

var nameOfPlaylistPrev = "";
var nameOfPlaylistCurrent = "";

var elementOfPlaylistSelectorPrev = "";
var elementOfPlaylistSelectorCurrent = "";

var playlistShown = false;

function playlist(event) {
  if (nameOfPlaylistCurrent === "") {
    nameOfPlaylistCurrent = "spotify_playlist_selector";
    elementOfPlaylistSelectorCurrent = document.getElementsByClassName(
      "spotify_playlist_selector"
    )[0];
    elementOfPlaylistSelectorCurrent.classList.add("selector_active");
    showPlaylist();
  } else if (nameOfPlaylistCurrent !== event.target.classList[0]) {
    nameOfPlaylistPrev = nameOfPlaylistCurrent;
    nameOfPlaylistCurrent = event.target.classList[0];
    elementOfPlaylistSelectorPrev = elementOfPlaylistSelectorCurrent;
    elementOfPlaylistSelectorCurrent = document.getElementsByClassName(
      event.target.classList[0]
    )[0];
    hidePlaylist();
  }
}

window.onload = function () {
  playlist();
  handleClickbuttonEN();
};

function showPlaylist() {
  const playlistElement = document.getElementsByClassName("playlist")[0];
  var playlistContent;
  if (nameOfPlaylistCurrent === "soundcloud_playlist_selector") {
    playlistContent = `<iframe width="100%" height="450px" scrolling="no" style="overflow:hidden;border-radius:10px;"
    frameborder="no" allow="autoplay" onload="iframeLoaded()"
    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1646693317&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>`;
  } else if (nameOfPlaylistCurrent === "spotify_playlist_selector") {
    playlistContent = `<iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="450px"
    width="100%" style=" overflow:hidden;border-radius:10px;" onload="iframeLoaded()"
    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
    src="https://open.spotify.com/embed/playlist/0mAljitxKfatD65pbs8Uvy?utm_source=generator"></iframe>`;
  } else if (nameOfPlaylistCurrent === "applemusic_playlist_selector") {
    playlistContent = `<iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="450px"
    width="100%" style="border-radius:10px; height: 450px;" onload="iframeLoaded()"
    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
    src="https://embed.music.apple.com/ru/playlist/kj-prod/pl.u-6GNZtWqVr0K"></iframe>`;
  }
  playlistElement.innerHTML = playlistContent;
}

//async
async function hidePlaylist() {
  elementOfPlaylistSelectorPrev.classList.remove("selector_active");
  elementOfPlaylistSelectorCurrent.classList.add("selector_active");

  const playlistElement = document.getElementsByClassName("playlist")[0];
  playlistElement.classList.remove("fade-in-down-animation");
  playlistElement.classList.add("fade-out-down-animation");
  await sleep(500); // this number has to be the same as the fade out or less
  playlistElement.classList.remove("fade-out-down-animation");
  showPlaylist();
}

// runs the animation when the iframe is loaded
function iframeLoaded() {
  const playlistElement = document.getElementsByClassName("playlist")[0];
  playlistElement.classList.add("fade-in-down-animation");
}

// promise
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function intro() {
  const html = document.getElementById("html");
  html.classList.add("intro");
}

var buttonRU = document.getElementById("rus");
var buttonEN = document.getElementById("eng");

// Define a function to be executed when the button is clicked
function handleClickbuttonRU() {
  const html = document.getElementById("html");
  var targetElement = document.getElementById("about_me");
  html.classList.remove("intro");
  targetElement.scrollIntoView({ behavior: "smooth" });
  // title page
  document.getElementsByClassName("name_title")[0].innerHTML = "Глеб Кияшко";
  document.getElementsByClassName("job_title")[0].innerHTML =
    "Основатель, звукорежиссер";
  document.getElementsByClassName(
    "work_concept"
  )[0].innerHTML = `<span class="main_work_margin">-</span>"Главная концепция моей
  работы - <br> <span class="individual">индивидуальный</span> подход к каждому треку."`;
  document.getElementsByClassName("i_make")[0].innerHTML = "Создаю:";
  document.getElementsByClassName("list_1")[0].innerHTML =
    "живую структуру микса";
  document.getElementsByClassName("list_2")[0].innerHTML =
    "звук дополняющий настроение трека";
  document.getElementsByClassName("mix_end")[0].innerHTML =
    "Сделаю микс интересным для слушателя.";
  //mixes page
  document.getElementsByClassName("my_mixes_title")[0].innerHTML =
    "Послушай Мои Миксы";
  document.getElementsByClassName("main_video_slide_text_title")[0].innerHTML =
    "Зачем тебе со мной работать?";
  document.getElementsByClassName(
    "main_video_slide_text_first_p"
  )[0].innerHTML = ` <span class="individual">Работа микс инженера похожа на работу режиссера
    театра и кино.</span>`;
  document.getElementsByClassName(
    "main_video_slide_text_second_p"
  )[0].innerHTML = ` <span class="main_work_margin"></span>Он как будто выстраивает сцену.
    Раздает роли каждому инструменту, меняет их по ходу микса, чтобы то один инструмент привлек на себя
    внимание, то другой.
    Чтобы взаимодействуя друг с другом инструменты вели слушателя по миксу и разыгрывали перед ним <span
        class="individual">аудио
        спектакль.</span>`;
  document.getElementsByClassName(
    "main_video_slide_text_third_p"
  )[0].innerHTML = `<span class="main_work_margin"></span><span class="individual">Привлекать и удерживать
  внимание</span> песни, это основная задача микс инженера. Находить задумки,
которые вложил артист, и показывать их слушателю.
Эту концепция я перенял у топовых микс инженеров, и придерживаюсь ее в своей работе.`;
  const main_text = document.getElementsByClassName("main_video_slide_text")[0];
  main_text.classList.remove("main_video_slide_text_en");
  main_text.classList.add("main_video_slide_text_ru");
  const main_video = document.getElementsByClassName("main_video")[0];
  main_video.classList.remove("main_video_en");
  main_video.classList.add("main_video_ru");
  // contact me
  document.getElementsByClassName("title")[0].innerHTML = "Свяжитесь со мной";
  document.getElementsByClassName("contact_me_name_label")[0].innerHTML = "имя";
  document.getElementsByClassName("contact_me_name")[0].innerHTML = "имя";
  document.getElementsByClassName("contact_me_email_label")[0].innerHTML =
    "электронная почта";
  document.getElementsByClassName("contact_me_email")[0].innerHTML =
    "электронная почта";
  document.getElementsByClassName("contact_me_message_label")[0].innerHTML =
    "сообщение";
  document.getElementsByClassName("contact_me_message")[0].innerHTML =
    "сообщение";
  document.getElementsByClassName("btn")[0].innerHTML = "Отправить";
  // footer
  document.getElementById(
    "certificate"
  ).innerHTML = `Международный сертификат <br> STEINBERG`;
  document.getElementById(
    "certificate2"
  ).innerHTML = `Международный сертификат <br> STEINBERG`;
  document.getElementsByClassName("vk")[0].style.display = "block";
  document.getElementsByClassName("vk")[1].style.display = "block";
}

function handleClickbuttonEN() {
  const html = document.getElementById("html");
  var targetElement = document.getElementById("about_me");
  html.classList.remove("intro");
  targetElement.scrollIntoView({ behavior: "smooth" });
  // title page
  document.getElementsByClassName("name_title")[0].innerHTML = "Gleb Kiashko";
  document.getElementsByClassName("job_title")[0].innerHTML =
    "Founder, Sound engineer";
  document.getElementsByClassName(
    "work_concept"
  )[0].innerHTML = `<span class="main_work_margin">-</span>"The main concept of my work - <br> <span class="individual">an individual </span> approach to each track."`;
  document.getElementsByClassName("i_make")[0].innerHTML = "I create:";
  document.getElementsByClassName("list_1")[0].innerHTML =
    "a live mix structure";
  document.getElementsByClassName("list_2")[0].innerHTML =
    "sound that complements the mood of the track";
  document.getElementsByClassName("mix_end")[0].innerHTML =
    "I will make the mix interesting for the listener.";
  //mixes page
  document.getElementsByClassName("my_mixes_title")[0].innerHTML =
    "Listen to my mixes";
  //main_video_slide
  document.getElementsByClassName("main_video_slide_text_title")[0].innerHTML =
    "How can I make your music truly stand out?";
  document.getElementsByClassName(
    "main_video_slide_text_first_p"
  )[0].innerHTML = `<span class="main_work_margin"></span>While many mix engineers aim for a good-sounding track, it's essential to realize that a good track alone is just one of many in a sea of thousands. So, what's the secret to making your music exceptional?`;
  document.getElementsByClassName(
    "main_video_slide_text_second_p"
  )[0].innerHTML = `<span class="main_work_margin"></span>I specialize in uncovering the unique essence of your music and enhancing it through my mixing skills. Whether it's a distinct vocal quality, an unconventional instrument tone, or an overall captivating sound, I delve into the heart of your music's vibe to craft a tailored sonic experience.`;
  document.getElementsByClassName(
    "main_video_slide_text_third_p"
  )[0].innerHTML = `
  <span class="main_work_margin"></span>If you're keen on adding an extra layer of brilliance to your track, don't hesitate to reach out to me. Let's collaborate and take your music to the next level!
  `;
  const main_text = document.getElementsByClassName("main_video_slide_text")[0];
  main_text.classList.remove("main_video_slide_text_ru");
  main_text.classList.add("main_video_slide_text_en");
  const main_video = document.getElementsByClassName("main_video")[0];
  main_video.classList.remove("main_video_ru");
  main_video.classList.add("main_video_en");
  // contact me
  document.getElementsByClassName("title")[0].innerHTML = "Contact me";
  document.getElementsByClassName("contact_me_name_label")[0].innerHTML =
    "name";
  document.getElementsByClassName("contact_me_name")[0].innerHTML = "name";
  document.getElementsByClassName("contact_me_email_label")[0].innerHTML =
    "email";
  document.getElementsByClassName("contact_me_email")[0].innerHTML = "email";
  document.getElementsByClassName("contact_me_message_label")[0].innerHTML =
    "message";
  document.getElementsByClassName("contact_me_message")[0].innerHTML =
    "message";
  document.getElementsByClassName("btn")[0].innerHTML = "Send";
  // footer
  document.getElementById(
    "certificate"
  ).innerHTML = `"Mastering Pro" from <br>Musicheads`;
  document.getElementById(
    "certificate2"
  ).innerHTML = `International certificate <br> STEINBERG`;
  document.getElementsByClassName("vk")[0].style.display = "none";
  document.getElementsByClassName("vk")[1].style.display = "none";
}

// Attach the function to the button's click event
buttonRU.addEventListener("click", handleClickbuttonRU);
buttonEN.addEventListener("click", handleClickbuttonEN);

function scrollToTop() {
  window.scrollTo(0, 0);
}

// Add an event listener to call scrollToTop when the page finishes loading
window.addEventListener("load", scrollToTop);

//Script for the contact information input
const inputs = document.querySelectorAll(".input");
//function to add the class focus
function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}
//function to remove the class focus
function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}
//for each input eventlistners are added
inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

var handlerFired;
const socialLinks = document.getElementsByClassName("social_links_computer")[0];
window.addEventListener("scroll", function (e) {
  var containerTop = document
    .querySelector(".contact_me")
    .getBoundingClientRect().top;
  if (containerTop <= 0) {
    if (!handlerFired) {
      handlerFired = 1;
      socialLinks.style.position = "absolute";
      socialLinks.style.top = "450%";
    }
  }
  if (containerTop > 0) {
    handlerFired = 0;
    socialLinks.style.position = "fixed";
    socialLinks.style.top = "50%";
  }
});
