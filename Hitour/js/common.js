let overedIndex = 0;
let isOver1 = [false, false, false, false];
let isOver2 = [false, false, false, false];



function goHide(overedIndex) {
	if (!isOver1[overedIndex] && !isOver2[overedIndex]) {
		$('.gnb_depth2_'+(overedIndex+1)).stop().fadeOut('fast');
	}
}


$(document).ready( function() {
	
	$('a.s_point').smoothScroll();

	// 스크롤하여 내려와야 top버튼이 보이도록 함.
	if ( $(document).scrollTop() < 50) $('.to_top').addClass('hide');
	else $('.to_top').removeClass('hide');
	$(window).scroll( function() {
	  if ( $(document).scrollTop() < 50) $('.to_top').addClass('hide');
	  else $('.to_top').removeClass('hide');
	});

	//gnb_depth2_1	
	$('.openAll1').mouseover(function(){
		if ( parseInt($('header').css('width')) > 800 )
			$('.gnb_depth2_1').fadeIn('fast');
			isOver1[0] = true;
	});	
    $('.openAll1').focus(function(){
		if ( parseInt($('header').css('width')) > 800 )
			$('.gnb_depth2_1').fadeIn('fast');
			isOver1[0] = true;
	});
	$('.openAll1').mouseout(function(){
		isOver1[0] = false;
		setTimeout("goHide(0)",200);
	});	
	$('.gnb_depth2_1 li:last-child a').blur(function(){
		isOver1[0] = false;
		setTimeout("goHide(0)",200);
	});	
	$('.gnb_depth2_1').mouseover(function(){
		isOver2[0] = true;			
	});	
	$('.gnb_depth2_1').focus(function(){
		isOver2[0] = true;			
	});	
	$('.gnb_depth2_1').mouseout(function(){
		isOver2[0] = false;
		setTimeout("goHide(0)",200);
	});	
	$('.gnb_depth2_1').blur(function(){
		isOver2[0] = false;
		setTimeout("goHide(0)",200);
	});	
	//gnb_depth2_2	
	$('.openAll2').mouseover(function(){
		if ( parseInt($('header').css('width')) > 800 ) $('.gnb_depth2_2').fadeIn('fast');
		isOver1[1] = true;
	});
	$('.openAll2').focus(function(){
		if ( parseInt($('header').css('width')) > 800 ) $('.gnb_depth2_2').fadeIn('fast');
		isOver1[1] = true;
	});
	$('.openAll2').mouseout(function(){
		isOver1[1] = false;
		setTimeout("goHide(1)",200);
	});	
	$('.gnb_depth2_2 li:last-child a').blur(function(){
		isOver1[1] = false;
		setTimeout("goHide(1)",200);
	});	
	$('.gnb_depth2_2').mouseover(function(){
		isOver2[1] = true;			
	});	
	$('.gnb_depth2_2').focus(function(){
		isOver2[1] = true;			
	});	
	$('.gnb_depth2_2').mouseout(function(){
		isOver2[1] = false;
		setTimeout("goHide(1)",200);
	});	
	$('.gnb_depth2_2').blur(function(){
		isOver2[1] = false;
		setTimeout("goHide(1)",200);
	});	
	//gnb_depth2_3	
	$('.openAll3').mouseover(function(){
		if ( parseInt($('header').css('width')) > 800 ) $('.gnb_depth2_3').fadeIn('fast');
		isOver1[2] = true;
	});
	$('.openAll3').focus(function(){
		if ( parseInt($('header').css('width')) > 800 ) $('.gnb_depth2_3').fadeIn('fast');
		isOver1[2] = true;
	});
	$('.openAll3').mouseout(function(){
		isOver1[2] = false;
		setTimeout("goHide(2)",200);
	});	
	$('.gnb_depth2_3 li:last-child a').blur(function(){
		isOver1[2] = false;
		setTimeout("goHide(2)",200);
	});	
	$('.gnb_depth2_3').mouseover(function(){
		isOver2[2] = true;			
	});	
	$('.gnb_depth2_3').focus(function(){
		isOver2[2] = true;			
	});	
	$('.gnb_depth2_3').mouseout(function(){
		isOver2[2] = false;
		setTimeout("goHide(2)",200);
	});	
	$('.gnb_depth2_3').blur(function(){
		isOver2[2] = false;
		setTimeout("goHide(2)",200);
	});	
	//gnb_depth2_4	
	$('.openAll4').mouseover(function(){
		if ( parseInt($('header').css('width')) > 800 ) $('.gnb_depth2_4').fadeIn('fast');
		isOver1[3] = true;
	});
	$('.openAll4').focus(function(){
		if ( parseInt($('header').css('width')) > 800 ) $('.gnb_depth2_4').fadeIn('fast');
		isOver1[3] = true;
	});
	$('.openAll4').mouseout(function(){
		isOver1[3] = false;
		setTimeout("goHide(3)",200);
	});	
	$('.gnb_depth2_4 li:last-child a').blur(function(){
		isOver1[3] = false;
		setTimeout("goHide(3)",200);
	});	
	$('.gnb_depth2_4').mouseover(function(){
		isOver2[3] = true;			
	});	
	$('.gnb_depth2_4').focus(function(){
		isOver2[3] = true;			
	});	
	$('.gnb_depth2_4').mouseout(function(){
		isOver2[3] = false;
		setTimeout("goHide(3)",200);
	});	
	$('.gnb_depth2_4').blur(function(){
		isOver2[3] = false;
		setTimeout("goHide(3)",200);
	});	
    
	//모바일 메뉴 띄움
	$('.openMOgnb').click(function(){
		$('header').addClass('on');
		$('header .header_cont').slideDown('fast');
		$('header .header_area .header_cont .closePop').show();			
		$("body").bind('touchmove', function(e){e.preventDefault()});
	});
	$('header .header_cont .closePop').click(function(){
        $('.header_cont').slideUp('fast');
        $('header').removeClass('on');
        $("body").unbind('touchmove');
	});
	
});


$(document).ready(function(){
    // PC브라우저에서 좁혀서 메뉴 닫고 다시 넓힐 때 상단메뉴 노출되게.
    $(window).resize(function() {
        if ( parseInt($('header').css('width')) > 800 ) $('.header_cont').show();
    }); 
    
    // 프로그램 소개 - 더보기/접기 작동
	$('.program_list li .btn_more a').click(function(){
		if ($(this).parent().parent().find('.subtxt').css('display') == 'none') {
			$(this).parent().parent().find('.subtxt').css('display','inline');
			$(this).text('접기');
		} else {
			$(this).parent().parent().find('.subtxt').css('display','none');
			$(this).text('더보기');
		}
	});
   
});