/**
 * Merge 3 sorted arrays into one ascending sorted array
 * collection_1: ascending (0 → max)
 * collection_2: ascending (0 → max)
 * collection_3: descending (max → 0)
 */

export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const result: number[] = [];

  let i = 0; // pointer for collection_1
  let j = 0; // pointer for collection_2
  let k = collection_3.length - 1; // reverse pointer for collection_3

  while (
    i < collection_1.length ||
    j < collection_2.length ||
    k >= 0
  ) {
    const v1 = i < collection_1.length ? collection_1[i] : Infinity;
    const v2 = j < collection_2.length ? collection_2[j] : Infinity;
    const v3 = k >= 0 ? collection_3[k] : Infinity;

    const min = Math.min(v1, v2, v3);

    if (min === v1) {
      result.push(v1);
      i++;
    } else if (min === v2) {
      result.push(v2);
      j++;
    } else {
      result.push(v3);
      k--;
    }
  }

  return result;
}
