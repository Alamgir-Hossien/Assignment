class BankAccount {
    static #counter=1001; //set static counter for unique identifier for each account
    constructor(ownerName, balance){
        this.accountNumber = BankAccount.#counter++;
        this.ownerName = ownerName;
        this.balance = balance;

    }
    deposit(amount=0){
         this.balance += amount;
    }
    withdraw(amount){
        if(amount>this.balance){
            console.log("Insufficient funds");
        }
        else{
            this.balance -= amount;
        }
    }
    getBalance(){
        return this.balance;
    }
    displayAccountInfo(){
        console.log(`Account Number: ${this.accountNumber}`)
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: ${this.balance}`);
    }
}

//Creating two instance from BankAccount class
person1 = new BankAccount("Alamgir", 10000);
person2 = new BankAccount("Elon", 20000);

person1.deposit(1000);
person1.getBalance()
person1.withdraw(2000);
person1.displayAccountInfo();

person2.deposit(5000);
person2.getBalance();
person2.withdraw(4000000);
person2.displayAccountInfo();


