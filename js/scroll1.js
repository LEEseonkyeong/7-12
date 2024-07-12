$(function () {
    var n = 0; //현재 보여지는 section page의 index 번호 0 1 2 3 4 
    var moving = false;


    $("html, body").on("mousewheel DOMMouseScroll", function (event) {
        // console.log(event);

        // mousewheel   down -120   up 120
        var delta = event.originalEvent.wheelDelta;
        console.log("delta : ", delta);

        //DOMMouseScroll   down 3   up -3
        var detail = event.originalEvent.detail;
        console.log("detail : ", detail);

        if (moving == false) {
            moving = true;

            var h = $(window).innerHeight();
            console.log("h : ", h);

            var con_top = $(".container").offset().top;
            console.log("con_top : ", con_top);


            //         -120            3   mousedown
            if (delta <= 0 || detail > 0) {

                if (n < 4) {
                    n++;
                    con_top -= h;
                } // if(n < 4)

                //                120           -3   mouseup
            } else if (delta > 0 || detail < 0) {

                if (n > 0) {
                    n--;
                    con_top += h;
                } // if(n > 0)

            } // if (delta <= 0 || detail > 0)

            console.log("n : ", n);
            console.log("con_top 1 : ", con_top);
        } // if moving false

        $(".container").animate({top: con_top}, 500, function () {
            moving = false;

            $(".btn_group li").removeClass("on");
            $(".btn_group li").eq(n).addClass("on");

            if(n != 0){
                $(".f_nav").addClass("on");
                $(".nav").addClass("on");
            } else {
                $(".f_nav").removeClass("on");
                $(".nav").removeClass("on");
            } //

        }) // 

    }) // mousewheel DOMMouseScroll
    // mousewheel안드로이드, DOMMouseScroll애플

    $(".nav a, .f_nav a, .btn_group a").click(function () {
        var n = $(this).parent().index();
        if(n != 0){
            $(".f_nav").addClass("on");
            $(".nav").addClass("on");
        } else {
            $(".f_nav").removeClass("on");
            $(".nav").removeClass("on");
        } //


        $(".btn_group li").removeClass("on");
        $(".btn_group li").eq(n).addClass("on");

        var con_top = -n * $(window).innerHeight();
        $(".container").animate({top: con_top}, 500);

    }) // click

    $(window).resize(function(){
        resize();
    }) // resize

    function resize(){
        var con_top = -n * $(window).innerHeight();
        $(".container").css({top: con_top});
        $(".container .page").css({width: window.innerWidth, height: window.innerHeight});

    }



}) //jQuery