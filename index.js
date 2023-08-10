
$(".welcome-text").fadeIn(2000);
setTimeout(() => {
    $(".welcome-text").fadeOut(2000);
}, 4000);
const textElement = document.querySelector('.typing-text');
const textToType = "Apple Inc. is a multinational technology company headquartered in Cupertino, California. Founded on April 1, 1976, by Steve Jobs, Steve Wozniak, and Ronald Wayne, Apple has since grown into one of the world's most iconic and valuable corporations. Renowned for its innovative products, sleek design, and commitment to user experience, Apple has left an indelible mark on the consumer electronics and technology industries.";
const typingSpeed = 30; 

let charIndex = 0;

setTimeout( function typeText() {
    if (charIndex < textToType.length) {
        textElement.textContent += textToType.charAt(charIndex);
        charIndex++;

        if (textToType.charAt(charIndex - 1) === '\n') {
            setTimeout(typeText, typingSpeed * 10); 
        } else {
            setTimeout(typeText, typingSpeed);
        }
    }
}, 6000)

typeText();
let allVids = $("#myCarousel").find('.carousel-item');

allVids.each(function(index, el) {
  if (index !== 0) {
    $(this).find('video')[0].pause();
  }
});

$("#myCarousel").on('slide.bs.carousel', function(ev) {
  let slides = $(this).find('.carousel-item');
  let pvid = slides[ev.from].querySelectorAll('video')[0];
  let vid = slides[ev.to].querySelectorAll('video')[0];
  let isPlaying = vid.currentTime > 0 && vid.readyState > 2;

  vid.play();

  if (isPlaying) {
    pvid.pause();
  }
});
