export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 50
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }



  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  setDepositBalance = ( amountDeposited: number): void => {
    if(this.validateStatus()){
      this.balance += amountDeposited;
      console.log('Voce depositou')
    }
  }

  setWithdrawBalance = ( amountWithdrawn: number): void => {
    if(this.validateStatus() && this.balance >= amountWithdrawn){
      this.balance -= amountWithdrawn;
      console.log('Voce sacou')
    }
  }

  getName = (): string => {
    return this.name
  }


  deposit = (amountDeposited: number): void => {
    this.setDepositBalance(amountDeposited)
  }

  withdraw = (amountWithdrawn: number): void => {
    this.setWithdrawBalance(amountWithdrawn)
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
