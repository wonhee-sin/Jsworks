//시험 성적 관리
//5명의 국어, 수학성적
let score = [
     [80, 70],
     [90, 60],
     [70, 70],
     [100,90],
     [83, 35]
]

let korSum = 0;
let mathSum = 0;

let korAvg = 0.0;
let mathAvg = 0.0;

//과목별 점수합계

for(i=0; i<score.length; i++){
     korSum += score[i][0]; //국어점수 합계
     mathSum += score[i][1]; //수학점수 합계
}

//과목별 점수 평균
korAvg = korSum / score.length;
mathAvg = mathSum / score.length;

document.write("국어 합계 : " + korSum + "<br>");
document.write("수학 합계 : " + mathSum + "<br>");

document.write("국어 평균 : " + korAvg + "<br>");
document.write("수학 평균 : " + mathAvg + "<br>");