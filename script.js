$(document).ready(function(){
    $('.menu-btn').click(function(){
        $("#contact-container").removeClass("contact-box")
        $("#contact-container").addClass("contact-box2")
        $("#gallery-container").removeClass("gallery-box")
        $("#gallery-container").addClass("gallery-box2")
        $("#box-tarolo").removeClass("main-box")
        $("#box-tarolo").addClass("main-box2")
        $('.side-bar').addClass('active');  
        $('.menu-btn').css("visibility", "hidden");
    });

    $('.close-btn').click(function(){
        $("#contact-container").removeClass("contact-box2")
        $("#contact-container").addClass("contact-box")
        $("#gallery-container").removeClass("gallery-box2")
        $("#gallery-container").addClass("gallery-box")
        $('.side-bar').removeClass('active');
        $("#box-tarolo").removeClass("main-box2")
        $("#box-tarolo").addClass("main-box")
        $('.menu-btn').css("visibility", "visible");
    });
});