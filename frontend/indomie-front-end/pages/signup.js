import React from 'react';


const Layout = ({ children }) => {
    return (
        <article>
        <center>
        <label>Sign Up:</label>
        <form classname='form'>
            <div classname='form-control'>
                <label htmlfor='fname'>First Name: <br /></label>
                <input 
                style={{width: 300 , borderColor: 'black' , borderWidth: 1 , borderRadius: 25 , marginBottom: 25}}
                type='text' 
                placeholder="Enter Your First Name..."
                id='fname' 
                name='fname'
                align='right'
                />
            </div>
            
            <div classname='form-control'>
                <label htmlfor='lname'>Last Name: <br /></label>
                <input 
                style={{width: 300 , borderColor: 'black' , borderWidth: 1 , borderRadius: 25 , marginBottom: 25}}
                type='text' 
                placeholder="Enter Your Last Name..."
                id='lname' 
                name='lname'
                align='right'
                />
            </div>

            <div classname='form-control'>
                <label htmlfor='email'>Email: <br /></label>
                <input 
                style={{width: 300 , borderColor: 'black' , borderWidth: 1 , borderRadius: 25 , marginBottom: 25}}
                type='email' 
                placeholder="Enter Your Email..."
                id='email' 
                name='email'
                align='right'
                />
            </div>

            <div classname='form-control'>
                <label htmlfor='username'>Username: <br /></label>
                <input 
                style={{width: 300 , borderColor: 'black', borderWidth: 1, borderRadius: 25 , marginBottom: 25}}
                type='text' 
                placeholder="Enter Your Desired Username..."
                id='createusername' 
                name='createusername'
                align='right'
                />
            </div>

            <div classname='form-control'>
                <label htmlfor='createpassword'>Password: <br /></label>
                <input
                style={{width: 300 , borderColor: 'black', borderWidth: 1, borderRadius: 25 , marginBottom: 25}} 
                type='password' 
                placeholder="Enter Your Desired Password..."
                id='createpassword'
                name='createpassword' 
                align='right'
                />
            </div>

            <div classname='form-control'>
                <label htmlfor='confirmpassword'>Confirm Your Password:<br /> </label>
                <input 
                style={{width: 300 , borderColor: 'black', borderWidth: 1, borderRadius: 25 , marginBottom: 25}}
                type='password' 
                placeholder="Confirm Your Password..."
                id='confirmpassword'
                name='confirmpassword' 
                />
                
            </div>

            <div></div>
        </form>
        </center>
    </article>
    );
  };

export default Layout;
