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
            print("[ERR] Not enough balance to yield Interest.")
        return self


account1 = BankAccount()
account2 = BankAccount()

account1.displayAccountInfo()

account1.deposit(25).deposit(25).deposit(150).withdraw(
    75).yieldInterest().displayAccountInfo()
account2.deposit(25).deposit(50).withdraw(25).withdraw(25).withdraw(
    50).withdraw(25).yieldInterest().displayAccountInfo()