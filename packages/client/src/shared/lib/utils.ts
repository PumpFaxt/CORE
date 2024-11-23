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

export function getImageDominantRgb(
  src: string,
): Promise<Uint8ClampedArray> {
  return new Promise((resolve) => {
    const context = document.createElement("canvas").getContext("2d");
    context!.imageSmoothingEnabled = true;

    let img = new Image();
    img.src = src;
    img.crossOrigin = "";

    img.onload = () => {
      context!.drawImage(img, 0, 0, 1, 1);
      resolve(context!.getImageData(0, 0, 1, 1).data.slice(0, 3));
    };
  });
}
