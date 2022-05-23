let grade = "";
let score = 0;

score = Number(prompt("점수를 입력하세요."));

if(score < 60 && score >= 0){
     grade = "F" ;
}else if(score <70 && score>=60){
     grade = "D";
}else if(score <80 && score>=70){
     grade = "C";
}else if(score <90 && score>=80){
     grade = "B";
}else if(score <=100 && score>=90){
     grade = "A";
}else{
     document.write("<h1>점수를 제대로 입력하세요.</h1>")
}
document.write("<h3>학점 계산 프로그램</h3>");
document.write("학점은 <span>"+ grade +"</span>입니다.");