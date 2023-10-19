let a = {
  name: "Deepak",
};

let b = { ...a };

a.name = "Soham";

console.log(a);
console.log(b);
