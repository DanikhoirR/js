//* String.Prototype.at()
// const sentence = "baba babi babayo bagus basi";
// let index = 7;
// console.log(`index: ${index}, returns the char ${sentence.at(index)}`);
// index = -7;
// console.log(`index: ${index}, returns the char ${sentence.at(index)}`)

//* String.prototype.charAt()
// const anyString = "Pada suatu hari budi pergi ke anatah branatah";
// console.log(`index 0 is ${anyString.charAt(0)}`);
// console.log(`index 1 is ${anyString.charAt(1)}`);
// console.log(`index 2 is ${anyString.charAt(2)}`);

//* String.prototype.charCodeAt()
// const type = "Mencari kitab scui bersama Sun Go KUng";
// let index = 6;
// console.log(`code char: ${type.charCodeAt(index)} is equal to ${type.charAt()}`);

//* String.prototype.codePointAt()
// let icon = '☃★♲';
// console.log(icon.codePointAt(2));

//* String.prototype.concat()
// const firstName = "Zidane";
// const lastName = "Khoir";
// console.log(firstName.concat(' ', lastName));
// console.log(lastName.concat(' ', firstName));

//* String.prototype.endsWith()
// let sentence = "budi pergi membeli bubur!";
// console.log(sentence.endsWith('bubur!'));
// console.log(sentence.endsWith('bubur'));
// console.log(sentence.endsWith('bubur!', 26));

//* String.prototype.includes()
// const sentence = "Budi pergi membeli bubur!";
// const word1 = "Budi";
// const word2 = "budi";
// console.log(
//   `The word "${word1}" ${
//     sentence.includes(word1)? 'is' : 'is not'
//   } in the sentence`
// )
// console.log(
//   `The word "${word2}" ${
//     sentence.includes(word2)? 'is' : 'is not'
//   } in the sentence`
// )

//* String.prototype.indexOf()
// const paragaph = "I think pengabdi setan 1 it's better than pengabdi setan 2";
// const searchTerm = "pengabdi";
// const indexOfFirst = paragaph.indexOf(searchTerm);

// console.log(`the index of "${searchTerm}" is ${indexOfFirst}`);

// console.log(
//   `the second of "${searchTerm}" is ${paragaph.indexOf(
//     searchTerm,
//     indexOfFirst + 1
//   )}`
// );

//* String.prototype.lastIndexOf()
// const paragraph = "I think Ruth's dog is cuter than your dog!";
// const searchTerm = "dog";

// console.log(
//   `Index of the last ${searchTerm} is ${paragraph.lastIndexOf(searchTerm)}`
// );

//* String.prototype.isWellFormed()
// var strings = [
//   // Lone leading surrogate
//   "ab\uD800",
//   "ab\uD800c",
//   // Lone trailing surrogate
//   "\uDFFFab",
//   "c\uDFFFab",
//   // Well-formed
//   "abc",
//   "ab\uD83D\uDE04c",
// ];

// for (const str of strings) {
//   console.log(str.isWellFormed());
// }

//* String.prototype.localeCompare()
// const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// const regexp = /[A-E]/gi;
// const matches = str.match(regexp);

// console.log(matches);

//* String.prototype.padEnd()
// const str1 = 'Breaded Mushrooms';
// console.log(str1.padEnd(25, '.'));
// // Expected output: "Breaded Mushrooms........"

// const str2 = '200';
// console.log(str2.padEnd(5));
// // Expected output: "200  "

//* String.prototype.padStart()
// const str1 = '5';
// console.log(str1.padStart(2, '0'));
// // Expected output: "05"

// const fullNumber = '2034399002125581';
// const last4Digits = fullNumber.slice(-4);
// const maskedNumber = last4Digits.padStart(fullNumber.length, '*');
// console.log(maskedNumber);
// // Expected output: "************5581"

//* String.prototype.repeat()
// const mood = 'Happy! ';
// console.log(`I feel ${mood.repeat(3)}`);
// // Expected output: "I feel Happy! Happy! Happy! "

//* String.prototype.replace()
// const paragraph = "I think Ruth's dog is cuter than your dog!";

// console.log(paragraph.replace("Ruth's", 'my'));
// // Expected output: "I think my dog is cuter than your dog!"

// const regex = /Dog/i;
// console.log(paragraph.replace(regex, 'ferret'));
// // Expected output: "I think Ruth's ferret is cuter than your dog!"

//* String.prototype.replaceAll()
// const paragraph = "I think Ruth's dog is cuter than your dog!";

// console.log(paragraph.replaceAll('dog', 'monkey'));
// // Expected output: "I think Ruth's monkey is cuter than your monkey!"

// // Global flag required when calling replaceAll with regex
// const regex = /Dog/gi;
// console.log(paragraph.replaceAll(regex, 'ferret'));
// // Expected output: "I think Ruth's ferret is cuter than your ferret!"

//* String.prototype.slice()
// const str = 'The quick brown fox jumps over the lazy dog.';
// console.log(str.slice(31));
// // Expected output: "the lazy dog."
// console.log(str.slice(4, 19));
// // Expected output: "quick brown fox"
// console.log(str.slice(-4));
// // Expected output: "dog."
// console.log(str.slice(-9, -5));
// // Expected output: "lazy"

//* String.prototype.split()
// const str = 'The quick brown fox jumps over the lazy dog.';
// const words = str.split(' ');
// console.log(words[3]);
// // Expected output: "fox"

// const chars = str.split('');
// console.log(chars[8]);
// // Expected output: "k"

// const strCopy = str.split();
// console.log(strCopy);
// // Expected output: Array ["The quick brown fox jumps over the lazy dog."]

//* String.prototype.startsWith()
// const str = "To be, or not to be, that is the question.";
// console.log(str.startsWith("To be,"));  //true
// console.log(str.startsWith("To be", 0));  //true
// console.log(str.startsWith("to be", 0));  //false

//* String.prototype.substring()
// const str = 'Mozilla';

// console.log(str.substring(1, 3));
// // Expected output: "oz"

// console.log(str.substring(2));
// // Expected output: "zilla"
