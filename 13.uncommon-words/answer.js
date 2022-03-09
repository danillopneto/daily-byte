let getUncommonWords = (sentence1, sentence2) => {
  const uncommonWords = [];
  const sentence1Words = sentence1.split(' ');
  const sentence2Words = sentence2.split(' ');

  sentence1Words.forEach(word => {
    if (sentence2Words.indexOf(word) == -1) {
      uncommonWords.push(word);
    }
  });

  sentence2Words.forEach(word => {
    if (sentence1Words.indexOf(word) == -1) {
      uncommonWords.push(word);
    }
  });

  return uncommonWords;
};

let testAnswer = (answer) => {
  console.log(answer("the quick", "brown fox")); // ["the", "quick", "brown", "fox"]
  console.log(answer("the tortoise beat the haire", "the tortoise lost to the haire")); // ["beat", "to", "lost"]
  console.log(answer("copper coffee pot", "hot coffee pot")); // ["copper", "hot"]
}

testAnswer(getUncommonWords);