function solution(s) {
    
    
    
    return [...s].sort().filter(ch => s.indexOf(ch) === s.lastIndexOf(ch)).join('');
    
}