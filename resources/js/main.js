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

window.addEventListener("scroll", animationUp);

function playlist(event) {
  document.querySelectorAll(".playlist_selector").forEach((button) => {
    button.classList.remove("playlist-selector-active");
  });

  event.target.classList.add("playlist-selector-active");

  document.querySelectorAll(".playlist").forEach((playlist) => {
    playlist.style.display = "none";
    playlist.style.zIndex = "0";
    playlist.classList.remove("active", "fadeInUp", "fadeOutUp");
  });

  const selectedPlaylistID = event.target.getAttribute("data-playlist");
  const selectedPlaylist = document.getElementById(selectedPlaylistID);

  selectedPlaylist.classList.add("active", "fadeInUp");
  selectedPlaylist.style.display = "block";
}

function intro() {
  const html = document.getElementById("html");
  html.classList.add("intro");
}

var buttonRU = document.getElementById("rus");
var buttonEN = document.getElementById("eng");

function handleClickbuttonRU() {
  const html = document.getElementById("html");
  var targetElement = document.getElementById("about_me");
  html.classList.remove("intro");
  targetElement.scrollIntoView({ behavior: "smooth" });
  // title page
  document.getElementsByClassName("name_title")[0].innerHTML = "Глеб Кияшко";
  document.getElementsByClassName("job_title")[0].innerHTML =
    "Основатель & <br> Звукорежиссер";
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
    "Founder & <br> Sound engineer";
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

buttonRU.addEventListener("click", handleClickbuttonRU);
buttonEN.addEventListener("click", handleClickbuttonEN);

function scrollToTop() {
  window.scrollTo(0, 0);
}

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", scrollToTop);

// line height faq
var faq = document.getElementsByClassName("faq")[0];

var faqHeight = faq.clientHeight;

var lineContainer4 = document.getElementsByClassName("line_container_4")[0];
lineContainer4.style.top = "calc(400% + " + faqHeight / 2 + "px)";

var line4 = document.getElementsByClassName("line_4")[0];
line4.style.height = faqHeight + "px";

var lineContainer5 = document.getElementsByClassName("line_container_5")[0];
lineContainer5.style.top = "calc(450% + " + faqHeight + "px)";

// social links stops in the middle of the contact me page
const socialLinks = document.getElementsByClassName("social_links_computer")[0];

window.addEventListener("scroll", function () {
  // Get the distance from the top of the viewport to the top of the .contact_me section
  var containerTop = document
    .querySelector(".contact_me")
    .getBoundingClientRect().top;

  // Check if the .contact_me section has reached the top of the viewport
  if (containerTop <= 0) {
    // Once the .contact_me section reaches the top, position the social links absolutely
    socialLinks.style.position = "absolute";
    socialLinks.style.top = "calc(450% + " + faqHeight + "px)"; // Adjust this value as needed
  } else {
    // Before the .contact_me section reaches the top, keep the social links fixed
    socialLinks.style.position = "fixed";
    socialLinks.style.top = "50%";
  }
});
