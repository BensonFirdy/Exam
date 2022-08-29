class BankAccount:
    
    def __init__(self, int_rate=0.02, balance=0):
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
    def display_account_info(self):
        print(f"Balance: ${self.balance}")
    def yield_interest(self):
        if self.balance > 0:
            self.balance += self.balance * self.int_rate
        else:
            print("Not enough balance")
        return self

bank1 = BankAccount()
bank2 = BankAccount()


bank1.deposit(75).deposit(25).deposit(25).withdraw(
    25).yield_interest().display_account_info()
bank2.deposit(125).deposit(50).withdraw(25).withdraw(25).withdraw(
    50).withdraw(25).yield_interest().display_account_info()

