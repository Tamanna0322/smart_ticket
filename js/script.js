function ticketSection() {
   const mainSection = document.getElementById('main-section');
   mainSection.scrollIntoView({ behavior: 'smooth' });

}

function setInnerText(id, value) {
   document.getElementById(id).innerText = value;
}

let count = 0
const button = document.getElementsByClassName('btn-class');
for (const btn of button) {
   btn.addEventListener('click', function clickHandler(event) {
      count += 1;

      btn.style.backgroundColor = 'green';
      btn.style.color = 'white';
      btn.classList.add('text-white');

      btn.disabled = true;

      const btnTxt = btn.innerText;
      const cntIncrease = document.getElementById('cnt-increase');
      cntIncrease.innerText = count;

      const remainSeatId = document.getElementById('remain-seat');
      const remain = remainSeatId.innerText;
      const remainSeat = parseInt(remain);
      remainSeatId.innerText = remainSeat - 1;

      const ecoClass = document.getElementById('eco-class');
      const li = document.createElement('li');
      const p1 = document.createElement('p');
      p1.innerText = btnTxt;
      const p2 = document.createElement('p');
      p2.innerText = 'Economy';
      const p3 = document.createElement('p');
      p3.innerText = 550;
      li.appendChild(p1);
      li.appendChild(p2);
      li.appendChild(p3);
      ecoClass.appendChild(li);

      const totalCost = document.getElementById('total-cost');
      const totalCostNum = parseInt(totalCost.innerText);
      const total = totalCostNum + 550;
      // totalCost.innerText = total;
      setInnerText('total-cost', total);

      const grandTotalInp = document.getElementById('grand-total');
      // grandTotalInp.innerText = total;
      setInnerText('grand-total', total);


      if (count <= 4) {
         if (count === 4) {
            for (const btn of button) {
               btn.removeEventListener('click', clickHandler);
               btn.disabled = true;
               const applyCoupon = document.getElementById('apply-coupon');
               const coupon = document.getElementById('coupon-input');
               coupon.addEventListener('input', function () {
                  const couponVal = coupon.value;
                  if (couponVal === 'Couple 20' || couponVal === 'NEW15') {
                     applyCoupon.disabled = false;
                     applyCoupon.addEventListener('click', function () {
                        const discount = apply(couponVal, totalCost.innerText);
                        // console.log(discount);
                        grandTotal(discount);

                     })

                  }
                  else {
                     applyCoupon.disabled = true;
                  }
               })

            }
            alert('You cant select more than 4 seats');
         }
      }




      const nextBtn = document.getElementById('next-btn');


   })

}

function grandTotal(afterDiscount) {

   const grandTotalInp = document.getElementById('grand-total');

   grandTotalInp.innerText = afterDiscount;


}
function apply(coupon, value) {

   if (coupon === 'Couple 20') {
      const price = value * 20 / 100;
      const discount = value - price;
      return discount;
   }
   if(coupon === 'NEW15'){
      const price = value * 15 / 100;
      const discount = value - price;
      return discount;
   }


}



