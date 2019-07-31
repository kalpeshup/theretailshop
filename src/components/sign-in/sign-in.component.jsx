import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({email: '', password: ''});
    }

    handleChange(e) {
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

                    <CustomButton type="submit">SIGN IN</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;