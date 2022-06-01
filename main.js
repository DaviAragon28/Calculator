//Selectors 

const output = document.querySelector('.output')
const input = document.querySelector('.input')
const buttons = document.querySelectorAll('button');
const clearAll = document.querySelector('.touch .clearAll');
const plus = document.querySelector('.plus')

//Events 

buttons.forEach(button => {
    button.addEventListener('click', () => {   
        if (button.textContent === "=") {
        } else {
            let buttonsText = button.textContent;
            input.innerText += buttonsText
        }
    })
});



const calculateOperation = () => {
    let value = parseInt(input.textContent);
}


clearAll.addEventListener('click', () => {
    input.innerText = "";
    output.innerText = ""
})


plus.addEventListener('click', () => {
    const [numbs1, numbs2] = input.textContent.split('+') /*sign('-')*/
    let operation = parseInt(numbs1) + parseInt(numbs2);
    output.innerText = operation
    input.innerText = operation


    // if (input.textContent.split('+')) {
    //     operation = parseInt(numbs1) + parseInt(numbs2)
    //     console.log(operation);
    //     output.innerText = operation
    //     input.innerText = operation
        
    // } if (input.textContent.split('-')) {
    //     operation = parseInt(numbs3) - parseInt(numbs4)
    //     output.innerText = operation
    //     input.innerText = operation

    // } if (input.textContent.split('*')) {
    //     operation = parseInt(numbs5) * parseInt(numbs6)
    //     output.innerText = operation
    //     input.innerText = operation

    // } if (input.textContent.split('/')) {
    //     operation = parseInt(numbs7) / parseInt(numbs8)
    //     output.innerText = operation
    //     input.innerText = operation
    // }

})


const sign = (sign) => {
    return input.textContent.split(sign)
}

console.log();



