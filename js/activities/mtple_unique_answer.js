/*--Multiple unique answer--*/
function create_multiple_unique_asnwers (questions_html,check_button,reset_button,answer_button,questions_amount,answers_amount){
    answer_button.hide();
    reset_button.hide();
    check_button.css('position','relative');

    var answered_5_1 = false;

    var questions_5_1 = questions_amount;

    var answers_5_1 = answers_amount;

    for (qu in questions_5_1) {
        questions_5_1[qu]['answer'] = false;
    }

    questions_html.on('click', 'input', function() {
        answered_5_1 = true;
        var selected_option = $(this).data('option');
        var question = questions_5_1[$(this).closest('ol').data('question')];

        question['answer'] = selected_option;
    });


    check_button.click(function () {
        questions_html.find('ol').each(function( key, element) {
            var correct_answer = answers_5_1[$(element).data('question')];
            var selected_answer = questions_5_1[$(element).data('question')]['answer'];

            if (selected_answer) {
                $(element).parent().find('.good_icon').parent().addClass('activity_span');
                if (correct_answer === selected_answer) {
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

        if (answered_5_1 === true) {
            answer_button.fadeIn();
            check_button.css('display', 'none');
            reset_button.fadeIn();
            
        }
    });

    reset_button.click(function () {
        answered_5_1 = false;
        for (qu in questions_5_1) {
            questions_5_1[qu]['answer'] = false;
        }

        $('.good_icon, .wrong_icon').parent().fadeOut("normal");
        questions_html.find('input').each(function( key, element) {
            $(element).prop("checked", false).parent().css({'color':'#000','font-family':'open_sansregular'});
        });

        answer_button.hide();
        check_button.fadeIn();
        $(this).hide();
    });

    answer_button.click(function () {
        $('.good_icon, .wrong_icon').parent().fadeOut("normal");

        questions_html.find('input').each(function( key, element) {
            $(element).parent().css({'color':'#000','font-family':'open_sansregular'});
            $(element).prop("checked", false);
        });

        for (question in questions_5_1) {
            var correct_answer = answers_5_1[question];
            var user_answer = questions_5_1[question]['answer'];
            
            if (user_answer) {
                questions_html.find("[data-question='" + question + "']").find("[data-option='" + correct_answer + "']").prop("checked", true).parent().css({'color':'#00B050','font-family':'open_sanssemibold'});
            }
        }
    });
}
/*--Multiple unique answer--*/

/*--Page 5 activity 1--*/
create_multiple_unique_asnwers (
    $('.questions_5_1'),
    $('#check_answers_5_1'),
    $('#reset_answers_5_1'),
    $('#answers_5_1'),
    {
        'question_5_1_1': {},
        'question_5_1_2': {},
        'question_5_1_3': {}
    },
    {
        'question_5_1_1': 'option_1',
        'question_5_1_2': 'option_2',
        'question_5_1_3': 'option_4'
    }
);
