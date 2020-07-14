let numberId = document.getElementById("inputNumber");
let factText = document.getElementById("factText");
let fact = document.getElementById("factNum");
let factByNum = document.getElementById("factByNum");

let factByDate = document.getElementById("factByDate");
let factDate = document.getElementById("factDate");
let inputDate = document.getElementById("inputDate");
let factTextDate = document.getElementById("factTextDate");

let factByYear = document.getElementById("factByYear");
let factYear = document.getElementById("factYear");
let inputYear = document.getElementById("inputYear");
let factTextYear = document.getElementById("factTextYear");

radio1 = document
  .getElementById("inlineRadio1")
  .addEventListener("click", generateNumberFact);
radio2 = document
  .getElementById("inlineRadio2")
  .addEventListener("click", generateDateFact);
radio3 = document
  .getElementById("inlineRadio3")
  .addEventListener("click", generateYearFact);

function generateNumberFact() {
  console.log("Number radio selected..");
  factByDate.style.display = "none";
  factByYear.style.display = "none";
  factByNum.style.display = "block";

  numberId.addEventListener("input", generateFact);

  function generateFact() {
    num = numberId.value;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://numbersapi.com/" + num, true);

    xhr.onload = function () {
      if (this.status == 200 && num != "") {
        //console.log('connection success...');
        factText.innerHTML = this.responseText;
        fact.style.display = "block";
      }
    };
    xhr.send();
  }
}
function generateDateFact() {
  console.log("Date radio selected..");
  factByNum.style.display = "none";
  factByYear.style.display = "none";
  factByDate.style.display = "block";

  inputDate.addEventListener("input", generateFactByDate);

  function generateFactByDate() {
    dt = inputDate.value;
    // console.log(dt);
    console.log(
      "http://numbersapi.com/" + dt[5] + dt[6] + "/" + dt[8] + dt[9] + "/date"
    );

    var xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "http://numbersapi.com/" + dt[5] + dt[6] + "/" + dt[8] + dt[9] + "/date",
      true
    );

    xhr.onload = function () {
      if (this.status == 200) {
        //console.log(this.responseText);
        factDate.style.display = "block";
        factTextDate.innerHTML = this.responseText;
      }
    };
    xhr.send();
  }
}

function generateYearFact() {
  console.log("Year radio selected..");
  factByNum.style.display = "none";
  factByDate.style.display = "none";
  factByYear.style.display = "block";

  inputYear.addEventListener("input", generateFactByYear);

  function generateFactByYear() {
    yr = inputYear.value;
    // console.log(dt);
    //console.log('http://numbersapi.com/'+dt[5]+dt[6]+'/'+dt[8]+dt[9]+'/'+'/date');

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://numbersapi.com/" + yr + "/year", true);

    xhr.onload = function () {
      if (this.status == 200) {
        console.log(this.responseText);
        factYear.style.display = "block";
        factTextYear.innerHTML = this.responseText;
      }
    };
    xhr.send();
  }
}
