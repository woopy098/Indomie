import React from "react";

const Layout = ({ children }) => {
  return (
    <article>
      <center>
        <form className="form">
          <div className="form-control">
            <label htmlFor="username">
              Username:
              <br />{" "}
            </label>
            <input
              style={{
                width: 300,
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 25,
                marginBottom: 25,
              }}
              type="text"
              id="username"
              name="username"
              placeholder="Enter Your Username..."
            />
          </div>

          <div className="form-control">
            <label htmlFor="password">
              Password: <br />
            </label>
            <input
              style={{
                width: 300,
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 25,
                marginBottom: 25,
              }}
              type="password"
              id="password"
              placeholder="Enter Your Password..."
            />
          </div>

          <div></div>
        </form>
      </center>
    </article>
  );
};

export default Layout;
