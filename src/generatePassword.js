const generatePassword = (config) => {
  const characters = {
    numbers: "0 1 2 3 4 5 6 7 8 9",
    symbols: "! @ # $ % ^ & * ( ) _ - + = { [ } ] ; : < , > . ? /",
    uppercase: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z",
    lowercase: "a b c d e f g h i j k l m n o p q r s t u v w x y z",
  };

  let currentCharacters = characters.lowercase;
  let password = "";

  for (let property in config) {
    if (config[property] === true) {
      currentCharacters += characters[property] + " ";
    }
  }

  currentCharacters = currentCharacters.trim();
  currentCharacters = currentCharacters.split(" ");

  for (let i = 0; i < config.characters; i++) {
    password +=
      currentCharacters[Math.floor(Math.random() * currentCharacters.length)];
  }

  return password;
};

export default generatePassword;
