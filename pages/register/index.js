import React from "react";

export default function RegisterForm() {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
    fullName: "",
    email: "",
    confirmPassword: "",
  });

  const onInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const { username, password, confirmPassword, email, fullName } = formData;
    if (!username || !password || !confirmPassword || !email || !fullName)
      return;
    console.log(formData);
  };

  return (
    <>
      <h1>LoginForm</h1>
      <input
        type="text"
        onChange={(e) => onInputChange(e)}
        placeholder="username"
        name="username"
      />
      <br />
      <input
        type="text"
        onChange={(e) => onInputChange(e)}
        placeholder="Full name"
        name="fullName"
      />
      <br />
      <input
        type="email"
        onChange={(e) => onInputChange(e)}
        placeholder="Email"
        name="email"
      />
      <br />
      <input
        type="password"
        onChange={(e) => onInputChange(e)}
        placeholder="Password"
        name="password"
      />
      <br />
      <input
        type="password"
        onChange={(e) => onInputChange(e)}
        placeholder="Confirm password"
        name="confirmPassword"
      />
      <br />

      <button onClick={handleSubmit}>Login</button>
    </>
  );
}
