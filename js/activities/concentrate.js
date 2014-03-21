var abre = false;
var almacena = 0;

$(".card").on("click", function ejecuta_este_codigo(){
	if($(this).attr('data-activo')=='true'){
		$(this).animate(
		  {rotation: 360},
		  {
		    duration: 100,
		    step: function(now, fx) {
		      $(this).css({"transform": "rotateY(180deg)"});
		    }
		  }
		);
		if(abre == false){
			almacena = $(this).attr('data-number');
			abre = true;
			$(this).attr('data-activo', 'false');
		}else if(abre == true && almacena == $(this).attr('data-number')){
			$(this).off();
			$(".card[data-number*="+almacena+"]").off();
			abre = false;
			almacena = 0;
			$("#check_answers_13_1").fadeIn("slow", function() {
				$(this).delay(400).fadeOut("slow");
			});
			$("#check_answers_13_1 #bien").css("display", "block");
			$("#check_answers_13_1 #mal").css("display", "none");
		}else{
			for (var i=1;i <= 9 ; i++){
				$(".card[data-number*="+i+"]").attr('data-activo', 'false');
				$(".card[data-number*="+i+"]").css('cursor', 'auto');
			}
			$(this).delay(1000).animate(
			  {rotation: 360},
			  {
			    duration: 100,
			    step: function(now, fx) {
			      $(this).css({"transform": "rotateY(0deg)"});
			    }
			  }
			);
			$(".card[data-number*="+almacena+"]").delay(1100).animate(
			  {rotation: 360},
			  {
			    duration: 100,
			    step: function(now, fx) {
			      $(this).css({"transform": "rotateY(0deg)"});
			    },
			    complete: function() {
			    	for (var i=1;i <= 9 ; i++){
						$(".card[data-number*="+i+"]").attr('data-activo', 'true');
						$(".card[data-number*="+i+"]").css('cursor', 'pointer');
					}
				}
			  }
			);
			abre = false;
			$("#check_answers_13_1").fadeIn("slow", function() {
				$(this).delay(400).fadeOut("slow");
			});
			$("#check_answers_13_1 #bien").css("display", "none");
			$("#check_answers_13_1 #mal").css("display", "block");
		}
	}
});
