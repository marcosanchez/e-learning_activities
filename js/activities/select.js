/*--Page 3 activity 1--*/
$('#answers_3_1').hide();
$("#reset_answers_3_1").hide();
$("#check_answers_3_1").css('position','relative');


var answered_3_1 = false;

// Introduce questions
var questions_3_1 = {
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
};

// Introduce answers
var answers_3_1 = {
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
};

for (qu in questions_3_1) {
    questions_3_1[qu]['answer'] = 0;
}

$(".questions_3_1").on('click', 'div', function () {
    $(this).parent().find('div').not($(this)).css('background', '#DDD').css('color', '#000');
    $(this).css('background', '#AAA').css('color', '#FFF');

    answered_3_1 = true;
    var selected_option = $(this).data('select');
    var question = questions_3_1[$(this).closest('li').data('question')];
    question['answer'] = selected_option;
});

$('#check_answers_3_1').click(function () {
    $('.questions_3_1 li').each(function( key, element) {
        var correct_answer = answers_3_1[$(element).data('question')];
        var selected_answer = questions_3_1[$(element).data('question')]['answer'];

        if (selected_answer) {
            if (correct_answer == selected_answer) {
                $(element).find('.good_icon').fadeIn('normal').css("display","inline-block");
                $(element).find('.wrong_icon').css('display','none');
            } else {
                $(element).find('.good_icon').css('display','none');
                $(element).find('.wrong_icon').fadeIn('normal').css("display","inline-block");
            }
        }
    });

    if(answered_3_1 === true){
        $('#answers_3_1').fadeIn();
        $('#check_answers_3_1').css('display', 'none');
        $("#reset_answers_3_1").fadeIn();
    }
});

$('#reset_answers_3_1').click(function () {
    answered_3_1 = false;
    for (qu in questions_3_1) {
        questions_3_1[qu]['answer'] = 0;
    }
    $('.questions_3_1').find('.good_icon, .wrong_icon').fadeOut("normal");
    $('.questions_3_1 div').each(function( key, element) {
        $(element).css('background', '#DDD').css('color', '#000');
    });

    $('#answers_3_1').hide();
    $('#check_answers_3_1').fadeIn();
    $(this).hide();
});

$("#answers_3_1").click(function () {
    $('.questions_3_1').find('.good_icon, .wrong_icon').fadeOut("normal");
    $('.questions_3_1 div').css('background', '#DDD').css('color', '#000');

    for (question in questions_3_1) {
        var correct_answer = answers_3_1[question];
        var user_answer = questions_3_1[question]['answer'];

        if (user_answer > 0) {
            $('.questions_3_1').find("[data-question='" + question + "']").find("[data-select='" + correct_answer + "']").css('background', '#00BD56').css('color', '#FFF');
        }
    }
});
/*--Page 3 activity 1--*/
