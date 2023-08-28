function merge(collection_1: number[], collection_2: number[]): number[] {
  const mergedCollection: number[] = [];
  let i = 0;
  let j = 0;

  while (i < collection_1.length && j < collection_2.length) {
    if (collection_1[i] < collection_2[j]) {
      mergedCollection.push(collection_1[i]);
      i++;
    } else {
      mergedCollection.push(collection_2[j]);
      j++;
    }
  }

  // remaining
  while (i < collection_1.length) {
    mergedCollection.push(collection_1[i]);
    i++;
  }

  while (j < collection_2.length) {
    mergedCollection.push(collection_2[j]);
    j++;
  }

  return mergedCollection;
}

export default merge;

// const collection_1: number[] = [1, 3, 5, 7, 9, 11, 12];
// const collection_2: number[] = [2, 4, 6, 8, 10];
// const collection_1: number[] = [];
// const collection_2: number[] = [];
// let result: number[] = merge(collection_1, collection_2);

// console.log("collection_1:", collection_1);
// console.log("collection_2:", collection_2);
// console.log("Merged collection:", result);
