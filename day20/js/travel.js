//아이템 목록
let itemList = []; //빈 배열 생성

let addBtn = document.getElementById("add");

//addBtn.onclick = addList;
addBtn.addEventListener("click",addList);

//아이템 추가 함수
function addList(){

     let item = document.getElementById("item").value;
     itemList.push(item); //item 1개 추가
     document.getElementById("item").value = "";
     document.getElementById("item").focus();

     console.log(itemList);

     showList(); //목록 조회 함수
}

function showList(){
     //목록으로 표시(ul ~ li 사용)
     let list = "<ul>";

     for(i=0; i <itemList.length; i++){
          //document.getElementById("itemList").innerHTML = itemList[i];
          list += "<li>" + itemList[i] + "<span class='close' id = " + i + ">X</span></li>"
     }
     list += "</ul>"
     document.getElementById("itemList").innerHTML = list;

     let removeList = document.querySelectorAll(".close");

          for(i=0; i < removeList.length; i++){
               removeList[i].addEventListener("click",remove);
          }
}

function remove(){
     let id = this.getAttribute("id");
     itemList.splice(id,1);

     showList();
}
