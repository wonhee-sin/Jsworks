window.onload = function(){

let picture = ["img/coffee-blue.jpg","img/coffee-gray.jpg","img/coffee-pink.jpg"]

let picIdx = 0;

showSlide();

function showSlide(){
     let img = document.getElementById("pic");
     img.src = picture[picIdx];
     picIdx++; //다음 인덱스로 증가

     if(picIdx == picture.length){
          picIdx = 0;
     }

     setTimeout(showSlide,2000);  //골백 함수
}


}