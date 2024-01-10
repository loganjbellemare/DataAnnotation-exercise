const fs = require("fs");

function decode(messageFile) {
  try {
    let pyramid = {}; // store pyramid structure as an object
    let decodedMessage = []; // store decoded message

    // read file contents and create pyramid structure from contents
    const fileContent = fs.readFileSync(messageFile, "utf-8");
    const lines = fileContent.split("\n");

    for (const line of lines) {
      const parts = line.split(" "); //separate number and word
      const number = parseInt(parts[0], 10); //convert number value to integer
      const word = parts.slice(1).join(" ").trim(); //extract word to add to pyramid
      pyramid[number] = word; //store word at corresponding number key in pyramid object
    }

    // decode message using the provided numbers in the pyramid
    for (const key in pyramid) {
      decodedMessage.push(pyramid[key]);
    }

    // convert decoded message to string
    const message = decodedMessage.join(" ");

    return message; // return the decoded message
  } catch (error) {
    console.error("Error reading the file:", error); //error handling in case of file read errors
    return null;
  }
}

const messageFile = "./coding_qual_input.txt";
const result = decode(messageFile);
console.log(result);
