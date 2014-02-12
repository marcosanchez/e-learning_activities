/*--No configurar esta parte--*/
var array_width = new Array();
var array_height = new Array();
$(".crucigrama tr td").each(function(index) {
    if($(this).html()=="&nbsp;" && $(this).hasClass('black_box')!=true){
        $(this).css("border","thin solid #BBB");
        $(this).html("<input class='box_crucigrama' size='1' maxlength='1' type='text'/>");
    }else if($(this).html()=="&nbsp;" && $(this).hasClass('black_box')==true){
    	$(this).css("border","thin solid #BBB");
    	$(this).html("<input value=' ' class='box_crucigrama' size='1' maxlength='1' type='text' disabled='disabled'/>");
    }
});

/*--Activity 1 page 11--*/
$('#answers_11_1').hide();
$("#reset_answers_11_1").hide();
$("#check_answers_11_1").css('position','relative');

var word_1 = new Array();
var word_2 = new Array();
var word_3 = new Array();
var word_4 = new Array();
var word_5 = new Array();
var word_6 = new Array();
var word_7 = new Array();
var word_8 = new Array();
var word_9 = new Array();
var word_10 = new Array();
var word_11 = new Array();
var word_12 = new Array();

var string_word_1 = '';
var string_word_2 = '';
var string_word_3 = '';
var string_word_4 = '';
var string_word_5 = '';
var string_word_6 = '';
var string_word_7 = '';
var string_word_8 = '';
var string_word_9 = '';
var string_word_10 = '';
var string_word_11 = '';
var string_word_12 = '';

for (var i = 1; i <= 12; i++) {
    $(".word_"+ i +"_1 input").before("<span id='word_"+ i +"'>"+ i +"</span>");
    $("#word_"+i).css({
        "font-size":8,
        "position":"absolute",
        "margin-left":1,
        "margin-top":-2
    });
}

