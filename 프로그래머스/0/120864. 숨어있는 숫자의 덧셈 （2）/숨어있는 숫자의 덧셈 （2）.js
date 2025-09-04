function solution(my_string) {
  let sum = 0;
  let numberStr = "";

  for (let ch of my_string) {
    if (ch >= '0' && ch <= '9') {
      numberStr += ch;
    } else {
      if (numberStr !== "") {
        sum += Number(numberStr);
        numberStr = "";
      }
    }
  }
  

  if (numberStr !== "") {
    sum += Number(numberStr);
  }
  
  return sum;
}