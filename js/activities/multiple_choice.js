/*--Page 2 activity 1--*/
$('#answers_2_1').hide();
$("#reset_answers_2_1").hide();
$("#check_answers_2_1").css('position','relative');

// Introduce questions
var answered_2_1 = false;
var questions_2_1 = {
    'question_2_1_1' : {},
    'question_2_1_2' : {},
    'question_2_1_3' : {},
    'question_2_1_4' : {},
    'question_2_1_5' : {},
    'question_2_1_6' : {}
};

// Introduce answers
var answers_2_1 = {
    'question_2_1_1': ["father's", "father´s", "father"],
    'question_2_1_2': ["sisters", "option_1", "option_2"],
    'question_2_1_3': ["husband", "option_1", "option_2"],
    'question_2_1_4': ["wife", "option_2"],
    'question_2_1_5': ["children", "option_2"],
    'question_2_1_6': ["husband", "option_2"],
};

for (qu in questions_2_1) {
    questions_2_1[qu]['answer'] = '';
}

$('.questions_2_1 input').on('change', function () {
    answered_2_1 = true;
});

$("#check_answers_2_1").click(function () {
    $('.questions_2_1 input').each(function( key, element) {
        var correct_answer = answers_2_1[$(element).data('question')];
        var user_answer = $(element).val();

        questions_2_1[$(element).data('question')]['answer'] = user_answer;

        if(user_answer.length > 0) {
            if ($.inArray(user_answer, correct_answer) > -1) {
                $(element).next().find('.good_icon').fadeIn('normal').css("display","inline-block");
                $(element).next().find('.wrong_icon').css('display','none');
            } else {
                $(element).next().find('.good_icon').css('display','none');
                $(element).next().find('.wrong_icon').fadeIn('normal').css("display","inline-block");
            }
        }
    });

   if(answered_2_1 === true){
        $('#answers_2_1').fadeIn();
        $('#check_answers_2_1').css('display', 'none');
        $("#reset_answers_2_1").fadeIn();
   }
});


$('#reset_answers_2_1').click(function () {
    answered_2_1 = false;
    for (qu in questions_2_1) {
        questions_2_1[qu]['answer'] = false;
    }
    $('.questions_2_1').find('.good_icon, .wrong_icon').fadeOut("normal");
    $('.questions_2_1 input').each(function( key, element) {
        $(element).val('').css({'color':'#000','font-family':'open_sansregular'});
    });

    $('#answers_2_1').hide();
    $('#check_answers_2_1').fadeIn();
    $(this).hide();
});

$("#answers_2_1").click(function () {
    $('.questions_2_1').find('.good_icon, .wrong_icon').fadeOut("normal");
    $('.questions_2_1 input').val('').css({'color':'#000','font-family':'open_sansregular'});

    for (question in questions_2_1) {
        var correct_answer = answers_2_1[question][0];
        var user_answer = questions_2_1[question]['answer'];

        if (user_answer.length > 0) {
            $('.questions_2_1').find("[data-question='" + question + "']").css({'color':'#00B050','font-family':'open_sansregular'}).val(correct_answer);
        }
    }
});
/*--Page 2 activity 1--*/
