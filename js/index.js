$(document).ready(function(){
    // navbar 마우스오버
    $(".navbar_item").hover(function(){
        $(this).css('background-color', 'mediumseagreen');
        $(this).css('color','whitesmoke');
    }, function() {
        $(this).css('background-color', 'whitesmoke');
        $(this).css('color','mediumseagreen');
    });

    $("#nav_home").on('click', function(){
        $("#article_box").load("html/article.html");
    });
    
}); // .ready 종료