import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {

        if(isSignedIn) {
            return (
            <div style={{textAlign:'right'}}>
            <p className='f3 link underline pa3 pointer dim black' onClick={() => onRouteChange('signin')}>Sign Out</p>
            </div>
            )
        }

        else {
            return (
                <div style={{display: 'flex', textAlign:'right', justifyContent: 'flex-end'}}>
                    <p className='f3 link underline pa3 pointer dim black' onClick={() => onRouteChange('signin')}>Sign In</p>
                    <p className='f3 link underline pa3 pointer dim black' onClick={() => onRouteChange('register')}>Register</p>
                </div>
                )
        }        
}

export default Navigation;