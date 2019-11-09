function getRandomInt(min, max) { 
    return Math.floor(Math.random() * (max - min)) + min;
}
function undefInt(elem) {
            let f1_k1 = getRandomInt(2, 5);
            //console.log(`k1: ${f1_k1}`);
            let f1_k2 = getRandomInt(2, 9);
            //console.log(`k2: ${f1_k2}`);
            let f1_k3 = getRandomInt(2, 9);
            //console.log(`k1: ${f1_k3}`);
            let f1_k4 = Math.pow(getRandomInt(2, 8), 2);
            //console.log(`k2: ${f1_k4}`);
            let f1_k5 = getRandomInt(3, 9);
            //console.log(`k1: ${f1_k5}`);
            let f1_k6 = getRandomInt(3, 9);
            //console.log(`k2: ${f1_k6}`);
            let f1_k7 = getRandomInt(3, 9);
            //console.log(`k1: ${f1_k5}`);
            let f1_k8 = getRandomInt(3, 9);
            //console.log(`k2: ${f1_k6}`);
            let j1 = getRandomInt(1, 4);
            //console.log(j1);
            let koef1 = getRandomInt(2, 6);
            let c2 = getRandomInt(3, 7);
            let fp1;
            let fp2;
            switch (j1) {
                case 1:
                    fp1 = '\\sin^' + f1_k2 + '{' + koef1 + 'x} \\cdot';
                    fp2 = '{\\cos{' + koef1 + 'x}} ';
                    break;
                case 2:
                    fp1 = '\\frac{\\tg^' + c2 + '{' + koef1 + 'x}}';
                    fp2 = '{\\cos^2 {' + koef1 + 'x}} ';
                    break;
                case 3:
                    fp1 = '\\frac{\\arctg^' + c2 + '{' + koef1 + 'x}}';
                    fp2 = '{1+' + Math.pow(koef1, 2) + 'x^2} ';
                    break;
                case 4:
                    fp1 = '\\frac{\\arcsin^' + c2 + '{' + koef1 + 'x}}';
                    fp2 = '{\\sqrt{1- ' + Math.pow(koef1, 2) + 'x^2}} ';
                    break;
                default:
                    fp1 = '\\sin^' + f1_k2 + '{' + koef1 + 'x} \\cdot ';
                    fp2 = '{\\cos{' + koef1 + 'x}} ';
                    break;
            }
            katex.render('\\int ' + fp1 + ' ' + fp2 + ' dx', elem, {
                throwOnError: false
            });
}
function pushTests(testFunc, elem, count) {
    if (count===undefined) count = 5;
    for (let index = 0; index < count; index++) {
        let child = document.createElement("li");
        let p = document.createElement("li");
        child.className="list-group-item";
        child.innerHTML = 'Найти неопределённый интеграл <SPAN></SPAN>';
        elem.appendChild(child);
        testFunc(child.childNodes[1]);
    }    
}
function createTasks(){
    document.getElementById('generated').innerHTML = '';
    num = document.getElementById('numOfTasks').value;
    console.log(num);
    var el = document.getElementById('generated');
    pushTests(undefInt, el, num)
}
let num;
let el = document.getElementById('generated');
pushTests(undefInt, el, num);

let saveBtn = document.querySelector('#save-btn');
saveBtn.addEventListener('click', () => { html2pdf(el); })

let refreshBtn = document.querySelector('#refresh-btn');
refreshBtn.addEventListener('click', () => {
            document.querySelector('#generated').innerHTML = '';
            console.log(num);
            pushTests(undefInt, el, num)
        })
