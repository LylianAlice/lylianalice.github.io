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
  var flakesCount = 80; // Number of snowflakes to create

  for (var i = 0; i < flakesCount; i++) {
    var snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDelay = Math.random() * 20 + 's';
    snowfallDiv.appendChild(snowflake);
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
