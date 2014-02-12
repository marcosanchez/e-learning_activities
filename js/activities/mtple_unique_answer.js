/*--Page 5 activity 1--*/
$('#answers_5_1').hide();
$("#reset_answers_5_1").hide();
$("#check_answers_5_1").css('position','relative');

var answered_5_1 = false;

// Introduce questions
var questions_5_1 = {
    'question_5_1': {},
    'question_5_2': {},
    'question_5_3': {}
};

// Introduce answers
var answers_5_1 = {
    'question_5_1': 'option_1',
    'question_5_2': 'option_2',
    'question_5_3': 'option_4'
};

for (qu in questions_5_1) {
    questions_5_1[qu]['answer'] = false;
}

$('.word_list').on('click', 'input', function() {
    answered_5_1 = true;
    var selected_option = $(this).data('option');
    var question = questions_5_1[$(this).closest('ul').data('question')];

    question['answer'] = selected_option;
});


$("#check_answers_5_1").click(function () {
    $('.word_list ul').each(function( key, element) {
        var correct_answer = answers_5_1[$(element).data('question')];
        var selected_answer = questions_5_1[$(element).data('question')]['answer'];


        if (selected_answer) {
            if (correct_answer === selected_answer) {
                $(element).parent().find('.good_icon').fadeIn('normal').css("display","inline-block");
                $(element).parent().find('.wrong_icon').css('display','none');
            } else {
                $(element).parent().find('.good_icon').css('display','none');
                $(element).parent().find('.wrong_icon').fadeIn('normal').css("display","inline-block");
            }

        }
    });

    if (answered_5_1 === true) {
        $('#answers_5_1').fadeIn();
        $('#check_answers_5_1').css('display', 'none');
        $('#reset_answers_5_1').fadeIn();
        
    }
});

$("#reset_answers_5_1").click(function () {
    answered_5_1 = false;
    for (qu in questions_5_1) {
        questions_5_1[qu]['answer'] = false;
    }

    $('.good_icon, .wrong_icon').fadeOut("normal");
    $('.word_list input').each(function( key, element) {
        $(element).prop("checked", false).parent().css({'color':'#000','font-family':'open_sansregular'});
    });

    $('#answers_5_1').hide();
    $('#check_answers_5_1').fadeIn();
    $(this).hide();
});

$("#answers_5_1").click(function () {
    $('.good_icon, .wrong_icon').fadeOut("normal");

    $('.word_list input').each(function( key, element) {
        $(element).parent().css({'color':'#000','font-family':'open_sansregular'});
        $(element).prop("checked", false);
    });

    for (question in questions_5_1) {
        var correct_answer = answers_5_1[question];
        var user_answer = questions_5_1[question]['answer'];
        
        if (user_answer) {
            $('.word_list').find("[data-question='" + question + "']").find("[data-option='" + correct_answer + "']").prop("checked", true).parent().css({'color':'#00B050','font-family':'open_sanssemibold'});
        }
    }
});
/*--Page 5 activity 1--*/
