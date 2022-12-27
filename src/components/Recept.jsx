function Recept({rec}) {


    return (
    <div className="card"   >
        <img src={rec.slika} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{rec.naziv}</h5>
          <p className="card-text">{rec.opis} <br /> Kalorije: {rec.kalorije}<br /> Vreme pripreme: {rec.vreme + "min"}</p>
          <a href="#" className="btn btn-primary" style = {{border:"rgb(76, 131, 204)", borderStyle: "double", fontSize: "20px"}}>DODAJ</a>
        </div>
      </div>
    );
  }

  export default Recept;