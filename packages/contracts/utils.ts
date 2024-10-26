export function parseFrax(value: number | bigint) {
    return BigInt(Math.pow(Number(value), 18));
}
