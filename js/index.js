$("#container").fullpage({
    verticalCentered: false,
    anchors: ["p1", "p2", "p3", "p4", "p5","p6"],
    sectionsColor: ["#9DD0E5", "#9DD0E5", "red", "#f88", "#99f","#f6f"],
    scrollingSpeed: 1000,
    continuousVertical: true,
    fixedElements:"#menu",
    menu:"#menu",
    afterLoad:function(anchor,index){
        if (index===2){
            $(".onetop").css("transform","translateY(0)");
            $(".oneleft").css("transform","translateX(0)");
            $(".oneright").css("transform","translateX(0)");
        }
        if(index===1){
            $(".handimg").css("transform","translateY(0)");
            $(".message h3").css("transform","translateX(0)");
            $(".message p").css("transform","translateX(0)");
            $(".message em").css("transform","translateY(0)");
        }
    },
    onLeave:function(index){
        if (index===2){
            $(".onetop").css("transform","translateY(-200px)");
            $(".oneleft").css("transform","translateX(-1000px)");
            $(".oneright").css("transform","translateX(1000px)");
        }
        if(index===1){
            $(".handimg").css("transform","translateY(-600px)");
            $(".message h3").css("transform","translateX(-1000px)");
            $(".message p").css("transform","translateX(1000px)");
            $(".message em").css("transform","translateY(600px)");
        }
    }
});