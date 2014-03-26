/*--Select--*/
function create_select(questions_html,check_button,reset_button,answer_button,questions_amount,answers_amount){
    answer_button.hide();
    reset_button.hide();
    check_button.css('position','relative');

    if(questions_html.find('div').html().length == 1){
        questions_html.find('div').css({
            'width': 21,
            'padding': 1
        });
    }else if(questions_html.find('figure').length){
        questions_html.find('div').css('padding',0);
    }

    var answered_3_1 = false;

    var questions_3_1 = questions_amount;

    var answers_3_1 = answers_amount;

    for (qu in questions_3_1) {
        questions_3_1[qu]['answer'] = 0;
    }

    questions_html.on('click', 'div', function () {
        $(this).parent().find('div').not($(this)).css('background', '#DDD').css('color', '#000');
        $(this).css('background', '#AAA').css('color', '#FFF');

        answered_3_1 = true;
        var selected_option = $(this).data('select');
        var question = questions_3_1[$(this).closest('li').data('question')];
        question['answer'] = selected_option;
    });

    check_button.click(function () {
        questions_html.find('li').each(function( key, element) {
            var correct_answer = answers_3_1[$(element).data('question')];
            var selected_answer = questions_3_1[$(element).data('question')]['answer'];

            if (selected_answer) {
                $(element).find('.good_icon').parent().addClass('activity_span');
                if (correct_answer == selected_answer) {
                    $(element).find('.good_icon').parent().fadeIn('normal').css("display","inline-block");
                    $(element).find('.good_icon').fadeIn('normal').css("display","inline-block");
                    $(element).find('.wrong_icon').css('display','none');
                } else {
                    $(element).find('.wrong_icon').parent().fadeIn('normal').css("display","inline-block");
                    $(element).find('.wrong_icon').fadeIn('normal').css("display","inline-block");
                    $(element).find('.good_icon').css('display','none');
                }
            }
        });

        if(answered_3_1 === true){
            answer_button.fadeIn();
            check_button.css('display', 'none');
            reset_button.fadeIn();
        }
    });

    reset_button.click(function () {
        answered_3_1 = false;
        for (qu in questions_3_1) {
            questions_3_1[qu]['answer'] = 0;
        }
        questions_html.find('.good_icon, .wrong_icon').parent().fadeOut("normal");
        questions_html.find('div').each(function( key, element) {
            $(element).css('background', '#DDD').css('color', '#000');
        });

        answer_button.hide();
        check_button.fadeIn();
        $(this).hide();
    });

    answer_button.click(function () {
        questions_html.find('.good_icon, .wrong_icon').parent().fadeOut("normal");
        questions_html.find('div').css('background', '#DDD').css('color', '#000');

        for (question in questions_3_1) {
            var correct_answer = answers_3_1[question];
            var user_answer = questions_3_1[question]['answer'];

            if (user_answer > 0) {
                questions_html.find("[data-question='" + question + "']").find("[data-select='" + correct_answer + "']").css('background', '#00BD56').css('color', '#FFF');
            }
        }
    });
}
/*--Select--*/

/*--Page 2 activity 1--*/
create_select (
    $('.questions_3_1'),
    $('#check_answers_3_1'),
    $('#reset_answers_3_1'),
    $('#answers_3_1'),
    {
        'question_3_1_1' : {},
        'question_3_1_2' : {},
        'question_3_1_3' : {},
        'question_3_1_4' : {},
        'question_3_1_5' : {},
        'question_3_1_6' : {},
        'question_3_1_7' : {},
        'question_3_1_8' : {},
        'question_3_1_9' : {},
        'question_3_1_10' : {}
    },
    {
        'question_3_1_1': '3',
        'question_3_1_2': '4',
        'question_3_1_3': '2',
        'question_3_1_4': '3',
        'question_3_1_5': '2',
        'question_3_1_6': '1',
        'question_3_1_7': '3',
        'question_3_1_8': '1',
        'question_3_1_9': '4',
        'question_3_1_10': '2'
    }
);

/*--Page 2 activity 2--*/
create_select (
    $('.questions_3_2'),
    $('#check_answers_3_2'),
    $('#reset_answers_3_2'),
    $('#answers_3_2'),
    {
        'question_3_2_1' : {},
        'question_3_2_2' : {},
        'question_3_2_3' : {},
        'question_3_2_4' : {},
        'question_3_2_5' : {},
        'question_3_2_6' : {},
        'question_3_2_7' : {},
        'question_3_2_8' : {},
        'question_3_2_9' : {},
        'question_3_2_10' : {}
    },
    {
        'question_3_2_1': '3',
        'question_3_2_2': '4',
        'question_3_2_3': '2',
        'question_3_2_4': '3',
        'question_3_2_5': '2',
        'question_3_2_6': '1',
        'question_3_2_7': '3',
        'question_3_2_8': '1',
        'question_3_2_9': '4',
        'question_3_2_10': '2'
    }
);

/*--Page 2 activity 3--*/
create_select (
    $('.questions_3_3'),
    $('#check_answers_3_3'),
    $('#reset_answers_3_3'),
    $('#answers_3_3'),
    {
        'question_3_3_1' : {},
        'question_3_3_2' : {},
        'question_3_3_3' : {},
        'question_3_3_4' : {}
    },
    {
        'question_3_3_1': '3',
        'question_3_3_2': '1',
        'question_3_3_3': '2',
        'question_3_3_4': '3'
    }
);
