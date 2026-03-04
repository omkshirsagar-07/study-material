"""
Sum of  n  natural number
sum of n = 1+2+3.......+ n

"""


def sum(n):
    if n==1:
        return n
    else:
        n+=sum(n-1)
        return n


n=int(input("Enter natural no.: "))
a=sum(n)
print(a)