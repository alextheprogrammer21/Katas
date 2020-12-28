const input = process.argv.slice(2);

const reversedArray = [];

for (let i = 0; i < input.length; i++) {
  const reversed = input[i].split(" ").toString().split("").reverse().join("");
  reversedArray.push(reversed);
}

console.log(reversedArray);
