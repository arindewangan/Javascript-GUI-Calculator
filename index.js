let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');

document.getElementById('alert').style.display = 'none';

let screenValue = '';
let notAllowedChars = /([0-9\*\-\/\%\+\=\.])$/;
screen.addEventListener('input', () => {
    if (notAllowedChars.test(screen.value) == false) {
        screenValue = screen.value.toString().slice(0, -1);
        screen.value = screenValue;
        document.getElementById('alert').style.display = 'block';
    } else {
        screenValue = screen.value;
    }
});

document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        let a = eval(screenValue);
        screenValue = a;
        screen.value = screenValue;
    }
});

for (item of buttons) {
    item.addEventListener('click', (e) => {
        btnText = e.target.innerText;
        if (btnText == 'x') {
            btnText = '*';
            screenValue += btnText;
            screen.value = screenValue;
        } else if (btnText == '÷') {
            btnText = '/';
            screenValue += btnText;
            screen.value = screenValue;
        } else if (btnText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        } else if (btnText == '=') {
            try {
                let a = eval(screenValue);
                screenValue = a;
                screen.value = screenValue;
            } catch (error) {
                console.log("Please enter a valid number or symbol");
                document.getElementById('alert').style.display = 'block';
            }
        } else if (btnText == 'Del') {
            screenValue = screen.value.toString().slice(0, -1);
            screen.value = screenValue;
        } else {
            screenValue += btnText;
            screen.value = screenValue;
        }

    });
};