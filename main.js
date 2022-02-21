const start = document.getElementById("start");
let curWord = document.getElementById("curWord");
const randomElement = words[Math.floor(Math.random() * words.length)];
const container = document.getElementsByClassName("curWord")[0];
const keyboard = document.getElementById("keyboard");
const blanky = "";
const submit = document.getElementById("submit");
const guessL = document.getElementById("guessL");
const attempts = document.getElementById("attempts");
const typedWord = document.getElementById("typedWord");
let guess = "";
let wordArray = [];
let interArray = [];
let isGameOver = false;
let blankArray = [];
let typed = [];
let letter = document.getElementsByClassName("letter");
let common = [];
let uncommon = [];
let submitted = 0;
// const blanky = randomElement.length;
function intersect_arrays(a, b) {
  var sorted_a = a.concat().sort();
  var sorted_b = b.concat().sort();
  var a_i = 0;
  var b_i = 0;

  while (a_i < a.length && b_i < b.length) {
    if (sorted_a[a_i] === sorted_b[b_i]) {
      common.push(sorted_a[a_i]);
      a_i++;
      b_i++;
    } else if (sorted_a[a_i] < sorted_b[b_i]) {
      a_i++;
    } else {
      b_i++;
    }
  }
  return common;
}

function intersect_arraysUnc(a, b) {
  var sorted_a = a.concat().sort();
  var sorted_b = b.concat().sort();
  var a_i = 0;
  var b_i = 0;

  while (a_i > a.length && b_i > b.length) {
    if (sorted_a[a_i] === sorted_b[b_i]) {
      common.push(sorted_b[b_i]);
      a_i++;
      b_i++;
    } else if (sorted_b[b_i] < sorted_a[a_i]) {
      b_i++;
    } else {
      a_i++;
    }
  }
  return uncommon;
}

for (random of randomElement) {
  // let target = e.srcElement || e.target;
  wordArray.push(random);
  interArray.push(random);
  blankArray.push(blanky);
  curWord.innerHTML += `<input id="${random}" required maxlength="1" class="letter" type="text" value = "${blanky}" pattern="[0-9]{1}" autofocus>`;
}

