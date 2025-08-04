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
    let value = ifNumber(parseFloat(noakhaliInput.value));

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
    let value = ifNumber(parseFloat(feniInput.value));

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
    let value = ifNumber(parseFloat(quotaInput.value));

    quotaAmount += value;
    mainBalance -= value;

    quota.innerText = quotaAmount;
    main.innerText = mainBalance;

    quotaInput.value = '';

});

function ifNumber(value) {
    if (Number.isNaN(value)) {
        alert("please enter a number");
        return '';
    }else{
        return value;
    }
}



// for blogs btn
const blogs = document.querySelector('#blogs');
blogs.addEventListener('click', () => {
    window.location.href = 'blog.html';
});

