// /* 메인 TXT오프닝 시작*/
// $(document).ready(function () {
//   var jbTime = 60;
//   $(".st07").animate({ opacity: "1" }, jbTime, function () {
//     $(".st06").animate({ opacity: "1" }, jbTime, function () {
//       $(".st05").animate({ opacity: "1" }, jbTime, function () {
//         $(".st04").animate({ opacity: "1" }, jbTime, function () {
//           $(".st03").animate({ opacity: "1" }, jbTime, function () {
//             $(".st02").animate({ opacity: "1" }, jbTime, function () {
//               $(".st01").animate({ opacity: "1" }, jbTime, function () {
//                 $("h1").animate({ opacity: "1" }, jbTime);
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });
// /* 메인 TXT오프닝 퇴장*/
// $(document).ready(function () {
//   var jbTime = 200;
//   $(".st07").animate({ opacity: "0" }, jbTime, function () {
//     $(".st06").animate({ opacity: "0" }, jbTime, function () {
//       $(".st05").animate({ opacity: "0" }, jbTime, function () {
//         $(".st04").animate({ opacity: "0" }, jbTime, function () {
//           $(".st03").animate({ opacity: "0" }, jbTime, function () {
//             $(".st02").animate({ opacity: "0" }, jbTime, function () {
//               $(".st01").animate({ opacity: "0" }, jbTime, function () {
//                 $("h1").animate({ opacity: "1" }, jbTime);
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });
var obj = $('.main__logo img');
  window.onload = () => {
  gsap.fromTo(".main__logo img",{y: 1500, transform: 'scale(2.5)',}, {
    duration: 1,
    delay: 0.2,
    ease: "circ.out",
    y: 0,
    transform: 'scale(1)',
  })
  gsap.to(".main__logo img", {
    duration: 0.5,
    filter: 'brightness(3)',
    ease: "circ.out",
    delay: 1.02,
  })
  gsap.to(".main__logo img", {
    duration: 0.8,
    filter: 'brightness(1)',
    ease: "circ.out",
    delay: 1.52,
  })  
  gsap.to(".st05", {
    opacity: 1,
    duration: 0.08,
    delay: 0.7,
  })
  gsap.to(".st04", {
    opacity: 1,
    duration: 0.08,
    delay: 0.78,
  })
  gsap.to(".st03", {
    opacity: 1,
    duration: 0.08,
    delay: 0.86,
  })
  gsap.to(".st02", {
    opacity: 1,
    duration: 0.08,
    delay: 0.94,
  })
  gsap.to(".st01", {
    opacity: 1,
    duration: 0.08,
    delay: 1.02,
  })
  gsap.to(".st05", {
    opacity: 0,
    duration: 0.08,
    delay: 1.1,
  })
  gsap.to(".st04", {
    opacity: 0,
    duration: 0.08,
    delay: 1.18,
  })
  gsap.to(".st03", {
    opacity: 0,
    duration: 0.08,
    delay: 1.26,
  })
  gsap.to(".st02", {
    opacity: 0,
    duration: 0.08,
    delay: 1.34,
  })
  gsap.to("header", {
    opacity: 1,
    duration: 1,
    ease: "circ.out",
    delay: 0.8,
  })
  gsap.to(".header__logo__box ", {
    duration: 1,
    rotation: 360,
    ease: "circ.out",
    delay: 0.8,
  })
}