submit.addEventListener("click", function () {
  submitted += 1;
  common = [];
  console.log(intersect_arrays(interArray, typed));
  attempts.innerHTML =
    "Attempts: " + submitted + ", Tries left: " + (5 - submitted);
  tried.innerHTML += typedWord.innerHTML + " -";
  curWord.innerHTML = "";
  for (random of randomElement) {
    curWord.innerHTML += `<input id="${random}" required maxlength="1" class="letter" type="text" value = "${blanky}" pattern="[0-9]{1}" autofocus>`;
  }

  if (submitted === 5) {
    setTimeout(function () {
      alert("GAME OVER, the word was: " + randomElement);
    }, 300);
    setTimeout(function () {
      location.reload();
    }, 300);
  }
  if (wordArray.join("") === typed.join("")) {
    typedWord.classList.add("green");
    setTimeout(function () {
      alert("Congrats you win!!");
    }, 500);
    setTimeout(function () {
      location.reload();
    }, 500);
  }
  uncommon = typed.filter((x) => !common.includes(x));
  // typed.filter((val, index) => {
  //   console.log("index", index);
  //   console.log(val);
  //   !common.includes(val);
  //   document.getElementById(val.toUpperCase()).classList.add("darkGray");
  // });
  common.filter((val, index) => {
    console.log("index", index);
    console.log(val);
    console.log(typed.includes(val));
    if (typed.includes(val)) {
      document.getElementById(val).classList.add("yellow");
      document.getElementById(val.toUpperCase()).classList.add("yellow");
    }
  });
  uncommon.filter((val, index) => {
    console.log("index", index);
    console.log(val);
    console.log(typed.includes(val));
    if (typed.includes(val)) {
      document.getElementById(val).classList.add("darkGray");
      document.getElementById(val.toUpperCase()).classList.add("darkGray");
      console.log(document.getElementsByClassName("letter").id);
    }
  });
  if (wordArray[0] === typed[0]) {
    console.log("equals");
    document.getElementById(wordArray[0]).classList.remove("yellow");
    document.getElementById(wordArray[0]).classList.add("green");
    document
      .getElementById(wordArray[0].toUpperCase())
      .classList.remove("yellow");
    document.getElementById(wordArray[0].toUpperCase()).classList.add("green");
  }
  if (wordArray[1] === typed[1]) {
    console.log("equals");
    document.getElementById(wordArray[1]).classList.remove("yellow");
    document.getElementById(wordArray[1]).classList.add("green");
    document
      .getElementById(wordArray[1].toUpperCase())
      .classList.remove("yellow");
    document.getElementById(wordArray[1].toUpperCase()).classList.add("green");
  }
  if (wordArray[2] === typed[2]) {
    console.log("equals");
    document.getElementById(wordArray[2]).classList.remove("yellow");
    document.getElementById(wordArray[2]).classList.add("green");
    document
      .getElementById(wordArray[2].toUpperCase())
      .classList.remove("yellow");
    document.getElementById(wordArray[2].toUpperCase()).classList.add("green");
  }
  if (wordArray[3] === typed[3]) {
    console.log("equals");
    document.getElementById(wordArray[3]).classList.remove("yellow");
    document.getElementById(wordArray[3]).classList.add("green");
    document
      .getElementById(wordArray[3].toUpperCase())
      .classList.remove("yellow");
    document.getElementById(wordArray[3].toUpperCase()).classList.add("green");
  }
  if (wordArray[4] === typed[4]) {
    console.log("equals");
    document.getElementById(wordArray[4]).classList.remove("yellow");
    document.getElementById(wordArray[4]).classList.add("green");
    document
      .getElementById(wordArray[4].toUpperCase())
      .classList.remove("yellow");
    document.getElementById(wordArray[4].toUpperCase()).classList.add("green");
  }
  if (wordArray[5] === typed[5]) {
    console.log("equals");
    document.getElementById(wordArray[5]).classList.remove("yellow");
    document.getElementById(wordArray[5]).classList.add("green");
    document
      .getElementById(wordArray[5].toUpperCase())
      .classList.remove("yellow");
    document.getElementById(wordArray[5].toUpperCase()).classList.add("green");
  }
  if (wordArray[6] === typed[6]) {
    console.log("equals");
    document.getElementById(wordArray[6]).classList.remove("yellow");
    document.getElementById(wordArray[6]).classList.add("green");
    document
      .getElementById(wordArray[6].toUpperCase())
      .classList.remove("yellow");
    document.getElementById(wordArray[6].toUpperCase()).classList.add("green");
  }
  if (wordArray[7] === typed[7]) {
    console.log("equals");
    document.getElementById(wordArray[7]).classList.remove("yellow");
    document.getElementById(wordArray[7]).classList.add("green");
    document
      .getElementById(wordArray[7].toUpperCase())
      .classList.remove("yellow");
    document.getElementById(wordArray[7].toUpperCase()).classList.add("green");
  }
  if (wordArray[8] === typed[8]) {
    console.log("equals");
    document.getElementById(wordArray[8]).classList.remove("yellow");
    document.getElementById(wordArray[8]).classList.add("green");
    document
      .getElementById(wordArray[8].toUpperCase())
      .classList.remove("yellow");
    document.getElementById(wordArray[8].toUpperCase()).classList.add("green");
  }
  if (wordArray[9] === typed[9]) {
    console.log("equals");
    document.getElementById(wordArray[9]).classList.remove("yellow");
    document.getElementById(wordArray[9]).classList.add("green");
    document
      .getElementById(wordArray[9].toUpperCase())
      .classList.remove("yellow");
    document.getElementById(wordArray[9].toUpperCase()).classList.add("green");
  }
  if (wordArray[10] === typed[10]) {
    console.log("equals");
    document.getElementById(wordArray[10]).classList.remove("yellow");
    document.getElementById(wordArray[10]).classList.add("green");
    document
      .getElementById(wordArray[10].toUpperCase())
      .classList.remove("yellow");
    document.getElementById(wordArray[10].toUpperCase()).classList.add("green");
  }
  if (wordArray[11] === typed[11]) {
    console.log("equals");
    document.getElementById(wordArray[11]).classList.remove("yellow");
    document.getElementById(wordArray[11]).classList.add("green");
    document
      .getElementById(wordArray[11].toUpperCase())
      .classList.remove("yellow");
    document.getElementById(wordArray[11].toUpperCase()).classList.add("green");
  }
  if (wordArray[12] === typed[12]) {
    console.log("equals");
    document.getElementById(wordArray[12]).classList.remove("yellow");
    document.getElementById(wordArray[12]).classList.add("green");
    document
      .getElementById(wordArray[12].toUpperCase())
      .classList.remove("yellow");
    document.getElementById(wordArray[12].toUpperCase()).classList.add("green");
  }
  if (wordArray[13] === typed[13]) {
    console.log("equals");
    document.getElementById(wordArray[13]).classList.remove("yellow");
    document.getElementById(wordArray[13]).classList.add("green");
    document
      .getElementById(wordArray[13].toUpperCase())
      .classList.remove("yellow");
    document.getElementById(wordArray[13].toUpperCase()).classList.add("green");
  }
});
// wordArray.filter((val, index) => {
//   console.log("index", index);
//   console.log(val);
//   console.log(wordArray.includes(val));
//   if (wordArray.includes(val)) {
//     document.getElementById(val).classList.remove("yellow");
//     document.getElementById(val).classList.add("green");
//     document.getElementById(val.toUpperCase()).classList.remove("yellow");
//     document.getElementById(val.toUpperCase()).classList.add("green");
//   }
// });
//     } else if (
//       (document.querySelectorAll(`#${random}`).id = document.querySelectorAll(
//         `#${type}`
//       ).id)
//     ) {
//       document.getElementById(val).classList.remove("yellow");
//       document.getElementById(val).classList.add("green");
//       document.getElementById(val.toUpperCase()).classList.remove("yellow");
//       document.getElementById(val.toUpperCase()).classList.add("green");
//     }
//   });
// });

