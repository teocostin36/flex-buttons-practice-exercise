$(function () {
    $("div.list-item").click(function (){
        $(this).toggleClass("highlight");
        $("div.list-item").not(this).removeClass("highlight");
    });
});