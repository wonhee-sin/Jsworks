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

//상세 설명 보기/닫기
let isOpen = false;
let view = document.getElementById("view");
let detail = document.querySelector("#detail");

//이벤트 처리

view.addEventListener("click",function(){
     if(isOpen == false){
          detail.style.display = 'block';
          view.innerHTML = "상세 설명 닫기";
          isOpen = true;
     }else{
          detail.style.display = 'none';
          view.innerHTML = "상세 설명 보기";
          isOpen = false;
     }
})