// typed.filter((val, index) => {
//   console.log("index", index);
//   console.log(val);
//   console.log(wordArray.includes(val));
//   if (wordArray.includes(val)) {
//   }
// });

// if (randomElement.includes(typed)) {
//   guessL.classList.add("yellow");
// }
// if (randomElement.includes(typed)) {
//   guessL.classList.add("yellow");
// }

let arr1 = [1, 10, 11, 12, 15, 100, 5, 6, 7, 5];
let arr2 = [1, 10, 11, 12, 15, 100, 50, 60, 70, 50];

function arrayMatch(arr1, arr2) {
  var arr = [];
  arr1 = arr1.toString().split(",").map(Number);
  arr2 = arr2.toString().split(",").map(Number);
  console.log(arr1);
  // for array1
  for (var i in arr1) {
    if (arr2.indexOf(arr1[i]) !== -1) arr.push(arr1[i]);
  }
  console.log(arr);

  return arr.sort((x, y) => x - y);
}

console.log(arrayMatch(arr1, arr2)); // [1, 10, 11, 12, 15, 100]

container.onkeydown = function () {
  console.log("keydown");
  console.log(container.firstChild.value);
  if (container.firstChild.value < 1) {
    typed = [];
    typedWord.innerHTML = "";
  }
};

container.onkeyup = function onKeyed(e) {
  let target = e.srcElement || e.target;
  console.log((guess += target.value));
  let maxLength = parseInt(target.attributes["maxlength"].value, 10);
  let myLength = target.value.length;
  typed.push(target.value);
  console.log(typed);
  if (typed.join("").length <= randomElement.length) {
    typedWord.innerHTML += `<div class="guessL" id="${target.value}">${target.value}</div>`;
  } else {
    typedWord.innerHTML = typedWord.innerHTML;
    typed.pop();
    // typed.length = randomElement.length = 1;
    console.log("working");
  }

  // if (randomElement.includes(target.value)) {
  //   console.log(randomElement + " includes " + target.value);
  // }
  if (myLength >= maxLength) {
    let next = target;
    while ((next = next.nextElementSibling)) {
      if (next == null) break;
      if (next.tagName.toLowerCase() === "input") {
        next.focus();
        break;
      }
    }
  } else if (myLength === 0) {
    let previous = target;
    while ((previous = previous.previousElementSibling)) {
      if (previous == null) break;
      console.log("went backfrom " + previous.value);
      typed.splice(-1, 1);
      console.log(typed.splice(-1, 1));
      typedWord.innerHTML = " ";
      for (type of typed) {
        typedWord.innerHTML += `<div class="guessL" id="${type}">${type}</div>`;
      }
      // typedWord.innerHTML = typed.join("");
      if (previous.tagName.toLowerCase() === "input") {
        previous.focus();
        break;
      }
    }
  }
};

// } else if (curWord.removeChild(curWord.firstChild) === true) {
//   next.focus();
// }
// curWord.removeChild(curWord.lastChild);
// curWord.innerHTML = curWord.innerHTML;

const keys = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "",
  "",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "",
  "",
];

keys.forEach((key) => {
  const buttonElement = document.createElement("button");
  buttonElement.textContent = key;
  buttonElement.setAttribute("id", key);
  buttonElement.setAttribute("class", key);
  buttonElement.addEventListener("click", () => (guess += key));
  keyboard.append(buttonElement);
});

// } else ;
//   // target.removeEventListener("onkeyup", onKeyed());
// }

//   let next = target;
//   previous = null;
//   container.removeEventListener("onkeyup", onKeyed());
//   while ((next = next.previousElementSibling)) {
//     if (next == null) break;
//     if (next.tagName.toLowerCase() === "input") {
//       next.focus();
//       break;
//     }
//   }
// }

// container.onkeyup = function (e) {
//   let target = e.srcElement || e.target;
//   if (target.value === randomElement.charAt(0)) {
//     target.innerHTML = target.value;
//   }
// };
