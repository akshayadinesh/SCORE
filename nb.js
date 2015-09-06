var main = function() {
    $('#search_criteria').hide();
    $('#post_div').hide();
    $('#post').click(function (e) {
        e.preventDefault();
        $('#post_div').toggle();
        $('#search_criteria').hide();
    });
    $('#search_button').click(function(e) {
        e.preventDefault();
        $('#search_criteria').toggle();
        $('#post_div').hide();
    });
    
    $('#go').click(function(e) {
        e.preventDefault();
        $(".post").hide();
        $(".newpost").hide();
        var search = $("#search_person option:selected").val();
        //alert(search);
        
        $(".post").each(function (i, el) {
            if ($(this).hasClass(search)) {
                $(this).show();
            } else if (search==="all") {
                $(".post").show();
            }
        });
        
        $('.newpost').each(function (i) {
            if($(this).hasClass(search)) {
                $(this).show();
            } else if (search==='all') {
                $('.post').show();
            }
        });
    });
    
    $('#post_submit').click(function(e) {
    e.preventDefault();       
    var person, recipient, school, post;
    person = $("#person option:selected").text();
    recipient = $("#recipient option:selected").text();
    school = $("#school option:selected").text();
    post = $('#post_text').val();
    var post_text = $('<p>I am a(n) <span>'+person+'</span> writing to <span>'+recipient+'</span> regarding <span>'+school+'</span>.<br><br>'+post+'</p>');
    $(post_text).addClass('newpost');
    $('#posts').prepend(post_text);
    switch($("#recipient option:selected").val()) {
        case 'teacher': $(post_text).addClass('teacher');
        case 'student': $(post_text).addClass('student');
        case 'administrator': $(post_text).addClass('administrator');
        case 'parent': $(post_text).addClass('parent');
        case 'other': $(post_text).addClass('other');
    };
    });
}

$(document).ready(main);