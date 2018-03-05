//jQuery is required to run this code
$(document).ready(function(){
/*     $(window).on('scroll', function(){
        if($(window).scrollTop()){
            $('nav').addClass('semi-dark');
        }
        else{
            $('nav').removeClass('semi-dark');
        }
     });*/
    
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        } 
    });

});
