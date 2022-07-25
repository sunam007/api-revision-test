console.log("i am kanye");
const loadQuotes = () => {
  const url = " https://api.kanye.rest/";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayQuotes(data));
};
const displayQuotes = (quotes) => {
  //   console.log(quotes.quote);
  /*   const div = document.getElementById("quotes");
  const h4 = document.createElement("h4");
  h4.innerText = quotes.quote;
  div.appendChild(h4);
  h4.innerText = "";
  div.appendChild(h4); */
  const quoteContainer = document.getElementById("kanye-quotes");
  // const quote = quotes.quote;
  quoteContainer.innerText = quotes.quote;
};
