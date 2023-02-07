const Header : React.FC<{ responseStatus : number }> = ({ responseStatus }) => {

    const setResponseMessage = (response : number) => {
        let message : string = '';
        switch(response) {
            case 200:
                message = "Server response coolios!";
                break;
            case 404:
                message = "404 - These are not the droids you are looking for"; 
                break;
            case 418:
                message ="418 I'm a tea pot, silly";
                break;
            case 500:
                message = "Oops... something went wrong, try again :(";
                break;
            default:
                message = "Something has occurred. Perhaps we should look into it...";
        }
        return message;
    }

    return (
        <header className="header-container">
            <h1 className="header__h1">Star Wars Peeps</h1>
            <h3 className="header__response-status">{setResponseMessage(responseStatus)}</h3>
        </header>
    )
}

export default Header;