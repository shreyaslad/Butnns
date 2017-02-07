$(document).ready(function(){
    $(document).scroll(function() {
        var alpha = Math.min(0.5 + 0.4 * $(this).scrollTop() / 210, 0.9);
        var channel = Math.round(alpha * 400);
        $("body").css('background-color', 'rgb(' + channel + ',' + channel + ',' + channel + ')');
    });
});
