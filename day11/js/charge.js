

let age = Number(prompt("나이를 입력하세요."));
let charge = 0;

if(age < 8){
     charge = 1000;
     document.write("<h2>놀이 공원 입장료 계산</h2>")
     document.write("취학전 아동 입니다.<br>")

}else if(age < 14 && age >=8){
     charge = 2000;
     document.write("<h2>놀이 공원 입장료 계산</h2>")
     document.write("초등학생 입니다.<br>")

}else if(age < 20 && age >=14){
     charge = 2500;
     document.write("<h2>놀이 공원 입장료 계산</h2>")
     document.write("중.고등학생 입니다.<br>")

}else{
     charge = 3000;
     document.write("<h2>놀이 공원 입장료 계산</h2>")
     document.write("일반인 입니다.<br>")

}

document.write("입장료는 <span> " + charge + "</span> 입니다.")