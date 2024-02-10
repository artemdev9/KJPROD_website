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
  var targetElement = document.getElementById("about_me");
  targetElement.scrollIntoView({ behavior: "smooth" });
  // title page
  document.getElementsByClassName("quote")[0].innerHTML =
    '<h2 class="quote_left"><span class="main_work_margin">-</span>"Основная концепция моей работы -</h2>' +
    '<h2 class="quote_right">индивидуальный подход к каждому треку."</h2>';

  document.getElementsByClassName("name_title")[0].innerHTML = "Глеб Кияшко";
  document.getElementsByClassName("job_title")[0].innerHTML =
    "Основатель & <br> Звукорежиссер";
  // main_video_slide
  document.getElementsByClassName("main_video_slide_text_title")[0].innerHTML =
    "Зачем тебе со мной работать?";
  document.getElementsByClassName(
    "main_video_slide_text_first_p"
  )[0].innerHTML = `Работа микс инженера похожа на работу режиссера театра и кино.`;
  document.getElementsByClassName(
    "main_video_slide_text_second_p"
  )[0].innerHTML = `Он как будто выстраивает сцену.
    Раздает роли каждому инструменту, меняет их по ходу микса, чтобы то один инструмент привлек на себя
    внимание, то другой.
    Чтобы взаимодействуя друг с другом инструменты вели слушателя по миксу и разыгрывали перед ним аудио спектакль.`;
  document.getElementsByClassName(
    "main_video_slide_text_third_p"
  )[0].innerHTML = `Привлекать и удерживать
  внимание песней, это основная задача микс инженера. Находить задумки, которые вложил артист, и показывать их слушателю.
Эту концепция я перенял у лучших микс инженеров, и придерживаюсь ее в своей работе.`;
  const main_text = document.getElementsByClassName("main_video_slide_text")[0];
  main_text.classList.remove("main_video_slide_text_en");
  main_text.classList.add("main_video_slide_text_ru");
  const main_video = document.getElementsByClassName("main_video")[0];
  main_video.classList.remove("main_video_en");
  main_video.classList.add("main_video_ru");
  //mixes page
  document.getElementsByClassName("my_mixes_title")[0].innerHTML =
    "Послушай мои миксы";
  // contact me
  document.getElementsByClassName("contact_me_title")[0].innerHTML =
    "Свяжитесь со мной";
  document.getElementsByClassName("name")[0].placeholder = "имя";
  document.getElementsByClassName("email")[0].placeholder = "электронная почта";

  document.getElementsByClassName("message")[0].placeholder = "сообщение";
  document.getElementsByClassName("button_text")[0].innerHTML = "Отправить";
  // FAQ
  document.getElementsByClassName("faq_title")[0].innerHTML =
    "Часто задаваемые вопросы";
  document.getElementsByClassName("q1")[0].innerHTML =
    "Не нашел подходящие примеры сведения? Eсть еще!";
  document.getElementsByClassName("a1")[0].innerHTML =
    "Да, в плейлистах только часть моих работ, не всегда успеваю их обновлять.Напиши мне, и я скину свежие примеры в интересующем тебя стиле.";
  document.getElementsByClassName("q2")[0].innerHTML = "Сколько стоит?";
  document.getElementsByClassName("a2")[0].innerHTML =
    "Цена зависит от сложности вашего проекта - от 3.000₽ до 10.000₽.";
  document.getElementsByClassName("q1")[0].innerHTML = "Сколько ждать?";
  document.getElementsByClassName("a3")[0].innerHTML =
    "Срок выполнения 7-10 дней.";
  document.getElementsByClassName("q4")[0].innerHTML = "А если не понравится?";
  document.getElementsByClassName("a4")[0].innerHTML =
    "Перед началом мы тщательно обговорим, что вы хотите получить в итоге.Конечно, доступно внесение правок. Но если даже после них будет" +
    '"вообще не то,"' +
    " я возвращаю полную сумму.";
  document.getElementsByClassName("q5")[0].innerHTML = "Остались вопросы?";
  document.getElementsByClassName("a5")[0].innerHTML =
    "Напиши и я расскажу подробно все, что тебя интересует.";
  // footer
  document.getElementById(
    "certificate"
  ).innerHTML = `Международный сертификат <br> STEINBERG`;
  document.getElementById(
    "certificate2"
  ).innerHTML = `Международный сертификат <br> STEINBERG`;
  document.getElementsByClassName("vk")[0].style.display = "block";
  document.getElementsByClassName("vk")[1].style.display = "block";
  line_height();
}

