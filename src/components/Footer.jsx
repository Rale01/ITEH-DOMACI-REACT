function Footer() {
    return (
      <div>

        <footer className="text-center text-lg-start bg-white text-muted"> 
            <div className="text-center p-4" style={{ background: "rgb(43,41,78)",
    background: "linear-gradient(90deg, rgba(43,41,78,1) 0%, rgba(95,144,150,1) 35%, rgba(186,216,222,1) 100%)",
    color: "white", padding: "25px", textAlign: "center"}}>
                © 2022 Copyright: DOCTOR FOOD D.O.O.
                <a className="text-reset fw-bold" href="" style = {{margin: "25px", pointerEvents: "none"}}>
                    Kontakt telefon: +381 068 9978960
                </a>
                <a className="text-reset fw-bold" href="" style = {{margin: "25px", pointerEvents: "none"}}>
                    Email: doctorfood22@gmail.com
                </a>
            </div> 
        </footer> 
      </div>
    );
  }

  export default Footer;