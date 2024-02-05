export class LocalStorage {
  getString(key: string, defaultValue: string | null = null) {
    const value = window.localStorage.getItem(key);

    return value || defaultValue;
  }

  getNumber(key: string, defaultValue: number | null = null) {
    const value = window.localStorage.getItem(key);

    return Number(value) || defaultValue;
  }

  getBoolean(key: string, defaultValue: boolean | null = null) {
    const value = window.localStorage.getItem(key);

    return value ? value === "true" : defaultValue;
  }

  getObject<Type>(key: string, defaultValue: Type | null = null) {
    const value = window.localStorage.getItem(key);
    if (!value) return defaultValue;
    return JSON.parse(value);
  }

  setString(key: string, value: string) {
    window.localStorage.setItem(key, value);
  }

  setNumber(key: string, value: number) {
    window.localStorage.setItem(key, value.toString());
  }

  setBoolean(key: string, value: boolean) {
    window.localStorage.setItem(key, String(value));
  }

  setObject<Type>(key: string, value: Type) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  clearKey(key: string): void {
    window.localStorage.removeItem(key);
  }

  clearAll(): void {
    window.localStorage.clear();
  }
}
