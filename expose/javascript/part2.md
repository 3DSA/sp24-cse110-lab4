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
12. 
    a. student.name  
    b. student["Grad Year"]  
    c. student.greeting()  
    d. student["Favorite Teacher"].name  
    e student.courseLoad[0]  
13. 
    a. Outputs **32** because it does not convert 3 to a integer as the **+** could mean its adding two strings together.  
    b. Outputs 1 because it converts 3 to a integer and does the operation  
    c. Outputs 3 because null in an **+** operation means 0.   
    d. Outputs 3null becauase "3" is a string and just gets attached with the null value in the output   
    e. Outputs 4 because true maps to 1 and 3+1 is 4.  
    f. Outputs 0 because false maps to 0 and so does null so it is 0 + 0 = 0  
    g. Outputs 3undefined because "3" is a string and just gets attached to undefined  
    h. Outputs NaN cause it does not know how to do the operation or what operations to do.  
14. 
    a. Outputs True since 2 is greater than 1  
    b. Outputs False  since 2 is not greater than 12
    c. Outputs True 2 is equivalent to 2
    d. Outputs False since both of them are not the same data type
    e. Outputs False because true maps to 1 and is not equivalent to 2
    f. Is an error because you cannot Boolean(2)
15. == can still do type conversion between the variables, while === is more strict and does not do type conversions
17. The result will be [2, 4, 6]. The reasoning is that first, the function modifyArray is called fist. In modify array, there is a loop that iterates through the array. In the loop, it calls the function doSomething, which multiples the given parameter by 2. The given parameter is each element in the array, so it basically multiples each element in the array by 2.
19. Output:
    1
    4
    3
    2
