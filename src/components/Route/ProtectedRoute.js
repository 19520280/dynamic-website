import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../../context/context";

export default function ProtectedRoute({
  component: Component,
  render,
  ...rest
}) {
  const { userData } = useContext(AuthContext);

  if (render) {
    return (
      <Route
        {...rest}
        render={(props) =>
          userData.isLoggedin ? render(props) : <Redirect to="/" />
        }
      />
    );
  }
  return (
    <Route
      {...rest}
      render={(props) =>
        userData.isLoggedin ? <Component {...rest} /> : <Redirect to="/" />
      }
    />
  );
}
