//선택한 옵션 항목 찾아니개
//select 태그 이름에 폼이름으로 접근
let selectMenu = document.testForm.major;

function displaySelect(){

     //태그의 text - 건축공학과
     let selectText = selectMenu.options[selectMenu.selectedIndex].innerText;
     alert(selectText + "가 선택되었습니다.");
     
     //select option 속성의 value로 선택
     /*let selectedText = document.getElementById("subj").value;
     alert(selectedText + "가 선택되었습니다.");*/

     
}