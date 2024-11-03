/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} [arr=[]] arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr = [], param = "asc") {
  let result = arr.toSorted((a, b) => {
    if (param === "asc") {
      let compare = a.localeCompare(b);
      return a.toLowerCase() === b.toLowerCase() ? -compare : compare;
    } else if (param === "desc") {
      return b.localeCompare(a);
    }
  });
  return result;
}



