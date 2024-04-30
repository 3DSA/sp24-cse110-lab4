# Part 2
1. The code at line 12 outputs 3. because **i** iterates through the loop until it is not less than prices length, which is 3.
2. The code at line 13 outputs 150 because **i** at the final loop value is 2, which takes the last element in discount prices which is 300. The value of discounted price is  300*(1-0.5) = 150.
3. The code at line 14 outputs 150 because **discounted price** at the final loop value is 150, based on the question above. To calculate finalprice, you do Math.round(150*100) /100 = 150.
4. The code at line 16 will return [50, 100, 150], because the loop of the function halves the value of the inputted array, where the intial arrays values were [100, 200, 300].
5. This line of code causes an error because **i** is declared for a loop by let, so it is not in the same scope as the console.log(i) line.
6. This line of code causes an error because **discounted price** is declared inside a loop by let, so it is not in the same scope as the console.log(**discounted price**) line.
7. The code at line 14 outputs 150 because **discounted price** at the final loop value is 150, based on the question above. To calculate finalprice, you do Math.round(150*100) /100 = 150.
8. The code at line 16 will return [50, 100, 150], because the loop of the function halves the value of the inputted array, where the intial arrays values were [100, 200, 300].
9. This line of code causes an error because **i** is declared for a loop by const, so it is not in the same scope as the console.log(i) line.
10. The output at line 12 will output 3 because the length of the inputted array was 3.
11. The function will return [50, 100, 150], because the loop of the function halves the value of the inputted array, where the intial arrays values were [100, 200, 300].