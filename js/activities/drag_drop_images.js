/*--Drag and drop images--*/
function create_drag_drop_images(answers_options,answers_place,check_button,reset_button,answer_button,questions_amount,answers_amount){
    var array_width = new Array();
    var array_height = new Array();
    $(".box_img").each(function(index) {
        array_width.push($(this).innerWidth());
        array_height.push($(this).innerHeight());
        if($(this).html().length > 1){
            $(this).css('cursor','pointer');
        }else{
            $(this).html("&nbsp;");
        }
    });
    $(".box").css('width',Math.max.apply(Math,array_width));
    $(".box").css('height',Math.max.apply(Math,array_height));

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

    var answered_8_1 = false;

    var questions_8_1 = questions_amount;

    var answers_8_1 = answers_amount;

    for (qu in questions_8_1) {
        questions_8_1[qu]['answer'] = 0;
    }

    answers_place.find('.box_img').each(function( key, element) {
        $(element).droppable({
            accept: ".answer_options_8_1 .answer_par",
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

                answered_8_1 = true;
                var correct_answer = answers_8_1[$(this).droppable().data('question')];
                var selected_answer = $(ui.draggable).data('option');

                var question = questions_8_1[$(this).droppable().data('question')];
                question['answer'] = selected_answer;
            }
        });
    });

    check_button.click(function () {
        answers_place.find('.box_img').each(function( key, element) {
            var correct_answer = answers_8_1[$(element).data('question')];
            var selected_answer = questions_8_1[$(element).data('question')]['answer'];

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

        if(answered_8_1){
            answer_button.fadeIn();
            check_button.css('display', 'none');
            reset_button.fadeIn();

            answers_options.find('.answer_par').each(function( key, element) {
                $(element).draggable("disable");
            });
        }
    });

    reset_button.click(function () {
        answered_8_1 = false;
        for (qu in questions_8_1) {
            questions_8_1[qu]['answer'] = 0;
        }
        answers_place.parent().find('.good_icon, .wrong_icon').parent().fadeOut("normal");

        answers_options.find('.answer_par').each(function( key, element) {
            $(element).css("visibility","visible");
            $(element).draggable("enable");
        });

        answers_place.find('.box_img').each(function( key, element) {
            $(element).css("background-color","#DDD");
            $(element).html("&nbsp;");
            $(element).css("border","none");
            $(element).droppable("enable");
        });

        answer_button.hide();
        check_button.fadeIn();
        $(this).hide();
    });

    answer_button.click(function () {
        for (question in questions_8_1) {
            var correct_answer = answers_8_1[question];
            var user_answer = questions_8_1[question]['answer'];
            var answer_img = answers_options.find("[data-option='" + correct_answer + "']").html();

            if (user_answer) {
                answers_place.find("[data-question='" + question + "']").css("border","3px solid #00ca5c").html(answer_img);
            }
        }

        answers_place.parent().find('.good_icon, .wrong_icon').parent().fadeOut("normal");
    });
}
/*--Drag and drop images--*/

create_drag_drop_images (
    $('.answer_options_8_1'),
    $('.answers_place_8_1'),
    $('#check_answers_8_1'),
    $('#reset_answers_8_1'),
    $('#answers_8_1'),
    {
        'question_8_1_1' : {},
        'question_8_1_2' : {},
        'question_8_1_3' : {},
        'question_8_1_4' : {},
        'question_8_1_5' : {},
        'question_8_1_6' : {},
        'question_8_1_7' : {}
    },
    {
        'question_8_1_1': '7',
        'question_8_1_2': '2',
        'question_8_1_3': '3',
        'question_8_1_4': '4',
        'question_8_1_5': '5',
        'question_8_1_6': '6',
        'question_8_1_7': '1'
    }
);
