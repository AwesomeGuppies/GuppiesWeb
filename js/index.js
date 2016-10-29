

$(function(){
    // 点击截图，跳转下一个页面
    $('.modal .button').click(function(){

        $(this).parents(".modal").hide();

        $(".imgSure").show();

        var imgSrc = $(this).next().find(".img").attr("src");

        console.log(imgSrc);

        $("#lastDiv").before('<div class="imgNum"><img src="' + imgSrc +  '"></div>');

        var imgNum = $(".imgNum").length;

        if(imgNum == 4){
            $('#lastDiv').hide();
        }

    });
    //
    $(".classInput").change(function(){
        $(this).parents(".container").hide();
        $(".imgSure").hide();
        $(".modal").show();
    });

});
