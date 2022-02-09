// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }


// FADE IN FROM A YT VIDEO
// const faders = document.querySelectorAll('.fade-in')

// const checkpoint = 300;

// window.addEventListener("scroll", () => {
//   const currentScroll = window.pageYOffset;
//   if (currentScroll <= checkpoint) {
//     opacity = 1 - currentScroll / checkpoint;
//   } else {
//     opacity = 0;
//   }
//   document.querySelector(".top").style.opacity = opacity;
// });



// fade and scroll items 
// const appearOptions = {
//   threshold: 1,
//   rootMargin: "0px 0px -100px 0px"
// };

// const appearOnScroll = new IntersectionObserver
// (function(
//   entries, 
//   appearOnScroll
// ) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting){
//       return;
//     } else{
//       entry.target.classList.add('appear');
//       appearOnScroll.unobserve(entry.target);
//     }
//   });
    
// },
// appearOptions); 

// //to get it to work
// faders.forEach(fader => {
//   appearOnScroll.observe(fader);
// });


// grid
// const checkpoint = 500;

// window.addEventListener("scroll", () => {
//   const currentScroll = window.pageYOffset;
//   if (currentScroll <= checkpoint) {
//     opacity = 1 - currentScroll / checkpoint;
//   } else {
//     opacity = 0;
//   }
//   document.querySelector(".grid").style.opacity = opacity;
// });

// end grid


//           HTML
// <!--JAVASCRIPT COLLAPSE  -->
// <button type="button" class="collapsible">Open Collapsible</button>
// <div class="content">
//   <p>Lorem ipsum...</p>
// </div>
// <button type="button" onclick="alert('Hello world!')">Click Me!</button>
//   <!-- END COLLAPSE -->






//  CSS
//   /* JAVACRIPT COLLAPSE */

// /* Style the button that is used to open and close the collapsible content */
// .collapsible {
//     background-color: #eee;
//     color: #444;
//     cursor: pointer;
//     padding: 18px;
//     width: 100%;
//     border: none;
//     text-align: left;
//     outline: none;
//     font-size: 15px;
//   }
  


//   /* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
//   .active, .collapsible:hover {
//     background-color: #ccc;
//   }
  
//   /* Style the collapsible content. Note: hidden by default */
//   .content {
//     padding: 0 18px;
//     display: none;
//     overflow: hidden;
//     background-color: #f1f1f1;
//   }
// /* END COLLAPSE */

