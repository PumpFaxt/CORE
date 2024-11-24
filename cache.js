import { resolve } from "jsr:@std/path";

let invalidated = true;
let cache;

const cachePath = resolve(import.meta.dirname, "cache");

try {
  await Deno.lstat(cachePath);
} catch (_) {
  console.log("Cache not found, creating...");
  Deno.writeTextFileSync(
    cachePath,
    JSON.stringify({}),
  );
}

function getCacheState() {
  if (invalidated) {
    invalidated = false;
    const fileData = Deno.readTextFileSync(cachePath);
    cache = JSON.parse(fileData.toString());
  }

  return cache;
}

async function store(key, value) {
  const cache = getCacheState();
  cache[key] = value;

  return await Deno.writeTextFile(
    cachePath,
    JSON.stringify(cache),
  ).then(() => invalidated = true);
}

function storeSync(key, value) {
  const cache = getCacheState();
  cache[key] = value;

  Deno.writeTextFileSync(
    cachePath,
    JSON.stringify(cache),
  );
  invalidated = true;
}

export default {
  getCacheState,
  store,
  storeSync,
};
