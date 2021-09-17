import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { TextInput, Button, Form, Checkbox ,PasswordInput} from "carbon-components-react";
import "./login.scss";

const Login = () => {
  const history = useHistory();
  const handleOnClick = useCallback(
    () => history.push("/register/user"),
    [history]
  );

  return (
    <Form id="loginform">
      <div className="bx--grid">
        <div className="bx--row">
          <div>
            <h1 id="h1">Welcome to HR System </h1>
            <TextInput
              id="username"
              data-testid="username"
              invalidText="A valid username is required"
              labelText="User Name:"
              placeholder="Enter User Name"
            />
            <PasswordInput
              id="password"
              hidePasswordLabel="Hide password"
              invalidText="A valid password is required"
              labelText="Password: "
              required
              placeholder="Enter Password"
              showPasswordLabel="Show password"
            />
            <div>
              <Checkbox defaultChecked labelText="Remember me" id="checked" />
              <Button
                size="field"
                kind="primary"
                type="submit"
                id="button-logout"
              >
                Login
              </Button>
              <Button
                size="field"
                kind="secondary"
                type="submit"
                id="button-register"
                onClick={handleOnClick}
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default Login;
