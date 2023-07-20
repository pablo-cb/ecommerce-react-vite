var lengthOfLastWord = function(s) {
    s = s.trim();
    s = s.replace(/  +/g, " ");
    let countSpaces = (s.match(/ /g) || []).length;
    if (countSpaces > 0){
        let words = s.split(" ");
        return words[words.length -1].length;
    } else{
        return s.length;

    }
};


lengthOfLastWord("   fly me   to   the moon  ");