/*
tab-content 안의 div들 모두 안보이도록 한다.

링크를 클릭하면 클릭한 그 요소의 href속성의 값을 변수 tabTarget에 저장.
저장된 값에서 #을 삭제한다.
tabTarget = tab-1

document.getElementById(tabs-1).style.display='block';
*/

var targetLink = document.querySelectorAll(".tab-menu a");
console.log(targetLink);

var orgTarget = "#tabs-1"; // a.replace('b','c');
var tabTarget = orgTarget.replace("#", "");
document.getElementById(tabTarget).style.display = "block";
