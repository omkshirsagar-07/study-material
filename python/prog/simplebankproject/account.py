acc_amount={}
acc_name={}

def create_acc():
    accname=input("Enter account holder name :")
    acc_no=int(input("Enter New Account No :"))
    if acc_no in acc_amount:
         print("Existing account no")
    else:
         acc_name.update({acc_no:accname})
    acc_dep= float(input("Enter Amount to deposit :"))
    acc_amount.update({acc_no:acc_dep})
    

def option():
   
        print("1.Check account balance")
        print("2.deposit money")
        print("3.Withdraw money")
        print("4.Exit")
        b=int(input("Enter your option :"))

        if b == 1: #if user want to check balance
            accno=int(input("Enter your account no :"))
            if accno in acc_amount:
                print("Your name is",acc_name[accno])
                print("Your account balance is",acc_amount[accno])
                option()
            else:
                print("Invalid Account no")
                option()

        elif b == 2:  #if user want to deposit money
            
            accno=int(input("Enter your account no :"))
            if accno in acc_amount:
                    print("Your name is",acc_name[accno])
                    print("Your current account balance is",acc_amount[accno])
                    new=int(input("Enter amount to add :"))
                    am=acc_amount[accno]+new
                    acc_amount.update({accno:am})
                    print("Your balance now :",acc_amount[accno])
                    option()
            else:
                    print("Invalid Account no")
                    option()
            
        elif b == 3: #if user want to withdraw money
            accno=int(input("Enter your account no :"))
            if accno in acc_amount:
                    print("Your name is",acc_name[accno])
                    print("Your current account balance is",acc_amount[accno])
                    new=int(input("Enter amount to Withdraw :"))
                    am=acc_amount[accno]-new
                    acc_amount.update({accno:am})
                    print("Your balance now :",acc_amount[accno])
                    option()
            else:
                    print("Invalid Account no\n")
                    option()

        elif b == 4:  #exit
          
            start()
        else:
            print("Invalid choice")
            option()

# Start of application

def start():
    print("1.Create new account")
    print("2.Use Existing Account")
    a=int(input("Enter your option :"))

    if a == 1:
        create_acc()
        option()
    elif a == 2:
        accno=int(input("Enter your account no :"))
        if accno in acc_amount:
             option()
        else:
              print("Invalid Account no")
              start()

    else:
        print("Invalid choice")


start()   


