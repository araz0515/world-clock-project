function setDate() {
  //Los Angeles
  let losAngelesDateElement = document.querySelector("#los-angeles .date");
  losAngelesDateElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("MMMM Do YYYY");

  let losAngelesTimeElement = document.querySelector("#los-angeles .time");
  losAngelesTimeElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("h:mm:ss [<small>]A [</small>]");

  //Toronto
  let torontoDateElement = document.querySelector("#toronto .date");
  torontoDateElement.innerHTML = moment()
    .tz("America/Toronto")
    .format("MMMM Do YYYY");

  let torontoTimeElement = document.querySelector("#toronto .time");
  torontoTimeElement.innerHTML = moment()
    .tz("America/Toronto")
    .format("h:mm:ss [<small>]A[</small>]");

  //Paris
  let parisDateElement = document.querySelector("#paris .date");
  parisDateElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("MMMM Do YYYY");

  let parisTimeElement = document.querySelector("#paris .time");
  parisTimeElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("h:mm:ss [<small>]A [</small>]");
}
setDate();
setInterval(setDate, 1000);

function updateCity(event) {
  let cityTimezone = event.target.value;
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);

  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }

  if (cityTimezone.length > 0) {
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
   <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A [</small>]"
          )}</div>
        </div>`;
  }
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
