import 'bootstrap';
//import WOW from 'wowjs';
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
import ArrowDown from '../images/arrow-down.svg';
import ArrowLeft from '../images/arrow-left.svg';
import ArrowRight from '../images/arrow-right.svg';
import Customer1 from '../images/customer.png';
import CustomerPh1 from '../images/customer-placeholder1.png';
import CustomerPh2 from '../images/customer-placeholder2.png';
import Stars from '../images/stars.svg';
import Clipped1 from '../images/clipped-bg-1.svg';
import Clipped2 from '../images/clipped-bg-2.svg';


$(document).ready(function() {

  $('.nav-link').click(function(){    
    let divId = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(divId).offset().top - 51.5
    }, 200);
  });

  console.log("jQuery loaded");
});


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

console.log('wowjs loaded');