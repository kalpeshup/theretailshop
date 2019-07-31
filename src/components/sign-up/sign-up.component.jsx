import React from 'react';

import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase-utils';


class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword:''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});

            this.setState(
                {
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword:''
                }
            )
        }catch (error) {
            console.log("error signing up user with email and password");
        }
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
        const {displayName, email, password, confirmPassword} = this.state;

        return (

            <div className="sign-up">
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="displayName" 
                        type="text" 
                        value={displayName}
                        label="Display Name"
                        handleChange={this.handleChange}
                    />
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={email}
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
                    <FormInput 
                        name="confirmPassword" 
                        type="password" 
                        value={confirmPassword}
                        label="Confirm Password"
                        handleChange={this.handleChange}
                        required
                    />

                    <div className="buttons">
                        <CustomButton type="submit">SIGN UP</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;