$(function(){
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let birthday = "Sep 20, 2021 00:00:00",
      countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;

        // document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          let headline = document.getElementById("headline"),
              countdown = document.getElementById("countdown"),
              content = document.getElementById("content");

          headline.innerText = "It's my birthday!";
          countdown.style.display = "none";
          content.style.display = "block";

          clearInterval(x);
        }
        //seconds
      }, 0)
});
$(function(){
  $('.game_slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

});
// Accordion border js 
  $('.border_1').click(function(){
    $('.border_1').addClass('try')
    $('.border_2').removeClass('try')
    $('.border_3').removeClass('try')
    $('.border_4').removeClass('try')
  })
  $('.border_2').click(function(){
    $('.border_2').addClass('try')
    $('.border_1').removeClass('try')
    $('.border_3').removeClass('try')
    $('.border_4').removeClass('try')
  })
  $('.border_3').click(function(){
    $('.border_3').addClass('try')
    $('.border_1').removeClass('try')
    $('.border_2').removeClass('try')
    $('.border_4').removeClass('try')
  })
  $('.border_4').click(function(){
    $('.border_4').addClass('try')
    $('.border_1').removeClass('try')
    $('.border_2').removeClass('try')
    $('.border_3').removeClass('try')
  })
  