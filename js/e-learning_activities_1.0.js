/*--Multiple choice--*/
jQuery.fn.create_multiple_choice = function(check_button,reset_button,answer_button,questions_amount,answers_amount){
    answer_button.hide();
    reset_button.hide();
    check_button.css('position','relative');

    var answered = false;
    var questions = questions_amount;

    var answers = answers_amount;

    for (qu in questions) {
        questions[qu]['answer'] = '';
    }

    $(this).find('input').on('change', function () {
        answered = true;
    });

    var container = $(this);

    check_button.click(function () {
        container.find('input').each(function( key, element) {

            var correct_answer = answers[$(element).data('question')];
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
            var correct_answer = answers[question][0];
            var user_answer = questions[question]['answer'];

            if (user_answer.length > 0) {
                container.find("[data-question='" + question + "']").css({'color':'#00B050','font-family':'open_sansregular'}).val(correct_answer);
            }
        }
    });
}
/*--Multiple choice--*/

/*--Select--*/
jQuery.fn.create_select = function(check_button,reset_button,answer_button,questions_amount,answers_amount){
    answer_button.hide();
    reset_button.hide();
    check_button.css('position','relative');

    $("[data-select]").each(function(index) {
        if($(this).html().length == 1){
            $(this).css({
                'width': 21,
                'padding': 1
            });
        }else if($(this).find('figure').length){
            $(this).css('padding',0);
        }
    });

    var answered = false;

    var questions = questions_amount;

    var answers = answers_amount;

    var container = $(this);

    for (qu in questions) {
        questions[qu]['answer'] = 0;
    }

    $(this).on('click', 'div', function () {
        $(this).parent().find('div').not($(this)).css('background', '#DDD').css('color', '#000');
        $(this).css('background', '#AAA').css('color', '#FFF');

        answered = true;
        var selected_option = $(this).data('select');
        var question = questions[$(this).closest('li').data('question')];
        question['answer'] = selected_option;
    });

    check_button.click(function () {
        container.find('li').each(function( key, element) {
            var correct_answer = answers[$(element).data('question')];
            var selected_answer = questions[$(element).data('question')]['answer'];

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

        if(answered === true){
            answer_button.fadeIn();
            check_button.css('display', 'none');
            reset_button.fadeIn();
        }
    });

    reset_button.click(function () {
        answered = false;
        for (qu in questions) {
            questions[qu]['answer'] = 0;
        }
        container.find('.good_icon, .wrong_icon').parent().fadeOut("normal");
        container.find('div').each(function( key, element) {
            $(element).css('background', '#DDD').css('color', '#000');
        });

        answer_button.hide();
        check_button.fadeIn();
        $(this).hide();
    });

    answer_button.click(function () {
        container.find('.good_icon, .wrong_icon').parent().fadeOut("normal");
        container.find('div').css('background', '#DDD').css('color', '#000');

        for (question in questions) {
            var correct_answer = answers[question];
            var user_answer = questions[question]['answer'];

            if (user_answer > 0) {
                container.find("[data-question='" + question + "']").find("[data-select='" + correct_answer + "']").css('background', '#00BD56').css('color', '#FFF');
            }
        }
    });
}
/*--Select--*/

/*--Drag and drop--*/
jQuery.fn.create_drag_drop = function(answers_place,check_button,reset_button,answer_button,questions_amount,answers_amount){
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

    answers_place.find('.answer_par').each(function( key, element) {
        $(element).draggable();
    });

    var answered = false;

    var questions = questions_amount;

    var answers = answers_amount;

    var container = $(this);

    for (qu in questions) {
        questions[qu]['answer'] = 0;
    }

    $(this).find('.box').each(function( key, element) {
        $(element).droppable({
            accept: ".answer_par",
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

                answered = true;
                var correct_answer = answers[$(this).droppable().data('question')];
                var selected_answer = $(ui.draggable).data('option');

                var question = questions[$(this).droppable().data('question')];
                question['answer'] = selected_answer;
            }
        });
    });

    check_button.click(function () {
        container.find('.box').each(function( key, element) {
            var correct_answer = answers[$(element).data('question')];
            var selected_answer = questions[$(element).data('question')]['answer'];

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

        if(answered){
            answer_button.fadeIn();
            check_button.css('display', 'none');
            reset_button.fadeIn();

            answers_place.find('.answer_par').each(function( key, element) {
                $(element).draggable("disable");
            });
        }
    });

    reset_button.click(function () {
        answered = false;
        for (qu in questions) {
            questions[qu]['answer'] = 0;
        }
        container.find('.good_icon, .wrong_icon').parent().fadeOut("normal");

        answers_place.find('.answer_par').each(function( key, element) {
            $(element).css("visibility","visible");
            $(element).draggable("enable");
        });

        container.find('.box').each(function( key, element) {
            $(element).css("background-color","#DDD");
            $(element).html("&nbsp;");
            $(element).droppable("enable");
        });

        answer_button.hide();
        check_button.fadeIn();
        $(this).hide();
    });

    answer_button.click(function () {
        for (question in questions) {
            var correct_answer = answers[question];
            var user_answer = questions[question]['answer'];
            var answer_text = answers_place.find("[data-option='" + correct_answer + "']").text();

            if (user_answer) {
                container.find("[data-question='" + question + "']").css({"background-color":"#00B050","color":"#FFF"}).html(answer_text);
            }
        }

        container.find('.good_icon, .wrong_icon').parent().fadeOut("normal");
    });
}
/*--Drag and drop--*/

/*--Multiple unique answer--*/
jQuery.fn.create_multiple_unique_asnwers = function(check_button,reset_button,answer_button,questions_amount,answers_amount){
    answer_button.hide();
    reset_button.hide();
    check_button.css('position','relative');

    var answered = false;

    var questions = questions_amount;

    var answers = answers_amount;

    var container = $(this);

    for (qu in questions) {
        questions[qu]['answer'] = false;
    }

    $(this).on('click', 'input', function() {
        answered = true;
        var selected_option = $(this).data('option');
        var question = questions[$(this).closest('ol').data('question')];

        question['answer'] = selected_option;
    });


    check_button.click(function () {
        container.find('ol').each(function( key, element) {
            var correct_answer = answers[$(element).data('question')];
            var selected_answer = questions[$(element).data('question')]['answer'];

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

        if (answered === true) {
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

        $('.good_icon, .wrong_icon').parent().fadeOut("normal");
        container.find('input').each(function( key, element) {
            $(element).prop("checked", false).parent().css({'color':'#000','font-family':'open_sansregular'});
        });

        answer_button.hide();
        check_button.fadeIn();
        $(this).hide();
    });

    answer_button.click(function () {
        $('.good_icon, .wrong_icon').parent().fadeOut("normal");

        container.find('input').each(function( key, element) {
            $(element).parent().css({'color':'#000','font-family':'open_sansregular'});
            $(element).prop("checked", false);
        });

        for (question in questions) {
            var correct_answer = answers[question];
            var user_answer = questions[question]['answer'];
            
            if (user_answer) {
                container.find("[data-question='" + question + "']").find("[data-option='" + correct_answer + "']").prop("checked", true).parent().css({'color':'#00B050','font-family':'open_sanssemibold'});
            }
        }
    });
}
/*--Multiple unique answer--*/

/*--Multiples_answers--*/
jQuery.fn.create_multiples_asnwers = function(check_button,reset_button,answer_button,questions_amount,answers_amount){
    answer_button.hide();
    reset_button.hide();
    check_button.css('position','relative');

    var answered = false;

    var questions = questions_amount;

    var answers = answers_amount;

    var container = $(this);

    for (qu in questions) {
        questions[qu]['answer'] = false;
    }

    $(this).on('click', 'input', function () {
        answered = true;
    });

    check_button.click(function () {
        container.find('li.question_text').each(function( key, element) {
            var qstion_id = $(this).closest('li').data('question');

            var user_answer = {};
            for (qu_id in answers) {
                var total = 0

                for (op in answers[qu_id]) {
                    total = total + 1;
                    user_answer[op] = false;
                }
            }

            var question = questions[qstion_id];
            $(element).find('input:checked').each(function( key, option) {
                var checked_option = $(this).data('option');
                user_answer[checked_option] = true;
            });

            questions[qstion_id]['answer'] = user_answer;
            var correct_answer = answers[qstion_id];
            var answer = questions[qstion_id]['answer'];

            var answered_question = false;

            for (value in answer) {
                if (answer[value] === true) {
                    answered_question = true
                }
            }

            if (answered_question) {
                var answer_options = answers[qstion_id];
                var dict_length = Object.keys(answer_options).length;

                var correct_answers_dict = {}
                for (var i = 1, l = dict_length ; i <= l; i++)  {

                    if (user_answer['option_' + i] === answers[qstion_id]['option_' + i]) {
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

        if (answered === true) {
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
        $('.good_icon, .wrong_icon').parent().fadeOut("normal");
        container.find('input').each(function( key, element) {
            $(element).prop("checked", false).parent().css({'color':'#000','font-family':'open_sansregular'});
        });
        answer_button.hide();
        $(this).hide();
        check_button.fadeIn();
    });

    answer_button.click(function () {

        $('.good_icon, .wrong_icon').parent().fadeOut("normal");

        container.find('input').each(function( key, element) {
            $(element).parent().css({'color':'#000','font-family':'open_sansregular'});
            $(element).prop("checked", false);
        });

        for (question in questions) {
            var user_answer = questions[question]['answer'];
            var correct_answer = answers[question];
            var answered_question = false;

            for (value in user_answer) {
                if (user_answer[value] === true) {
                    answered_question = true
                }
            }
            
            if (answered_question) {
                $.each(correct_answer, function(key, value) {
                    if (value === true) {
                    container.find("[data-question='" + question + "']").find("[data-option='" + key + "']").prop("checked", true).parent().css({'color':'#00B050','font-family':'open_sanssemibold'});
                        
                    }
                });
            }
        }
    });
}
/*--Multiples_answers--*/

/*--False and true--*/
jQuery.fn.create_false_true = function(check_button,reset_button,answer_button,questions_amount,answers_amount){
    answer_button.hide();
    reset_button.hide();
    check_button.css('position','relative');

    var answered = false;

    var questions = questions_amount;

    var answers = answers_amount;

    var container = $(this);

    for (qu in questions) {
        questions[qu]['answer'] = false;
    }

    $(this).on('click', 'input', function () {
        answered = true;
        var selected_option = $(this).data('option');
        var question = questions[$(this).closest('li').data('question')];

        question['answer'] = selected_option;
    });


    check_button.click(function () {
        container.find('li').each(function( key, element) {
            var correct_answer = answers[$(element).data('question')];
            var selected_answer = questions[$(element).data('question')]['answer']; 
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

        if (answered === true) {
            answer_button.fadeIn();
            check_button.css('display', 'none');
            reset_button.fadeIn();
        };
    });


    reset_button.click(function () {
        answered = false;
        for (qu in questions) {
            questions[qu]['answer'] = false;
        }
        $('.good_icon, .wrong_icon').parent().fadeOut("normal");
        container.find('input').each(function( key, element) {
            $(element).prop("checked", false).parent().css({'color':'#000','font-family':'open_sansregular'});
        });

        answer_button.hide();
        check_button.fadeIn();
        $(this).hide();
    });


    answer_button.click(function () {
        $('.good_icon, .wrong_icon').parent().fadeOut("normal");

        container.find('input').each(function( key, element) {
            $(element).parent().css({'color':'#000','font-family':'open_sansregular'});
            $(element).prop("checked", false);
        });

        for (question in questions) {
            var correct_answer = answers[question];
            var user_answer = questions[question]['answer'];
            
            if (user_answer) {
                container.find("[data-question='" + question + "']").find("[data-option='" + correct_answer + "']").prop("checked", true).parent().css({'color':'#00B050','font-family':'open_sanssemibold'});
            }
        }
    });
}
/*--False and true--*/

/*--Drag and drop images--*/
jQuery.fn.create_drag_drop_images = function(answers_place,check_button,reset_button,answer_button,questions_amount,answers_amount){
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

    answers_place.find('.answer_par').each(function( key, element) {
        $(element).draggable();
    });

    var answered = false;

    var questions = questions_amount;

    var answers = answers_amount;

    var container = $(this);

    for (qu in questions) {
        questions[qu]['answer'] = 0;
    }

    $(this).find('.box_img').each(function( key, element) {
        $(element).droppable({
            accept: ".answer_par",
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

                answered = true;
                var correct_answer = answers[$(this).droppable().data('question')];
                var selected_answer = $(ui.draggable).data('option');

                var question = questions[$(this).droppable().data('question')];
                question['answer'] = selected_answer;
            }
        });
    });

    check_button.click(function () {
        container.find('.box_img').each(function( key, element) {
            var correct_answer = answers[$(element).data('question')];
            var selected_answer = questions[$(element).data('question')]['answer'];

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

        if(answered){
            answer_button.fadeIn();
            check_button.css('display', 'none');
            reset_button.fadeIn();

            answers_place.find('.answer_par').each(function( key, element) {
                $(element).draggable("disable");
            });
        }
    });

    reset_button.click(function () {
        answered = false;
        for (qu in questions) {
            questions[qu]['answer'] = 0;
        }
        container.parent().find('.good_icon, .wrong_icon').parent().fadeOut("normal");

        answers_place.find('.answer_par').each(function( key, element) {
            $(element).css("visibility","visible");
            $(element).draggable("enable");
        });

        container.find('.box_img').each(function( key, element) {
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
        for (question in questions) {
            var correct_answer = answers[question];
            var user_answer = questions[question]['answer'];
            var answer_img = answers_place.find("[data-option='" + correct_answer + "']").html();

            if (user_answer) {
                container.find("[data-question='" + question + "']").css("border","3px solid #00ca5c").html(answer_img);
            }
        }

        container.parent().find('.good_icon, .wrong_icon').parent().fadeOut("normal");
    });
}
/*--Drag and drop images--*/

/*--Accordion select--*/
jQuery.fn.create_accordion_select = function(check_button,reset_button,answer_button,questions_amount,answers_amount){
    answer_button.hide();
    reset_button.hide();
    check_button.css('position','relative');

    var answered = false;

    var questions = questions_amount;

    var answers = answers_amount;

    var container = $(this);

    for (qu in questions) {
        questions[qu]['answer'] = false;
    }

    $(this).on('change', 'select', function () {
        answered = true;
    });


    check_button.click(function () {
        container.find('select').each(function( key, element) {
            var correct_answer = answers[$(element).data('position')];
            var selected_answer = $(element).find('option:selected').val();
            questions[$(element).data('position')]['answer'] = selected_answer;

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

        if (answered === true) {
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
        $('.good_icon, .wrong_icon').parent().fadeOut("normal");
        container.find('select').css('color', '#000').removeAttr('disabled').val('');

        answer_button.hide();
        check_button.fadeIn();
        $(this).hide();
    });


    answer_button.click(function () {
        $('.good_icon, .wrong_icon').parent().fadeOut("normal");

        for (question in questions) {
            var user_answer = questions[question]['answer'];
            var correct_answer = answers[question];
            
            if (user_answer) {
                container.find("[data-position='" + question + "']").val(correct_answer).css('color', '#00B050');
                
            }
        }

        container.find('select').each(function( key, element) {
            $(element).attr('disabled', 'true');
        });
    });
}
/*--Accordion select--*/
