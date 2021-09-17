import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { TextInput, Button, Form, Link } from "carbon-components-react";
import "./register.scss";

const Register = () => {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push("/"), [history]);

  return (
    <Form id="registerform">
      <div className="bx--grid">
        <div className="bx--row">
          <div>
            <h1 id="h1">Create New User </h1>
            {/* <label></label>
            <input></input> */}
            <TextInput
              id="username"
              invalidText="A valid username is required"
              labelText="User Name:"
              placeholder="Enter User Name"
              type="text"
            />
            <TextInput
              id="email"
              invalidText="A valid username is required"
              labelText="Email:"
              placeholder="Enter valid email address"
            />
            <TextInput.PasswordInput
              id="password"
              hidePasswordLabel="Hide password"
              invalidText="A valid password is required"
              labelText="New Password: "
              required
              placeholder="Enter Password"
              showPasswordLabel="Show password"
            />
            <TextInput.PasswordInput
              id="password"
              hidePasswordLabel="Hide password"
              invalidText="A valid password is required"
              labelText="Confirm New Password: "
              required
              placeholder="Enter Password"
              showPasswordLabel="Show password"
            />
            <div className="bx--grid">
              <Button
                size="default"
                kind="primary"
                type="submit"
                id="button-register"
              >
                Create New User
              </Button>
              <Link id="link" onClick={handleOnClick}>
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default Register;
