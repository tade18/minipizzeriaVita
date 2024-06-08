import "./Location.css";
import { Link } from 'react-router-dom';

export default function Location() {
    return(
        <>
            <div className="location-wrap">
                <div className="location-leftIMG"></div>
                <div className="location-rightAdress">
                    <div className="location-rightAdress-text">
                        <h1 className="location-h1">Navštivte nás!</h1>
                        <p className="location-p">Laurinova 1268</p>
                        <p className="location-p">Mladá Boleslav</p>
                        <Link to={"/pizza"}><button className='location-button' role="button">Zjistit víc</button></Link>
                    </div>
                    
                    
                </div>
            </div>
        </>
    )
}