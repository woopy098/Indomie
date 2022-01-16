import React from 'react';


const Layout = ({ children }) => {
    return (
        <article>
        <center>
        <form classname='form'>
            <div classname='form-control'>
                <label htmlfor='username'>Username:<br /> </label>
                <input 
                style={{width: 300 , borderColor: 'black', borderWidth: 1, borderRadius: 25 , marginBottom: 25}}
                type='text' 
                id='username' 
                name='username'
                placeholder="Enter Your Username..."
                />
            </div>

            <div classname='form-control'>
                <label htmlfor='password'>Password: <br /></label>
                <input 
                style={{width: 300 , borderColor: 'black', borderWidth: 1, borderRadius: 25 , marginBottom: 25}}
                type='password' 
                id='password' 
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
