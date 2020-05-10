const calculateBtn = document.querySelector('ion-button');
const resetValues = document.getElementById('resetBtn');
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');

const calculateBmi = () => {
    const Bmi = +weightInput.value / (+heightInput.value * +heightInput.value);
    console.log(Bmi)
};

const resetBtnClicked = () => {
    weightInput.value = null;
    heightInput.value = null;
};

calculateBtn.addEventListener('click', calculateBmi);
resetValues.addEventListener('click',  resetBtnClicked);