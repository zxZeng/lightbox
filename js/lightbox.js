/**
 * Created by zx on 2017/11/23.
 */

(function lightbox(id) {
    let bag=$("#"+id+" figure");
    $("body").append(`<div class="zhezhao">
    <img src="img/1.jpg" alt="" id="zhezhaoImg"/>
        <div>
            <img src="img/close.png" alt="" id="lightBoxClose"/>
            <img src="img/toNext.png" alt="" id="lightBoxNext"/>
            <img src="img/toPre.png" alt="" id="lightBoxPrev"/>
        </div>
        <div class="lightBoxPage">
        <span id="currentPage"></span>/${bag.length}
        </div>
    </div>`);
    let currentImg;
    //bag.each(function(index,dom){
        //console.log(dom)
        $(bag).click(function(){
            $("body").css("overflow","hidden")
            $(".zhezhao").show();
            //currentImg=index;
            //alert($(this).index())
            currentImg=$(this).index();

            $("#currentPage").html(currentImg+1);
            $("#zhezhaoImg").attr("src",$(this).find("img")[0].src);
        });
    //});
    $("#lightBoxNext").click(function(){
         currentImg++;
        if(currentImg>=bag.length){
            currentImg=0;
        }
        $("#currentPage").html(currentImg+1);
        $("#zhezhaoImg")[0].src=bag[currentImg].firstElementChild.src;

    });
    $("#lightBoxPrev").click(function(){
        currentImg--;
        if(currentImg<0){
            currentImg=bag.length-1
        }
        $("#currentPage").html(currentImg+1);
        $("#zhezhaoImg")[0].src=bag[currentImg].firstElementChild.src;
    });
    $("#lightBoxClose").click(function(){
        $(".zhezhao").hide();
        $("body").css("overflow","inherit")
    });
})("lightbox");