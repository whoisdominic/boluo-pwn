import { createContext, useContext } from "react";
export { observer } from "mobx-react-lite";
// Stores
import { UiStore } from "./ui";

/**
 * Root store of application
 */
export class RootStore {
  uiStore: UiStore;
  constructor() {
    this.uiStore = new UiStore(this);
  }
}

const RootStoreInstance = new RootStore();
export const StoreContext = createContext(RootStoreInstance);
export const useStore = () => useContext(StoreContext);
