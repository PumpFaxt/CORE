import { signal } from "@preact/signals";

export function createDomSignal<T>(defaultValue: T) {
  return signal(defaultValue);
}
