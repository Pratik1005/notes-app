import "./Auth.css";
import {toast} from "react-toastify";
import axios from "axios";
import {useState} from "react";
import {useAuth, useNotes} from "../../context";
import {useNavigate, useLocation, Link} from "react-router-dom";
import {getNotes} from "../../services";

const Login = () => {
  const {setAuth} = useAuth();
  const {notesDispatch} = useNotes();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleEmail = (e) => {
    setLoginData((prev) => ({...prev, email: e.target.value}));
  };

  const handlePassword = (e) => {
    setLoginData((prev) => ({...prev, password: e.target.value}));
  };

  const handleShowPassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleLogin = async (e, email, password) => {
    e.preventDefault();
    setLoginData({email, password});
    try {
      const response = await axios.post("/api/auth/login", {email, password});
      localStorage.setItem("userData", JSON.stringify(response.data.foundUser));
      localStorage.setItem("token", response.data.encodedToken);
      setAuth({token: response.data.encodedToken, isLoggedIn: true});
      getNotes(response.data.encodedToken, notesDispatch);
      toast.success("You have logged in");
      navigate(from, {replace: true});
    } catch (err) {
      toast.error("Login failed");
      console.error("login", err);
    }
  };
  return (
    <section className="auth-form-ctn">
      <form
        className="br-md auth-form"
        onSubmit={(e) => handleLogin(e, loginData.email, loginData.password)}
      >
        <h2 className="text-center mg-bottom-md">Login</h2>
        <div className="form-control">
          <label htmlFor="email" className="fw-bold">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@gmail.com"
            autoComplete="off"
            required
            className="input-field"
            value={loginData.email}
            onChange={(e) => handleEmail(e)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password" className="fw-bold">
            Password
          </label>
          <input
            type={isPasswordVisible ? "text" : "password"}
            name="password"
            id="password"
            required
            className="input-field"
            value={loginData.password}
            placeholder="&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;"
            onChange={(e) => handlePassword(e)}
          />
          <span
            className="hide-password cursor-pointer"
            onClick={handleShowPassword}
          >
            {isPasswordVisible ? (
              <span className="material-icons">visibility_off</span>
            ) : (
              <span className="material-icons">visibility</span>
            )}
          </span>
        </div>
        <div className="form-control">
          <input type="checkbox" id="remember-me" name="checkbox" />
          <label htmlFor="remember-me" className="fw-bold">
            Remember me{" "}
          </label>
        </div>
        <div className="form-control">
          <button className="btn btn-primary">Login</button>
        </div>
        <div className="form-control">
          <button
            className="btn btn-primary-outline"
            onClick={(e) =>
              handleLogin(e, "pratikdevle@gmail.com", "pratik@123")
            }
          >
            Login with test credentials
          </button>
        </div>
        <div className="account-toggle fw-bold">
          <Link to="/signup">
            Create New Account{" "}
            <span className="material-icons fw-bold">chevron_right</span>
          </Link>
        </div>
      </form>
    </section>
  );
};

export {Login};
