
$(document).ready(function(){
  $("div").scroll(function(){
    $("span").content( x+= 1);
  });
});

console.log("worked! homework#19");

function fade() {
  $('.preloader').fadeOut("slow");
  }
  setTimeout(fade, 1500);
  
  $(".search").on("click", function(){
    $(".search").toggleClass("active");
    if ($(".search").hasClass("active")) {
      $(".searchBar").css("height", "30vh");
      $("#searchForm").css("opacity","1");
      $(".searchIcon").removeClass("fa-search").addClass("fa-times");
    }
    else {
      $(".searchBar").css('height', "0vh");
      $("#searchForm").css("opacity","0");
      $(".searchIcon").removeClass("fa-times").addClass("fa-search");
    }
  });
  
  $(".toggle").click(function(){
    $(this).find(".toggleContainer").toggleClass("active");
    $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
  });


  $(".laptop-img").hover(function() {
    $(".laptop-img").animate(
      { deg: 360 },
      {
        duration: 2100,
        step: function(now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)' });
        }
      }
    );
  });

  $(".laptop-img2").hover(function() {
    $(".laptop-img2").animate(
      { deg: 360 },
      {
        duration: 2100,
        step: function(now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)' });
        }
      }
    );
  });