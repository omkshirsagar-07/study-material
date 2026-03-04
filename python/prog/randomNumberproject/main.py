import random

num = random.randint(1, 100)
a = -1
attempt=0
while a != num:
    a = int(input("guess a number between 1 to 100: "))
    attempt=attempt+1
    if a < 1 or a > 100:
        print("Please enter a number **between 1 and 100**.")
    elif a < num:
        print("Please enter a higher number.")
    elif a > num:
        print("Please enter a lower number.")
    else:
        print("🎉 Your guess is correct! in ",attempt,"attempts !")

