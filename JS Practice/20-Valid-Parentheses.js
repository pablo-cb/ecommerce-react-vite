/**
 * @param {string} s
 * @return {boolean}
 */


const brackets = [
    {
        bracketsOpen : "(",
        bracketClose : ")"
    },
    {
        bracketsOpen : "[",
        bracketClose : "]"
    },
    {
        bracketsOpen : "{",
        bracketClose : "}"
    }
];
var isValid = function(s) {
    let sChild = s;

    if (sChild.length % 2 !== 0) {
        // odd is false
        return false;
    }

    for (let i = 0; i < sChild.length; i++) {
        let whichBracket = whichBracketIs(s[i]);
        if (whichBracket[0].property == "bracketsOpen" && brackets[whichBracket[0].index].bracketClose == s[i+1]){
                sChild = sChild.slice(0, i) + sChild.slice(i + 2);
                if (sChild.length == 0) {
                    return true;
                } else {
                    return isValid(sChild); // capture return value of recursive call
                }
        }
    }
    return sChild.length == 0; // check if string is empty after removing all brackets
};


function whichBracketIs(bracket){
        // This was with the help of chatGPT. This block tell me the info about the bracket
    let whichBracket = brackets.map((obj, index) => {
        for (let prop in obj) {
            if (obj[prop] === bracket) {
            return { property: prop, index: index };
            }
        }
    }).filter(item => item !== undefined);

    return whichBracket;
}


/*

ChatGPT

function isValid(s) {
  const stack = [];
  const map = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] in map) {
      stack.push(s[i]);
    } else {
      const topElement = stack.pop();

      if (s[i] !== map[topElement]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

*/