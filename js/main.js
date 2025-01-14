const url = "https://quotes15.p.rapidapi.com/quotes/random/?language_code=en";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "Remove this key, and add your own key :) ",
    "x-rapidapi-host": "quotes15.p.rapidapi.com",
  },
};

async function fetchQuote() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const quote = result.content;
    const author = result.originator.name;
    console.log(quote);
    document.getElementById("Quotes").innerHTML = quote;
    console.log(author);
    document.getElementById("Quotes-Author").innerHTML = author;
  } catch (error) {
    console.error(error);
  }
}

fetchQuote();
