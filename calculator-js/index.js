let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map ( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            //클리어 코드
            case 'C':
                display.innerText = '';
                break;

            //지우기 코드
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            
            //계산 코드
            case'=':
                try {
                    display.innerText = eval(display.innerText);
                }

            catch {
                display.innerText = 'Invalid Input! Error!';
                }
                break;
            
            //기본값 코드
            default:
                display.innerText += e.target.innerText;
        }
    });
});