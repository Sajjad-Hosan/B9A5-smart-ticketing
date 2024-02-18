function ticketDetails(seatName, elementid) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${seatName}</td>
    <td>Economoy</td>
    <td>550</td>
    `;
  document.getElementById(elementid).append(tr);
}

function ticketCalculationCenter() {
  const totalSeatBook = seatBookName.length;
  const seatPrice = 550;

  // calculation center
  const totalSeatBookPrice = seatPrice * totalSeatBook;

  totalPriceCount.textContent = totalSeatBookPrice;
  cuponActive(totalSeatBook, totalSeatBookPrice);
}
function cuponActive(array, total) {
  if (array == 4) {
    cuponCodeInput.removeAttribute("disabled");
    cuponSuccess.addEventListener("click", () => {
      if (cuponCodeInput.value === "NEW15") {
        const tenPerDiscount = total * 0.1;
        discountBox.classList.remove("hidden");
        discountBox.classList.add("visible");
        cuponArea.classList.add("hidden");
        totalDisPriceCount.textContent = tenPerDiscount;
        grandTotalPrice.textContent = total - tenPerDiscount;
      } else if (cuponCodeInput.value === "Couple 20") {
        const twintyPerDiscount = total * 0.2;
        discountBox.classList.remove("hidden");
        discountBox.classList.add("visible");
        cuponArea.classList.add("hidden");
        totalDisPriceCount.textContent = twintyPerDiscount;
        grandTotalPrice.textContent = total - twintyPerDiscount;
      }else{
        alert('Please Inside Valid Cupon Code')
      }
    });
  }
};

function submitCenter(array){
  ticketBuyerMobile.addEventListener('input',() => {
    // console.log(ticketBuyerMobile.value);
    if(array < 1 && ticketBuyerMobile.value !== ''){
        submitButton.removeAttribute('disabled');
    }else{
      console.log('try again');
    }
  })
};