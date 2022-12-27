import Recept from "./Recept";

function Recepti({recepti, kriterijum, dodaj}) {
    return (
        <div className="recepti">
        <div className="row" style = {{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
        {
        kriterijum==""
        ?
        recepti.map((rec)=> <div className="col-sm-3"><Recept  dodaj={dodaj} key={rec.id} rec={rec}></Recept><br /></div>)
        :
        <>
        {recepti
        .filter((rec)=>rec.naziv.toLowerCase().includes(kriterijum.toLowerCase()))
        .map((rec)=> <div className="col-sm-3"><Recept  dodaj={dodaj} key={rec.id} rec={rec}></Recept><br /></div>)}

        </>
    }
    </div>
    </div>
    );
  }

  export default Recepti;