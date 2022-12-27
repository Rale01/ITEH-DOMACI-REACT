import Recept from "./Recept";

function Omiljeni({recepti,kriterijum}) {
    return (
    <div className="row">
        {kriterijum==""
        ?
        recepti.map((rec)=> <div className="col-sm-3"><Recept  key={rec.id} rec={rec}></Recept><br /></div>)
        :
        <>
        {recepti
        .filter((rec)=>rec.naziv.toLowerCase().includes(kriterijum.toLowerCase()))
        .map((rec)=> <div className="col-sm-3"><Recept  key={rec.id} rec={rec}></Recept><br /></div>)}

        </>
        }

      </div>
    );
  }

  export default Omiljeni;