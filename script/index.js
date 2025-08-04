// const { createElement } = require("react");

//for donate btn
const main = document.querySelector('#main-balance');
let mainBalance = parseFloat(main.innerText);

const noakhali = document.querySelector('#noakhali-amount');
const feni = document.querySelector('#feni-amount');
const quota = document.querySelector('#quota-amount');

let noakhaliAmount = parseFloat(noakhali.innerText);
let feniAmount = parseFloat(feni.innerText);
let quotaAmount = parseFloat(quota.innerText);

// for form btn event
const noakhaliInput = document.querySelector('#noakhali-input');
const noakhaliBtn = document.querySelector('#noakhali-btn');


noakhaliBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let value = ifNumber(parseFloat(noakhaliInput.value), "Donate for Flood at Noakhali, Bangladesh");

    noakhaliAmount += value;
    mainBalance -= value;

    noakhali.innerText = noakhaliAmount;
    main.innerText = mainBalance;

    noakhaliInput.value = '';

});


const feniInput = document.querySelector('#feni-input');
const feniBtn = document.querySelector('#feni-btn');


feniBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let value = ifNumber(parseFloat(feniInput.value), "Donate for Flood Relief in Feni,Bangladesh");

    feniAmount += value;
    mainBalance -= value;

    feni.innerText = feniAmount;
    main.innerText = mainBalance;

    feniInput.value = '';

});


const quotaInput = document.querySelector('#quota-input');
const quotaBtn = document.querySelector('#quota-btn');


quotaBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let value = ifNumber(parseFloat(quotaInput.value), "Aid for Injured in the Quota Movement");

    quotaAmount += value;
    mainBalance -= value;

    quota.innerText = quotaAmount;
    main.innerText = mainBalance;

    quotaInput.value = '';

});

// close modal
const closeModal = document.querySelector('#close-modal');
const modal = document.getElementById('modal');
closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

function ifNumber(value, titel) {
    if (Number.isNaN(value)) {
        alert("please enter a number");
        return '';
    } else {
        //show modal
        showModal();

        // ADD history
        historyElmt(value, titel);
        return value;
    }
}

function showModal() {
    modal.classList.remove('hidden');
}



// for blogs btn
const blogs = document.querySelector('#blogs');
blogs.addEventListener('click', () => {
    window.location.href = 'blog.html';
});

// for donation and history section
const donation = document.querySelector('#donation-btn');
const history = document.querySelector('#history-btn');

donation.addEventListener('click', () => {
    if (donation.getAttribute('class') === 'deactivate') {
        donation.classList.add('active');
        donation.classList.remove('deactivate');
        history.classList.add('deactivate');
        history.classList.remove('active');
        document.getElementById('donation').style.display = 'block';
        document.getElementById('history').style.display = 'none';
    }
});

history.addEventListener('click', () => {
    if (history.getAttribute('class') === 'deactivate') {
        history.classList.add('active');
        history.classList.remove('deactivate');
        donation.classList.add('deactivate');
        donation.classList.remove('active');
        document.getElementById('donation').style.display = 'none';
        document.getElementById('history').style.display = 'block';
    }
});

function historyElmt(value , titel) {
    // create element for history

    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    div.classList.add('w-full', 'shadow-lg', 'border', 'border-[#1111111A]', 'p-4', 'rounded-2xl', 'mb-6');
    h2.classList.add('text-2xl', 'font-bold');
    p.classList.add('text-[#1111114D]');

    h2.innerText = `${value} taka is ${titel}`;

    const now = new Date(8.64e15).toString();
    p.innerText = `Date: ${now}`;

    div.appendChild(h2);
    div.appendChild(p);
    document.getElementById('history').appendChild(div);

}