let count = 0;
const countWallpaper = (price) => {
  count++;
  const cart = (document.getElementById("total-product").innerText = count);
  updatePrice(price);
  total();
};
const removePaper = (price) => {
  if (count > 0) {
    count = count - 1;
    const cart = (document.getElementById("total-product").innerText = count);
    const oldPrice = parseFloat(document.getElementById("price").innerText);
    const newPrice = oldPrice - price;
    if (newPrice < 0) {
      newPrice = 0;
    }
    document.getElementById("price").innerText = newPrice.toFixed(2);
    deliveryCharge(newPrice);
  }
};

const updatePrice = (price) => {
  const oldPrice = parseFloat(document.getElementById("price").innerText);
  const newPrice = oldPrice + price;
  document.getElementById("price").innerText = newPrice.toFixed(2);
  deliveryCharge(newPrice);
};
const deliveryCharge = (price) => {
  let charge = 0;
  if (price < 500) {
    charge = 0;
  } else if (price >= 500 && price < 800) {
    charge = 100;
  } else if (price >= 800 && price < 1000) {
    charge = 150;
  } else {
    charge = 200;
  }
  document.getElementById("delivery-charge").innerText = charge;
  document.getElementById("shipping-charge").innerText = charge;
  subtotal = price + charge + charge;
  document.getElementById("subtotal").innerText = subtotal.toFixed(2);
  tax(subtotal);
};
const tax = (subtotal) => {
  const tax = subtotal * 0.15;
  document.getElementById("tax").innerText = tax.toFixed(2);
  subtotal += tax;
  total(subtotal);
};
const total = (total) => {
  document.getElementById("total-price").innerText = total.toFixed(2);
  const discount = total * 0.05;
  document.getElementById("dis-price").innerText = discount.toFixed(2);
  const finalPrice = total - discount;
  document.getElementById("final-price").innerText = finalPrice.toFixed(2);
};

const greetings = () => {
  const totalPrice = parseFloat(
    document.getElementById("final-price").innerText
  );
  if (totalPrice == 0) {
    swal("Please add some wallpapers at cart", "", "error");
  } else {
    swal(
      "Thanks for your Order",
      "Your total price is: " + totalPrice,
      "success"
    );
    count = 0;
    document.getElementById("total-product").innerText = count;
    document.getElementById("price").innerText = 0;
    document.getElementById("delivery-charge").innerText = 0;
    document.getElementById("shipping-charge").innerText = 0;
    document.getElementById("subtotal").innerText = 0;
    document.getElementById("tax").innerText = 0;
    document.getElementById("total-price").innerText = 0;
    document.getElementById("dis-price").innerText = 0;
    document.getElementById("final-price").innerText = 0;
  }
};
