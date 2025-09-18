let passengerCount = 1;

const passengerCountElem = document.getElementById('passengerCount');
const incBtn = document.getElementById('incPassenger');
const decBtn = document.getElementById('decPassenger');
const searchBtn = document.getElementById('searchBtn');

incBtn.onclick = () => {
  passengerCount++;
  passengerCountElem.textContent = passengerCount;
};

decBtn.onclick = () => {
  if (passengerCount > 1) {
    passengerCount--;
    passengerCountElem.textContent = passengerCount;
  }
};

searchBtn.onclick = () => {
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const date = document.getElementById('date').value;

  if (!from || !to || !date) {
    alert('Please fill all fields!');
    return;
  }

  alert(Searching rides from from to{to} on date for{passengerCount} passenger(s).);
};
