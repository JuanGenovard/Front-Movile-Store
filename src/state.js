import { makeAutoObservable } from "mobx";

class State {
  constructor() {
    makeAutoObservable(this);
  }

  movil = null;

  setMovil(movil) {
    this.movil= movil;
  }
  resetMovil() {
    this.movil = null;
  }

}

export default new State();