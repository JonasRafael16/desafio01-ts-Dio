import { DioAccount } from "./DioAccount"

export class DefaultAccount extends DioAccount {

  constructor(){
    super('Jonas', 10)
  }

  private addsTenToValue = (amountDeposited: number): number => {
    return amountDeposited + 10;
  }

  deposit = (amountDeposited: number): void => {
    this.setDepositBalance(this.addsTenToValue(amountDeposited))
    console.log('Voce depositou no defaultAccount')
    this.getBalance()
  }
}