function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'a') {
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'green';
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
 }

 function checkAnsweR(answer) {
    const result = document.getElementById('resultt');
    if (answer === 'a') {
        result.textContent = "ถูกต้อง ";
        result.style.color = 'green';
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
 }