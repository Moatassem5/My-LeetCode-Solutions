# Statistical Sums Problem 🧮✨

## Problem Overview 🚀

This problem is inspired by my **statistics course** from college 📚. It's not from LeetCode, but it's just as important to understand. In this problem, we calculate basic statistical sums: **ΣXY**, **ΣX**, and **ΣY**, which are commonly used in **correlation** and **covariance** calculations.

The goal is to compute:
- **ΣXY (ΣXY)**: The sum of the products of corresponding elements from two datasets (e.g., **years of experience** and **salary in USD**).
- **ΣX (ΣX)**: The sum of all values in the **year_experience** dataset.
- **ΣY (ΣY)**: The sum of all values in the **salary_USD** dataset.

These calculations help us better understand the relationship between two variables and are important for statistical analysis. 📊

## How I Got the Idea 💡

During my statistics course, I was reviewing the formulas for **ΣXY**, **ΣX**, and **ΣY** and thought it would be useful to implement this in Python. 🤓 It turned out to be a good exercise to both practice coding and revisit key statistical concepts.

## Solution Approach ⚙️

Here’s how we solve this problem:
1. We loop through both arrays (`year_experience` and `salary_USD`) using the `zip` function to pair the elements.
2. For each pair of values, we:
   - Multiply them together and add it to **ΣXY** (ΣXY).
   - Add the values of the first array to **ΣX** (ΣX).
   - Add the values of the second array to **ΣY** (ΣY).
3. Finally, we print out the sums.

## Code Example 🖥️

```python
year_experience = [3, 5, 7, 10, 11]
salary_USD = [1000, 2000, 3000, 4000, 5000]

def stateProblem(arr1, arr2):
    sigmaIJ = sigmaI = sigmaJ = 0
    for i, j in zip(arr1, arr2):
        sigmaIJ += i * j
        sigmaI += i
        sigmaJ += j
    print(f"""    ΣXY = {sigmaIJ}
    ΣX = {sigmaI}
    ΣY = {sigmaJ}
    """)

stateProblem(year_experience, salary_USD)
