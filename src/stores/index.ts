import { MetroStore } from './MetroStore.ts';

class RootStore {
  constructor() {
    this.metroStore = new MetroStore();
  }
}
export const rootStore = new RootStore();

