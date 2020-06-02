import React, {Component} from 'react';
import FacebookButton from 'react-facebook-login';

export default class FacebookLogin extends Component {

    responseFacebook = response => {
        console.log(response);
        if (response.status !== 'unknown')
            localStorage.setItem('userLogged', JSON.stringify({ auth: true, name: response.name, picture: response.picture.data.url, email:response.email }));
            
        window.location.reload();
    }

    render(){
        let facebookData;
        const user = JSON.parse(localStorage.getItem('userLogged'));

        user && user.auth ?
            facebookData = (
                <div>
                    <img src={user.picture} alt={user.name} />
                    <h2>Welcome {user.name}</h2>
                    <h2>{user.email}</h2>
                </div>
            ) :
            facebookData = (
                
                <FacebookButton
                    appId="769530983584123"
                    fields="name,email,picture"
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