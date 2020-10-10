$(document).ready(function(){
    
    $(".top-right").click(function(){
        $(".open-menu-bg").css('visibility','visible');
        $(".open-menu").css('right','0');
        $(".plus-chat").css('display','none');
    })

    $(".login-box span").click(function(){
        $(".open-menu-bg").css('visibility','hidden');
        $(".open-menu").css('right','-100%');
        $(".plus-chat").css('display','block');
    })

    $('.open-menu').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    });
      


    var didScroll;

    $(window).scroll(function(){
        didScroll = true;
        if(didScroll){
            hasScrolled();
            didScroll = false;
        }
    })

    // setInterval(function(){
    //     if(didScroll){
    //         hasScrolled();
    //         didScroll = false;
    //     }
        
    // },100);
    
    function hasScrolled(){

        var windowWit = $(window).scrollTop();

        if(windowWit == 0){
            $("header").removeClass("on");
        }else{
            $("header").addClass("on");
        }
    }
})