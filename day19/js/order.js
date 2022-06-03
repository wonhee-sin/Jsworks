//체크박스에 이벤트 처리
let check = document.querySelector("#shippingInfo")
//체크바스에 click 이벤트 발생했을 때 함수 호출
check.addEventListener("click",checkBox);

/* let billingName = document.querySelector("billingName");
let billingTel = document.querySelector("billingTel");
let billingAddr = document.querySelector("billingAddr");

let shippingName = document.querySelector("shippingName");
let shippingTel = document.querySelector("shippingTel");
let shippingAddr = document.querySelector("shippingAddr"); */

function checkBox(){
     if(check.checked==true){ //체크박스에 체크 되었다면
          shippingName.value = billingName.value;
          //주문 정보(이름)을 배송 정보(이름)에 대입
          shippingTel.value = billingTel.value;
          shippingAddr.value = billingAddr.value;
     }else{
          shippingName.value = "";
          shippingTel.value = "";
          shippingAddr.value = "";
     }
}