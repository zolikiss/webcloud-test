import 'bootstrap';
import style from "../scss/main.scss";
import LandingBg from '../images/landing-bg.png';
import ServicesTBg from '../images/services-title.png';
import PackagesBg from '../images/packages-bg.png';
import TestimonialsTBg from '../images/testimonials-title.png'
import ContactBg from '../images/contact-bg.png';
import IconDesign from '../images/ikon_design.svg';
import IconServer from '../images/ikon_szerver.svg';
import IconCustom from '../images/ikon_személyreszabott.svg';
import IconAnalitycs from '../images/ikon_analitycs.svg';
import IconFast from '../images/ikon_gyors.svg';
import IconPlans from '../images/ikon_plans.svg';
import Customer1 from '../images/customer.png';
import CustomerPh1 from '../images/customer-placeholder1.png';
import CustomerPh2 from '../images/customer-placeholder2.png';
import Clipped1 from '../images/card-bg-1.png';
import Clipped2 from '../images/card-bg-2.png';


$(document).ready(function() {

  //Offset and animation for navbar link

  $('.nav-link').click(function(){    
    let divId = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(divId).offset().top - 51.5
    }, 200);
  });

  //Contact form

  handleForm(); //Dynamically validates the input fields

  $("#contact-form")[0].reset(); //Resets the contact form after reload

  $("#contact-form").on("submit", function(event) {
    
    event.preventDefault();
    event.stopPropagation();
    
    var form = $('#contact-form');
    
    if (form[0].checkValidity() && validateEmail('#emailInput')) {
      event.stopPropagation();
      messageSent();
      form.addClass('was-validated');
      $.ajax({
        type: "POST",
        url: "",
        data: $(this).serialize()
      });
    }
    
    inputFeedback('#nameInput');
    inputFeedback('#emailInput');
    inputFeedback('#subjectInput');
    inputFeedback('#messageInput');
  });
});

function handleForm() {
  $('#nameInput').on('change keyup focusout', function() {
    inputFeedback('#nameInput');
  });
  $('#emailInput').on('change keyup', function() {
    inputFeedback('#emailInput');
  });
  $('#subjectInput').on('change keyup', function() {
    inputFeedback('#subjectInput');
  });
  $('#messageInput').on('change keyup', function() {
    inputFeedback('#messageInput');
  });
}

function inputFeedback(element) {  
  if (element === '#emailInput' && validateEmail(element)) {
    $(element).removeClass('is-invalid').addClass('is-valid');
  }
  else if (element != '#emailInput' && checkText(element)) {
    $(element).removeClass('is-invalid').addClass('is-valid');
  }
  else {
    $(element).removeClass('is-valid').addClass('is-invalid');
  }
}

function checkText(item) {
  return $(item).val();
}

function validateEmail(element) {
  var testRegExp = /\S+@\S+\.\S+/;
  return testRegExp.test($(element).val());
}

function messageSent() {
  $('#validation-msg')
      .removeClass('opacity-zero')
      .addClass('alert-success')
      .addClass('fadeIn');
}

//wowjs animations

const WOW = require('wowjs');

window.wow = new WOW.WOW({
  boxClass:     'wow',      // animated element css class (default is wow)
  animateClass: 'animated', // animation css class (default is animated)
  offset:       0,          // distance to the element when triggering the animation (default is 0)
  mobile:       true,       // trigger animations on mobile devices (default is true)
  live:         false,       // act on asynchronously loaded content (default is true)
  /*callback:     function(box) {
    // the callback is fired every time an animation is started
    // the argument that is passed in is the DOM node being animated
  },*/
  scrollContainer: null // optional scroll container selector, otherwise use window
});

window.wow.init();



