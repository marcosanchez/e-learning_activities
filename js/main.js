/*--Show and hide left and right arrow--*/
if(number_page == total_pages){
    $('.btn_next i').css('color','#DDD');
    $('.btn_next').css('cursor','default');
}

/*--Page 2 activity 1--*/
$('.questions_2_1').create_multiple_choice (
    $('#check_answers_2_1'),
    $('#reset_answers_2_1'),
    $('#answers_2_1'),
    {
        'question_2_1_1' : {},
        'question_2_1_2' : {},
        'question_2_1_3' : {},
        'question_2_1_4' : {},
        'question_2_1_5' : {},
        'question_2_1_6' : {}
    },
    {
        'question_2_1_1': ["father's", "father´s", "father"],
        'question_2_1_2': ["sisters", "option_1", "option_2"],
        'question_2_1_3': ["husband", "option_1", "option_2"],
        'question_2_1_4': ["wife", "option_2"],
        'question_2_1_5': ["children", "option_2"],
        'question_2_1_6': ["husband", "option_2"],
    }
);

/*--Page 2 activity 2--*/
$('.questions_2_2').create_multiple_choice (
    $('#check_answers_2_2'),
    $('#reset_answers_2_2'),
    $('#answers_2_2'),
    {
        'question_2_2_1' : {},
        'question_2_2_2' : {},
        'question_2_2_3' : {},
        'question_2_2_4' : {},
        'question_2_2_5' : {},
        'question_2_2_6' : {},
        'question_2_2_7' : {}
    },
    {
        'question_2_2_1': ["father's", "father´s", "father"],
        'question_2_2_2': ["sisters", "option_1", "option_2"],
        'question_2_2_3': ["husband", "option_1", "option_2"],
        'question_2_2_4': ["wife", "option_2"],
        'question_2_2_5': ["children", "option_2"],
        'question_2_2_6': ["husband", "option_2"],
        'question_2_2_7': ["husband", "option_2"]
    }
);

/*--Page 2 activity 3--*/
$('.questions_2_3').create_multiple_choice (
    $('#check_answers_2_3'),
    $('#reset_answers_2_3'),
    $('#answers_2_3'),
    {
        'question_2_3_1' : {},
        'question_2_3_2' : {},
        'question_2_3_3' : {},
        'question_2_3_4' : {},
        'question_2_3_5' : {},
        'question_2_3_6' : {},
        'question_2_3_7' : {},
        'question_2_3_8' : {}
    },
    {
        'question_2_3_1': ["father's", "father´s", "father"],
        'question_2_3_2': ["sisters", "option_1", "option_2"],
        'question_2_3_3': ["husband", "option_1", "option_2"],
        'question_2_3_4': ["wife", "option_2"],
        'question_2_3_5': ["children", "option_2"],
        'question_2_3_6': ["husband", "option_2"],
        'question_2_3_7': ["husband", "option_2"],
        'question_2_3_8': ["husband", "option_2"]
    }
);

/*--Page 2 activity 4--*/
$('.questions_2_4').create_multiple_choice (
    $('#check_answers_2_4'),
    $('#reset_answers_2_4'),
    $('#answers_2_4'),
    {
        'question_2_4_1' : {},
        'question_2_4_2' : {},
        'question_2_4_3' : {},
        'question_2_4_4' : {},
        'question_2_4_5' : {},
        'question_2_4_6' : {},
        'question_2_4_7' : {},
        'question_2_4_8' : {}
    },
    {
        'question_2_4_1': ["father's", "father´s", "father"],
        'question_2_4_2': ["sisters", "option_1", "option_2"],
        'question_2_4_3': ["husband", "option_1", "option_2"],
        'question_2_4_4': ["wife", "option_2"],
        'question_2_4_5': ["children", "option_2"],
        'question_2_4_6': ["husband", "option_2"],
        'question_2_4_7': ["husband", "option_2"],
        'question_2_4_8': ["husband", "option_2"]
    }
);

/*--Page 2 activity 5--*/
$('.questions_2_5').create_multiple_choice (
    $('#check_answers_2_5'),
    $('#reset_answers_2_5'),
    $('#answers_2_5'),
    {
        'question_2_5_1' : {},
        'question_2_5_2' : {},
        'question_2_5_3' : {},
        'question_2_5_4' : {},
        'question_2_5_5' : {},
        'question_2_5_6' : {},
        'question_2_5_7' : {},
        'question_2_5_8' : {}
    },
    {
        'question_2_5_1': ["father's", "father´s", "father"],
        'question_2_5_2': ["sisters", "option_1", "option_2"],
        'question_2_5_3': ["husband", "option_1", "option_2"],
        'question_2_5_4': ["wife", "option_2"],
        'question_2_5_5': ["children", "option_2"],
        'question_2_5_6': ["husband", "option_2"],
        'question_2_5_7': ["husband", "option_2"],
        'question_2_5_8': ["husband", "option_2"]
    }
);

