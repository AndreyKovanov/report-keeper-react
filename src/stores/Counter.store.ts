import { observable, action } from 'mobx';

export class CounterStore {
  @observable
  public countValue = 0;

  @action
  public increment = (): void => {
      this.countValue++;
  }

  @action
  public decrement = (): void => {
      this.countValue--;
  }

  @observable
  public inputTitle = '';

  @action
  public changeTitle = (newValue: string): void => {
    this.inputTitle = newValue;
  }
}
