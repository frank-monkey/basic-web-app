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
    var splitted = query.split(" ", 10);
    return (
      (parseInt(splitted[2]) + parseInt(splitted[4])).toString()
    );
  }
  if (query.toLowerCase().includes("largest")) {
  return findLargestNumber(query).toString();
  }
  else
    return "0";
}

function findLargestNumber(str: string): number {
  const regex = /\d+/g; // Matches any digit one or more times
  const numbers = str.match(regex)?.map(Number); // Extract all numbers from the string and convert them to numbers
  if (!numbers || numbers.length === 0) return -1; // If no numbers are found in the string, return -1
  return Math.max(...numbers); // Return the largest number
}