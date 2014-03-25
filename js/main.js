/*--Activity in EPFAC button--*/
var btn_epfac_up = false;
$('.btn_epfac').on('click', function(){
	if(btn_epfac_up == false){
        $('footer').animate({
            "bottom": 0},
            600
        );
        btn_epfac_up = true;
    }else{
        $('footer').animate({
            "bottom": -78},
            600
        );
        btn_epfac_up = false;
    }
return false;
});

/*--Tooltips--*/
$('.btn_help').tooltip({
    position: {
        my: 'center top+44',
        at: 'center+5 top',
        using: function( position, feedback ) {
            $( this ).css( position );
            $( '<div>' )
            .addClass( 'arrow' )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
    }
});
$('.btn_about').tooltip({
    position: {
        my: 'center top+44',
        at: 'center+5 top',
        using: function( position, feedback ) {
            $( this ).css( position );
            $( '<div>' )
            .addClass( 'arrow' )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
    }
});
$('.btn_close, .btn_close_intro').tooltip({
    position: {
        my: 'center top+37',
        at: 'center+1 top',
        using: function( position, feedback ) {
            $( this ).css( position );
            $('<div>')
            .addClass('arrow')
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
    }
});
$('.btn_traduction').tooltip({
    position: {
        my: 'center top+37',
        at: 'center+1 top',
        using: function( position, feedback ) {
            $( this ).css( position );
            $('<div>')
            .addClass('arrow')
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
    },
    tooltipClass: "tooltip-traduction"
});

$('.btn_source').tooltip({
    position: {
        my: 'center top+28',
        at: 'center top',
        using: function( position, feedback ) {
            $( this ).css( position );
            $('<div>')
            .addClass('arrow')
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
    },
    tooltipClass: "tooltip-source"
});

/*--Close Lesson--*/
function closer(){
    parent.window.close();
} 

/*--Accordion--*/
$(function(){
    $("#accordion").accordion({
        heightStyle: "content",
        beforeActivate: function( event, ui ) {
            $(ui.newHeader).css("font-weight",'bold');
            $(ui.oldHeader).css("font-weight",'normal');
        }
    });
});

/*--Tabs--*/
$(function() {
$("#tabs").tabs({
        beforeActivate: function( event, ui ) {
            $(ui.newTab).addClass("bold");
            $(ui.oldTab).removeClass("bold");
        }
    });
});

/*--Show and hide left and right arrow--*/
if(number_page == total_pages){
    $('.btn_next i').css('color','#DDD');
    $('.btn_next').css('cursor','default');
}

/*--Detect iOS, Android and Windows dispositive--*/

var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
if(iOS == true){
    $('.jp-jplayer, .jp-audio').css('width',310);
    $('.jp-progress').css('right',54);
    $('.jp-time-holder').css('right',12);
}

var Android = ( navigator.userAgent.match(/(Android)/g) ? true : false );
if(Android == true){
    $('.jp-jplayer, .jp-audio').css('width',310);
    $('.jp-progress').css('right',54);
    $('.jp-time-holder').css('right',12);
}

var Windows = ( navigator.userAgent.match(/(IEMobile)/g) ? true : false );
if(Windows == true){
    $('.jp-jplayer, .jp-audio').css('width',310);
    $('.jp-progress').css('right',54);
    $('.jp-time-holder').css('right',12);
}
