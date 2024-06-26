const Navigation = ({onRouteChange, isSignedIn}) => {
    if(isSignedIn) {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end', position: "relative" }}>
                <p 
                    onClick={() => onRouteChange('signout')}
                    className='f3 link dim black underline pointer pa3'>
                    Sign Out
                </p>
            </nav>
        );
    } else {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end', position: "relative" }}>
                <p 
                    onClick={() => onRouteChange('signin')}
                    className='f3 link dim black underline pointer pa3'>
                    Sign In
                </p>
                <p 
                    onClick={() => onRouteChange('register')}
                    className='f3 link dim black underline pointer pa3'>
                    Register
                </p>
            </nav>
        );
    
    }
}

export default Navigation;