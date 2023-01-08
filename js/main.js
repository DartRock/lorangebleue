// console.log('zalupa');

const form = document.querySelector(".form")
const success = document.querySelector(".success")
const error = document.querySelector(".error")
const conditionsLink = document.querySelector(".conditions-link")

// const clickHandler = e => {

// }

// conditionsLink.addEventListener("click", clickHandler)


  const inputHandler = e => {
    console.log(e);
  } 

const submitHandler = e => {
    e.preventDefault();

    error.classList.add('error-hidden')
    success.classList.add('success-hidden')

    const {
        elements: {firstName, lastName, email, phone},
    } = e.currentTarget;

    if (firstName.value === '' || lastName.value === '' || email.value === '' || phone.value === '') {
        return  error.classList.remove('error-hidden')
        
        
    }

    success.classList.remove('success-hidden')

    // console.log(`${firstName.value},${lastName.value},${email.value},${phone.value},`);

    let user = {
        firstName: `${firstName.value}`,
        lastName: `${lastName.value}`,
        phone: `${email.value}`,
        email: `${phone.value}`,
      };

    const options = {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      };
      
      fetch("https://63badc0932d17a50907f94d7.mockapi.io/users", options)
        .then(response => response.json())
        .then(post => console.log(post))
        .catch(error => console.log(error));

    firstName.value = '';
    lastName.value = '';
    email.value = '';
    phone.value = '';
}

form.addEventListener("submit", submitHandler)









  

