Question 1: At line 12, the codes return 'i' equals 3. It is initially defined in the for loop and the loop exists when i reaches the length of 'prices', and we know that at line 19, the array 'prices' contains 3 values, which means it has the length of 3

Question 2: At line 13, the codes return 'discountedPrice' equals 150, which is the result of variable 'discountedPrice' after 3 iterations of the for loop:
    When i = 0, discountedPrice is 100 * (1 - 0.5) = 50
    When i = 1, discountedPrice is 200 * (1 - 0.5) = 100
    When i = 3, discountedPrice is 300 * (1 - 0.5) = 150 which is printed immidiately after exist the for loop

Question 3: At line 14, the codes return 'finalPrice' equals 150, which is the result of variable 'finalPrice' after 3 iterations of the for loop:
    When i = 0, discountedPrice = 50, then finalPrice = (50 * 100) / 100 (round up) = 50
    When i = 0, discountedPrice = 100, then finalPrice = (100 * 100) / 100 (round up) = 100
    When i = 0, discountedPrice = 150, then finalPrice = (150 * 100) / 100 (round up) = 150 which is printed immidiately after exist the loop

Question 4: The function returns the array 'discounted' of 3 values which is [50, 100, 150] because at line 9, the value of 'finalPrice' after every iteration is pushed into the array 'discounted', as we have observed, 'finalPrice' results 50 after first iteration, 100 in the second iteration and lastly 150.

Question 5: The codes throw an error because 'i' is a 'let' variable that is declared in the for loop, which means it can only be accessable within the for loop, however, so when we print 'i' at line 12 outside the loop, it does not exist and undefined.

Question 6: The codes throw an error because 'discountedPrice' is a 'let' variable that is declared in the for loop, which means it can only be accessable within the for loop, however, so when we print 'discountedPrice' at line 12 outside the loop, it does not exist and undefined.

Question 7: A line 14, the codes print 'finalPrice' equals 150 because it is declared in the function scope, which means it is accessable everywhere within the function, even the for loop as it is inside the function.

Question 8: The function returns the array 'discounted' of 3 values which is [50, 100, 150] because at line 9, the value of 'finalPrice' after every iteration is pushed into the array 'discounted', as we have observed, 'finalPrice' results 50 after first iteration, 100 in the second iteration and lastly 150. The function declares some 'let' variables inside, which could be accessable in the function domain, therefore, it does not affect the return value within the function.

Question 9: At line 11, the codes return an error because the variable 'i' is defined as 'let' variable type inside the for loop, which means it is accessible within the for scope, so when we call it outside the loop, the varible does not exist

Question 10: At line 12, the codes print 'length' equals 3 because it is declared at line 4 as the length of the array 'prices', which is 3 according to line 17, and cannot be changed anytime.

Question 11: The function returns the array 'discounted' of 3 values which is [50, 100, 150] corresponds to the 'discountedPrice' after 3 iterations in the for loop according to the length of the 'prices' array being called in line 17. Inside the for loop, after 3 iterations, 'discountedPrice' is declared 3 times, which means even though it is a 'const' variable, as long as it is not reassigned, we can declare it as many times as we want without error. 

Question 12:
A. student.name
B. student["Grad Year"]
C. student.greeting();
D. student["Favorite Teacher"].name
E. student.courseLoad[0]

Question 13:
A. '32' because the number 2 is added to the string '3', it will be converted implicitly to string data type. Numeric string used with + gives a string type, so number 2 is converted into string type '2': '3' + '2' = '32'
B. 1 because numberic string with - results in number type, so '3' is conveted into number: 3 - 2 = 1
C. 3 because null is 0 when being used with number, then 3 + 0 = 3
D. '3null' because operation + will give a string type when it contains a string, which means null is converted into a string 'null', results '3' + 'null' is '3null'
E. 4 because if boolean is used, true is 1, and this is numeric operation, then we have 1 + 3 = 4
F. 0 because false and null are converted into numeric, and they are both 0, so 0 + 0 = 0
G. '3undefined' because undefined is converted into a string 'undefined' because the existence of '3' as a string and operation +, which converts everything into string, then '3' + 'undefined' = '3undefined'
H. NaN because numeric string with - results in number type, so '3' becomes 3 and undefined becomes NaN, then 3 - NaN = NaN

Question 14:
A. true because when comparing a string with a number, it will convert the string into number, which means 2 > 1 is true
B. false because when comparing two strings, the alphabetical order decides which one is greater, '2' is greater than '12' because '12' starts with '1' which is alphabetically less than '2'
C. true because when comparing a string with a number, it will convert the string into number, which means 2 == 2 is true
D. false because === is a strict operation which only compares same data type, since 2 is a number and '2' is a string, it will return false without conversion
E. false because when comparing a boolean with a number, it will convert the boolean into number, which means false become 0, and 0 == 2 is false
F. true because Boolean(2) is true as only undefined, null, 0, NaN, '' are false in boolean data type, moreover, comparison with === is valid for same data type, which is Boolean, so true === true is true

Question 15: The difference between == and === operators: === is a strict equality operator because it only compares values with the same data type and automatically return false if they are not the same. However, == can compare different data types and convert them into a priotized data type, therefore, in some cases, operator == cannot differentiate various values such as 0 and false, which are both 0 by assumption of ==

Question 16: /expose/javascript/part2-question16.js

Question 17: When the function modifyArray([1, 2, 3], doSomething) is called, it will first go to the function and process array as [1, 2, 3] and callback is the function doSomething. When encounter the for loop inside the function modifyArray, since [1, 2, 3] has length of 3, the loop iterates 3 times. 
When i = 0, array[0] is 1, hence, callback(array[i]) is doSomething(1) which is 1 * 2 = 2; 2 is the first value to be pushed into the array newArr
When i = 1, array[1] is 2, hence, callback(array[1]) is doSomething(2) which is 2 * 2 = 4; 4 is the second value to be pushed into the array newArr
When i = 2, array[2] is 3, hence, callback(array[i]) is doSomething(3) which is 3 * 2 = 6; 6 is the third value to be pushed into the array newArr
The next i = 3, we exit the loop and return the array newArr which is [2, 4, 6]

Question 19: The output of the code is:
1
4
3
2
