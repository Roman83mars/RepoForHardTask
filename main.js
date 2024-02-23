const num = 266219

const numText = num + 'A'

console.log(numText.split());

let multiplication = + numText[0] * + numText[1] * + numText[2] * + numText[3] * + numText[4] * + numText[5]

console.log(multiplication);

let sqrt = multiplication ** 3;

const sqrtText = sqrt + 'A'

console.log(sqrtText.substring(0, 2));
