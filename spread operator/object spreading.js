//1. Copying object
const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };
// Result: { a: 1, b: 2 }

//2.Merging object
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };

const mergedObject = { ...object1, ...object2 };
// Result: { a: 1, b: 3, c: 4 }

//3.Modifying object properties
const modifiedObject = { ...originalObject, b: 3 };
// Result: { a: 1, b: 3 }