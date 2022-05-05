import React from "react";

export default function LoginForm() {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });

  const onInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const { username, password } = formData;
    if (!username || !password) return;
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
        type="password"
        onChange={(e) => onInputChange(e)}
        placeholder="password"
        name="password"
      />
      <br />
      <button onClick={handleSubmit}>Login</button>
    </>
  );
}
