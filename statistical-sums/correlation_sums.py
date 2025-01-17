year_experience = [3,5,7,10,11]
salary_USD = [1000,2000,3000,4000,5000]


def stateProblem (arr1 , arr2):
    sigmaIJ = sigmaI = sigmaJ = 0
    for i , j in zip(arr1 , arr2):
        sigmaIJ += i * j
        sigmaI += i
        sigmaJ += j
    print(f"""    ΣXY = {sigmaIJ}
    ΣX = {sigmaI}
    ΣY = {sigmaJ}
    """)


stateProblem(year_experience,salary_USD)