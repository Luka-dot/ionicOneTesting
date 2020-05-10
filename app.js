const calculateBtn = document.querySelector('ion-button');
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');

const calculateBmi = () => {
    const Bmi = +weightInput.value / (+heightInput.value * +heightInput.value);
    console.log(Bmi)
};

calculateBtn.addEventListener('click', calculateBmi);