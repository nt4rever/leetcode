let obj = {
  a: 1,
  b: "Alice",
  c: true,
  d: undefined,
};

for (ele in obj) {
  console.log(`${ele} => ${obj[ele]}`);
}

for (ele of Object.keys(obj)) {
  console.log(`${ele} => ${obj[ele]}`);
}

// entries = record or listing
for (let [key, value] of Object.entries(obj)) {
  console.log(`${key} => ${value}`);
}
