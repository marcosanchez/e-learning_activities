/*--Page 9 activity 1--*/
$('#answers_9_1').hide();
$("#reset_answers_9_1").hide();
$("#check_answers_9_1").css('position','relative');

var answered_9_1 = false;

// Introduce questions
var questions_9_1 = {
    'question_9_1': {},
    'question_9_2': {},
    'question_9_3': {},
    'question_9_4': {},
    'question_9_5': {},
    'question_9_6': {},
    'question_9_7': {},
}

// Introduce answers
var answers_9_1 = {
    'question_9_1': 5,
    'question_9_2': 1,
    'question_9_3': 6,
    'question_9_4': 7,
    'question_9_5': 4,
    'question_9_6': 2,
    'question_9_7': 3,
}

// Introduce word for position in the answers
var select_options_9_1 = {
    1: 'récord',
    2: 'ping-pong',
    3: 'jardín',
    4: 'manos',
    5: 'sol',
    6: 'puertas',
    7: 'mes'
}

for (qu in questions_9_1) {
    questions_9_1[qu]['answer'] = false;
}

$(".questions_9_1").on('change', 'select', function () {
    answered_9_1 = true;
});


$("#check_answers_9_1").click(function () {
    $('.questions_9_1 select').each(function( key, element) {
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
        $('#answers_9_1').fadeIn();
        $('#check_answers_9_1').css('display', 'none');
        $('#reset_answers_9_1').fadeIn();
    }
});

$("#reset_answers_9_1").click(function () {
    answered_9_1 = false;
    for (qu in questions_9_1) {
        questions_9_1[qu]['answer'] = false;
    }
    $('.good_icon, .wrong_icon').parent().fadeOut("normal");
    $('.questions_9_1').find('select').css('color', '#000').removeAttr('disabled').val('');

    $('#answers_9_1').hide();
    $('#check_answers_9_1').fadeIn();
    $(this).hide();
});


$("#answers_9_1").click(function () {
    $('.good_icon, .wrong_icon').parent().fadeOut("normal");

    for (question in questions_9_1) {
        var user_answer = questions_9_1[question]['answer'];
        var correct_answer = answers_9_1[question];
        
        if (user_answer) {
            $('.questions_9_1').find("[data-position='" + question + "']").val(correct_answer).css('color', '#00B050');
            
        }
    }

    $('.questions_9_1 select').each(function( key, element) {
        $(element).attr('disabled', 'true');
    });
});
/*--Page 9 activity 1--*/
