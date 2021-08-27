// Event for movie Select
const movieSelect = document.querySelector("#movie");
let ticketPrice = parseInt(movieSelect.value);
movieSelect.addEventListener("change", (e) => {
  ticketPrice = parseInt(e.target.value);
  updateCountAndTotal();

  getMovieData(e.target.selectedIndex, e.target.value);
});

// Event for seat click
const container = document.querySelector(".container");
container.addEventListener("click", (e) => {
  const target = e.target.classList;
  if (target.contains("seat") && !target.contains("occupied")) {
    target.toggle("selected");
  }

  updateCountAndTotal();
});

function getMovieData(movieIndex, moviePrice) {
  localStorage.setItem("MovieIndex", JSON.stringify(movieIndex));
  localStorage.setItem("MoviePrice", moviePrice);
}

function updateCountAndTotal() {
  const movieCount = document.querySelector(".count");
  const total = document.querySelector("#total");
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const seatCount = selectedSeats.length;
  const totalPrice = seatCount * ticketPrice;
  movieCount.innerHTML = seatCount;
  total.innerHTML = totalPrice;

  // function for the seat index
  const seats = document.querySelectorAll(".container .seat");
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  // set seat index to the locale storage
  localStorage.setItem("SeatIndex", JSON.stringify(seatsIndex));
}
