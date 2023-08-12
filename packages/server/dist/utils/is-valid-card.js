"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidCard = void 0;
const isValidCard = (cardNum) => {
    if (/[^0-9-\s]+/.test(cardNum))
        return false;
    let arr = (cardNum + '')
        .split('')
        .reverse()
        .map(x => parseInt(x));
    let lastDigit = arr.splice(0, 1)[0];
    let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
    sum += lastDigit;
    return sum % 10 === 0;
    // The Luhn Algorithm. It's so pretty.
    // let nCheck = 0, bEven = false;
    // cardNum = cardNum.replace(/\D/g, "");
    // for (var n = cardNum.length - 1; n >= 0; n--) {
    // 	var cDigit = cardNum.charAt(n),
    // 		  nDigit = parseInt(cDigit, 10);
    // 	if (bEven && (nDigit *= 2) > 9) nDigit -= 9;
    // 	nCheck += nDigit;
    // 	bEven = !bEven;
    // }
    // return (nCheck % 10) == 0;
};
exports.isValidCard = isValidCard;
//# sourceMappingURL=is-valid-card.js.map