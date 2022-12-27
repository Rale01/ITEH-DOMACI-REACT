import Recept from "./Recept";

function Recepti({recepti}) {
    return (
        <div className="recepti">
        <div className="row" style = {{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
        {recepti.map((rec)=> <div className="col-sm-3"><Recept  key={rec.id} rec={rec}></Recept><br /></div>)}
    </div>
    </div>
    );
  }

  export default Recepti;