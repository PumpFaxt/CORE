import type { FormSubmitEvent } from "../types/utils.d.ts";

export function parseFormEventData(event: FormSubmitEvent) {
  return Object.fromEntries(
    new FormData(event.currentTarget),
  );
}

export function chooseRandomFromArray<T>(array: T[]) {
  return array[Math.floor(Math.random() * array.length)];
}

export function formatAddress(address: string) {
  return (
    address.slice(0, 5 + 2) +
    "..." +
    address.slice(address.length - 5, address.length)
  );
}
