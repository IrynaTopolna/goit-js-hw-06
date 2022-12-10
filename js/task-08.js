{
  /* <form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>; */
}

const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onLoginSubmit);

function onLoginSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  const data = {
    Login: email.value,
    Password: password.value,
  };

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  } else console.log(data);

  event.currentTarget.reset();
}
