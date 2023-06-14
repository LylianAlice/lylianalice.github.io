/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

var snowfallDiv = document.getElementById('snowfall');

function createSnowflakes() {
  for (var i = 0; i < 40; i++) {
    var snowflake1 = document.createElement('div');
    snowflake1.className = 'snowflake1';
    snowflake1.style.left = Math.random() * 100 + 'vw';
    snowflake1.style.animationDelay = Math.random() * 20 + 's';
    snowfallDiv.appendChild(snowflake1);
  }

  for (var i = 0; i < 40; i++) {
    var snowflake2 = document.createElement('div');
    snowflake2.className = 'snowflake2';
    snowflake2.style.left = Math.random() * 100 + 'vw';
    snowflake2.style.animationDelay = Math.random() * 20 + 's';
    snowfallDiv.appendChild(snowflake2);
  }
}

createSnowflakes();

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('a[href^="#"]');
  
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', smoothScroll);
  }
  
  function smoothScroll(e) {
    e.preventDefault();
    
    var targetId = this.getAttribute('href');
    var targetElement = document.querySelector(targetId);
    
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  }
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});


document.getElementById("YES").addEventListener("click", function() {
  document.getElementById("nav-toggle").click();
});


document.getElementById("Goodbye").addEventListener("click", function() {
    var audio = document.getElementById("audio");
    audio.play();
});


function changeElementText() {
  var element = document.getElementById("seeya");
  element.textContent = "Hẹn gặp lại nhé, Akiko.";
}

document.addEventListener("DOMContentLoaded", function() {
  var content = document.querySelector(".content");
  content.classList.add("visible");

  setTimeout(function() {
    content.style.opacity = "1";
  }, 0);
});