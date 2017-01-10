$(document).ready(function() {
    $(".answer").hide();
    $(".topic").click(function() {
        $(".answer").hide();
        $("a").next(".topic").css("background", "yellow");
            $(this).next(".answer").fadeToggle(100);

        });
    $(".up").click(function() {
        $(".answer").hide();
    });
});