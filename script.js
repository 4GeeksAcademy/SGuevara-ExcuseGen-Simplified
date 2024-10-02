const who = ["The dog", "My grandma", "The mailman", "My bird"];
const action = ["ate", "peed", "crushed", "broke"];
const what = ["my homework", "my phone", "the car"];
const when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
];


const generateExcuse = (who, action, what, when) => {
const randomElement = arr => arr[Math.floor(Math.random() * arr.length)];
return `${randomElement(who)} ${randomElement(action)} ${randomElement(what)} ${randomElement(when)}.`;
};


const displayExcuse = () => {
const excuse = generateExcuse(who, action, what, when);
document.getElementById('excuse').innerHTML = excuse;
};


window.onload = displayExcuse;