$("#check_answers_11_1").click(function () {

	for (var i = 1; i <= 15; i++) {
		word_1.push($(".word_1_" + i + " .box_crucigrama").val());
	};
	string_word_1 = word_1.join("");

	for (var i = 1; i <= 16; i++) {
		word_2.push($(".word_2_" + i + " .box_crucigrama").val());
	};
	string_word_2 = word_2.join("");

	for (var i = 1; i <= 16; i++) {
		word_3.push($(".word_3_" + i + " .box_crucigrama").val());
	};
	string_word_3 = word_3.join("");

	for (var i = 1; i <= 7; i++) {
		word_4.push($(".word_4_" + i + " .box_crucigrama").val());
	};
	string_word_4 = word_4.join("");

	for (var i = 1; i <= 10; i++) {
		word_5.push($(".word_5_" + i + " .box_crucigrama").val());
	};
	string_word_5 = word_5.join("");

	for (var i = 1; i <= 10; i++) {
		word_6.push($(".word_6_" + i + " .box_crucigrama").val());
	};
	string_word_6 = word_6.join("");

	for (var i = 1; i <= 9; i++) {
		word_7.push($(".word_7_" + i + " .box_crucigrama").val());
	};
	string_word_7 = word_7.join("");

	for (var i = 1; i <= 6; i++) {
		word_8.push($(".word_8_" + i + " .box_crucigrama").val());
	};
	string_word_8 = word_8.join("");

	for (var i = 1; i <= 11; i++) {
		word_9.push($(".word_9_" + i + " .box_crucigrama").val());
	};
	string_word_9 = word_9.join("");

	for (var i = 1; i <= 10; i++) {
		word_10.push($(".word_10_" + i + " .box_crucigrama").val());
	};
	string_word_10 = word_10.join("");

	for (var i = 1; i <= 4; i++) {
		word_11.push($(".word_11_" + i + " .box_crucigrama").val());
	};
	string_word_11 = word_11.join("");

	for (var i = 1; i <= 8; i++) {
		word_12.push($(".word_12_" + i + " .box_crucigrama").val());
	};
	string_word_12 = word_12.join("");

    if(string_word_1 == "savings account" && string_word_1.length > 1) {
        $("#good_11_1").fadeIn("normal").css("display","inline-block");
        $("#wrong_11_1").css("display","none");
    }else if(string_word_1 != "savings account" && string_word_1.length > 1) {
        $("#wrong_11_1").fadeIn("normal").css("display","inline-block");
        $("#good_11_1").css("display","none");
    }else if(string_word_1.length == 0) {
        $("#good_11_1").fadeOut("normal");
        $("#wrong_11_1").fadeOut("normal");
    };

    if(string_word_2 == "checking account" && string_word_2.length > 1){
        $("#good_11_2").fadeIn("normal").css("display","inline-block");
        $("#wrong_11_2").css("display","none");
    }else if(string_word_2 != "checking account" && string_word_2.length > 1){
        $("#wrong_11_2").fadeIn("normal").css("display","inline-block");
        $("#good_11_2").css("display","none");
    }else if(string_word_2.length == 0){
        $("#good_11_2").fadeOut("normal");
        $("#wrong_11_2").fadeOut("normal");
    };

    if(string_word_3 == "close an account" && string_word_3.length > 2){
        $("#good_11_3").fadeIn("normal").css("display","inline-block");
        $("#wrong_11_3").css("display","none");
    }else if(string_word_3 != "close an account" && string_word_3.length > 2){
        $("#wrong_11_3").fadeIn("normal").css("display","inline-block");
        $("#good_11_3").css("display","none");
    }else if(string_word_3.length == 0){
        $("#good_11_3").fadeOut("normal");
        $("#wrong_11_3").fadeOut("normal");
    };

    if(string_word_4 == "deposit" && string_word_4.length > 0) {
        $("#good_11_4").fadeIn("normal").css("display","inline-block");
        $("#wrong_11_4").css("display","none");
    }else if(string_word_4 != "deposit" && string_word_4.length > 0) {
        $("#wrong_11_4").fadeIn("normal").css("display","inline-block");
        $("#good_11_4").css("display","none");
    }else if(string_word_4.length == 0) {
        $("#good_11_4").fadeOut("normal");
        $("#wrong_11_4").fadeOut("normal");
    };

    if(string_word_5 == "withdrawal" && string_word_5.length > 0) {
        $("#good_11_5").fadeIn("normal").css("display","inline-block");
        $("#wrong_11_5").css("display","none");
    } else if(string_word_5 != "withdrawal" && string_word_5.length > 0) {
        $("#wrong_11_5").fadeIn("normal").css("display","inline-block");
        $("#good_11_5").css("display","none");
    } else if(string_word_5.length == 0) {
        $("#good_11_5").fadeOut("normal");
        $("#wrong_11_5").fadeOut("normal");
    };

    if(string_word_6 == "debit card" && string_word_6.length > 1){
        $("#good_11_6").fadeIn("normal").css("display","inline-block");
        $("#wrong_11_6").css("display","none");
    } else if(string_word_6 != "debit card" && string_word_6.length > 1){
        $("#wrong_11_6").fadeIn("normal").css("display","inline-block");
        $("#good_11_6").css("display","none");
    } else if(string_word_6.length==0) {
        $("#good_11_6").fadeOut("normal");
        $("#wrong_11_6").fadeOut("normal");
    };

    if(string_word_7 == "signature" && string_word_7.length > 0){
        $("#good_11_7").fadeIn("normal").css("display","inline-block");
        $("#wrong_11_7").css("display","none");
    } else if(string_word_7 != "signature" && string_word_7.length > 0){
        $("#wrong_11_7").fadeIn("normal").css("display","inline-block");
        $("#good_11_7").css("display","none");
    } else if(string_word_7.length==0) {
        $("#good_11_7").fadeOut("normal");
        $("#wrong_11_7").fadeOut("normal");
    };

    if(string_word_8 == "teller" && string_word_8.length > 0){
        $("#good_11_8").fadeIn("normal").css("display","inline-block");
        $("#wrong_11_8").css("display","none");
    } else if(string_word_8 != "teller" && string_word_8.length > 0){
        $("#wrong_11_8").fadeIn("normal").css("display","inline-block");
        $("#good_11_8").css("display","none");
    } else if(string_word_8.length==0) {
        $("#good_11_8").fadeOut("normal");
        $("#wrong_11_8").fadeOut("normal");
    };

    if(string_word_9 == "credit card" && string_word_9.length > 1){
        $("#good_11_9").fadeIn("normal").css("display","inline-block");
        $("#wrong_11_9").css("display","none");
    } else if(string_word_9 != "credit card" && string_word_9.length > 1){
        $("#wrong_11_9").fadeIn("normal").css("display","inline-block");
        $("#good_11_9").css("display","none");
    } else if(string_word_9.length==0) {
        $("#good_11_9").fadeOut("normal");
        $("#wrong_11_9").fadeOut("normal");
    };

    if(string_word_10 == "right away" && string_word_10.length > 1){
        $("#good_11_10").fadeIn("normal").css("display","inline-block");
        $("#wrong_11_10").css("display","none");
    } else if(string_word_10 != "right away" && string_word_10.length > 1){
        $("#wrong_11_10").fadeIn("normal").css("display","inline-block");
        $("#good_11_10").css("display","none");
    } else if(string_word_10.length==0) {
        $("#good_11_10").fadeOut("normal");
        $("#wrong_11_10").fadeOut("normal");
    };

    if(string_word_11 == "cash" && string_word_11.length > 0){
        $("#good_11_11").fadeIn("normal").css("display","inline-block");
        $("#wrong_11_11").css("display","none");
    } else if(string_word_11 != "cash" && string_word_11.length > 0){
        $("#wrong_11_11").fadeIn("normal").css("display","inline-block");
        $("#good_11_11").css("display","none");
    } else if(string_word_11.length==0) {
        $("#good_11_11").fadeOut("normal");
        $("#wrong_11_11").fadeOut("normal");
    };

    if(string_word_12 == "passport" && string_word_12.length > 0){
        $("#good_11_12").fadeIn("normal").css("display","inline-block");
        $("#wrong_11_12").css("display","none");
    } else if(string_word_12 != "passport" && string_word_12.length > 0){
        $("#wrong_11_12").fadeIn("normal").css("display","inline-block");
        $("#good_11_12").css("display","none");
    } else if(string_word_12.length==0) {
        $("#good_11_12").fadeOut("normal");
        $("#wrong_11_12").fadeOut("normal");
    };

    if(string_word_1.length > 1 || string_word_2.length > 1 || string_word_3.length > 2 || string_word_4.length > 0 || string_word_5.length > 0 || string_word_6.length > 1 || string_word_7.length > 0 || string_word_8.length > 0 || string_word_9.length > 1 || string_word_10.length > 1 || string_word_11.length > 0 || string_word_12.length > 0){
        $('#answers_11_1').fadeIn();
        $('#check_answers_11_1').css('display', 'none');
        $("#reset_answers_11_1").fadeIn();
    }

});

