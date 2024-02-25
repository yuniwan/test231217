let dom_score = document.querySelector('#score');
let dom_trans_btn = document.querySelector('#trans-btn');
let dom_response = document.querySelector('#response');

//console.log(dom_guest_name, dom_say_btn, dom_response);

const transLevel = (currentScore) => {
    let level = '';
    console.log(currentScore)
    if (currentScore >= 90) {
        level = '甲';
        console.log(1)
    } else if (currentScore >= 80) {
        level = '乙';
        console.log(2)
    } else if (currentScore >= 70) {
        level = '丙';
        console.log(3)
    } else if (currentScore >= 60) {
        level = '丁';
        console.log(4)
    } else {
        level = '不及格';
    }
    return level;
}

const scoreFocus = () => {
    dom_score.value = '';
    setTimeout(() => {
        dom_score.focus();
    }, 500)
}



const calLevel = async (e) => {
    dom_response.classList.add('d-none');
    let currentScore = dom_score.value;
    let level = transLevel(currentScore);
    if (currentScore) {
        if (currentScore > 100 || currentScore < 0) {
            await Swal.fire({
                title: '發生錯誤',
                html: '分數超出範圍',
                icon: 'error'
            });
            scoreFocus();
        } else {
            dom_response.classList.remove('d-none');
            let content = `您的分數: ${currentScore}, 等級: ${level}`
            dom_response.innerHTML = '您的分數：' + currentScore + ',等級：' + level;
        }
    } else {
        await Swal.fire({
            title: '發生錯誤',
            html: '分數未輸入',
            icon: 'error'
        })
        scoreFocus();
        dom_response.classList.add('d-none');
    };
}

dom_trans_btn.addEventListener('click', calLevel)
dom_score.addEventListener('keyup', calLevel)