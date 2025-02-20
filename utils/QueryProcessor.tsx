export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("name")) {
    return (
      "Frank"
    );
  }
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("plus")) {
  const regex = /\d+/g;
  const numbers = query.match(regex)?.map(Number);
  if (!numbers || numbers.length === 0)
    return "-1";
  if (numbers.length == 2) {
  return (numbers[0] + numbers[1]).toString();
  }
  if (numbers.length == 3) {
  return (numbers[0] + numbers[1] + numbers[2]).toString();
  }

  /*
  if (!numbers || numbers.length === 0) return -1;
    var splitted = query.split(" ", 10);
    return (
      (parseInt(splitted[2]) + parseInt(splitted[4])).toString()
    );
  */
  }
  if (query.toLowerCase().includes("largest")) {
  return C(query).toString();
  }
  if (query.toLowerCase().includes("both a square and cube")) {
  return D(query).toString();
  }
  if (query.toLowerCase().includes("minus")) {
    var splitted = query.split(" ", 10);
    return (
      (parseInt(splitted[2]) - parseInt(splitted[4])).toString()
    );
  }
  if (query.toLowerCase().includes("multiplied")) {
    var splitted = query.split(" ", 10);
    return (
      (parseInt(splitted[2]) * parseInt(splitted[6])).toString()
    );
  }
  if (query.toLowerCase().includes("primes")) {
    return E(query).toString();
  }
  if (query.toLowerCase().includes("power")) {
    return F(query).toString();
  }
  else
    return "0";
}

function C(str: string): number {
  const regex = /\d+/g;
  const numbers = str.match(regex)?.map(Number);
  if (!numbers || numbers.length === 0) return -1;
  return Math.max(...numbers);
}

function D(str: string) : number {
  const regex = /\d+/g;
  const numbers = str.match(regex)?.map(Number);
  if (!numbers || numbers.length === 0) return -1;
  for(let i = 0; i < numbers.length; i++) {
    const a = (Math.pow(Math.round(Math.sqrt(numbers[i])), 2) == numbers[i]);
    const b = (Math.pow(Math.round(Math.cbrt(numbers[i])), 3) == numbers[i]);
    if(a && b)
      return numbers[i];
  }
  return -1;
}

function E(str: string) : number {
  const regex = /\d+/g;
  const numbers = str.match(regex)?.map(Number);
  if (!numbers || numbers.length === 0) return -1;
  for(let i = 0; i < numbers.length; i++) {
  if(isPrime(numbers[i])) {
      return numbers[i];
    }
  }
  return -1;
}

function isPrime(n : number) {
  for(let i = 2; i < n; i++) {
    if(n % i == 0)
      return false;
  } 
  return true;
}

function F(str: string): number {
  const regex = /\d+/g;
  const numbers = str.match(regex)?.map(Number);
  if (!numbers || numbers.length === 0) return -1;
  return Math.pow(numbers[0], numbers[1]);
}
//a
//commit