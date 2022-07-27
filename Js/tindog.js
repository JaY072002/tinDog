$(document).ready(function () {
    $(".pricing-card").mouseenter(function () {
        $(this).css("borderRadius", "5%");
        $(this).css("transition", "1.2s");
    })
    $(".pricing-card").mouseleave(function () {
        $(this).animate({ borderRadius: "0%" }, 2000)
    })

})