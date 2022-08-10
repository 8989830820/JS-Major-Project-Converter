
function Swap() {
    let InputFrom = document.getElementById("from");
    let OutputTo = document.getElementById("to");
    SwapStart(InputFrom, OutputTo);

    let Temp = InputFrom.value;
    InputFrom.value = OutputTo.value;
    OutputTo.value = Temp;
}

function SwapStart(InputFrom, OutputTo) {
    InputFrom.style.transform = 'translateX(90%)';
    OutputTo.style.transform = 'translateX(-90%)';
    setTimeout(() => {
        SwapEnd(InputFrom, OutputTo);
    }, 100);

}
function SwapEnd(InputFrom, OutputTo) {
    InputFrom.style.transform = 'translateX(0%)';
    OutputTo.style.transform = 'translateX(0%)';
}

function Convert() {

    let input = document.getElementById('input').value;
    let output = document.getElementById('output');
    let InputFrom = document.getElementById('from').value;
    let OutputTo = document.getElementById('to').value;
    const error = document.getElementById('error');
    input = input.toUpperCase();
    
    if(checkInput(input, InputFrom, error)) {

        error.style.display = 'none';
        //convert all input to decimal
        input = Number.parseInt(input, InputFrom);  
        //then convert decimal to desired output
        let result = Number(input).toString(OutputTo);

        //display output
        if(result != 'NaN') {
            output.style.backgroundColor = 'white';
            output.textContent = result.toUpperCase();
            
        } else {
            output.style.backgroundColor = 'white';
            output.textContent = ""
        }
    }
}

function checkInput(input, InputFrom, error) {
    for(let i = 0; i < input.length; i++) {
        if(input.charAt(i) == '.') {
            error.style.display = 'block';
            error.textContent = 'Error';
            return false;
        }
    }

    switch (InputFrom) {
        case '2':
            for(let i = 0; i < input.length; i++) {
                if(input.charAt(i) != 0 && input.charAt(i) != 1) {
                    error.style.display = 'block';
                    error.textContent = 'Error';
                    return false;
                }
            }
        
        case '10':
            for(let i = 0; i < input.length; i++) {
                if(isNaN(input.charAt(i))) {
                    error.style.display = 'block';
                    error.textContent = 'Error ';
                    return false;
                }
            }

        case '8':
            for(let i = 0; i < input.length; i++) {
                if(input.charAt(i) == '8' || input.charAt(i) == '9' || isNaN(input.charAt(i))) {
                    error.style.display = 'block';
                    error.textContent = 'Error';
                    return false;
                }
            }

        case '16':
            for(let i = 0; i < input.length; i++) {
                if(!((input.charCodeAt(i) >= 48 
                && input.charCodeAt(i) <= 57) || (input.charCodeAt(i) >= 65 
                && input.charCodeAt(i) <= 70))) {
                    error.style.display = 'block';
                    error.textContent = 'Error';
                    return false;
                }
            }

        default:
            return true;
    }
}
