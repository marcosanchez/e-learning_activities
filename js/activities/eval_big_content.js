/*--Activity 1 page 17--*/
$('#answers_12_1').hide();
$("#reset_answers_12_1").hide();
$("#check_answers_12_1").css('position','relative');

var string_1 = '';

$("#check_answers_12_1").click(function () {

    string_1 = $("#option_12_1").val();

    if(string_1 == "El agua es el elemento clave para la formación de vida y un nuevo descubrimiento sugiere que el Universo está lleno de ella. Científicos han demostrado que el polvo estelar, granos microscópicos que flotan en nuestro Sistema Solar y en otros de múltiples galaxias, contienen partículas de agua que se forman gracias al viento solar. Este descubrimiento sugiere que la posibilidad de vida es mucho más universal de lo que creíamos." && string_1.length > 0) {
        $("#good_12_1").fadeIn("normal").css("display","inline-block");
        $("#wrong_12_1").css("display","none");
    }else if(string_1 != "El agua es el elemento clave para la formación de vida y un nuevo descubrimiento sugiere que el Universo está lleno de ella. Científicos han demostrado que el polvo estelar, granos microscópicos que flotan en nuestro Sistema Solar y en otros de múltiples galaxias, contienen partículas de agua que se forman gracias al viento solar. Este descubrimiento sugiere que la posibilidad de vida es mucho más universal de lo que creíamos." && string_1.length > 0) {
        $("#wrong_12_1").fadeIn("normal").css("display","inline-block");
        $("#good_12_1").css("display","none");
    }else if(string_1.length == 0) {
        $("#good_12_1").fadeOut("normal");
        $("#wrong_12_1").fadeOut("normal");
    };

    if(string_1.length > 0){
        $('#answers_12_1').fadeIn();
        $('#check_answers_12_1').css('display', 'none');
        $("#reset_answers_12_1").fadeIn();
    }

});

$('#reset_answers_12_1').click(function () {
    for(i = 1; i <= 1; i += 1){
        $('#good_12_' + i).fadeOut('normal');
        $('#wrong_12_' + i).fadeOut('normal');
        document.getElementById('option_12_' + i).value = '';
        document.getElementById('option_12_' + i).style.color = '#000';
    }
    $('#answers_12_1').hide();
    $(this).hide();
    $('#check_answers_12_1').fadeIn();
});

$("#answers_12_1").click(function () {
    if(string_1.length > 0){
        document.getElementById('option_12_1').value = 'El agua es el elemento clave para la formación de vida y un nuevo descubrimiento sugiere que el Universo está lleno de ella. Científicos han demostrado que el polvo estelar, granos microscópicos que flotan en nuestro Sistema Solar y en otros de múltiples galaxias, contienen partículas de agua que se forman gracias al viento solar. Este descubrimiento sugiere que la posibilidad de vida es mucho más universal de lo que creíamos.';
        document.getElementById('option_12_1').style.color = '#00b050';
    }

    for(i = 1; i <= 1; i += 1){
        $('#good_12_' + i).fadeOut('normal');
        $('#wrong_12_' + i).fadeOut('normal');
    }
});
/*--Activity 1 page 17--*/
