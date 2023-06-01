jQuery(document).ready(function($){

    $('.close_popup').on('click', function() {
    	$('.popup').fadeOut();
    });

    $('.ques .prev').on('click', function() {
      $(this).parents('.ques').removeClass('active').prev('.ques').addClass('active');
    });

    $('.list_reply span').on('click', function() {
      if($(this).prev('input').prop('checked', true)) {
         $(this).parents('.ques').find('button.next').addClass('active');
      } else {
         $(this).parents('.ques').find('button.next').removeClass('active');
      }

      $('.ques .next.active').on('click', function() {
        $(this).parents('.ques').removeClass('active').next('.ques').addClass('active');

        if($('.ques_eight').hasClass('active')) {
          $('.gh_mk').show();
        } else {
          $('.gh_mk').hide();
        }
      });

    });

    $('.call_privacy').on('click', function() {
      $('.popup_privacy').fadeIn();
      
    });

    $('.call_test').on('click', function() {
      $('.popup_test').fadeIn();
    });

    
    
});