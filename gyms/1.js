function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    
    if(weight && height) {
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        
        let result = `Your BMI is ${bmi}. `;
        
        if(bmi < 18.5) {
            result += "You are underweight.";
        } else if(bmi >= 18.5 && bmi < 24.9) {
            result += "You have a normal weight.";
        } else if(bmi >= 25 && bmi < 29.9) {
            result += "You are overweight.";
        } else {
            result += "You are obese.";
        }
        
        document.getElementById('bmi-result').innerText = result;
    } else {
        alert("Please enter both weight and height.");
    }
}
