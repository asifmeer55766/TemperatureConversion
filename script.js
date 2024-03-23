
// btn.addEventListener('click', () => {
//     FunctionTempratureConverstion();
// })


function FunctionTempratureConverstion() {

    let input = parseFloat(document.getElementById('input').value);
    let unit = document.getElementById('unit').value;
    let Result = '';


    let btn = document.getElementById('btn');


    if (unit === 'Fahernheit') {
        if (input != 0) {
            Result = (input - 32) * (5 / 9);
            document.getElementById('result-box').innerHTML = Result.toFixed(2) + ' Celsius';
        }

    }
    else if (unit === "Celcius") {
        Result = (input * (9 / 5)) + 32;
        document.getElementById('result-box').innerHTML = Result.toFixed(2) + ' Fahrenheit';

    }


}
