import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";
import Poster from "../../components/Poster/Poster";
import Footer from "../../components/Footer/Footer";
import Location from "../../components/Location/Location";
import MenuPoster from "../../components/MenuPoster/MenuPoster";
import DeliveryPoster from "../../components/DeliveryPoster/DeliveryPoster";
export default function Home(){
    return(
        <>
           <NavBar />
           <Poster />
           <MenuPoster />
           <Location />
           <DeliveryPoster />
           <Footer />
        </>
    )
}