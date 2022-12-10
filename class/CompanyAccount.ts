import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

   constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (amountRequested: number): void => {
    this.validateStatus()
    this.setDepositBalance(amountRequested)
    console.log('Voce pegou um empréstimo')
  }
}
