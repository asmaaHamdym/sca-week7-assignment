let questionBody = document.querySelector("tbody");
const triviaQuestion = async () => {
  try {
    const response = await fetch("https://opentdb.com/api.php?amount=30");
    const data = await response.json();
    const newData = data.results;

    newData.map((item) => {
      const newTask = document.createElement("tr");
      newTask.innerHTML = `
            <td>${item.category}</td>
            <td>${item.type}</td>
            <td>${item.difficulty}</td>
            <td>${item.question}</td>
            <td class='answer'>${item.correct_answer}</td>
            `;
      questionBody.appendChild(newTask);
    });
  } catch (error) {
    console.log("Error Found");
  }
};
triviaQuestion();
