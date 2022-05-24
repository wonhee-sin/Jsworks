let rank = Number(prompt("당신의 순위를 입력하세요"));

switch(rank){
     case 1:
          document.write("금메달 입니다<br>");
          break;
     case 2:
          document.write("은메달 입니다<br>");
          break;
     case 3:
          document.write("동메달 입니다<br>");
          break;
     default:
          document.write("메달이 없습니다.<br>");
          break;
}