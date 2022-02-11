export interface LocalStorage {
  getItem(key: string): any;
  setItemSync(key: string, value: any): void;
  removeItemSync(key: string): void
  persistSync(): void;
}

export class HAPStorage {

  private static INSTANCE = new HAPStorage();

  private localStore?: LocalStorage;
  private customStoragePath?: string;

  public static storage(): LocalStorage {
    return this.INSTANCE.storage();
  }
  public static setStorage(localStorage: LocalStorage) {
    if (this.INSTANCE.localStore)
      throw new Error('setStorage may only be called once');
    this.INSTANCE.localStore = localStorage;
  }

  public storage(): LocalStorage {
    if (!this.localStore) {
      throw new Error('no storage specified. consider using node-persist@^0.0.11');
    }

    return this.localStore;
  }
}
