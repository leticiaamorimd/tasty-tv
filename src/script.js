let questions = [
  {
    topic: "Who we are?",
    description:
      "TastyTV is a pioneer and one of the world’s largest online Over-the-top (OTT) entertainment solutions."
  },
  {
    topic: "What devices can I stream TastyTV on?",
    description:
      "TastyTV is available on most connected devices including smart TVs, streaming sticks, smartphones, tablets, PCs and game consoles."
  },
  {
    topic: "Can I record live content?",
    description:
      "Absolutely! Never miss another episode, game or movie. When you subscribe to TastyTV you get 50 hours of Cloud DVR storage to record your shows and watch them later on any of your supported devices."
  }
];

//Index Page - Frequently Question
questions.forEach((question) => {
  const header = document.createElement("h4");
  header.textContent = question.topic;

  const para = document.createElement("p");
  para.textContent = question.description;
  para.style.display = "none";

  let accordion = document.querySelector(".accordion");
  accordion.appendChild(header);
  accordion.appendChild(para);

  header.addEventListener("click", () => {
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

//Registration Page
function register() {
  alert("Thank you!");
}
