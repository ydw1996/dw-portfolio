  window.onload = () => {

    let s = skrollr.init({
      smoothScrolling: true,
    });
    
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

/* sec02_A, B */
$(document).scroll(() => {
  if (window.scrollY >= 1700 && window.scrollY <= 3800) {
    if (!$(".sec02_A .A01").hasClass("visible")) {
      setTimeout(() => {
        $(".sec02_C .C01").removeClass("op");
        $(".sec02_A .A01").addClass("op");
        setTimeout(() => {
          $(".sec02_B .B01").addClass("op");
          setTimeout(() => {
            $(".sec02_A .A01").removeClass("op");
            setTimeout(() => {
              $(".sec02_A .A01").addClass("op");
              setTimeout(() => {
                $(".sec02_B .B01").removeClass("op");
              }, 15);
            }, 30);
          }, 45);
        }, 60);
      }, 75);
      $(".sec02_con .A01").addClass("visible");
    }
  } else if (window.scrollY <= 1200) {
    $(".sec02_con .A01").removeClass("visible");
    $(".sec02_con .A01").removeClass("op");
  } else if (window.scrollY >= 3800) {
    $(".sec02_con .A01").removeClass("visible");
    $(".sec02_con .A01").removeClass("op");
  }

  if (window.scrollY >= 1700 && window.scrollY <= 3800) {
    if (!$(".sec02_A .A02").hasClass("visible")) {
      setTimeout(() => {
        $(".sec02_C .C02").removeClass("op");
        $(".sec02_A .A02").addClass("op");
        setTimeout(() => {
          $(".sec02_B .B02").addClass("op");
          setTimeout(() => {
            $(".sec02_A .A02").removeClass("op");
            setTimeout(() => {
              $(".sec02_A .A02").addClass("op");
              setTimeout(() => {
                $(".sec02_B .B02").removeClass("op");
              }, 15);
            }, 30);
          }, 45);
        }, 60);
      }, 270);
      $(".sec02_con .A02").addClass("visible");
    }
  } else if (window.scrollY <= 1200) {
    $(".sec02_con .A02").removeClass("visible");
    $(".sec02_con .A02").removeClass("op");
  } else if (window.scrollY >= 3800) {
    $(".sec02_con .A02").removeClass("visible");
    $(".sec02_con .A02").removeClass("op");
  }

  if (window.scrollY >= 1700 && window.scrollY <= 3800) {
    if (!$(".sec02_A .A03").hasClass("visible")) {
      setTimeout(() => {
        $(".sec02_C .C03").removeClass("op");
        $(".sec02_A .A03").addClass("op");
        setTimeout(() => {
          $(".sec02_B .B03").addClass("op");
          setTimeout(() => {
            $(".sec02_A .A03").removeClass("op");
            setTimeout(() => {
              $(".sec02_A .A03").addClass("op");
              setTimeout(() => {
                $(".sec02_B .B03").removeClass("op");
              }, 15);
            }, 30);
          }, 45);
        }, 60);
      }, 360);
      $(".sec02_con .A03").addClass("visible");
    }
  } else if (window.scrollY <= 1200) {
    $(".sec02_con .A03").removeClass("visible");
    $(".sec02_con .A03").removeClass("op");
  } else if (window.scrollY >= 3800) {
    $(".sec02_con .A03").removeClass("visible");
    $(".sec02_con .A03").removeClass("op");
  }

  if (window.scrollY >= 1700 && window.scrollY <= 3800) {
    if (!$(".sec02_A .A04").hasClass("visible")) {
      setTimeout(() => {
        $(".sec02_C .C04").removeClass("op");
        $(".sec02_A .A04").addClass("op");
        setTimeout(() => {
          $(".sec02_B .B04").addClass("op");
          setTimeout(() => {
            $(".sec02_A .A04").removeClass("op");
            setTimeout(() => {
              $(".sec02_A .A04").addClass("op");
              setTimeout(() => {
                $(".sec02_B .B04").removeClass("op");
              }, 15);
            }, 30);
          }, 45);
        }, 60);
      }, 180);
      $(".sec02_con .A04").addClass("visible");
    }
  } else if (window.scrollY <= 1200) {
    $(".sec02_con .A04").removeClass("visible");
    $(".sec02_con .A04").removeClass("op");
  } else if (window.scrollY >= 3800) {
    $(".sec02_con .A04").removeClass("visible");
    $(".sec02_con .A04").removeClass("op");
  }

  if (window.scrollY >= 1700 && window.scrollY <= 3800) {
    if (!$(".sec02_A .A05").hasClass("visible")) {
      setTimeout(() => {
        $(".sec02_C .C05").removeClass("op");
        $(".sec02_A .A05").addClass("op");
        setTimeout(() => {
          $(".sec02_B .B05").addClass("op");
          setTimeout(() => {
            $(".sec02_A .A05").removeClass("op");
            setTimeout(() => {
              $(".sec02_A .A05").addClass("op");
              setTimeout(() => {
                $(".sec02_B .B05").removeClass("op");
              }, 15);
            }, 30);
          }, 45);
        }, 60);
      }, 450);
      $(".sec02_con .A05").addClass("visible");
    }
  } else if (window.scrollY <= 1200) {
    $(".sec02_con .A05").removeClass("visible");
    $(".sec02_con .A05").removeClass("op");
  } else if (window.scrollY >= 3800) {
    $(".sec02_con .A05").removeClass("visible");
    $(".sec02_con .A05").removeClass("op");
  }
});

/* sec02_C, D */
$(document).scroll(() => {
  if (window.scrollY >= 3800 && window.scrollY <= 5500) {
    if (!$(".sec02_C .C01").hasClass("visible")) {
      setTimeout(() => {
        $(".sec02_A .A01").removeClass("op");
        $(".sec02_C .C01").addClass("op");
        setTimeout(() => {
          $(".sec02_D .D01").addClass("op");
          setTimeout(() => {
            $(".sec02_C .C01").removeClass("op");
            setTimeout(() => {
              $(".sec02_C .C01").addClass("op");
              setTimeout(() => {
                $(".sec02_D .D01").removeClass("op");
              }, 15);
            }, 30);
          }, 45);
        }, 60);
      }, 75);
      $(".sec02_con .C01").addClass("visible");
    }
  } else if (window.scrollY <= 3700) {
    $(".sec02_con .C01").removeClass("visible");
    $(".sec02_con .C01").removeClass("op");
  } else if (window.scrollY >= 6000) {
    $(".sec02_con .C01").removeClass("visible");
    $(".sec02_con .C01").removeClass("op");
  }

  if (window.scrollY >= 3800 && window.scrollY <= 5500) {
    if (!$(".sec02_C .C02").hasClass("visible")) {
      setTimeout(() => {
        $(".sec02_A .A02").removeClass("op");
        $(".sec02_C .C02").addClass("op");
        setTimeout(() => {
          $(".sec02_D .D02").addClass("op");
          setTimeout(() => {
            $(".sec02_C .C02").removeClass("op");
            setTimeout(() => {
              $(".sec02_C .C02").addClass("op");
              setTimeout(() => {
                $(".sec02_D .D02").removeClass("op");
              }, 15);
            }, 30);
          }, 45);
        }, 60);
      }, 270);
      $(".sec02_con .C02").addClass("visible");
    }
  } else if (window.scrollY <= 3700) {
    $(".sec02_con .C02").removeClass("visible");
    $(".sec02_con .C02").removeClass("op");
  } else if (window.scrollY >= 6000) {
    $(".sec02_con .C02").removeClass("visible");
    $(".sec02_con .C02").removeClass("op");
  }

  if (window.scrollY >= 3800 && window.scrollY <= 5500) {
    if (!$(".sec02_C .C03").hasClass("visible")) {
      setTimeout(() => {
        $(".sec02_A .A03").removeClass("op");
        $(".sec02_C .C03").addClass("op");
        setTimeout(() => {
          $(".sec02_D .D03").addClass("op");
          setTimeout(() => {
            $(".sec02_C .C03").removeClass("op");
            setTimeout(() => {
              $(".sec02_C .C03").addClass("op");
              setTimeout(() => {
                $(".sec02_D .D03").removeClass("op");
              }, 15);
            }, 30);
          }, 45);
        }, 60);
      }, 360);
      $(".sec02_con .C03").addClass("visible");
    }
  } else if (window.scrollY <= 3700) {
    $(".sec02_con .C03").removeClass("visible");
    $(".sec02_con .C03").removeClass("op");
  } else if (window.scrollY >= 6000) {
    $(".sec02_con .C03").removeClass("visible");
    $(".sec02_con .C03").removeClass("op");
  }

  if (window.scrollY >= 3800 && window.scrollY <= 5500) {
    if (!$(".sec02_C .C04").hasClass("visible")) {
      setTimeout(() => {
        $(".sec02_A .A04").removeClass("op");
        $(".sec02_C .C04").addClass("op");
        setTimeout(() => {
          $(".sec02_D .D04").addClass("op");
          setTimeout(() => {
            $(".sec02_C .C04").removeClass("op");
            setTimeout(() => {
              $(".sec02_C .C04").addClass("op");
              setTimeout(() => {
                $(".sec02_D .D04").removeClass("op");
              }, 15);
            }, 30);
          }, 45);
        }, 60);
      }, 180);
      $(".sec02_con .C04").addClass("visible");
    }
  } else if (window.scrollY <= 3700) {
    $(".sec02_con .C04").removeClass("visible");
    $(".sec02_con .C04").removeClass("op");
  } else if (window.scrollY >= 6000) {
    $(".sec02_con .C04").removeClass("visible");
    $(".sec02_con .C04").removeClass("op");
  }

  if (window.scrollY >= 3800 && window.scrollY <= 5500) {
    if (!$(".sec02_C .C05").hasClass("visible")) {
      setTimeout(() => {
        $(".sec02_A .A05").removeClass("op");
        $(".sec02_C .C05").addClass("op");
        setTimeout(() => {
          $(".sec02_D .D05").addClass("op");
          setTimeout(() => {
            $(".sec02_C .C05").removeClass("op");
            setTimeout(() => {
              $(".sec02_C .C05").addClass("op");
              setTimeout(() => {
                $(".sec02_D .D05").removeClass("op");
              }, 15);
            }, 30);
          }, 45);
        }, 60);
      }, 450);
      $(".sec02_con .C05").addClass("visible");
    }
  } else if (window.scrollY <= 3700) {
    $(".sec02_con .C05").removeClass("visible");
    $(".sec02_con .C05").removeClass("op");
  } else if (window.scrollY >= 6000) {
    $(".sec02_con .C05").removeClass("visible");
    $(".sec02_con .C05").removeClass("op");
  }
});

/* slider_01 */
$(document).scroll(() => {
  if (window.scrollY >= 1700 && window.scrollY <= 5500) {
    if (!$(".slider_08").hasClass("picAni")) {
      $(".opening_01").addClass("picAni");
      $(".opening_02").addClass("picAni");
      $(".opening_03").addClass("picAni");
      $(".opening_04").addClass("picAni");
      $(".opening_05").addClass("picAni");
      /* slider */
      $(".slider_07").addClass("picAni");
      $(".slider_06").addClass("picAni");
      $(".slider_05").addClass("picAni");
      $(".slider_04").addClass("picAni");
      $(".slider_03").addClass("picAni");
      $(".slider_02").addClass("picAni");
      $(".slider_01").addClass("picAni");
    }
  } else if (window.scrollY < 1200) {
    $(".opening_01").removeClass("picAni");
    $(".opening_02").removeClass("picAni");
    $(".opening_03").removeClass("picAni");
    $(".opening_04").removeClass("picAni");
    $(".opening_05").removeClass("picAni");
    /* slider */
    $(".slider_07").removeClass("picAni");
    $(".slider_06").removeClass("picAni");
    $(".slider_05").removeClass("picAni");
    $(".slider_04").removeClass("picAni");
    $(".slider_03").removeClass("picAni");
    $(".slider_02").removeClass("picAni");
    $(".slider_01").removeClass("picAni");
  } else if (window.scrollY >= 6000) {
    $(".opening_01").removeClass("picAni");
    $(".opening_02").removeClass("picAni");
    $(".opening_03").removeClass("picAni");
    $(".opening_04").removeClass("picAni");
    $(".opening_05").removeClass("picAni");
    /* slider */
    $(".slider_07").removeClass("picAni");
    $(".slider_06").removeClass("picAni");
    $(".slider_05").removeClass("picAni");
    $(".slider_04").removeClass("picAni");
    $(".slider_03").removeClass("picAni");
    $(".slider_02").removeClass("picAni");
    $(".slider_01").removeClass("picAni");
  }
});