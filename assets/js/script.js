$(document).ready(function(){       
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 210) {
                    $("body").css('background-color', 'blue');
                } else {
                    $("body").css('background-color', 'red');
                }
            });
        });
