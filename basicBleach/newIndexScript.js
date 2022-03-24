const quote = document.querySelector(".quote");
quote.className = quote;

window.addEventListener("load", (e) => {
  searchAdvice();
});

const searchAdvice = async () => {
  const url =
    "https://corsanywhere.herokuapp.com/https://api.adviceslip.com/advice";
  const getAdvice = await fetch(url);

  const adviceJson = await getAdvice.json();

  quote.append(adviceJson.slip.advice);
};
console.log("Joe, I had to do this to get it to save one more time");
