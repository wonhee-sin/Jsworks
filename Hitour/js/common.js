let enteredIndex = 0;

function goHide(enteredIndex){
	switch (enteredIndex) {
		case 1:
			$('.gnb_depth2_1').stop().fadeOut('fast');
			break;
		case 2:
			$('.gnb_depth2_2').stop().fadeOut('fast');
			break;
		case 3:
			$('.gnb_depth2_3').stop().fadeOut('fast');
			break;
		case 4:
			$('.gnb_depth2_4').stop().fadeOut('fast');
			break;
	}
}

$(document).ready(function() {
	//상단 메뉴 마우스오버, 

	$('.openAll1').mouseover(function(){
		if ( parseInt($('header').css('width')) > 800 )
		$('.gnb_depth2_1').fadeIn('fast');
	});	
    $('.openAll1').focus(function(){
		if ( parseInt($('header').css('width')) > 800 )
		$('.gnb_depth2_1').fadeIn('fast');
	});
	$('.openAll1').mouseout(function(){
		// setTimeout("goHide(1)",200);
	});
	$('.gnb_depth2_1 li:last-child a').blur(function(){
		// setTimeout("goHide(1)",200);
	});
	$('.gnb_depth2_1').mouseover(function(){

	});	
	$('.gnb_depth2_1').focus(function(){

	});	
	$('.gnb_depth2_1').mouseout(function(){
		setTimeout("goHide(1)",200);
	});	
	$('.gnb_depth2_1').blur(function(){
		// setTimeout("goHide(1)",200);
	});	

	$('.openAll2').mouseover(function(){
		if ( parseInt($('header').css('width')) > 800 )
		$('.gnb_depth2_2').fadeIn('fast');
	});	
    $('.openAll2').focus(function(){
		if ( parseInt($('header').css('width')) > 800 )
		$('.gnb_depth2_2').fadeIn('fast');
	});
	$('.openAll2').mouseout(function(){
		// setTimeout("goHide(2)",200);
	});
	$('.gnb_depth2_2 li:last-child a').blur(function(){
		// setTimeout("goHide(2)",200);
	});
	$('.gnb_depth2_2').mouseover(function(){

	});	
	$('.gnb_depth2_2').focus(function(){

	});	
	$('.gnb_depth2_2').mouseout(function(){
		setTimeout("goHide(2)",200);
	});	
	$('.gnb_depth2_2').blur(function(){
		setTimeout("goHide(2)",200);
	});	




	//top을 클릭하면 header로 이동(라이브러리)
	$('a.s_point').smoothScroll();

	// 스크롤하여 내려와야 top버튼이 보이도록 함.
	if ( $(document).scrollTop() < 50) $('.to_top').addClass('hide');
	else $('.to_top').removeClass('hide');
	$(window).scroll( function() {
	  if ( $(document).scrollTop() < 50) $('.to_top').addClass('hide');
	  else $('.to_top').removeClass('hide');
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
