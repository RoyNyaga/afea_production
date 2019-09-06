
$(document).ready(function(){
//    navbar toggle
    $(".nav-container").click(function () {
        $(".testing").toggleClass("toggling")
    })
    
//    smooth scroll
    $(".scrolling-link").click(function (link) {
        link.preventDefault();
        
        let target = $(this).attr("href");
        
        $("html, body").stop().animate({
            scrollTop: $(target).offset().top - 25
        }, 3000);
    })
})