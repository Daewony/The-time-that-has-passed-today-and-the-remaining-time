const dateStr = new Date();
const date = new Date(dateStr);

const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

// 요일
const options = { weekday: 'short' };
const dayOfWeek = date.toLocaleDateString('ko-KR', options);

const today = `${year}년 ${month}월 ${day}일 ${dayOfWeek}요일`;

document.getElementById("today").innerText = today;
const inputs = document.querySelectorAll("input");

function clock() {
    const now = new Date();
    const end = new Date();
    end.setHours(24, 0, 0);

    const diff = (end - now) / 1000;
    const last = now / 1000;
    console.log(now);

    if (diff < 0) return;

    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;


    inputs[5].value = Math.floor(now.getHours());
    inputs[6].value = Math.floor(now.getMinutes());
    inputs[7].value = Math.floor(now.getSeconds());


}

// clock();
/** 
 * 1일 = 24시간
 * 1시간 = 60분
 * 60분 = 3600초
*/


setInterval(() => {
    clock()
}, 1000);