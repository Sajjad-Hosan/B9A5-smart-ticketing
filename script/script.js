const seats = document.querySelectorAll("#seats");
const allSection = document.querySelectorAll("#asd");
let totalSeatAbilable = document.getElementById('totalSeat');
const totalSeatCount = document.getElementById('seatCount');
const totalPriceCount = document.getElementById('totalPrice');
const totalDisPriceCount = document.getElementById('totalDisPrice');
const cuponCodeInput = document.getElementById('cuponCode');
const cuponSuccess = document.getElementById('cuponSuccess');
const ticketBuyerName = document.getElementById('user-name');
const ticketBuyerMobile = document.getElementById('user-mobile');
const ticketBuyerEmail = document.getElementById('user-email');
const submitButton = document.getElementById('submit');
const discountBox = document.getElementById('discount');
const grandTotalPrice = document.getElementById('grandPrice');
const ticketShowName = document.getElementById('ticketShowName');
const cuponArea = document.getElementById('cuponArea');
const successArea = document.getElementById('successArea');

console.log(totalSeatAbilable.textContent);
const seatBookName = [];

for (const seat of seats) {
  seat.addEventListener("click", (e) => {
    let book = false;
    const seatBookNameLength = seatBookName.length;
    const seatName = seat.textContent;
    let seatAbl = totalSeatAbilable.textContent;
    if(seatBookNameLength < 4){
      seat.classList.remove("bg-[#d0ebeb]", "text-black");
      seat.classList.add("bg-green-500", "text-white");
    }else{
      console.log('you can only');
    }
    for (const seatStore of seatBookName) {
      if (seatStore === seatName) {
        book = true;
        console.log("This seat Is store");
      }
    }
    if (!book && seatBookNameLength < 4){
      seatBookName.push(seatName);
      // showing seat book value
      totalSeatCount.textContent = seatBookName.length;
      // minusing seat what left after book
      const leftSeat = seatAbl - 1;
      totalSeatAbilable.textContent = leftSeat;
      // showing which seat ar book
      ticketDetails(seatName,'ticketShowName');
      // calculating seat price
      ticketCalculationCenter();
    }
    submitCenter(seatBookNameLength);
  });
}

submitButton.addEventListener('click',() => {
  successArea.classList.remove('hidden');
  for(const section of allSection){
    section.classList.add('hidden');
  }
})