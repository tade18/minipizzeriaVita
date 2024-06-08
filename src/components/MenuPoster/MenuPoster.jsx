import './MenuPoster.css';
import { Link } from 'react-router-dom';

export default function MenuPoster() {
    return(
        <div className="menuPoster-main">
            <div className='menuPoster-left'>
                <div className='menuPoster-left-text'>
                    Tradiční italská receptura <br />
                    <Link to={"/pizza"}><button className='menuPoster-button' role="button">Nabídka</button></Link>
                </div>
            </div>
            <div className="menuPoster-img">
            
            </div>
        </div>
    )
}