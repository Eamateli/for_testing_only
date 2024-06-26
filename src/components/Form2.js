
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function Form2() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    if (!firstName) return false;
    if (!validateEmail(email)) return false;
    if (password.value.length < 8) return false;
    if (role !== "individual" && role !== "business") return false
    return true;
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({ value: "", isTouched: false });
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (getIsFormValid()) {
          alert("Account created!");
          clearForm();
    }

  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
         <fieldset style={{ borderRadius: "10px", padding: "20px" }}>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

          </div>
          <div className="Field">
            <label>Last name</label>
            <input placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
          <input placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />

          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input type="password" placeholder="Password" value={password.value} onChange={(e) => setPassword({value: e.target.value, isTouched: true})}    />
          {password.isTouched && password.value.length < 8 && <PasswordErrorMessage />}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select  value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Form2;
