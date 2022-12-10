import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(20)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(30.05)
companyAccount.withdraw(10)
companyAccount.getLoan(1000)
console.log(companyAccount)