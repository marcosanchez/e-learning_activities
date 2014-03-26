/*--Multiple choice--*/
function create_multiple_choice (questions_html,check_button,reset_button,answer_button,questions_amount,answers_amount){
    answer_button.hide();
    reset_button.hide();
    check_button.css('position','relative');

    var answered = false;
    var questions = questions_amount;

    var answers_2_6 = answers_amount;

    for (qu in questions) {
        questions[qu]['answer'] = '';
    }

    questions_html.find('input').on('change', function () {
        answered = true;
    });

    check_button.click(function () {
        questions_html.find('input').each(function( key, element) {

            var correct_answer = answers_2_6[$(element).data('question')];
            var user_answer = $(element).val();

            questions[$(element).data('question')]['answer'] = user_answer;

            if(user_answer.length > 0) {
                $(element).next().find('.good_icon').parent().addClass('activity_span');
                if ($.inArray(user_answer, correct_answer) > -1) {
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

       if(answered === true){
            answer_button.fadeIn();
            check_button.css('display', 'none');
            reset_button.fadeIn();
       }
    });


    reset_button.click(function () {
        answered = false;
        for (qu in questions) {
            questions[qu]['answer'] = false;
        }
        questions_html.find('.good_icon, .wrong_icon').parent().fadeOut("normal");
        questions_html.find('input').each(function( key, element) {
            $(element).val('').css({'color':'#000','font-family':'open_sansregular'});
        });

        answer_button.hide();
        check_button.fadeIn();
        $(this).hide();
    });

    answer_button.click(function () {
        questions_html.find('.good_icon, .wrong_icon').parent().fadeOut("normal");
        questions_html.val('').css({'color':'#000','font-family':'open_sansregular'});

        for (question in questions) {
            var correct_answer = answers_2_6[question][0];
            var user_answer = questions[question]['answer'];

            if (user_answer.length > 0) {
                questions_html.find("[data-question='" + question + "']").css({'color':'#00B050','font-family':'open_sansregular'}).val(correct_answer);
            }
        }
    });
}
/*--Multiple choice--*/

/*--Page 2 activity 1--*/
create_multiple_choice (
    $('.questions_2_1'),
    $('#check_answers_2_1'),
    $('#reset_answers_2_1'),
    $('#answers_2_1'),
    {
        'question_2_1_1' : {},
        'question_2_1_2' : {},
        'question_2_1_3' : {},
        'question_2_1_4' : {},
        'question_2_1_5' : {},
        'question_2_1_6' : {}
    },
    {
        'question_2_1_1': ["father's", "father´s", "father"],
        'question_2_1_2': ["sisters", "option_1", "option_2"],
        'question_2_1_3': ["husband", "option_1", "option_2"],
        'question_2_1_4': ["wife", "option_2"],
        'question_2_1_5': ["children", "option_2"],
        'question_2_1_6': ["husband", "option_2"],
    }
);

/*--Page 2 activity 2--*/
create_multiple_choice (
    $('.questions_2_2'),
    $('#check_answers_2_2'),
    $('#reset_answers_2_2'),
    $('#answers_2_2'),
    {
        'question_2_2_1' : {},
        'question_2_2_2' : {},
        'question_2_2_3' : {},
        'question_2_2_4' : {},
        'question_2_2_5' : {},
        'question_2_2_6' : {},
        'question_2_2_7' : {}
    },
    {
        'question_2_2_1': ["father's", "father´s", "father"],
        'question_2_2_2': ["sisters", "option_1", "option_2"],
        'question_2_2_3': ["husband", "option_1", "option_2"],
        'question_2_2_4': ["wife", "option_2"],
        'question_2_2_5': ["children", "option_2"],
        'question_2_2_6': ["husband", "option_2"],
        'question_2_2_7': ["husband", "option_2"]
    }
);

/*--Page 2 activity 3--*/
create_multiple_choice (
    $('.questions_2_3'),
    $('#check_answers_2_3'),
    $('#reset_answers_2_3'),
    $('#answers_2_3'),
    {
        'question_2_3_1' : {},
        'question_2_3_2' : {},
        'question_2_3_3' : {},
        'question_2_3_4' : {},
        'question_2_3_5' : {},
        'question_2_3_6' : {},
        'question_2_3_7' : {},
        'question_2_3_8' : {}
    },
    {
        'question_2_3_1': ["father's", "father´s", "father"],
        'question_2_3_2': ["sisters", "option_1", "option_2"],
        'question_2_3_3': ["husband", "option_1", "option_2"],
        'question_2_3_4': ["wife", "option_2"],
        'question_2_3_5': ["children", "option_2"],
        'question_2_3_6': ["husband", "option_2"],
        'question_2_3_7': ["husband", "option_2"],
        'question_2_3_8': ["husband", "option_2"]
    }
);

/*--Page 2 activity 4--*/
create_multiple_choice (
    $('.questions_2_4'),
    $('#check_answers_2_4'),
    $('#reset_answers_2_4'),
    $('#answers_2_4'),
    {
        'question_2_4_1' : {},
        'question_2_4_2' : {},
        'question_2_4_3' : {},
        'question_2_4_4' : {},
        'question_2_4_5' : {},
        'question_2_4_6' : {},
        'question_2_4_7' : {},
        'question_2_4_8' : {}
    },
    {
        'question_2_4_1': ["father's", "father´s", "father"],
        'question_2_4_2': ["sisters", "option_1", "option_2"],
        'question_2_4_3': ["husband", "option_1", "option_2"],
        'question_2_4_4': ["wife", "option_2"],
        'question_2_4_5': ["children", "option_2"],
        'question_2_4_6': ["husband", "option_2"],
        'question_2_4_7': ["husband", "option_2"],
        'question_2_4_8': ["husband", "option_2"]
    }
);

/*--Page 2 activity 5--*/
create_multiple_choice (
    $('.questions_2_5'),
    $('#check_answers_2_5'),
    $('#reset_answers_2_5'),
    $('#answers_2_5'),
    {
        'question_2_5_1' : {},
        'question_2_5_2' : {},
        'question_2_5_3' : {},
        'question_2_5_4' : {},
        'question_2_5_5' : {},
        'question_2_5_6' : {},
        'question_2_5_7' : {},
        'question_2_5_8' : {}
    },
    {
        'question_2_5_1': ["father's", "father´s", "father"],
        'question_2_5_2': ["sisters", "option_1", "option_2"],
        'question_2_5_3': ["husband", "option_1", "option_2"],
        'question_2_5_4': ["wife", "option_2"],
        'question_2_5_5': ["children", "option_2"],
        'question_2_5_6': ["husband", "option_2"],
        'question_2_5_7': ["husband", "option_2"],
        'question_2_5_8': ["husband", "option_2"]
    }
);
