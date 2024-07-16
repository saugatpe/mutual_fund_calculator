function calculateFutureValue(principal, monthlyContribution, annualInterestRate, years) {
    const monthlyRate = annualInterestRate / 12;
    const totalMonths = years * 12;

    // Calculate future value of the initial investment
    const futureValueInitial = principal * Math.pow(1 + monthlyRate, totalMonths);

    // Calculate future value of the series of contributions
    const futureValueContributions = monthlyContribution * (Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate;

    // Calculate total future value
    const futureValue = futureValueInitial + futureValueContributions;

    return futureValue;
}

function calculateTotalInvested(principal, monthlyContribution, years) {
    return principal + (monthlyContribution * years * 12);
}

document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const principal = parseFloat(document.getElementById('initial_investment').value);
    const monthlyContribution = parseFloat(document.getElementById('monthly_contribution').value);
    const annualInterestRate = parseFloat(document.getElementById('annual_interest').value) / 100;
    const years = parseFloat(document.getElementById('years').value);

    const futureValue = calculateFutureValue(principal, monthlyContribution, annualInterestRate, years);
    const totalInvested = calculateTotalInvested(principal, monthlyContribution, years);
    const interestEarned = futureValue - totalInvested;

    document.getElementById('result').style.display = 'block';  // Make sure the result section is displayed
    document.getElementById('result-content').innerHTML = `
        <p>The future value of the investment is $${futureValue.toFixed(2)}</p>
        <p>Total invested amount is $${totalInvested.toFixed(2)}</p>
        <p>Compound interest earned is $${interestEarned.toFixed(2)}</p>
    `;
});
