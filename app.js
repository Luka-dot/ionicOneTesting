const calculateBtn = document.querySelector('ion-button');
const resetValues = document.getElementById('resetBtn');
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const resultArea = document.getElementById('result');

const calculateBmi = () => {
    const Bmi = +weightInput.value / (+heightInput.value * +heightInput.value);
    console.log(Bmi)

    const resultElement = document.createElement('ion-card');
    resultElement.innerHTML = `
    <ion-card-content>
        <h2>Your BMI is: ${Bmi}</h2>
    </ion-card-context>
    `;
    resultArea.innerHTML = '';
    resultArea.appendChild(resultElement);
};

const resetBtnClicked = () => {
    weightInput.value = null;
    heightInput.value = null;
};

calculateBtn.addEventListener('click', calculateBmi);
resetValues.addEventListener('click',  resetBtnClicked);