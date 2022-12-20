const form = document.getElementById('offer')

form.addEventListener('submit', function (event) {
  event.preventDefault()

  // const inputs = [...form.elements]
  // inputs.map((el) => console.log(el.name, el.value, el.checked))

  const name = document.getElementById('name')
  const agreement = document.getElementById('agreement')
  const agreement1 = document.getElementById('agreement1')
  const payment = document.querySelector('[name="payment"]:checked')

  console.log('name', name.value)
  console.log('agreement', agreement.checked)
  console.log('agreement1', agreement1.checked)
  console.log('payment', payment.value)
})