//인사말 바꾸기 - 2초 간격으로 설정
let message = ["안녕하세요", "감사합니다", "오늘도 좋은하루!"];

let msgIdx = 0;

myGreeting();

function myGreeting(){
     let greeting = document.getElementById("demo");
     greeting.innerHTML = message[msgIdx];
     msgIdx++;

     if(msgIdx == message.length){
          msgIdx = 0;
     }

     setTimeout(myGreeting, 50);  //폴덱함수
}