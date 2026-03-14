const questions = [
    "Will you be my valentine?",
    "Are you absolutely sure?",
    "You might regret saying no...",
    "Please reconsider?",
    "I promise I'm nice 😭",
    "Last chance...",
    "You are breaking my heart 💔"
];

const answers_no = [
    "No",
    "Are you sure?",
    "Are you really sure??",
    "Are you really realy sure???",
    "Think again?",
    "Don't believe in second chances?",
    "Why are you being so cold?",
    "Maybe we can talk about it?",
    "I am not going to ask again!",
    "Ok now this is hurting my feelings!",
    "You are now just being mean!",
    "Why are you doing this to me?",
    "Please give me a chance!",
    "I am begging you to stop!",
    "Ok, Let's just start over.."
];

const yes_button = document.getElementById('yes-button');
const no_button = document.getElementById('no-button');
const questionHeading = document.getElementById("question-heading");

let i = 1;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {

    // Change banner source
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "no.gif";
        refreshBanner();
    }

    clicks++;

    // change question dynamically
    if (clicks < questions.length) {
        questionHeading.innerText = questions[clicks];
    }

    // Increase button size randomly
    const sizes = [40, 50, 30, 35, 45];
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random];

    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;

    let total = answers_no.length;

    // Change No button text
    if (i < total - 1) {
        no_button.innerHTML = answers_no[i];
        i++;
    } 
    else if (i === total - 1) {

        alert(answers_no[i]);

        // reset counters
        i = 1;
        clicks = 0;
        size = 50;

        // reset banner
        let banner = document.getElementById("banner");
        banner.src = "mid.gif";
        refreshBanner();1

        // reset question
        let question = document.getElementById("question-heading");
        question.innerText = "Will you be my girlfriend?";

        // reset buttons
        no_button.innerHTML = answers_no[0];
        yes_button.innerHTML = "Yes";
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
    }

});

yes_button.addEventListener('click', () => {

    // change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "yes.gif";
    refreshBanner();

    // hide buttons
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";

    // hide question
    let question = document.getElementById('question-heading');
    question.style.display = "none";

    // show success message
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});

function refreshBanner() {

    // Reload banner gif
    let banner = document.getElementById('banner');
    let src = banner.src;

    banner.src = '';
    banner.src = src;

}