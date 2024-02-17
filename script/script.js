const seats = document.querySelectorAll("#seats");
const seatBook = [];
for (const seat of seats) {
  seat.addEventListener("click", (e) => {
    let book = false;
    const seatName = seat.textContent;
    seat.classList.add("bg-green-500", "text-white");
    for (const seatStore of seatBook) {
      if (seatStore === seatName) {
        book = true;
        console.log("This seat Is store");
      }
    }
    if (!book) {
        seatBook.push(seatName);
    }
console.log(seatBook.length);
  });
  // seat.classList.add('text-white');
}