class User:
    def __init__(self, username):
        self.username = username
        self.account = BankAccount(int_rate=0.01, balance=0)

    def displayUserBalance(self):
        print(f"User: {self.username}, Balance: ${self.account.balance}")


    def deposit(self, amount):
        print("[ + ] - ", end='')
        self.account.deposit(amount)
        print(f"Deposited ${amount} into {self.username}'s account")
        return self

    def withdraw(self, amount):
        print("[ - ] - ", end='')
        self.account.withdraw(amount)
        print(f"Withdrew ${amount} from {self.username}'s account")
        return self



class BankAccount:
    def __init__(self, int_rate=0.01, balance=0):
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        self.balance -= amount
        if self.balance < 0:
            print("Insufficient funds: Charging a $5 fee")
            self.balance = self.balance - 5
        return self

    def displayAccountInfo(self):
        print(f"Balance: ${self.balance}")

    def yieldInterest(self):
        if self.balance > 0:
            self.balance += self.balance * self.int_rate
        else:
            print("Not enough balance.")
        return self


user1 = User("Bill")


user1.displayUserBalance()
user1.deposit(100).withdraw(250).deposit(1200).displayUserBalance()