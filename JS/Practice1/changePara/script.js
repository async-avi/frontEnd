const commonWords = [
  "the",
  "and",
  "is",
  "it",
  "in",
  "you",
  "that",
  "he",
  "was",
  "for",
  "on",
  "are",
  "with",
  "as",
  "I",
  "his",
  "they",
  "be",
  "at",
  "one",
  "have",
  "this",
  "from",
  "or",
  "had",
  "by",
  "but",
  "some",
  "what",
  "there",
  "we",
  "can",
  "out",
  "other",
  "were",
  "all",
  "your",
  "when",
  "up",
  "use",
  "how",
  "said",
  "an",
  "each",
  "she",
  "which",
  "do",
  "their",
  "time",
  "if",
  "will",
  "way",
  "about",
  "many",
  "then",
  "them",
  "write",
  "would",
  "like",
  "so",
  "these",
  "her",
  "long",
  "make",
  "thing",
  "see",
  "him",
  "two",
  "has",
  "look",
  "more",
  "day",
  "could",
  "go",
  "come",
  "did",
  "number",
  "sound",
  "no",
  "most",
  "people",
  "my",
  "over",
  "know",
  "water",
  "than",
  "call",
  "first",
  "who",
  "may",
  "down",
  "side",
  "been",
  "now",
  "find",
  "any",
  "new",
];

function randomWords() {
  const newPara = document.createElement("p");
  newPara.setAttribute("id", "as1");
  for (let i = 0; i < 100; i++) {
    const randomWord =
      commonWords[Math.floor(Math.random() * commonWords.length + 1)] + " ";
    newPara.innerHTML += randomWord;
  }
  const paraElem = document.getElementById("as1");
  paraElem.replaceWith(newPara);
}

const changeParaButton = document.getElementById("changePara");

changeParaButton.addEventListener("click", randomWords);
