import "../scss/app.scss";
import "./form.js";
import "./bacon.js";

// const inputs = document.querySelectorAll("input");
// const checkoutContainer = document.querySelector(".checkout");

// const [
//   firstName,
//   lastName,
//   email,
//   postalCode,
//   phoneNumber,
//   creditCard,
//   securityCode,
//   expirationDate,
// ] = inputs;

// let isFormValid = false;
// let isValidationOn = false;

// if (checkoutContainer) {
//   firstName.isValid = () => !!firstName.value;
//   lastName.isValid = () => !!lastName.value;
//   email.isValid = () => regexChecker(email.value, isEmail);
//   postalCode.isValid = () => regexChecker(postalCode.value, isPostalCode);
//   phoneNumber.isValid = () => regexChecker(phoneNumber.value, isPhoneNumber);
//   creditCard.isValid = () => regexChecker(creditCard.value, isCreditCard);
//   securityCode.isValid = () => regexChecker(securityCode.value, isSecurityCode);
//   expirationDate.isValid = () =>
//     regexChecker(expirationDate.value, isExpirationDate);

//   const resetInputs = (input) => {
//     const formControl = input.parentElement;
//     const small = formControl.querySelector("small");
//     formControl.className = "form-control";
//     small.classList.add("hidden");
//   };

//   const invalidateInputs = (input) => {
//     const formControl = input.parentElement;
//     const small = formControl.querySelector("small");
//     formControl.className = "form-control error";
//     small.classList.remove("hidden");
//   };

//   const validateInputs = () => {
//     if (!isValidationOn) return;
//     isFormValid = true;

//     inputs.forEach((input) => {
//       resetInputs(input);

//       if (!input.isValid()) {
//         isFormValid = false;
//         invalidateInputs(input);
//       }
//     });
//   };

//   const regex = {
//     isEmail:
//       /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//     isPostalCode: /^[0-9]{5}$/,
//     isPhoneNumber: /^[0-9]{9}$/,
//     isCreditCard: /^[0-9]{16}$/,
//     isSecurityCode: /^[0-9]{3}$/,
//     isExpirationDate: /^[0-9]{2}\/[0-9]{2}$/,
//   };

//   const {
//     isEmail,
//     isPostalCode,
//     isPhoneNumber,
//     isCreditCard,
//     isSecurityCode,
//     isExpirationDate,
//   } = regex;

//   const regexChecker = (value, regex) => {
//     return regex.test(value);
//   };

//   const postData = (e) => {
//     const formData = new FormData(e.currentTarget);

//     fetch("/order", {
//       method: "post",
//       body: formData,
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw Error("Could not fetch the data for that resource");
//         } else {
//           return res.json();
//         }
//       })
//       .then((data) => {
//         if (data) {
//           console.log(data.message);
//         }
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   };

//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     isValidationOn = true;
//     validateInputs();

//     if (isFormValid) {
//       postData(e);
//     }
//   });

//   inputs.forEach((input) => {
//     input.addEventListener("input", () => {
//       validateInputs();
//     });
//   });
// }
