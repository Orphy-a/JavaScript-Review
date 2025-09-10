function solution(emergency) {
    
    let arr = emergency.slice().sort((a,b) => b-a);
    
    
    return emergency.map(x => arr.indexOf(x) + 1)
    

    
}