//자리 배치도
let customNum = Number(prompt("입장객의 수"));
let colNum = Number(prompt("한 줄당 좌석 수"));
let rowNum = 0;

if(customNum % colNum == 0){
     rowNum = customNum / colNum ;
}else{
     rowNum = parseInt(customNum / colNum) + 1 ;
}
document.write("<table>");
for(let i = 0; i < rowNum; i++){
     document.write("<tr>")
     for(let j = 1; j <= colNum; j++){
          let seatNum = i*colNum+j;
          if(seatNum > customNum)

               break;
          
          document.write("<td>좌석" + seatNum + "</td>");
     }
     document.write("</tr>")
}
document.write("</table>");