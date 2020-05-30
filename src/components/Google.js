import React, {Component} from 'react';
import GoogleButton from 'react-google-login';

export default class GoogleLogin extends Component {
    state = {
        auth: false,
        name: '',
        email: '',
        picture: ''
    };

    responseGoogle = response => {
        console.log(response);
        
       // if (response.status !== 'unknown')
            this.setState({
                auth: true,
                name: response.profileObj.name,
                picture: response.profileObj.imageUrl,
                email:response.profileObj.email
            })
    }

    render(){
        let googleData;

        this.state.auth ?
            googleData = (
                <div>
                    <img src={this.state.picture} alt={this.state.name} />
                    <h2>Welcome {this.state.name}</h2>
                    <h2>{this.state.email}</h2>
                </div>
            ) :
            googleData = (
                <GoogleButton
                    clientId="577338734591-e5pq9393qrhpepfu3i2tn0p1tsqaehtd.apps.googleusercontent.com"
                    buttonText="GOOGLE"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    //isSignedIn={true}
                    />
            );

        return (
            googleData
        )

    }
}