$('#reset_answers_11_1').click(function () {
    word_1 = [];
    word_2 = [];
    word_3 = [];
    word_4 = [];
    word_5 = [];
    word_6 = [];
    word_7 = [];
    word_8 = [];
    word_9 = [];
    word_10 = [];
    word_11 = [];
    word_12 = [];

    string_word_1 = '';
    string_word_2 = '';
    string_word_3 = '';
    string_word_4 = '';
    string_word_5 = '';
    string_word_6 = '';
    string_word_7 = '';
    string_word_8 = '';
    string_word_9 = '';
    string_word_10 = '';
    string_word_11 = '';
    string_word_12 = '';

    $('.box_crucigrama').css('color','#000');
    $('.box_crucigrama').val('');
    $('.black_box .box_crucigrama').val(' ');
    for(i = 1; i <= 12; i += 1){
        $('#good_11_' + i).fadeOut('normal');
        $('#wrong_11_' + i).fadeOut('normal');
    }
    $('#answers_11_1').hide();
    $(this).hide();
    $('#check_answers_11_1').fadeIn();
});

$("#answers_11_1").click(function () {
    if(string_word_1.length > 1){
        string_word_1 = 'savings account';
        word_1 = string_word_1.split('');
        for (var i = 1; i <= 15; i++) {
            $(".word_1_" + i + " .box_crucigrama").val(word_1[i-1]);
            $(".word_1_" + i + " .box_crucigrama").css('color','#00B050');
        };
    }
    if(string_word_2.length > 1){
        string_word_2 = 'checking account';
        word_2 = string_word_2.split('');
        for (var i = 1; i <= 16; i++) {
            $(".word_2_" + i + " .box_crucigrama").val(word_2[i-1]);
            $(".word_2_" + i + " .box_crucigrama").css('color','#00B050');
        };
    }
    if(string_word_3.length > 2){
        string_word_3 = 'close an account';
        word_3 = string_word_3.split('');
        for (var i = 1; i <= 16; i++) {
            $(".word_3_" + i + " .box_crucigrama").val(word_3[i-1]);
            $(".word_3_" + i + " .box_crucigrama").css('color','#00B050');
        };
    }
    if(string_word_4.length > 0){
        string_word_4 = 'deposit';
        word_4 = string_word_4.split('');
        for (var i = 1; i <= 7; i++) {
            $(".word_4_" + i + " .box_crucigrama").val(word_4[i-1]);
            $(".word_4_" + i + " .box_crucigrama").css('color','#00B050');
        };
    }
    if(string_word_5.length > 0){
        string_word_5 = 'withdrawal';
        word_5 = string_word_5.split('');
        for (var i = 1; i <= 10; i++) {
            $(".word_5_" + i + " .box_crucigrama").val(word_5[i-1]);
            $(".word_5_" + i + " .box_crucigrama").css('color','#00B050');
        };
    }
    if(string_word_6.length > 1){
        string_word_6 = 'debit card';
        word_6 = string_word_6.split('');
        for (var i = 1; i <= 10; i++) {
            $(".word_6_" + i + " .box_crucigrama").val(word_6[i-1]);
            $(".word_6_" + i + " .box_crucigrama").css('color','#00B050');
        };
    }
    if(string_word_7.length > 0){
        string_word_7 = 'signature';
        word_7 = string_word_7.split('');
        for (var i = 1; i <= 9; i++) {
            $(".word_7_" + i + " .box_crucigrama").val(word_7[i-1]);
            $(".word_7_" + i + " .box_crucigrama").css('color','#00B050');
        };
    }
    if(string_word_8.length > 0){
        string_word_8 = 'teller';
        word_8 = string_word_8.split('');
        for (var i = 1; i <= 6; i++) {
            $(".word_8_" + i + " .box_crucigrama").val(word_8[i-1]);
            $(".word_8_" + i + " .box_crucigrama").css('color','#00B050');
        };
    }
    if(string_word_9.length > 1){
        string_word_9 = 'credit card';
        word_9 = string_word_9.split('');
        for (var i = 1; i <= 11; i++) {
            $(".word_9_" + i + " .box_crucigrama").val(word_9[i-1]);
            $(".word_9_" + i + " .box_crucigrama").css('color','#00B050');
        };
    }
    if(string_word_10.length > 1){
        string_word_10 = 'right away';
        word_10 = string_word_10.split('');
        for (var i = 1; i <= 10; i++) {
            $(".word_10_" + i + " .box_crucigrama").val(word_10[i-1]);
            $(".word_10_" + i + " .box_crucigrama").css('color','#00B050');
        };
    }
    if(string_word_11.length > 0){
        string_word_11 = 'cash';
        word_11 = string_word_11.split('');
        for (var i = 1; i <= 4; i++) {
            $(".word_11_" + i + " .box_crucigrama").val(word_11[i-1]);
            $(".word_11_" + i + " .box_crucigrama").css('color','#00B050');
        };
    }
    if(string_word_12.length > 0){
        string_word_12 = 'passport';
        word_12 = string_word_12.split('');
        for (var i = 1; i <= 8; i++) {
            $(".word_12_" + i + " .box_crucigrama").val(word_12[i-1]);
            $(".word_12_" + i + " .box_crucigrama").css('color','#00B050');
        };
    }
    for(i = 1; i <= 12; i += 1){
        $('#good_11_' + i).fadeOut('normal');
        $('#wrong_11_' + i).fadeOut('normal');
    }
});
/*--Activity 1 page 16--*/