import './App.css';
import NavBar from './components/NavBar';
import Pocetna from './components/Pocetna';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Recepti from './components/Recepti';
import { useState } from 'react';



function App() {
  const[sviRecepti] = useState([

    {
      id:1,
      naziv:"OVSENA KASA JABUKA CIMET",
      slika: "https://www.theworktop.com/wp-content/uploads/2019/09/Apple-Cinnamon-Oatmeal-Bowl.jpg",
      opis:" Potrebno je: 4 kašike ovsenih pahuljica  mleko (može i biljno)  2 jabuke  cimet šaka oraha med Priprema:  U teglu sipajte mleko i dodajte ovsene pahuljice. Stavite iseckanu jabuku, kašiku meda, iseckane orahe i začinite cimetom po ukusu i promešajte.  Ujutru promešajte još jednom i dodajte još nekoliko komada jabuke kao dekoraciju. ",
      vreme: 30,
      kalorije: 500,
      
    },
    {
      id:2,
      naziv:"JAJA NA OKO UZ NISKOMASNI SIR",
      slika: "data:image/jpeg;base64,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",
      opis:" Sastojci: 1 jaje (najbolje domaće) u ovom slučaju kokošije, a može i od neke druge živine 1 žlica ulja prstohvat soli malo svježe samljevenog papra  Priprema: Zagrejte tiganj na veoma jaku temperaturu, stavite maslinovo ulje, pa tek onda dodajte jaje.  Kada dodate jaje smanjite toplotu, i tek onda dodajte malo putera, i to samo na belance, i stavite poklopac.",
      vreme: 30,
      kalorije: 700,
      
    },
    {
      id:3,
      naziv:"GRCKI JOGURT SA JAGODAMA I MEDOM",
      slika: "https://helentzouganatos.com/wp-content/uploads/2015/09/Organic-Strawberries-with-Greek-Yoghurt-Honey-Pecans-Gluten-Free-2-2.jpg",
      opis:" Sastojci: 1 žličica likera od ruže 100 g grčkog jogurta 2 žličice meda šaka očišćenih jagoda 1/4 mahune vanilije 1 žlica nesoljenih pistacija Priprema: Ugrijte med da malo omekša pa mu dodajte liker od ruže i ostrugane sjemenke vanilije. U zdjelicu stavite jagode, prelijte ih aromatiziranim medom pa sve pospite pistacijama.",
      vreme: 15,
      kalorije: 350,
      
    },
    {
      id:4,
      naziv:"HUMUS I STAPICI OD CELERA",
      slika: "https://celebrationsathomeblog.com/wp-content/uploads/2012/11/classic-hummus-recipe-card-720x720.jpg",
      opis:"Sastojci:  1 konzerva od 400 g pasterizovane leblebije Sok od ½ Iceberg Salat Centar limuna  2 - 3 skuvane šargarepe  Komad skuvanog korena celera  1 kašičica kurkume  Suvi začini, so i biber (po ukusu)  Sveže grančice peršuna (za dekoraciju) Uputstvo za pripremu: 1. Sve sastojke, osim grančica peršuna, stavite u blender ili seckalicu. 2.  Mutite dok smesa ne postane kremasta i kompaktna. 3. Poslužite na krekerima ili integralnom hlebu kao namaz. 4. Čuvajte u frižideru, u zatvorenoj teglici, 3 – 4 dana.",
      vreme: 20,
      kalorije: 650,
      
    },
    {
      id:5,
      naziv:"PROTEINSKE PALACINKE",
      slika: "https://images.immediate.co.uk/production/volatile/sites/30/2021/02/Protein-pancakes-b64bd40.jpg?resize=768,574",
      opis:" Sastojci: 2 jaja, merica whey proteina i kasicica sode bikarbone. Priprema: U tiganj sipati malo kokosovog ulja. Pomesati sve sastojke. Dodajte malo vode ili bademovog mleka do zeljene konzistencije.Ispeci i posluziti sa agava sirupom.",
      vreme: 15,
      kalorije: 300,
      
    },
    {
      id:6,
      naziv:"DETOX SMUTI",
      slika: "https://www.cubesnjuliennes.com/wp-content/uploads/2022/02/Green-Detox-Smoothie-Recipe.jpg",
      opis:"Sastojci: pola zelene jabuke, malo iseckanog krastavca, 2 kasike limunovog soka, solja spanaca, solja kokosove vode. Priprema: Sve sastojke staviti u blender i miksovati dok se ne sjedine i dok ne dobijemo zeljenu gustinu napitka.",
      vreme: 10,
      kalorije: 200,
      
    }
  ])
  return (
    <div>
    <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
            <Route path="/" element={<Pocetna></Pocetna>}></Route>
            <Route path="/recepti" element={<Recepti  recepti={sviRecepti}></Recepti>}></Route>
          </Routes>
     </BrowserRouter>
     <Footer></Footer>
  </div>
  );
}

export default App;
