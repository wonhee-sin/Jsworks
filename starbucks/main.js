//제목 애니메이션
let mainText = document.querySelector("h1");

window.addEventListener("scroll", function(){
     let value = this.window.scrollY; //마우스 스크롤했을 때 Y좌표

     if(value > 300){
          mainText.style.animation = "slideOut 2s ease-in-out forwards";
     }
     else{
          mainText.style.animation = "slideIn 2s ease-in-out";
     }
})