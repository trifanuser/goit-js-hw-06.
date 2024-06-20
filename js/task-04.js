let counterValue = 0;

    const valueElement = document.querySelector("#value");
    const decrementButton = document.querySelector('button[data-action="decrement"]');
    const incrementButton = document.querySelector('button[data-action="increment"]');

   
    const updateUI = () => {
      valueElement.textContent = counterValue;
    };

   
    decrementButton.addEventListener("click", () => {
      counterValue--;
      updateUI();
    });

    incrementButton.addEventListener("click", () => {
      counterValue++;
      updateUI();
    });