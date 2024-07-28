document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const heightInput = document.querySelector('#height').value;
        const weightInput = document.querySelector('#weight').value;
        const results = document.querySelector('.results');

        const height = parseFloat(heightInput);
        const weight = parseFloat(weightInput);

        if (heightInput === '' || height <= 0 || isNaN(height)) {
            results.innerHTML = `Please provide a valid height.`;
        } else if (weightInput === '' || weight <= 0 || isNaN(weight)) {
            results.innerHTML = `Please provide a valid weight.`;
        } else {
            const bmi = (weight / ((height * height) / 10000)).toFixed(2);
            let message = `Your BMI is <span class="bmi-value">${bmi}</span>. `;

            if (bmi < 18.6) {
                const idealWeightLow = 18.6 * (height * height) / 10000;
                const weightToGain = (idealWeightLow - weight).toFixed(2);
                message += `<span class="message">you are <b>Underweight</b>. You need to gain approximately <b>${weightToGain} kg</b> to reach a normal weight.</span>`;
            } else if (bmi >= 18.6 && bmi <= 24.9) {
                message += `<span class="message">you are in <b>Normal range</b>. Maintain your current weight.</span>`;
            } else {
                const idealWeightHigh = 24.9 * (height * height) / 10000;
                const weightToLose = (weight - idealWeightHigh).toFixed(2);
                message += `<span class="message">you are <b>Overweight</b>. You need to lose approximately <b>${weightToLose} kg</b> to reach a normal weight.</span>`;
            }

            results.innerHTML = `<span>${message}</span>`;
        }
    });
});
