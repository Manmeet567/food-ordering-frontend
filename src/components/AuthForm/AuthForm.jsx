import {useEffect} from "react";
import Footer from "../Footer/Footer";
import "./AuthForm.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


const AuthForm = ({ inputs, handleSubmit, buttonText, loading, error }) => {
  useEffect(() => {
    if(error){
      toast.error(error)
    }
  }, [error])
  return (
    <div className="auth-form">
      <div className="af-container">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <img src={logo} alt="logo" />
            <div className="form-container">
              <p>Welcome {buttonText == "Continue" ? "👋" : "Back 👋"}</p>
              <p>
                Today is a new day. It's your day. You shape it. Sign in to
                start ordering.
              </p>
              {inputs.map((input) => (
                <div key={input.name} className="input-group">
                  <label htmlFor={input.name}>{input.label}</label>
                  <input
                    type={input.type}
                    name={input.name}
                    value={input.value}
                    placeholder={input.placeholder}
                    onChange={input.onChange}
                    required
                  />
                </div>
              ))}
            </div>
            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : buttonText}
            </button>
            {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
            <p className="create-account-link">
              {buttonText == "Continue" ? "Already have an account? " : "Don't you have an account? "}
              {buttonText == "Continue" ? (
                <Link to="/login">Sign in</Link>
              ) : (
                <Link to="/signup">Sign up</Link>
              )}
            </p>
          </form>
        </div>
        <div className="auth-bg"></div>
      </div>

      <Footer />
    </div>
  );
};

export default AuthForm;
