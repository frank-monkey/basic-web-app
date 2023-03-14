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
    query = query.replace(",", '');
    var splitted = query.split(" ", 15);
    var a = parseInt(splitted[9]);
    var b = parseInt(splitted[11]);
    var c = parseInt(splitted[13]);
    if(a > b && a > c)
      return a.toString();
    if(b > c && b > a)
      return b.toString();
    return c.toString();
  }
// test
  return "";
}
