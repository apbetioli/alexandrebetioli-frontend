import React, {Component} from 'react';
import FacebookButton from 'react-facebook-login';

export default class FacebookLogin extends Component {
    state = {
        auth: false,
        name: '',
        email: '',
        picture: ''
    };

    componentClicked = () => console.log('Click');
    responseFacebook = response => {
        console.log(response);
        if (response.status !== 'unknown')
            this.setState({
                auth: true,
                name: response.name,
                picture: response.picture.data.url,
                email:response.email
            })
    }

    render(){
        let facebookData;

        this.state.auth ?
            facebookData = (
                <div>
                    <img src={this.state.picture} alt={this.state.name} />
                    <h2>Welcome {this.state.name}</h2>
                    <h2>{this.state.email}</h2>
                </div>
            ) :
            facebookData = (
                
                <FacebookButton
                    appId="769530983584123"
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook}
                    size="small" 
                    icon="fa-facebook"
                    textButton="Facebook"
    />
    
            );

        return (
            facebookData
        )

    }
}