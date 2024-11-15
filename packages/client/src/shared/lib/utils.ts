import type { FormSubmitEvent } from "../types/utils.d.ts";

export function parseFormEventData(event: FormSubmitEvent) {
  return Object.fromEntries(
    new FormData(event.currentTarget),
  );
}

export function chooseRandomFromArray<T>(array: T[]) {
  return array[Math.floor(Math.random() * array.length)];
}
