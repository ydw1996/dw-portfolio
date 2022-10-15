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


  window.onload = () => {
  gsap.to(".main__logo", {
    opacity: 1,
    duration: 0.55,
    brightness: 2,
    delay: 0.55,
  })  
  gsap.to(".st05", {
    opacity: 1,
    duration: 0.08,
    delay: 0.08,
  })
  gsap.to(".st04", {
    opacity: 1,
    duration: 0.08,
    delay: 0.16,
  })
  gsap.to(".st03", {
    opacity: 1,
    duration: 0.08,
    delay: 0.24,
  })
  gsap.to(".st02", {
    opacity: 1,
    duration: 0.08,
    delay: 0.32,
  })
  gsap.to(".st01", {
    opacity: 1,
    duration: 0.08,
    delay: 0.4,
  })

  gsap.to(".st05", {
    opacity: 0,
    duration: 0.08,
    delay: 0.55,
  })
  gsap.to(".st04", {
    opacity: 0,
    duration: 0.08,
    delay: 0.63,
  })
  gsap.to(".st03", {
    opacity: 0,
    duration: 0.08,
    delay: 0.71,
  })
  gsap.to(".st02", {
    opacity: 0,
    duration: 0.08,
    delay: 0.79,
  })

}