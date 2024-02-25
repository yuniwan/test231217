let dom_guest_name = document.querySelector('#guest-name');
let dom_say_btn = document.querySelector('#say-btn');
let dom_response = document.querySelector('#response');

//console.log(dom_guest_name, dom_say_btn, dom_response);

dom_say_btn.addEventListener('click', (e) => {
    let currentName = dom_guest_name.value;
    if (currentName) {
        dom_response.classList.remove('d-none');
        dom_response.innerHTML = 'Hi!' + currentName;
    } else {
        dom_response.classList.add('d-none');
    };
    dom_guest_name.value = ''
    dom_guest_name.focus()
})

const validHasValue = (e) => {
    let currentName = dom_guest_name.value;
    if (!currentName) {
        Swal.fire({
            title: '發生錯誤',
            html: '尚未輸入名稱',
            icon: 'error'
        })
    }
}
dom_guest_name.addEventListener('change', validHasValue)