/*--Page 3 activity 1--*/
$('.questions_3_1').create_select (
    $('#check_answers_3_1'),
    $('#reset_answers_3_1'),
    $('#answers_3_1'),
    {
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
    },
    {
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
    }
);

/*--Page 3 activity 2--*/
$('.questions_3_2').create_select (
    $('#check_answers_3_2'),
    $('#reset_answers_3_2'),
    $('#answers_3_2'),
    {
        'question_3_2_1' : {},
        'question_3_2_2' : {},
        'question_3_2_3' : {},
        'question_3_2_4' : {},
        'question_3_2_5' : {},
        'question_3_2_6' : {},
        'question_3_2_7' : {},
        'question_3_2_8' : {},
        'question_3_2_9' : {},
        'question_3_2_10' : {}
    },
    {
        'question_3_2_1': '3',
        'question_3_2_2': '4',
        'question_3_2_3': '2',
        'question_3_2_4': '3',
        'question_3_2_5': '2',
        'question_3_2_6': '1',
        'question_3_2_7': '3',
        'question_3_2_8': '1',
        'question_3_2_9': '4',
        'question_3_2_10': '2'
    }
);

/*--Page 3 activity 3--*/
$('.questions_3_3').create_select (
    $('#check_answers_3_3'),
    $('#reset_answers_3_3'),
    $('#answers_3_3'),
    {
        'question_3_3_1' : {},
        'question_3_3_2' : {},
        'question_3_3_3' : {},
        'question_3_3_4' : {}
    },
    {
        'question_3_3_1': '3',
        'question_3_3_2': '1',
        'question_3_3_3': '2',
        'question_3_3_4': '3'
    }
);

/*--Page 4 activity 1--*/
$('.answer_options_4_1').create_drag_drop(
    $('.answers_place_4_1'),
    $('#check_answers_4_1'),
    $('#reset_answers_4_1'),
    $('#answers_4_1'),
    {
        'question_4_1_1' : {},
        'question_4_1_2' : {},
        'question_4_1_3' : {},
        'question_4_1_4' : {},
        'question_4_1_5' : {},
        'question_4_1_6' : {},
        'question_4_1_7' : {}
    },
    {
        'question_4_1_1': '2',
        'question_4_1_2': '1',
        'question_4_1_3': '3',
        'question_4_1_4': '4',
        'question_4_1_5': '5',
        'question_4_1_6': '6',
        'question_4_1_7': '7'
    }
);

/*--Page 5 activity 1--*/
$('.questions_5_1').create_multiple_unique_asnwers (
    $('#check_answers_5_1'),
    $('#reset_answers_5_1'),
    $('#answers_5_1'),
    {
        'question_5_1_1': {},
        'question_5_1_2': {},
        'question_5_1_3': {}
    },
    {
        'question_5_1_1': 'option_1',
        'question_5_1_2': 'option_2',
        'question_5_1_3': 'option_4'
    }
);

/*--Page 6 activity 1--*/
$('.questions_6_1').create_multiples_asnwers (
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

/*--Page 7 activity 1--*/
$('.questions_7_1').create_false_true (
    $('#check_answers_7_1'),
    $('#reset_answers_7_1'),
    $('#answers_7_1'),
    {
        'question_7_1_1' : {},
        'question_7_1_2' : {},
        'question_7_1_3' : {},
        'question_7_1_4' : {}
    },
    {
        'question_7_1_1': 'option_1',
        'question_7_1_2': 'option_2',
        'question_7_1_3': 'option_1',
        'question_7_1_4': 'option_1'
    }
);

/*--Page 8 activity 1--*/
$('.answer_options_8_1').create_drag_drop_images(
    $('.answers_place_8_1'),
    $('#check_answers_8_1'),
    $('#reset_answers_8_1'),
    $('#answers_8_1'),
    {
        'question_8_1_1' : {},
        'question_8_1_2' : {},
        'question_8_1_3' : {},
        'question_8_1_4' : {},
        'question_8_1_5' : {},
        'question_8_1_6' : {},
        'question_8_1_7' : {}
    },
    {
        'question_8_1_1': '7',
        'question_8_1_2': '2',
        'question_8_1_3': '3',
        'question_8_1_4': '4',
        'question_8_1_5': '5',
        'question_8_1_6': '6',
        'question_8_1_7': '1'
    }
);

/*--Page 9 activity 1--*/
$('.questions_9_1').create_accordion_select (
    $('#check_answers_9_1'),
    $('#reset_answers_9_1'),
    $('#answers_9_1'),
    {
        'question_9_1': {},
        'question_9_2': {},
        'question_9_3': {},
        'question_9_4': {},
        'question_9_5': {},
        'question_9_6': {},
        'question_9_7': {}
    },
    {
        'question_9_1': 5,
        'question_9_2': 1,
        'question_9_3': 6,
        'question_9_4': 7,
        'question_9_5': 4,
        'question_9_6': 2,
        'question_9_7': 3,
    },
    {
        1: 'récord',
        2: 'ping-pong',
        3: 'jardín',
        4: 'manos',
        5: 'sol',
        6: 'puertas',
        7: 'mes'
    }
);
