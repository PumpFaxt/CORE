import type { FormSubmitEvent } from "../types/utils.d.tsx";

export function parseFormEventData(event: FormSubmitEvent) {
  return Object.fromEntries(
    new FormData(event.currentTarget),
  );
}
