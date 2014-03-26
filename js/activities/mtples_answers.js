/*--Multiples_answers--*/
function create_multiple_unique_asnwers (questions_html,check_button,reset_button,answer_button,questions_amount,answers_amount){
    answer_button.hide();
    reset_button.hide();
    check_button.css('position','relative');

    var answered_6_1 = false;

    var questions_6_1 = questions_amount;

    var answers_6_1 = answers_amount;

    for (qu in questions_6_1) {
        questions_6_1[qu]['answer'] = false;
    }

    questions_html.on('click', 'input', function () {
        answered_6_1 = true;
    });

    check_button.click(function () {
        questions_html.find('li.question_text').each(function( key, element) {
            var qstion_id = $(this).closest('li').data('question');
            // Introducing user answers data in check button function.

            var user_answer = {};
            for (qu_id in answers_6_1) {
                var total = 0

                for (op in answers_6_1[qu_id]) {
                    total = total + 1;
                    user_answer[op] = false;
                }
            }

            var question = questions_6_1[qstion_id];
            $(element).find('input:checked').each(function( key, option) {
                var checked_option = $(this).data('option');
                user_answer[checked_option] = true;
            });

            questions_6_1[qstion_id]['answer'] = user_answer;
            var correct_answer = answers_6_1[qstion_id];
            var answer = questions_6_1[qstion_id]['answer'];

            var answered_question = false;

            for (value in answer) {
                if (answer[value] === true) {
                    answered_question = true
                }
            }

            if (answered_question) {
                var answer_options = answers_6_1[qstion_id];
                var dict_length = Object.keys(answer_options).length;

                var correct_answers_dict = {}
                for (var i = 1, l = dict_length ; i <= l; i++)  {

                    if (user_answer['option_' + i] === answers_6_1[qstion_id]['option_' + i]) {
                        correct_answers_dict['correct_' + i] = true;
                    } else {
                        correct_answers_dict['correct_' + i] = false;
                    };
                };

                var answered_correct = true;
                for (id in correct_answers_dict) {
                    if (correct_answers_dict[id] == false) {
                        answered_correct = false;
                    }
                }

                $(element).find('.good_icon').parent().addClass('activity_span');
                if (answered_correct) {
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

        if (answered_6_1 === true) {
            answer_button.fadeIn();
            check_button.css('display', 'none');
            reset_button.fadeIn();   
        }
    });

    reset_button.click(function () {
        answered_6_1 = false;
        for (qu in questions_6_1) {
            questions_6_1[qu]['answer'] = false;
        }
        $('.good_icon, .wrong_icon').parent().fadeOut("normal");
        questions_html.find('input').each(function( key, element) {
            $(element).prop("checked", false).parent().css({'color':'#000','font-family':'open_sansregular'});
        });
        answer_button.hide();
        $(this).hide();
        check_button.fadeIn();
    });

    answer_button.click(function () {

        $('.good_icon, .wrong_icon').parent().fadeOut("normal");

        questions_html.find('input').each(function( key, element) {
            $(element).parent().css({'color':'#000','font-family':'open_sansregular'});
            $(element).prop("checked", false);
        });

        for (question in questions_6_1) {
            var user_answer = questions_6_1[question]['answer'];
            var correct_answer = answers_6_1[question];
            var answered_question = false;

            for (value in user_answer) {
                if (user_answer[value] === true) {
                    answered_question = true
                }
            }
            
            if (answered_question) {
                $.each(correct_answer, function(key, value) {
                    if (value === true) {
                    questions_html.find("[data-question='" + question + "']").find("[data-option='" + key + "']").prop("checked", true).parent().css({'color':'#00B050','font-family':'open_sanssemibold'});
                        
                    }
                });
            }
        }
    });
}
/*--Multiples_answers--*/

/*--Page 6 activity 1--*/
create_multiple_unique_asnwers (
    $('.questions_6_1'),
    $('#check_answers_6_1'),
    $('#reset_answers_6_1'),
    $('#answers_6_1'),
    {
        'question_6_1_1' : {},
        'question_6_1_2' : {},
        'question_6_1_3' : {}
    },
    {
        'question_6_1_1': {'option_1': true, 'option_2': false, 'option_3': true, 'option_4': true, 'option_5': true},
        'question_6_1_2': {'option_1': false, 'option_2': false, 'option_3': true, 'option_4': true},
        'question_6_1_3': {'option_1': true, 'option_2': false , 'option_3': true, 'option_4':true},
    }
);
