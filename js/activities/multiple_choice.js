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
    $('.questions_2_1').find('.good_icon, .wrong_icon').parent().fadeOut("normal");
    $('.questions_2_1 input').each(function( key, element) {
        $(element).val('').css({'color':'#000','font-family':'open_sansregular'});
    });

    $('#answers_2_1').hide();
    $('#check_answers_2_1').fadeIn();
    $(this).hide();
});

$("#answers_2_1").click(function () {
    $('.questions_2_1').find('.good_icon, .wrong_icon').parent().fadeOut("normal"); //Cambios aquí
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

/*--Page 2 activity 2--*/
$('#answers_2_2').hide();
$("#reset_answers_2_2").hide();
$("#check_answers_2_2").css('position','relative');

// Introduce questions
var answered_2_2 = false;
var questions_2_2 = {
    'question_2_2_1' : {},
    'question_2_2_2' : {},
    'question_2_2_3' : {},
    'question_2_2_4' : {},
    'question_2_2_5' : {},
    'question_2_2_6' : {},
    'question_2_2_7' : {}
};

// Introduce answers
var answers_2_2 = {
    'question_2_2_1': ["father's", "father´s", "father"],
    'question_2_2_2': ["sisters", "option_1", "option_2"],
    'question_2_2_3': ["husband", "option_1", "option_2"],
    'question_2_2_4': ["wife", "option_2"],
    'question_2_2_5': ["children", "option_2"],
    'question_2_2_6': ["husband", "option_2"],
    'question_2_2_7': ["husband", "option_2"]
};

for (qu in questions_2_2) {
    questions_2_2[qu]['answer'] = '';
}

$('.questions_2_2 input').on('change', function () {
    answered_2_2 = true;
});

$("#check_answers_2_2").click(function () {
    $('.questions_2_2 input').each(function( key, element) {
        var correct_answer = answers_2_2[$(element).data('question')];
        var user_answer = $(element).val();

        questions_2_2[$(element).data('question')]['answer'] = user_answer;

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

   if(answered_2_2 === true){
        $('#answers_2_2').fadeIn();
        $('#check_answers_2_2').css('display', 'none');
        $("#reset_answers_2_2").fadeIn();
   }
});


$('#reset_answers_2_2').click(function () {
    answered_2_2 = false;
    for (qu in questions_2_2) {
        questions_2_2[qu]['answer'] = false;
    }
    $('.questions_2_2').find('.good_icon, .wrong_icon').parent().fadeOut("normal");
    $('.questions_2_2 input').each(function( key, element) {
        $(element).val('').css({'color':'#000','font-family':'open_sansregular'});
    });

    $('#answers_2_2').hide();
    $('#check_answers_2_2').fadeIn();
    $(this).hide();
});

$("#answers_2_2").click(function () {
    $('.questions_2_2').find('.good_icon, .wrong_icon').parent().fadeOut("normal");
    $('.questions_2_2 input').val('').css({'color':'#000','font-family':'open_sansregular'});

    for (question in questions_2_2) {
        var correct_answer = answers_2_2[question][0];
        var user_answer = questions_2_2[question]['answer'];

        if (user_answer.length > 0) {
            $('.questions_2_2').find("[data-question='" + question + "']").css({'color':'#00B050','font-family':'open_sansregular'}).val(correct_answer);
        }
    }
});
/*--Page 2 activity 2--*/

/*--Page 2 activity 3--*/
$('#answers_2_3').hide();
$("#reset_answers_2_3").hide();
$("#check_answers_2_3").css('position','relative');

// Introduce questions
var answered_2_3 = false;
var questions_2_3 = {
    'question_2_3_1' : {},
    'question_2_3_2' : {},
    'question_2_3_3' : {},
    'question_2_3_4' : {},
    'question_2_3_5' : {},
    'question_2_3_6' : {},
    'question_2_3_7' : {},
    'question_2_3_8' : {}
};

// Introduce answers
var answers_2_3 = {
    'question_2_3_1': ["father's", "father´s", "father"],
    'question_2_3_2': ["sisters", "option_1", "option_2"],
    'question_2_3_3': ["husband", "option_1", "option_2"],
    'question_2_3_4': ["wife", "option_2"],
    'question_2_3_5': ["children", "option_2"],
    'question_2_3_6': ["husband", "option_2"],
    'question_2_3_7': ["husband", "option_2"],
    'question_2_3_8': ["husband", "option_2"]
};

for (qu in questions_2_3) {
    questions_2_3[qu]['answer'] = '';
}

$('.questions_2_3 input').on('change', function () {
    answered_2_3 = true;
});

$("#check_answers_2_3").click(function () {
    $('.questions_2_3 input').each(function( key, element) {
        var correct_answer = answers_2_3[$(element).data('question')];
        var user_answer = $(element).val();

        questions_2_3[$(element).data('question')]['answer'] = user_answer;

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

   if(answered_2_3 === true){
        $('#answers_2_3').fadeIn();
        $('#check_answers_2_3').css('display', 'none');
        $("#reset_answers_2_3").fadeIn();
   }
});


$('#reset_answers_2_3').click(function () {
    answered_2_3 = false;
    for (qu in questions_2_3) {
        questions_2_3[qu]['answer'] = false;
    }
    $('.questions_2_3').find('.good_icon, .wrong_icon').parent().fadeOut("normal");
    $('.questions_2_3 input').each(function( key, element) {
        $(element).val('').css({'color':'#000','font-family':'open_sansregular'});
    });

    $('#answers_2_3').hide();
    $('#check_answers_2_3').fadeIn();
    $(this).hide();
});

$("#answers_2_3").click(function () {
    $('.questions_2_3').find('.good_icon, .wrong_icon').parent().fadeOut("normal");
    $('.questions_2_3 input').val('').css({'color':'#000','font-family':'open_sansregular'});

    for (question in questions_2_3) {
        var correct_answer = answers_2_3[question][0];
        var user_answer = questions_2_3[question]['answer'];

        if (user_answer.length > 0) {
            $('.questions_2_3').find("[data-question='" + question + "']").css({'color':'#00B050','font-family':'open_sansregular'}).val(correct_answer);
        }
    }
});
/*--Page 2 activity 3--*/

/*--Page 2 activity 4--*/
$('#answers_2_4').hide();
$("#reset_answers_2_4").hide();
$("#check_answers_2_4").css('position','relative');

// Introduce questions
var answered_2_4 = false;
var questions_2_4 = {
    'question_2_4_1' : {},
    'question_2_4_2' : {},
    'question_2_4_3' : {},
    'question_2_4_4' : {},
    'question_2_4_5' : {},
    'question_2_4_6' : {},
    'question_2_4_7' : {},
    'question_2_4_8' : {}
};

// Introduce answers
var answers_2_4 = {
    'question_2_4_1': ["father's", "father´s", "father"],
    'question_2_4_2': ["sisters", "option_1", "option_2"],
    'question_2_4_3': ["husband", "option_1", "option_2"],
    'question_2_4_4': ["wife", "option_2"],
    'question_2_4_5': ["children", "option_2"],
    'question_2_4_6': ["husband", "option_2"],
    'question_2_4_7': ["husband", "option_2"],
    'question_2_4_8': ["husband", "option_2"]
};

for (qu in questions_2_4) {
    questions_2_4[qu]['answer'] = '';
}

$('.questions_2_4 input').on('change', function () {
    answered_2_4 = true;
});

$("#check_answers_2_4").click(function () {
    $('.questions_2_4 input').each(function( key, element) {
        var correct_answer = answers_2_4[$(element).data('question')];
        var user_answer = $(element).val();

        questions_2_4[$(element).data('question')]['answer'] = user_answer;

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

   if(answered_2_4 === true){
        $('#answers_2_4').fadeIn();
        $('#check_answers_2_4').css('display', 'none');
        $("#reset_answers_2_4").fadeIn();
   }
});


$('#reset_answers_2_4').click(function () {
    answered_2_4 = false;
    for (qu in questions_2_4) {
        questions_2_4[qu]['answer'] = false;
    }
    $('.questions_2_4').find('.good_icon, .wrong_icon').parent().fadeOut("normal");
    $('.questions_2_4 input').each(function( key, element) {
        $(element).val('').css({'color':'#000','font-family':'open_sansregular'});
    });

    $('#answers_2_4').hide();
    $('#check_answers_2_4').fadeIn();
    $(this).hide();
});

$("#answers_2_4").click(function () {
    $('.questions_2_4').find('.good_icon, .wrong_icon').parent().fadeOut("normal");
    $('.questions_2_4 input').val('').css({'color':'#000','font-family':'open_sansregular'});

    for (question in questions_2_4) {
        var correct_answer = answers_2_4[question][0];
        var user_answer = questions_2_4[question]['answer'];

        if (user_answer.length > 0) {
            $('.questions_2_4').find("[data-question='" + question + "']").css({'color':'#00B050','font-family':'open_sansregular'}).val(correct_answer);
        }
    }
});
/*--Page 2 activity 4--*/

/*--Page 2 activity 5--*/
$('#answers_2_5').hide();
$("#reset_answers_2_5").hide();
$("#check_answers_2_5").css('position','relative');

// Introduce questions
var answered_2_5 = false;
var questions_2_5 = {
    'question_2_5_1' : {},
    'question_2_5_2' : {},
    'question_2_5_3' : {},
    'question_2_5_4' : {},
    'question_2_5_5' : {},
    'question_2_5_6' : {},
    'question_2_5_7' : {},
    'question_2_5_8' : {}
};

// Introduce answers
var answers_2_5 = {
    'question_2_5_1': ["father's", "father´s", "father"],
    'question_2_5_2': ["sisters", "option_1", "option_2"],
    'question_2_5_3': ["husband", "option_1", "option_2"],
    'question_2_5_4': ["wife", "option_2"],
    'question_2_5_5': ["children", "option_2"],
    'question_2_5_6': ["husband", "option_2"],
    'question_2_5_7': ["husband", "option_2"],
    'question_2_5_8': ["husband", "option_2"]
};

for (qu in questions_2_5) {
    questions_2_5[qu]['answer'] = '';
}

$('.questions_2_5 input').on('change', function () {
    answered_2_5 = true;
});

$("#check_answers_2_5").click(function () {
    $('.questions_2_5 input').each(function( key, element) {
        var correct_answer = answers_2_5[$(element).data('question')];
        var user_answer = $(element).val();

        questions_2_5[$(element).data('question')]['answer'] = user_answer;

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

   if(answered_2_5 === true){
        $('#answers_2_5').fadeIn();
        $('#check_answers_2_5').css('display', 'none');
        $("#reset_answers_2_5").fadeIn();
   }
});


$('#reset_answers_2_5').click(function () {
    answered_2_5 = false;
    for (qu in questions_2_5) {
        questions_2_5[qu]['answer'] = false;
    }
    $('.questions_2_5').find('.good_icon, .wrong_icon').parent().fadeOut("normal");
    $('.questions_2_5 input').each(function( key, element) {
        $(element).val('').css({'color':'#000','font-family':'open_sansregular'});
    });

    $('#answers_2_5').hide();
    $('#check_answers_2_5').fadeIn();
    $(this).hide();
});

$("#answers_2_5").click(function () {
    $('.questions_2_5').find('.good_icon, .wrong_icon').parent().fadeOut("normal");
    $('.questions_2_5 input').val('').css({'color':'#000','font-family':'open_sansregular'});

    for (question in questions_2_5) {
        var correct_answer = answers_2_5[question][0];
        var user_answer = questions_2_5[question]['answer'];

        if (user_answer.length > 0) {
            $('.questions_2_5').find("[data-question='" + question + "']").css({'color':'#00B050','font-family':'open_sansregular'}).val(correct_answer);
        }
    }
});
/*--Page 2 activity 5--*/

