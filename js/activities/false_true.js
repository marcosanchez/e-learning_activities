/*--Page 7 activity 1--*/
$('#answers_7_1').hide();
$("#reset_answers_7_1").hide();
$("#check_answers_7_1").css('position','relative');

var answered_7_1 = false;

// Introduce questions
var questions_7_1 = {
    'question_7_1_1' : {},
    'question_7_1_2' : {},
    'question_7_1_3' : {},
    'question_7_1_4' : {}
};

// Introduce answers
var answers_7_1 = {
    'question_7_1_1': 'option_1',
    'question_7_1_2': 'option_2',
    'question_7_1_3': 'option_1',
    'question_7_1_4': 'option_1'
};

for (qu in questions_7_1) {
    questions_7_1[qu]['answer'] = false;
}

$(".questions_7_1 ").on('click', 'input', function () {
    answered_7_1 = true;
    var selected_option = $(this).data('option');
    var question = questions_7_1[$(this).closest('li').data('question')];

    question['answer'] = selected_option;
});


$("#check_answers_7_1").click(function () {
    $('.questions_7_1 li').each(function( key, element) {
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
        $('#answers_7_1').fadeIn();
        $('#check_answers_7_1').css('display', 'none');
        $('#reset_answers_7_1').fadeIn();
    };
});


$("#reset_answers_7_1").click(function () {
    answered_7_1 = false;
    for (qu in questions_7_1) {
        questions_7_1[qu]['answer'] = false;
    }
    $('.good_icon, .wrong_icon').parent().fadeOut("normal");
    $('.questions_7_1 input').each(function( key, element) {
        $(element).prop("checked", false).parent().css({'color':'#000','font-family':'open_sansregular'});
    });

    $('#answers_7_1').hide();
    $('#check_answers_7_1').fadeIn();
    $(this).hide();
});


$("#answers_7_1").click(function () {
    $('.good_icon, .wrong_icon').parent().fadeOut("normal");

    $('.questions_7_1 input').each(function( key, element) {
        $(element).parent().css({'color':'#000','font-family':'open_sansregular'});
        $(element).prop("checked", false);
    });

    for (question in questions_7_1) {
        var correct_answer = answers_7_1[question];
        var user_answer = questions_7_1[question]['answer'];
        
        if (user_answer) {
            $('.questions_7_1').find("[data-question='" + question + "']").find("[data-option='" + correct_answer + "']").prop("checked", true).parent().css({'color':'#00B050','font-family':'open_sanssemibold'});
        }
    }
});
/*--Page 7 activity 1--*/
