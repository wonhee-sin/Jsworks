//큰 사진 선택
let bigPic = document.querySelector("#cup");

//작은 사진들 선택
let smallPics = document.querySelectorAll(".small");

//onclick 이벤트
for(i=0; i<smallPics.length; i++){
     // smallPics[i].onclick = showBig;
     smallPics[i].addEventListener("click",showBig);
}


function showBig(){
     let newPic = this.src; //이벤트가 일어난 대상의 속성값
     bigPic.setAttribute("src",newPic);
}