import { Link } from 'react-router-dom';
import "./DeliveryPoster.css";

export default function DeliveryPoster(){
    return(
        <div className="deliveryPoster-wrap">
            <div className="deliveryPoster-left">
                <div className="deliveryPoster-text">
                    <h1 className='deliveryPoster-h1'>Rozvoz po Mladé Boleslavi zdarma!</h1><br />
                    <Link to={"/pizza"}><button className='location-button' role="button">Objednávka</button></Link>
                </div>
            </div>
            <div className="deliveryPoster-right"></div>
        </div>



    )
}