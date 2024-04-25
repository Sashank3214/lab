/*slide page*/
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2500); 
}

function changeSlide(n) {
  showSlides((slideIndex += n));
}


/* contact page */

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); 
  var formData = new FormData(this); 
  var xhr = new XMLHttpRequest(); 

  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      var responseElement = document.getElementById("response");
      if (xhr.status === 200) {
        responseElement.innerHTML = "Message sent successfully!";
      } else {
        responseElement.innerHTML = "An error occurred. Please try again.";
      }
    }
  };

  xhr.open("POST", "contact.php"); 
  xhr.send(formData); 
});



