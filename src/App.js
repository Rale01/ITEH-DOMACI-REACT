import './App.css';
import NavBar from './components/NavBar';
import Pocetna from './components/Pocetna';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Recepti from './components/Recepti';
import { useState } from 'react';
import Omiljeni from './components/Omiljeni';
import CopyButton from "./components/CopyButton";



function App() {
  const telefon = "+381 068 9978960";
  const email = "doctorfood22@gmail.com";
  const [omiljeniR,setOmiljeniR]=useState([]);
  const[sviRecepti] = useState([

    {
      id:1,
      naziv:"OVSENA KASA JABUKA CIMET",
      slika: "https://www.pcrm.org/sites/default/files/Cinnamon-Apple-Oatmeal_0.jpg",
      opis:" Potrebno je: 4 kašike ovsenih pahuljica  mleko (može i biljno)  2 jabuke  cimet šaka oraha med Priprema:  U teglu sipajte mleko i dodajte ovsene pahuljice. Stavite iseckanu jabuku, kašiku meda, iseckane orahe i začinite cimetom po ukusu i promešajte.  Ujutru promešajte još jednom i dodajte još nekoliko komada jabuke kao dekoraciju. ",
      vreme: 30,
      kalorije: 500,
      omiljen:0
    },
    {
      id:2,
      naziv:"JAJA NA OKO UZ NISKOMASNI SIR",
      slika: "https://www.washingtonpost.com/resizer/8zFOmdsX2b6aK0jTgCtvBb7Yvb8=/arc-anglerfish-washpost-prod-washpost/public/GXBC63EJYII6ZA4PBT67NHGOHQ.jpg",
      opis:" Sastojci: 1 jaje (najbolje domaće) u ovom slučaju kokošije, a može i od neke druge živine 1 žlica ulja prstohvat soli malo svježe samljevenog papra  Priprema: Zagrejte tiganj na veoma jaku temperaturu, stavite maslinovo ulje, pa tek onda dodajte jaje.  Kada dodate jaje smanjite toplotu, i tek onda dodajte malo putera, i to samo na belance, i stavite poklopac.",
      vreme: 30,
      kalorije: 700,
      omiljen:0
    },
    {
      id:3,
      naziv:"GRCKI JOGURT SA JAGODAMA I MEDOM",
      slika: "https://helentzouganatos.com/wp-content/uploads/2015/09/Organic-Strawberries-with-Greek-Yoghurt-Honey-Pecans-Gluten-Free-2-2.jpg",
      opis:" Sastojci: 1 žličica likera od ruže 100 g grčkog jogurta 2 žličice meda šaka očišćenih jagoda 1/4 mahune vanilije 1 žlica nesoljenih pistacija Priprema: Ugrijte med da malo omekša pa mu dodajte liker od ruže i ostrugane sjemenke vanilije. U zdjelicu stavite jagode, prelijte ih aromatiziranim medom pa sve pospite pistacijama.",
      vreme: 15,
      kalorije: 350,
      omiljen:0
    },
    {
      id:4,
      naziv:"HUMUS I STAPICI OD CELERA",
      slika: "https://celebrationsathomeblog.com/wp-content/uploads/2012/11/classic-hummus-recipe-card-720x720.jpg",
      opis:"Sastojci:  1 konzerva od 400 g pasterizovane leblebije Sok od ½ Iceberg Salat Centar limuna  2 - 3 skuvane šargarepe  Komad skuvanog korena celera  1 kašičica kurkume  Suvi začini, so i biber (po ukusu)  Sveže grančice peršuna (za dekoraciju) Uputstvo za pripremu: 1. Sve sastojke, osim grančica peršuna, stavite u blender ili seckalicu. 2.  Mutite dok smesa ne postane kremasta i kompaktna. 3. Poslužite na krekerima ili integralnom hlebu kao namaz. 4. Čuvajte u frižideru, u zatvorenoj teglici, 3 – 4 dana.",
      vreme: 20,
      kalorije: 650,
      omiljen:0
    },
    {
      id:5,
      naziv:"PROTEINSKE PALACINKE",
      slika: "https://images.immediate.co.uk/production/volatile/sites/30/2021/02/Protein-pancakes-b64bd40.jpg?resize=768,574",
      opis:" Sastojci: 2 jaja, merica whey proteina i kasicica sode bikarbone. Priprema: U tiganj sipati malo kokosovog ulja. Pomesati sve sastojke. Dodajte malo vode ili bademovog mleka do zeljene konzistencije.Ispeci i posluziti sa agava sirupom.",
      vreme: 15,
      kalorije: 300,
      omiljen:0
    },
    {
      id:6,
      naziv:"DETOX SMUTI",
      slika: "https://www.cubesnjuliennes.com/wp-content/uploads/2022/02/Green-Detox-Smoothie-Recipe.jpg",
      opis:"Sastojci: pola zelene jabuke, malo iseckanog krastavca, 2 kasike limunovog soka, solja spanaca, solja kokosove vode. Priprema: Sve sastojke staviti u blender i miksovati dok se ne sjedine i dok ne dobijemo zeljenu gustinu napitka.",
      vreme: 10,
      kalorije: 200,
      omiljen:0
    }
  ])

  const [krterijumPretrage,setKriterijumPretrage]=useState("");
  
  function pretrazi(kriterijum){
    setKriterijumPretrage(kriterijum);
  }

  function dodaj(id){
    for(var i=0;i<sviRecepti.length;i++){
      if(sviRecepti[i].id==id){
        sviRecepti[i].omiljen=1;
      }
    }
    var niz = sviRecepti.filter((rec)=>rec.omiljen==1);
    setOmiljeniR(niz);
  }

  function izbaci(id){
    for(var i=0;i<sviRecepti.length;i++){
      if(sviRecepti[i].id==id){
        sviRecepti[i].omiljen=0;
      }
    }
    var niz = sviRecepti.filter((rec)=>rec.omiljen==1);
    setOmiljeniR(niz);
  }

  return (
    <div>
    <BrowserRouter>
        <NavBar pretrazi={pretrazi}></NavBar>
        <Routes>
            <Route path="/" element={<Pocetna></Pocetna>}></Route>
            <Route path="/recepti" element={<Recepti  kriterijum={krterijumPretrage} recepti={sviRecepti} dodaj={dodaj}></Recepti>}></Route>
            <Route path="/omiljeni" element={<Omiljeni kriterijum={krterijumPretrage}  recepti={omiljeniR}  izbaci={izbaci}></Omiljeni>}></Route>
          </Routes>
     </BrowserRouter>
     <Footer> </Footer>
     
     <div className="kontejner">
    <CopyButton textToCopy={telefon}/> 
    <CopyButton textToCopy={email} />
    </div>
  </div>
  );
}

export default App;
