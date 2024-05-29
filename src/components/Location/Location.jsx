import "./Location.css"

export default function Location() {
    return(
        <>
            <div className="location-wrap">
                <div className="location-leftIMG">
                    <img src={'./src/img/minipizzeriaVita2.jpg'} alt="location"></img>
                </div>
                <div className="location-rightAdress">                
                    <h1 className="location-h1">Navštivte nás!</h1>
                    <p className="location-p">Laurinova 1268</p>
                    <p className="location-p">Mladá Boleslav</p>
                </div>
            </div>
        </>
    )
}