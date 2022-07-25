import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import { RootStore } from "../RootStore";

/**
 * UI store, handles all things ui state
 */
export class UiStore {
  currentScreen: string = "";
  private rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(
      this,
      {
        // Observables
        currentScreen: observable,
        // Action
        onNavChange: action,
      },
      { autoBind: true, name: "ui" }
    );
  }
  /**
   * Actions
   */
  onNavChange(screeName?: string) {
    if (!screeName) {
      return;
    }
    this.currentScreen = screeName;
  }
}
