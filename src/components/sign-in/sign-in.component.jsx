import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, signInWithGoogle} from '../../firebase/firebase-utils.js';

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
        }catch(error) {
            console.log("error in siging in with email and password");
        }
        this.setState({email: '', password: ''});
    }

    handleChange = (e) => {
        const {name, value} = e.target;

        this.setState(
            {
                ...this.state,
                [name] : value
            }
        )
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email}
                        label="Email"
                        handleChange={this.handleChange}
                    />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password}
                        label="Password"
                        handleChange={this.handleChange}
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;