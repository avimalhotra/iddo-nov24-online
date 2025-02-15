$(function(){

    $(".wrap-5 .btn").click(function(){
        $(".wrap-5 .btn").removeClass("active");
        $(this).addClass("active");

        const txt=$(this).text();
        if(txt=="All"){
            $(".all").fadeIn();
        }
        else if(txt=="Website"){
            $(".all").fadeOut(0);
            $(".web").fadeIn();
        }
        else if(txt=="Branding"){
            $(".all").fadeOut(0);
            $(".brand").fadeIn();
        }
    });

    $(".wrap-5 .seemore").click(function(){
        $(this).children("span").toggleClass("fa-minus-circle");
        $(".wrap-5 .hide").fadeToggle();
    });

    $(".wrap-7 .seemore").click(function(){
        $(this).children("span").toggleClass("fa-minus-circle");
        $(".wrap-7 .hide").slideToggle();
    });

    $(".accordion a").click(function(e){
        e.preventDefault();

        $(".accordion a").removeClass("active");
        $(this).addClass("active");
        $(".accordion p").slideUp();
        $(this).next("p").slideDown();

    });


    $(".wrap-13 button").click(function(){
        $("html,body").animate({scrollTop:0})
    });


    $(".menu").click(function(){
        $(this).toggleClass("active");
        $(".collapse").slideToggle();
    });


    if(screen.width<768){
        $("nav a").click(function(){
            $(".menu").removeClass("active");
            $(".collapse").slideUp();
        })
    }


    $(".signup").click(function(){
        $("body").append(`<div class="overlay"></div>`);
        $("body").append(`<div class="popup"></div>`);
        const form=$(".hiddenform").html();
        $(".popup").append(form);
        $("body").css({"overflow-y":"hidden"});
        $(".popup input:first").trigger("focus");
        
        $(".popup .close").click(function(){
            $(".popup, .overlay").remove();
            $("body").css({"overflow-y":"auto"});
        });
        $(window).keyup(function(e){
            if(e.which==27){ $(".popup, .overlay").remove(); $("body").css({"overflow-y":"auto"}); }
        });
    });

    $(".banner button, .banner a").click(function(e){
        e.preventDefault();
        $("body").append(`<div class="overlay"></div>`);
        $("body").append(`<div class="popup"><button class="close"><span class="fa fa-times-circle"></span></button></div>`);

        const video=`<iframe width="560" height="315" src="https://www.youtube.com/embed/tQJ4-e-qQVY?si=nBl8RaFv0U3CE9U8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;

        $(".popup").append(video);


        $(".popup .close").click(function(){
            $(".popup, .overlay").remove();
            $("body").css({"overflow-y":"auto"});
        });
    });



    $(".reviews").bxSlider({
        controls:false,
        auto:true,
        pause:5000,
        autoHover:true
    });

   
});