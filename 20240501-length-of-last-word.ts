function lengthOfLastWord(s: string): number {
    let trim = s.trim();
    let words = trim.split(' ');
    return words[words.length-1].length; 
};