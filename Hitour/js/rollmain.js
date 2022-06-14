//이미지 슬라이드 구현
let num = 0; //이미지 번호
let slidingAuto = null; //슬라이드 이동
function play(direct) { // 방향 매개 변수
	if(direct == "right"){
		num++;
		if(num > 2)
			num = 0;
	}else if(direct == "left"){
		num--;
		if(num < 0)
			num = 2;
	}else{
		num = direct;
	}

	$(".rollingbtn").find('li.seq a').each(function(){
		$(".rollingbtn li.seq a img").attr('src',
			$(".rollingbtn li.seq a img").attr('src').replace('_on.png', '_off.png'));
	})
	$(".rollingbtn li.butt" + num + " a img").attr('src',
		$(".rollingbtn li.butt" + num + " a img").attr('src').replace('_off.png', '_on.png'))

		if(num == 0){
		$(".viewImgList li.imglist1").animate({"opacity" : 0}, 1000);
		$(".viewImgList li.imglist2").animate({"opacity" : 0}, 1000);
		$(".viewImgList li.imglist0").animate({"opacity" : 1}, 1000);
	}else if(num == 1){
		$(".viewImgList li.imglist0").animate({"opacity" : 0}, 1000);
		$(".viewImgList li.imglist2").animate({"opacity" : 0}, 1000);
		$(".viewImgList li.imglist1").animate({"opacity" : 1}, 1000);
	}else if(num == 2){
		$(".viewImgList li.imglist0").animate({"opacity" : 0}, 1000);
		$(".viewImgList li.imglist1").animate({"opacity" : 0}, 1000);
		$(".viewImgList li.imglist2").animate({"opacity" : 1}, 1000);
	}

	if(slidingAuto)clearTimeout(slidingAuto);
	slidingAuto = setTimeout("play('right')",3000);
}

slidingAuto =setTimeout("play('right')",3000);

$(function(){

	$(".rollstop a").click(function(){
		$(this).parent().hide();
		$(".rollplay").css('display','inline-block');
		if(slidingAuto)clearTimeout(slidingAuto);
	});

	$(".rollplay a").click(function(){
		$(this).parent().hide();
		$(".rollstop").css('display','inline-block');
		play('right');
	});

	$(".rollingbtn li.seq a").each(function(index){
		$(this).click(function(){
			$(".rollstop").hide();
			$(".rollplay").css('display','inline-block');
			play(index);
			if(slidingAuto)clearTimeout(slidingAuto);
		});
	});

});