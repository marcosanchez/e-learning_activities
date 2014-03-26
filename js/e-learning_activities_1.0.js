/*--Multiple choice--*/
jQuery.fn.create_multiple_choice = function(check_button,reset_button,answer_button,questions_amount,answers_amount){
    answer_button.hide();
    reset_button.hide();
    check_button.css('position','relative');

    var answered = false;
    var questions = questions_amount;

    var answers_2_6 = answers_amount;

    for (qu in questions) {
        questions[qu]['answer'] = '';
    }

    $(this).find('input').on('change', function () {
        answered = true;
    });

    var container = $(this);

    check_button.click(function () {
        container.find('input').each(function( key, element) {

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
        container.find('.good_icon, .wrong_icon').parent().fadeOut("normal");
        container.find('input').each(function( key, element) {
            $(element).val('').css({'color':'#000','font-family':'open_sansregular'});
        });

        answer_button.hide();
        check_button.fadeIn();
        $(this).hide();
    });

    answer_button.click(function () {
        container.find('.good_icon, .wrong_icon').parent().fadeOut("normal");
        $(this).val('').css({'color':'#000','font-family':'open_sansregular'});

        for (question in questions) {
            var correct_answer = answers_2_6[question][0];
            var user_answer = questions[question]['answer'];

            if (user_answer.length > 0) {
                container.find("[data-question='" + question + "']").css({'color':'#00B050','font-family':'open_sansregular'}).val(correct_answer);
            }
        }
    });
}
/*--Multiple choice--*/

/*--Select--*/
function create_select(questions_html,check_button,reset_button,answer_button,questions_amount,answers_amount){
    answer_button.hide();
    reset_button.hide();
    check_button.css('position','relative');

    if(questions_html.find('div').html().length == 1){
        questions_html.find('div').css({
            'width': 21,
            'padding': 1
        });
    }else if(questions_html.find('figure').length){
        questions_html.find('div').css('padding',0);
    }

    var answered_3_1 = false;

    var questions_3_1 = questions_amount;

    var answers_3_1 = answers_amount;

    for (qu in questions_3_1) {
        questions_3_1[qu]['answer'] = 0;
    }

    questions_html.on('click', 'div', function () {
        $(this).parent().find('div').not($(this)).css('background', '#DDD').css('color', '#000');
        $(this).css('background', '#AAA').css('color', '#FFF');

        answered_3_1 = true;
        var selected_option = $(this).data('select');
        var question = questions_3_1[$(this).closest('li').data('question')];
        question['answer'] = selected_option;
    });

    check_button.click(function () {
        questions_html.find('li').each(function( key, element) {
            var correct_answer = answers_3_1[$(element).data('question')];
            var selected_answer = questions_3_1[$(element).data('question')]['answer'];

            if (selected_answer) {
                $(element).find('.good_icon').parent().addClass('activity_span');
                if (correct_answer == selected_answer) {
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

        if(answered_3_1 === true){
            answer_button.fadeIn();
            check_button.css('display', 'none');
            reset_button.fadeIn();
        }
    });

    reset_button.click(function () {
        answered_3_1 = false;
        for (qu in questions_3_1) {
            questions_3_1[qu]['answer'] = 0;
        }
        questions_html.find('.good_icon, .wrong_icon').parent().fadeOut("normal");
        questions_html.find('div').each(function( key, element) {
            $(element).css('background', '#DDD').css('color', '#000');
        });

        answer_button.hide();
        check_button.fadeIn();
        $(this).hide();
    });

    answer_button.click(function () {
        questions_html.find('.good_icon, .wrong_icon').parent().fadeOut("normal");
        questions_html.find('div').css('background', '#DDD').css('color', '#000');

        for (question in questions_3_1) {
            var correct_answer = answers_3_1[question];
            var user_answer = questions_3_1[question]['answer'];

            if (user_answer > 0) {
                questions_html.find("[data-question='" + question + "']").find("[data-select='" + correct_answer + "']").css('background', '#00BD56').css('color', '#FFF');
            }
        }
    });
}
/*--Select--*/

/*--Drag and drop--*/
function create_drag_drop(answers_options,answers_place,check_button,reset_button,answer_button,questions_amount,answers_amount){
    var array_width = new Array();
    var array_height = new Array();
    $(".box").each(function(index) {
        array_width.push($(this).innerWidth());
        array_height.push($(this).innerHeight());
        if($(this).html().length > 1){
            $(this).css('background','#FFC742');
            $(this).css('color','#333');
            $(this).css('cursor','pointer');
        }else{
            $(this).html("&nbsp;");
        }
    });
    $(".box").css('width',Math.max.apply(Math,array_width));
    $(".box").css('height',Math.max.apply(Math,array_height)-1);

    $("body").droppable({
        drop: function(event, ui) {
            $(ui.draggable).css("left",0);
            $(ui.draggable).css("top",0);
        }
    });

    answer_button.hide();
    reset_button.hide();
    check_button.css('position','relative');

    answers_options.find('.answer_par').each(function( key, element) {
        $(element).draggable();
    });

    var answered_4_1 = false;

    var questions_4_1 = questions_amount;

    var answers_4_1 = answers_amount;

    for (qu in questions_4_1) {
        questions_4_1[qu]['answer'] = 0;
    }

    answers_place.find('.box').each(function( key, element) {
        $(element).droppable({
            accept: ".answer_options_4_1 .answer_par",
            drop: function(event, ui) {
                $(this).css("background-color","#FFC742");
                $(this).css("color","#333");
                $(this).html($(ui.draggable).html());
                $(ui.draggable).css("left",0);
                $(ui.draggable).css("top",0);
                $(ui.draggable).css("visibility","hidden");
                $(this).css("opacity",1);
                $(this).droppable( "disable");
                $(ui.draggable).draggable("disable");

                answered_4_1 = true;
                var correct_answer = answers_4_1[$(this).droppable().data('question')];
                var selected_answer = $(ui.draggable).data('option');

                var question = questions_4_1[$(this).droppable().data('question')];
                question['answer'] = selected_answer;
            }
        });
    });

    check_button.click(function () {
        answers_place.find('.box').each(function( key, element) {
            var correct_answer = answers_4_1[$(element).data('question')];
            var selected_answer = questions_4_1[$(element).data('question')]['answer'];

            if (selected_answer) {
                $(element).parent().find('.good_icon').parent().addClass('activity_span');
                if (correct_answer == selected_answer) {
                    $(element).parent().find('.good_icon').parent().fadeIn('normal').css("display","inline-block");
                    $(element).parent().find('.good_icon').fadeIn('normal').css("display","inline-block");
                    $(element).parent().find('.wrong_icon').css('display','none');
                } else {
                    $(element).parent().find('.wrong_icon').parent().fadeIn('normal').css("display","inline-block");
                    $(element).parent().find('.wrong_icon').fadeIn('normal').css("display","inline-block");
                    $(element).parent().find('.good_icon').css('display','none');
                }
            }
        });

        if(answered_4_1){
            answer_button.fadeIn();
            check_button.css('display', 'none');
            reset_button.fadeIn();

            answers_options.find('.answer_par').each(function( key, element) {
                $(element).draggable("disable");
            });
        }
    });

    reset_button.click(function () {
        answered_4_1 = false;
        for (qu in questions_4_1) {
            questions_4_1[qu]['answer'] = 0;
        }
        answers_place.find('.good_icon, .wrong_icon').parent().fadeOut("normal");

        answers_options.find('.answer_par').each(function( key, element) {
            $(element).css("visibility","visible");
            $(element).draggable("enable");
        });

        answers_place.find('.box').each(function( key, element) {
            $(element).css("background-color","#DDD");
            $(element).html("&nbsp;");
            $(element).droppable("enable");
        });

        answer_button.hide();
        check_button.fadeIn();
        $(this).hide();
    });

    answer_button.click(function () {
        for (question in questions_4_1) {
            var correct_answer = answers_4_1[question];
            var user_answer = questions_4_1[question]['answer'];
            var answer_text = answers_options.find("[data-option='" + correct_answer + "']").text();

            if (user_answer) {
                answers_place.find("[data-question='" + question + "']").css({"background-color":"#00B050","color":"#FFF"}).html(answer_text);
            }
        }

        answers_place.find('.good_icon, .wrong_icon').parent().fadeOut("normal");
    });
}
/*--Drag and drop--*/

/*--Multiple unique answer--*/
function create_multiple_unique_asnwers (questions_html,check_button,reset_button,answer_button,questions_amount,answers_amount){
    answer_button.hide();
    reset_button.hide();
    check_button.css('position','relative');

    var answered_5_1 = false;

    var questions_5_1 = questions_amount;

    var answers_5_1 = answers_amount;

    for (qu in questions_5_1) {
        questions_5_1[qu]['answer'] = false;
    }

    questions_html.on('click', 'input', function() {
        answered_5_1 = true;
        var selected_option = $(this).data('option');
        var question = questions_5_1[$(this).closest('ol').data('question')];

        question['answer'] = selected_option;
    });


    check_button.click(function () {
        questions_html.find('ol').each(function( key, element) {
            var correct_answer = answers_5_1[$(element).data('question')];
            var selected_answer = questions_5_1[$(element).data('question')]['answer'];

            if (selected_answer) {
                $(element).parent().find('.good_icon').parent().addClass('activity_span');
                if (correct_answer === selected_answer) {
                    $(element).parent().find('.good_icon').parent().fadeIn('normal').css("display","inline-block");
                    $(element).parent().find('.good_icon').fadeIn('normal').css("display","inline-block");
                    $(element).parent().find('.wrong_icon').css('display','none');
                } else {
                    $(element).parent().find('.wrong_icon').parent().fadeIn('normal').css("display","inline-block");
                    $(element).parent().find('.wrong_icon').fadeIn('normal').css("display","inline-block");
                    $(element).parent().find('.good_icon').css('display','none');
                }

            }
        });

        if (answered_5_1 === true) {
            answer_button.fadeIn();
            check_button.css('display', 'none');
            reset_button.fadeIn();
            
        }
    });

    reset_button.click(function () {
        answered_5_1 = false;
        for (qu in questions_5_1) {
            questions_5_1[qu]['answer'] = false;
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

        for (question in questions_5_1) {
            var correct_answer = answers_5_1[question];
            var user_answer = questions_5_1[question]['answer'];
            
            if (user_answer) {
                questions_html.find("[data-question='" + question + "']").find("[data-option='" + correct_answer + "']").prop("checked", true).parent().css({'color':'#00B050','font-family':'open_sanssemibold'});
            }
        }
    });
}
/*--Multiple unique answer--*/

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

/*--Drag and drop images--*/
function create_drag_drop_images(answers_options,answers_place,check_button,reset_button,answer_button,questions_amount,answers_amount){
    var array_width = new Array();
    var array_height = new Array();
    $(".box_img").each(function(index) {
        array_width.push($(this).innerWidth());
        array_height.push($(this).innerHeight());
        if($(this).html().length > 1){
            $(this).css('cursor','pointer');
        }else{
            $(this).html("&nbsp;");
        }
    });
    $(".box").css('width',Math.max.apply(Math,array_width));
    $(".box").css('height',Math.max.apply(Math,array_height));

    $("body").droppable({
        drop: function(event, ui) {
            $(ui.draggable).css("left",0);
            $(ui.draggable).css("top",0);
        }
    });

    answer_button.hide();
    reset_button.hide();
    check_button.css('position','relative');

    answers_options.find('.answer_par').each(function( key, element) {
        $(element).draggable();
    });

    var answered_8_1 = false;

    var questions_8_1 = questions_amount;

    var answers_8_1 = answers_amount;

    for (qu in questions_8_1) {
        questions_8_1[qu]['answer'] = 0;
    }

    answers_place.find('.box_img').each(function( key, element) {
        $(element).droppable({
            accept: ".answer_options_8_1 .answer_par",
            drop: function(event, ui) {
                $(this).css("background-color","#FFC742");
                $(this).css("color","#333");
                $(this).html($(ui.draggable).html());
                $(ui.draggable).css("left",0);
                $(ui.draggable).css("top",0);
                $(ui.draggable).css("visibility","hidden");
                $(this).css("opacity",1);
                $(this).droppable( "disable");
                $(ui.draggable).draggable("disable");

                answered_8_1 = true;
                var correct_answer = answers_8_1[$(this).droppable().data('question')];
                var selected_answer = $(ui.draggable).data('option');

                var question = questions_8_1[$(this).droppable().data('question')];
                question['answer'] = selected_answer;
            }
        });
    });

    check_button.click(function () {
        answers_place.find('.box_img').each(function( key, element) {
            var correct_answer = answers_8_1[$(element).data('question')];
            var selected_answer = questions_8_1[$(element).data('question')]['answer'];

            if (selected_answer) {
                $(element).parent().find('.good_icon').parent().addClass('activity_span');
                if (correct_answer == selected_answer) {
                    $(element).parent().find('.good_icon').parent().fadeIn('normal').css("display","inline-block");
                    $(element).parent().find('.good_icon').fadeIn('normal').css("display","inline-block");
                    $(element).parent().find('.wrong_icon').css('display','none');
                } else {
                    $(element).parent().find('.wrong_icon').parent().fadeIn('normal').css("display","inline-block");
                    $(element).parent().find('.wrong_icon').fadeIn('normal').css("display","inline-block");
                    $(element).parent().find('.good_icon').css('display','none');
                }
            }
        });

        if(answered_8_1){
            answer_button.fadeIn();
            check_button.css('display', 'none');
            reset_button.fadeIn();

            answers_options.find('.answer_par').each(function( key, element) {
                $(element).draggable("disable");
            });
        }
    });

    reset_button.click(function () {
        answered_8_1 = false;
        for (qu in questions_8_1) {
            questions_8_1[qu]['answer'] = 0;
        }
        answers_place.parent().find('.good_icon, .wrong_icon').parent().fadeOut("normal");

        answers_options.find('.answer_par').each(function( key, element) {
            $(element).css("visibility","visible");
            $(element).draggable("enable");
        });

        answers_place.find('.box_img').each(function( key, element) {
            $(element).css("background-color","#DDD");
            $(element).html("&nbsp;");
            $(element).css("border","none");
            $(element).droppable("enable");
        });

        answer_button.hide();
        check_button.fadeIn();
        $(this).hide();
    });

    answer_button.click(function () {
        for (question in questions_8_1) {
            var correct_answer = answers_8_1[question];
            var user_answer = questions_8_1[question]['answer'];
            var answer_img = answers_options.find("[data-option='" + correct_answer + "']").html();

            if (user_answer) {
                answers_place.find("[data-question='" + question + "']").css("border","3px solid #00ca5c").html(answer_img);
            }
        }

        answers_place.parent().find('.good_icon, .wrong_icon').parent().fadeOut("normal");
    });
}
/*--Drag and drop images--*/

/*--Accordion select--*/
function create_accordion_select (questions_html,check_button,reset_button,answer_button,questions_amount,answers_amount,options_amount){
    answer_button.hide();
    reset_button.hide();
    check_button.css('position','relative');

    var answered_9_1 = false;

    var questions_9_1 = questions_amount;

    var answers_9_1 = answers_amount;

    var select_options_9_1 = options_amount;

    for (qu in questions_9_1) {
        questions_9_1[qu]['answer'] = false;
    }

    questions_html.on('change', 'select', function () {
        answered_9_1 = true;
    });


    check_button.click(function () {
        questions_html.find('select').each(function( key, element) {
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
            answer_button.fadeIn();
            check_button.css('display', 'none');
            reset_button.fadeIn();
        }
    });

    reset_button.click(function () {
        answered_9_1 = false;
        for (qu in questions_9_1) {
            questions_9_1[qu]['answer'] = false;
        }
        $('.good_icon, .wrong_icon').parent().fadeOut("normal");
        questions_html.find('select').css('color', '#000').removeAttr('disabled').val('');

        answer_button.hide();
        check_button.fadeIn();
        $(this).hide();
    });


    answer_button.click(function () {
        $('.good_icon, .wrong_icon').parent().fadeOut("normal");

        for (question in questions_9_1) {
            var user_answer = questions_9_1[question]['answer'];
            var correct_answer = answers_9_1[question];
            
            if (user_answer) {
                questions_html.find("[data-position='" + question + "']").val(correct_answer).css('color', '#00B050');
                
            }
        }

        questions_html.find('select').each(function( key, element) {
            $(element).attr('disabled', 'true');
        });
    });
}
/*--Accordion select--*/
