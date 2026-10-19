// Predefined values for the compound interest calculation
const principal = 10000;
const rate = 0.05; // 5% expressed as a decimal
const compoundsPerYear = 1; // Compounded annually
const time = 3; // Years

// Formula: A = P(1 + r/n)^(nt)
const amount = principal * Math.pow(
  1 + rate / compoundsPerYear,
  compoundsPerYear * time
);

const compoundInterest = amount - principal;

// Display the result on the webpage
document.getElementById("amount").textContent =
  amount.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

document.getElementById("interest").textContent =
  compoundInterest.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

// Required console output
console.log("The final amount after " + time + " years is: " + amount.toFixed(2));
console.log("The compound interest after " + time + " years is: " + compoundInterest.toFixed(2));

// The button recalculates using the same predefined values
document.getElementById("calculateButton").addEventListener("click", function () {
  const recalculatedAmount = principal * Math.pow(
    1 + rate / compoundsPerYear,
    compoundsPerYear * time
  );
  const recalculatedInterest = recalculatedAmount - principal;

  console.log(
    "The compound interest after " + time + " years is: " +
    recalculatedInterest.toFixed(2)
  );

  document.getElementById("amount").textContent =
    recalculatedAmount.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

  document.getElementById("interest").textContent =
    recalculatedInterest.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
});
