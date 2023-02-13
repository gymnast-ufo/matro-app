import { action, makeObservable, observable } from 'mobx';
import { IStoreSelectedStation } from '../types';

const defaultSelected: IStoreSelectedStation = {
  line: '',
  station: '',
};

export class MetroStore {
  constructor() {
    makeObservable(this);
  }

  @observable
  search = '';
  @observable
  selected = defaultSelected;

  @action.bound
  setSearch = (value: string) => {
    this.search = value;
  }

  @action.bound
  setSelected = (newStation: IStoreSelectedStation) => {
    this.selected = newStation;
  }
}
