# Compound Interest Calculator

## Project Overview
A simple responsive webpage for a JavaScript assignment. It calculates compound interest using predefined values and prints the result in the browser console.

## Files
- `index.html` — webpage structure
- `style.css` — styling and responsive layout
- `script.js` — compound interest calculation and console output

## Predefined Values
- Principal (P): ₹10,000
- Annual interest rate (r): 5% or `0.05`
- Compounding frequency (n): 1 time per year
- Time (t): 3 years

## Formula
`A = P * (1 + r/n)^(n*t)`

Compound interest is calculated as `A - P`.

## How to Run
1. Keep all three files (`index.html`, `style.css`, and `script.js`) in the same folder.
2. Open `index.html` in a web browser.
3. The calculated amount and interest appear on the page.
4. To see the `console.log()` output, open Developer Tools (usually press `F12`) and select the **Console** tab.
5. Click **Calculate Interest** to run the calculation again.

## Expected Result
For ₹10,000 at 5% interest compounded annually for 3 years:
- Final amount: ₹11,576.25
- Compound interest: ₹1,576.25

## Technologies
- HTML5
- CSS3
- JavaScript
