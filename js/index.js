$("#container").fullpage({
    verticalCentered: false,
    anchors: ["p1", "p2", "p3", "p4", "p5","p6"],
    sectionsColor: ["#9DD0E5", "#9DD0E5", "#51BF87", "#f88", "#99f","#f6f"],
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
        if(index===3){
            $(".thpic").css("transform","scale(1,1)");
            $(".thnei").css("transform","scale(1,1)");
        }
        if(index===4){
            $(".fobox").css("transform","scale(1,1)");
            $(".thnei").css("transform","rotate(720deg)");
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
        if(index===3){
            $(".thpic").css("transform","scale(0,0)");
            $(".thnei").css("transform","scale(0,0)");
        }
        if(index===4){
            $(".fobox").css("transform","scale(0,0)");
        }
    }
});

{
let canvasObj=document.querySelectorAll("canvas");
function can(canvasObj,Max,color="#f66") {
    let cobj=canvasObj.getContext("2d");
    cobj.lineWidth=20;
    cobj.strokeStyle=color;
    cobj.font="30px 微软雅黑";
    cobj.textAlign="center";
    cobj.textBaseline="middle";
    cobj.lineCap="round";
    cobj.fillStyle="#fff";
    let n=0;
    function fn() {
        n++;
        if (n<Max){
            requestAnimationFrame(fn);
        }
        let angle=2*Math.PI*n/100-Math.PI/2;
        cobj.save();
        cobj.shadowColor="#999";
        cobj.shadowBlur="10";
        cobj.clearRect(0,0,200,200);
        cobj.beginPath();
        cobj.arc(100,100,60,-Math.PI/2,angle);
        cobj.stroke();
        cobj.fillText(n+"%",100,100);
    }
    fn();
}
can(canvasObj[0],90,"#f70");
can(canvasObj[1],78,"#7f0");
can(canvasObj[2],85,"#07f");
can(canvasObj[3],78,"#ff3f3e");
can(canvasObj[4],85,"#fff322");
}

{
    $(".next").click(function () {
        $(".section5 ul").transition({rotateY:"+=60"})
    });
    $(".prev").click(function () {
        $(".section5 ul").transition({rotateY:"-=60"})
    })
}
{
    let con=document.querySelector("#con");
    con.innerHTML="message"
    con.onfocus=function () {
        if (con.innerHTML=="message"){
            con.innerHTML=""
        }
    }
    con.onblur=function () {
        if (con.innerHTML===""||con.innerHTML==="message"){
            con.innerHTML="message"
        }
    }
}