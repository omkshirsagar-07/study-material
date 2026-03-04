
import random
import string  # Add this import

# Generate a random integer between 1 and 10 (inclusive)
ran1 = random.randint(1, 10)
ran2 = random.randint(1, 10)
ran3 = random.randint(1, 10)

# Generate a random  letter
ran4 = random.choice(string.ascii_lowercase)
ran5 = random.choice(string.ascii_lowercase)
ran6 = random.choice(string.ascii_uppercase)
ran7 = random.choice(string.ascii_uppercase)

a=[]
a.append(str(ran1))
a.append(str(ran2))    
a.append(str(ran3))
a.append(ran4) 
a.append(ran5)
a.append(ran6)
a.append(ran7) 
c=random.shuffle(a)
print("password=",c)

