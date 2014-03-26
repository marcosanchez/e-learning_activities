/*--Drag and drop--*/
function create_drag_drop(answers_options,answers_place,check_button,reset_button,answer_button,questions_amount,answers_amount){
    var array_width = new Array();
    var array_height = new Array();
    $(".box").each(function(index) {
        array_width.push($(this).innerWidth());
        array_height.push($(this).innerHeight());
        if($(this).html().length > 1){
            $(this).css('background','#FFC742');
            $(this).css('color','#333');
            $(this).css('cursor','pointer');
        }else{
            $(this).html("&nbsp;");
        }
    });
    $(".box").css('width',Math.max.apply(Math,array_width));
    $(".box").css('height',Math.max.apply(Math,array_height)-1);

    $("body").droppable({
        drop: function(event, ui) {
            $(ui.draggable).css("left",0);
            $(ui.draggable).css("top",0);
        }
    });

    answer_button.hide();
    reset_button.hide();
    check_button.css('position','relative');

    answers_options.find('.answer_par').each(function( key, element) {
        $(element).draggable();
    });

    var answered_4_1 = false;

    var questions_4_1 = questions_amount;

    var answers_4_1 = answers_amount;

    for (qu in questions_4_1) {
        questions_4_1[qu]['answer'] = 0;
    }

    answers_place.find('.box').each(function( key, element) {
        $(element).droppable({
            accept: ".answer_options_4_1 .answer_par",
            drop: function(event, ui) {
                $(this).css("background-color","#FFC742");
                $(this).css("color","#333");
                $(this).html($(ui.draggable).html());
                $(ui.draggable).css("left",0);
                $(ui.draggable).css("top",0);
                $(ui.draggable).css("visibility","hidden");
                $(this).css("opacity",1);
                $(this).droppable( "disable");
                $(ui.draggable).draggable("disable");

                answered_4_1 = true;
                var correct_answer = answers_4_1[$(this).droppable().data('question')];
                var selected_answer = $(ui.draggable).data('option');

                var question = questions_4_1[$(this).droppable().data('question')];
                question['answer'] = selected_answer;
            }
        });
    });

    check_button.click(function () {
        answers_place.find('.box').each(function( key, element) {
            var correct_answer = answers_4_1[$(element).data('question')];
            var selected_answer = questions_4_1[$(element).data('question')]['answer'];

            if (selected_answer) {
                $(element).parent().find('.good_icon').parent().addClass('activity_span');
                if (correct_answer == selected_answer) {
                    $(element).parent().find('.good_icon').parent().fadeIn('normal').css("display","inline-block");
                    $(element).parent().find('.good_icon').fadeIn('normal').css("display","inline-block");
                    $(element).parent().find('.wrong_icon').css('display','none');
                } else {
                    $(element).parent().find('.wrong_icon').parent().fadeIn('normal').css("display","inline-block");
                    $(element).parent().find('.wrong_icon').fadeIn('normal').css("display","inline-block");
                    $(element).parent().find('.good_icon').css('display','none');
                }
            }
        });

        if(answered_4_1){
            answer_button.fadeIn();
            check_button.css('display', 'none');
            reset_button.fadeIn();

            answers_options.find('.answer_par').each(function( key, element) {
                $(element).draggable("disable");
            });
        }
    });

    reset_button.click(function () {
        answered_4_1 = false;
        for (qu in questions_4_1) {
            questions_4_1[qu]['answer'] = 0;
        }
        answers_place.find('.good_icon, .wrong_icon').parent().fadeOut("normal");

        answers_options.find('.answer_par').each(function( key, element) {
            $(element).css("visibility","visible");
            $(element).draggable("enable");
        });

        answers_place.find('.box').each(function( key, element) {
            $(element).css("background-color","#DDD");
            $(element).html("&nbsp;");
            $(element).droppable("enable");
        });

        answer_button.hide();
        check_button.fadeIn();
        $(this).hide();
    });

    answer_button.click(function () {
        for (question in questions_4_1) {
            var correct_answer = answers_4_1[question];
            var user_answer = questions_4_1[question]['answer'];
            var answer_text = answers_options.find("[data-option='" + correct_answer + "']").text();

            if (user_answer) {
                answers_place.find("[data-question='" + question + "']").css({"background-color":"#00B050","color":"#FFF"}).html(answer_text);
            }
        }

        answers_place.find('.good_icon, .wrong_icon').parent().fadeOut("normal");
    });
}
/*--Drag and drop--*/

create_drag_drop (
    $('.answer_options_4_1'),
    $('.answers_place_4_1'),
    $('#check_answers_4_1'),
    $('#reset_answers_4_1'),
    $('#answers_4_1'),
    {
        'question_4_1_1' : {},
        'question_4_1_2' : {},
        'question_4_1_3' : {},
        'question_4_1_4' : {},
        'question_4_1_5' : {},
        'question_4_1_6' : {},
        'question_4_1_7' : {}
    },
    {
        'question_4_1_1': '2',
        'question_4_1_2': '1',
        'question_4_1_3': '3',
        'question_4_1_4': '4',
        'question_4_1_5': '5',
        'question_4_1_6': '6',
        'question_4_1_7': '7'
    }
);
