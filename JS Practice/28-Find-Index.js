
// Mi solución
var strStr = function(haystack, needle) {
    const regex = new RegExp(needle, 'g');
    for (const match of haystack.matchAll(regex)) {
        // console.log(match[0].index);
        return match.index;
    }
    return -1;
};

// Chat GPT
function strStr(haystack, needle) {
    const re = new RegExp(needle, 'g');
    const match = re.exec(haystack);
    return match ? match.index : -1;
}



strStr('Apple, Banana Kiwi, Apple, orange, etc. etc. etc.', "Apple");


/*

[
  'Apple',
  'Apple',
  index: 0,
  input: 'Apple, Banana Kiwi, Apple, orange, etc. etc. etc.',
  groups: undefined
]
[
  'Apple',
  'Apple',
  index: 20,
  input: 'Apple, Banana Kiwi, Apple, orange, etc. etc. etc.',
  groups: undefined
]

*/

