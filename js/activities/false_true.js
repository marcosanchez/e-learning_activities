/*--False and true--*/
function create_false_true (questions_html,check_button,reset_button,answer_button,questions_amount,answers_amount){
    answer_button.hide();
    reset_button.hide();
    check_button.css('position','relative');

    var answered_7_1 = false;

    var questions_7_1 = questions_amount;

    var answers_7_1 = answers_amount;

    for (qu in questions_7_1) {
        questions_7_1[qu]['answer'] = false;
    }

    questions_html.on('click', 'input', function () {
        answered_7_1 = true;
        var selected_option = $(this).data('option');
        var question = questions_7_1[$(this).closest('li').data('question')];

        question['answer'] = selected_option;
    });


    check_button.click(function () {
        questions_html.find('li').each(function( key, element) {
            var correct_answer = answers_7_1[$(element).data('question')];
            var selected_answer = questions_7_1[$(element).data('question')]['answer']; 
            if (selected_answer) {
                $(element).parent().find('.good_icon').parent().addClass('activity_span');
                if (correct_answer === selected_answer) {
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

        if (answered_7_1 === true) {
            answer_button.fadeIn();
            check_button.css('display', 'none');
            reset_button.fadeIn();
        };
    });


    reset_button.click(function () {
        answered_7_1 = false;
        for (qu in questions_7_1) {
            questions_7_1[qu]['answer'] = false;
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

        for (question in questions_7_1) {
            var correct_answer = answers_7_1[question];
            var user_answer = questions_7_1[question]['answer'];
            
            if (user_answer) {
                questions_html.find("[data-question='" + question + "']").find("[data-option='" + correct_answer + "']").prop("checked", true).parent().css({'color':'#00B050','font-family':'open_sanssemibold'});
            }
        }
    });
}
/*--False and true--*/

/*--Page 7 activity 1--*/
create_false_true (
    $('.questions_7_1'),
    $('#check_answers_7_1'),
    $('#reset_answers_7_1'),
    $('#answers_7_1'),
    {
        'question_7_1_1' : {},
        'question_7_1_2' : {},
        'question_7_1_3' : {},
        'question_7_1_4' : {}
    },
    {
        'question_7_1_1': 'option_1',
        'question_7_1_2': 'option_2',
        'question_7_1_3': 'option_1',
        'question_7_1_4': 'option_1'
    }
);