function handleClickbuttonEN() {
  var targetElement = document.getElementById("about_me");
  targetElement.scrollIntoView({ behavior: "smooth" });
  // title page
  document.getElementsByClassName("quote")[0].innerHTML =
    '<h2 class="quote_left"><span class="main_work_margin">-</span>"The main concept of my work -</h2>' +
    '<h2 class="quote_right">an individual approach to each track."</h2>';

  document.getElementsByClassName("name_title")[0].innerHTML = "Gleb Kiashko";
  document.getElementsByClassName("job_title")[0].innerHTML =
    "Founder & <br> Sound engineer";
  //main_video_slide
  document.getElementsByClassName("main_video")[0].style.display = "none";
  document.getElementsByClassName("main_video_slide_text_title")[0].innerHTML =
    "How can I make your music truly stand out?";
  document.getElementsByClassName(
    "main_video_slide_text_first_p"
  )[0].innerHTML = `While many mix engineers aim for a good-sounding track, it's essential to realize that a good track alone is just one of many in a sea of thousands. So, what's the secret to making your music exceptional?`;
  document.getElementsByClassName(
    "main_video_slide_text_second_p"
  )[0].innerHTML = `I specialize in uncovering the unique essence of your music and enhancing it through my mixing skills. Whether it's a distinct vocal quality, an unconventional instrument tone, or an overall captivating sound, I delve into the heart of your music's vibe to craft a tailored sonic experience.`;
  document.getElementsByClassName(
    "main_video_slide_text_third_p"
  )[0].innerHTML = `
 If you're keen on adding an extra layer of brilliance to your track, don't hesitate to reach out to me. Let's collaborate and take your music to the next level!
  `;
  const main_text = document.getElementsByClassName("main_video_slide_text")[0];
  main_text.classList.remove("main_video_slide_text_ru");
  main_text.classList.add("main_video_slide_text_en");
  const main_video = document.getElementsByClassName("main_video")[0];
  main_video.classList.remove("main_video_ru");
  main_video.classList.add("main_video_en");
  //mixes page
  document.getElementsByClassName("my_mixes_title")[0].innerHTML =
    "My portfolio";
  // contact me
  document.getElementsByClassName("contact_me_title")[0].innerHTML =
    "Contact me";
  document.getElementsByClassName("name")[0].placeholder = "name";
  document.getElementsByClassName("email")[0].placeholder = "email";
  document.getElementsByClassName("message")[0].placeholder = "message";
  document.getElementsByClassName("button_text")[0].innerHTML = "send";
  // FAQ
  document.getElementsByClassName("faq_title")[0].innerHTML =
    "Frequently asked questions";
  document.getElementsByClassName("q1")[0].innerHTML =
    "Haven't found a mixing example that fits your track? ";
  document.getElementsByClassName("a1")[0].innerHTML =
    "Contact me. I have many more examples of my work that I can share with you. I am sure that you will be able to find an example that resonates with your music.";
  document.getElementsByClassName("q2")[0].innerHTML =
    "What is the price range for your services?";
  document.getElementsByClassName("a2")[0].innerHTML =
    "It depends on complexity of your project. Usually It's around 100$.";
  document.getElementsByClassName("q1")[0].innerHTML = "How long does it take?";
  document.getElementsByClassName("a3")[0].innerHTML =
    "Usually It takes around 7 days.";
  document.getElementsByClassName("q4")[0].innerHTML =
    "What will happen if I don't like the results?";
  document.getElementsByClassName("a4")[0].innerHTML =
    "Before starting our project, we will clearly outline our goals and expectations. If you are not satisfied with the results, I will make the necessary adjustments until you are completely satisfied. If you are still not satisfied, I can do a full refund.";
  document.getElementsByClassName("q5")[0].innerHTML =
    "Do you have any other questions? ";
  document.getElementsByClassName("a5")[0].innerHTML =
    "Contact me and we'll discuss everything in detail.";
  // footer
  document.getElementById(
    "certificate"
  ).innerHTML = `"Mastering Pro" from <br>Musicheads`;
  document.getElementById(
    "certificate2"
  ).innerHTML = `International certificate <br> STEINBERG`;
  document.getElementsByClassName("vk")[0].style.display = "none";
  document.getElementsByClassName("vk")[1].style.display = "none";
  line_height();
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

// there is a problem with slide 2 line height, for some reason it is not calculated correctly, there fore disturbing all the other lines
// function line_height() {
//   console.log("lines drawn");
//   // Get elements
//   const logo_page = document.getElementsByClassName("logo_page")[0];
//   const about_me = document.getElementsByClassName("about_me")[0];
//   const main_video_slide =
//     document.getElementsByClassName("main_video_slide")[0];
//   const my_mixes = document.getElementsByClassName("my_mixes")[0];
//   const faq = document.getElementsByClassName("faq")[0];
//   const contact_me = document.getElementsByClassName("contact_me")[0];
//   const footer_page = document.getElementsByClassName("footer_page")[0];
//   // Calculate heights
//   const logo_pageHeight = logo_page.getBoundingClientRect().height;
//   const about_meHeight = about_me.getBoundingClientRect().height;
//   const main_video_slideHeight =
//     main_video_slide.getBoundingClientRect().height;
//   const my_mixesHeight = my_mixes.getBoundingClientRect().height;
//   const faqHeight = faq.getBoundingClientRect().height;
//   const contact_meHeight = contact_me.getBoundingClientRect().height;
//   const footer_pageHeight = footer_page.getBoundingClientRect().height;

//   const lineContainer1 = document.getElementsByClassName("line_container_1")[0];
//   lineContainer1.style.top = "0px";
//   const line1 = document.getElementsByClassName("line_1")[0];
//   line1.style.height = logo_pageHeight + "px";

//   const lineContainer2 = document.getElementsByClassName("line_container_2")[0];
//   lineContainer2.style.top = logo_pageHeight + "px";
//   const line2 = document.getElementsByClassName("line_2")[0];
//   line2.style.height = about_meHeight + "px";

//   const lineContainer3 = document.getElementsByClassName("line_container_3")[0];
//   lineContainer3.style.top = logo_pageHeight + about_meHeight + "px";
//   const line3 = document.getElementsByClassName("line_3")[0];
//   line3.style.height = main_video_slideHeight + "px";

//   const lineContainer4 = document.getElementsByClassName("line_container_4")[0];
//   lineContainer4.style.top =
//     logo_pageHeight + about_meHeight + main_video_slideHeight + "px";
//   const line4 = document.getElementsByClassName("line_4")[0];
//   line4.style.height = my_mixesHeight + "px";

//   const lineContainer5 = document.getElementsByClassName("line_container_5")[0];
//   lineContainer5.style.top =
//     logo_pageHeight +
//     about_meHeight +
//     main_video_slideHeight +
//     my_mixesHeight +
//     "px";
//   const line5 = document.getElementsByClassName("line_5")[0];
//   line5.style.height = faqHeight + "px";

//   const lineContainer6 = document.getElementsByClassName("line_container_6")[0];
//   lineContainer6.style.top =
//     logo_pageHeight +
//     about_meHeight +
//     main_video_slideHeight +
//     my_mixesHeight +
//     faqHeight +
//     "px";
//   const line6 = document.getElementsByClassName("line_6")[0];
//   line6.style.height = contact_meHeight + "px";
// }

window.addEventListener("load", line_height);
window.addEventListener("resize", line_height);

window.addEventListener("scroll", function () {
  const logo_page = document.getElementsByClassName("logo_page")[0];
  const about_me = document.getElementsByClassName("about_me")[0];
  const main_video_slide =
    document.getElementsByClassName("main_video_slide")[0];
  const my_mixes = document.getElementsByClassName("my_mixes")[0];
  const faq = document.getElementsByClassName("faq")[0];
  const contact_me = document.getElementsByClassName("contact_me")[0];
  const footer_page = document.getElementsByClassName("footer_page")[0];
  // Calculate heights
  const logo_pageHeight = logo_page.getBoundingClientRect().height;
  const about_meHeight = about_me.getBoundingClientRect().height;
  const main_video_slideHeight =
    main_video_slide.getBoundingClientRect().height;
  const my_mixesHeight = my_mixes.getBoundingClientRect().height;
  const faqHeight = faq.getBoundingClientRect().height;
  const contact_meHeight = contact_me.getBoundingClientRect().height;
  const footer_pageHeight = footer_page.getBoundingClientRect().height;

  const socialLinks = document.getElementsByClassName(
    "social_links_computer"
  )[0];

  var containerTop = document
    .querySelector(".contact_me")
    .getBoundingClientRect().top;
  if (containerTop <= 0) {
    socialLinks.style.position = "absolute";
    socialLinks.style.top =
      logo_pageHeight +
      about_meHeight +
      main_video_slideHeight +
      my_mixesHeight +
      faqHeight +
      contact_meHeight / 2 +
      "px";
  } else {
    socialLinks.style.position = "fixed";
    socialLinks.style.top = "50vh";
  }
});
