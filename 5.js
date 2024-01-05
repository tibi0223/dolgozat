function otoslotto() {
    const numbers = [];

    while (numbers.length < 5) {
      const randomNumber = Math.floor(Math.random() * 90) + 1;

      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }

    numbers.sort((a, b) => a - b);
  
    return numbers;
  }

  console.log(otoslotto()); 