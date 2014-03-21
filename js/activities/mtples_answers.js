/*--Page 6 activity 1--*/
$('#answers_6_1').hide();
$("#reset_answers_6_1").hide();
$("#check_answers_6_1").css('position','relative');

var answered_6_1 = false;

// Introduce questions
var questions_6_1 = {
    'question_6_1_1' : {},
    'question_6_1_2' : {},
    'question_6_1_3' : {}
};

// Introduce answers
var answers_6_1 = {
    'question_6_1_1': {'option_1': true, 'option_2': false, 'option_3': true, 'option_4': true, 'option_5': true},
    'question_6_1_2': {'option_1': false, 'option_2': false, 'option_3': true, 'option_4': true},
    'question_6_1_3': {'option_1': true, 'option_2': false , 'option_3': true, 'option_4':true},
};

for (qu in questions_6_1) {
    questions_6_1[qu]['answer'] = false;
}

$(".questions_6_1").on('click', 'input', function () {
    answered_6_1 = true;
});

$("#check_answers_6_1").click(function () {
    $('.questions_6_1 li.question_text').each(function( key, element) {
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
        $('#answers_6_1').fadeIn();
        $('#check_answers_6_1').css('display', 'none');
        $('#reset_answers_6_1').fadeIn();   
    }
});

$("#reset_answers_6_1").click(function () {
    answered_6_1 = false;
    for (qu in questions_6_1) {
        questions_6_1[qu]['answer'] = false;
    }
    $('.good_icon, .wrong_icon').parent().fadeOut("normal");
    $('.questions_6_1 input').each(function( key, element) {
        $(element).prop("checked", false).parent().css({'color':'#000','font-family':'open_sansregular'});
    });
    $('#answers_6_1').hide();
    $(this).hide();
    $('#check_answers_6_1').fadeIn();
});

$("#answers_6_1").click(function () {

    $('.good_icon, .wrong_icon').parent().fadeOut("normal");

    $('.questions_6_1 input').each(function( key, element) {
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
                $('.questions_6_1').find("[data-question='" + question + "']").find("[data-option='" + key + "']").prop("checked", true).parent().css({'color':'#00B050','font-family':'open_sanssemibold'});
                    
                }
            });
        }
    }
});
/*--Page 6 activity 1--*/
