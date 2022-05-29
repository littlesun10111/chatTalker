$(document).ready(
    function(){
        $(window).scroll(function(){
            if($(this).scrollTop()>100){
                $('#toTop').show().fadeIn();
            }else{
                $('#toTop').fadeOut().hide();
            }
        })
        $('#toTop').click(function(){
            $('html,body').animate({scrollTop:0},800);
        })

        $('.tab-group li').first().addClass('active');
        
        

        $('.tab-group li').click(function(){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            
            $('.people').text(function(){
                var people = $('.tab-group li.active').children().text();
                return people;
            });
            
            $('.basicMoney').text(function(){
                var money = parseInt($('.tab-group li.active').children().text());
                return money*0.06;
            })

            $('.normalMoney').text(function(){
                var money = parseInt($('.tab-group li.active').children().text());
                return money*0.16;
            })
        })

        $('.tab-group li').last().click(function(){
            $('.basicMoney').text(function(){
                return '洽客服';
            })

            $('.normalMoney').text(function(){
                return '洽客服';
            })
        })

        $('.qa-item').click(function(){
            $(this).children('.answer-heading').toggleClass('open');
            $(this).children('.answer-txt').slideToggle().show();
        })
    }
)

var swiper = new Swiper(".comment-content", {
    pagination: {
      el: ".comment-pagination",
    },
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    }
  });