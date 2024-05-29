
import NavBar from "../../components/NavBar/NavBar";
import Pizza_cards from "../../components/Pizza_cards/Pizza_cards";
import "./Pizza.css";
import Grid from '@mui/material/Grid';
export default function Pizza() {
  return (
    <>
      <NavBar />
{/* 
       <Pizza_cards name="quattro formaggi" popis="super" price="230Kc"/>
       <Pizza_cards name="dřevorubecká" popis="super" price="240Kc"/>
       <Pizza_cards name="sýrová" popis="super" price="220Kc"/> */}

{/* margin left nefunguje */}
      <Grid className="pizza_grid" container ml={10} mt={10}  rowSpacing={10}  columnSpacing={{ xs: 1 , sm: 2, md: 5 }}>
        <Grid item xs={6} md={4} >
        <Pizza_cards name="quattro formaggi" popis="super" price="230Kc"/>
        </Grid>
        <Grid item xs={6} md={4}>
        <Pizza_cards name="dřevorubecká" popis="super" price="240Kc"/>
        </Grid>
        <Grid item xs={6} md={4}>
        <Pizza_cards name="sýrová" popis="super" price="220Kc"/>
        </Grid>
        <Grid item xs={6} md={4}>
        <Pizza_cards name="quattro formaggi" popis="super" price="230Kc"/>
        </Grid>
      </Grid>

    </>
  );
}
