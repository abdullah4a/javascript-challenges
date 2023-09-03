//
// Find Longest word in the string
//
const longestWordPro = (str) => {
  const strArr = str.split(" ");
  let longestWord = "";
  for (word of strArr) {
    if (longestWord.length <= word.length) {
      longestWord = word;
    }
  }
  return longestWord;
};
const str =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt sapiente dignissimos minus, rem ad, labore molestias earum facere dolorum molestiae architecto odio illo animi laboriosam veniam quos consequatur quibusdam iure?";
console.log(longestWordPro(str));
