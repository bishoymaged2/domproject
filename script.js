// Select elements
const qtyBtns = document.querySelectorAll('.qty-btn');
const deleteBtns = document.querySelectorAll('.delete-btn');
const likeBtns = document.querySelectorAll('.like-btn');
const totalEl = document.querySelector('#total span');

// Update quantity and total price
function updateQuantity() {
  const row = this.closest('tr');
  const qtyEl = row.querySelector('.qty');
  const qty = parseInt(qtyEl.textContent);
  const price = parseInt(row.querySelector('td:nth-of-type(2)').textContent.slice(1));
  const totalEl = row.querySelector('td:nth-of-type(4)');
  const total = qty * price;
  totalEl.textContent = '$' + total;
  updateTotalPrice();
}

// Update total price
function updateTotalPrice() {
  const rows = document.querySelectorAll('tbody tr');
  let total = 0;
  rows.forEach(row => {
    const qty = parseInt(row.querySelector('.qty').textContent);
    const price = parseInt(row.querySelector('td:nth-of-type(2)').textContent.slice(1));
    total += qty * price;
  });
  totalEl.textContent = '$' + total;
}

// Delete row
function deleteRow() {
  const row = this.closest('tr');
  row
}
