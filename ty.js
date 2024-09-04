var i = 0;
var txt = ' I developed dynamic and interactive website that ensured high traffic,page views and user experience,resulting in 50% increase in sales revenue.I designed processes for clean ups and performance improvement that minimised downtime by 15%. SKILLS:  HTMLCSS/javascript/front end/backend/php/nodejs/reactjs/reactnative/flutter/dart';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}