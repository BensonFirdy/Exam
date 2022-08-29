for i in range(1, 151):
    print(i)

for i in range(5, 1005, 5):
    print (i)

def counting():
    for i in range (1,101,1):
        print (i)
        if i % 5 == 0:
            print ('Coding')
        if i % 10 == 0:
            print ('Dojo')

counting()

minimum = 0
maximum = 500000
Oddtotal = 0

for number in range(minimum, maximum+1):
    if(number % 2 != 0):
        Oddtotal = Oddtotal + number

print(f"The Sum of Odd Numbers from {minimum} to {maximum} = {Oddtotal}")

def count_down_four():
    numbers = 2018
    while numbers > 0:
        print (numbers)
        numbers = numbers - 4
        
count_down_four()

def flex_countdown(lowNum, highNum, mult):
    for i in range (lowNum, highNum+1):
        if i % mult == 0:
            print (i)
            
flex_countdown(2, 9, 3)