/*--Accordion select--*/
function create_accordion_select (questions_html,check_button,reset_button,answer_button,questions_amount,answers_amount,options_amount){
    answer_button.hide();
    reset_button.hide();
    check_button.css('position','relative');

    var answered_9_1 = false;

    var questions_9_1 = questions_amount;

    var answers_9_1 = answers_amount;

    var select_options_9_1 = options_amount;

    for (qu in questions_9_1) {
        questions_9_1[qu]['answer'] = false;
    }

    questions_html.on('change', 'select', function () {
        answered_9_1 = true;
    });


    check_button.click(function () {
        questions_html.find('select').each(function( key, element) {
            var correct_answer = answers_9_1[$(element).data('position')];
            var selected_answer = $(element).find('option:selected').val();
            questions_9_1[$(element).data('position')]['answer'] = selected_answer;

            if (selected_answer) {
                $(element).next().find('.good_icon').parent().addClass('activity_span');
                if (correct_answer == selected_answer) {
                    $(element).next().find('.good_icon').parent().fadeIn('normal').css("display","inline-block");
                    $(element).next().find('.good_icon').fadeIn('normal').css("display","inline-block");
                    $(element).next().find('.wrong_icon').css('display','none');
                } else {
                    $(element).next().find('.wrong_icon').parent().fadeIn('normal').css("display","inline-block");
                    $(element).next().find('.wrong_icon').fadeIn('normal').css("display","inline-block");
                    $(element).next().find('.good_icon').css('display','none');  
                }
            }
        });

        if (answered_9_1 === true) {
            answer_button.fadeIn();
            check_button.css('display', 'none');
            reset_button.fadeIn();
        }
    });

    reset_button.click(function () {
        answered_9_1 = false;
        for (qu in questions_9_1) {
            questions_9_1[qu]['answer'] = false;
        }
        $('.good_icon, .wrong_icon').parent().fadeOut("normal");
        questions_html.find('select').css('color', '#000').removeAttr('disabled').val('');

        answer_button.hide();
        check_button.fadeIn();
        $(this).hide();
    });


    answer_button.click(function () {
        $('.good_icon, .wrong_icon').parent().fadeOut("normal");

        for (question in questions_9_1) {
            var user_answer = questions_9_1[question]['answer'];
            var correct_answer = answers_9_1[question];
            
            if (user_answer) {
                questions_html.find("[data-position='" + question + "']").val(correct_answer).css('color', '#00B050');
                
            }
        }

        questions_html.find('select').each(function( key, element) {
            $(element).attr('disabled', 'true');
        });
    });
}
/*--Accordion select--*/

/*--Page 7 activity 1--*/
create_accordion_select (
    $('.questions_9_1'),
    $('#check_answers_9_1'),
    $('#reset_answers_9_1'),
    $('#answers_9_1'),
    {
        'question_9_1': {},
        'question_9_2': {},
        'question_9_3': {},
        'question_9_4': {},
        'question_9_5': {},
        'question_9_6': {},
        'question_9_7': {}
    },
    {
        'question_9_1': 5,
        'question_9_2': 1,
        'question_9_3': 6,
        'question_9_4': 7,
        'question_9_5': 4,
        'question_9_6': 2,
        'question_9_7': 3,
    },
    {
        1: 'récord',
        2: 'ping-pong',
        3: 'jardín',
        4: 'manos',
        5: 'sol',
        6: 'puertas',
        7: 'mes'
    }
);
