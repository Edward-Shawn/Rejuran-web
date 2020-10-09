$(document).ready(function(){
    
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