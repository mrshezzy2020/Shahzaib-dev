import "./App.css";
import Navbar from "./Components/Header/Navbar";
import Header from "./Components/Header/Header";
import Slider from "./Components/Header/Slider";
import AboutUs from "./Components/Header/AboutUs";
import ScoreCard from "./Components/Cards/ScoreCard";
import AvatarCard from "./Components/Cards/AvatarCard";
import Roadmap from "./Components/Roadmap/Roadmap";
import Binabox from "./Components/Cards/Binabox";
import Contactcard from "./Components/Cards/Contactcard";
import Faqs from "./Components/Cards/Faqs";
import Sponsers from "./Components/Cards/Sponsers";
import Community from "./Components/Community/Community";
import Footer from "./Components/Footer/Footer";
import img1 from "./Components/Assets/img1.jpg";
import note from "./Components/Assets/note.svg";
import avc from "./Components/Assets/avc.svg";
import transection from "./Components/Assets/tarnsection.svg";
import cart from "./Components/Assets/cart.svg";
import b1 from "./Components/Assets/b1.jpg";
import b2 from "./Components/Assets/b2.jpg";
import b3 from "./Components/Assets/b3.jpg";
import b4 from "./Components/Assets/b4.jpg";
import a from "./Components/Assets/a.png";
import b from "./Components/Assets/b.png";
import c from "./Components/Assets/c.png";
import d from "./Components/Assets/d.png";
import e from "./Components/Assets/e.png";
import f from "./Components/Assets/f.png";
import g from "./Components/Assets/g.png";
import h from "./Components/Assets/h.png";
import i from "./Components/Assets/i.png";
import o from "./Components/Assets/o.png";
import Login from "./Components/Login/Login";
import n1 from "./Components/Assets/n1.jpg";
import n2 from "./Components/Assets/n2.jpg";
import n3 from "./Components/Assets/n3.jpg";
import n5 from "./Components/Assets/n5.jpg";
import n6 from "./Components/Assets/n6.jpg";
import n7 from "./Components/Assets/n7.jpg";
import n8 from "./Components/Assets/n8.jpg";

import { useEffect, useState } from "react";

function App() {
  const [log, setLog] = useState(false);
  const handleloginCB = () => {
    setLog(false);
    console.log("i am active ", log);
  };
  useEffect(() => {
    if (window.localStorage.getItem("username")) {
      setLog(true);
    }
  }, []);

  return log === true ? (
    <div className="App">
      <div className="container-fluid" style={{ background: "black" }}>
        <Navbar />
        <Header />
        <Slider />
        <AboutUs />
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-md-3">
            <ScoreCard title="HIGH QUAILITY" score="01" />
          </div>
          <div className="col-md-3">
            <ScoreCard title="COLLECTION" score="02" />
          </div>
          <div className="col-md-3">
            <ScoreCard title="TOP RESOURCE" score="03" />
          </div>
          <div className="col-md-3">
            <ScoreCard title="BIG COMMUNITY" score="04" />
          </div>
        </div>
        <div className="row mt-3" style={{ justifyContent: "center" }}>
          <div className="col-md-3">
            <AvatarCard name="SKELATON #01" img={n1} />
          </div>
          <div className="col-md-3">
            <AvatarCard name="SKIDER #02" img={n2} />
          </div>
          <div className="col-md-3">
            <AvatarCard name="SKELATON #03" img={n3} />
          </div>
          <div className="col-md-3">
            <AvatarCard name="SPOTIOR #04" img={img1} />
          </div>
          <div className="col-md-3">
            <AvatarCard name="SKELATON #01" img={n8} />
          </div>
          <div className="col-md-3">
            <AvatarCard name="SKIDER #02" img={n5} />
          </div>
          <div className="col-md-3">
            <AvatarCard name="SKELATON #03" img={n7} />
          </div>
          <div className="col-md-3">
            <AvatarCard name="SPOTIOR #04" img={n8} />
          </div>
        </div>
        <div>
          <Roadmap />
        </div>
        <div className="" style={{ marginTop: "8rem", marginBottom: "4rem" }}>
          <h1 style={{ color: "white" }}>
            HOW TO <span style={{ color: "#21e786" }}>BINABOX</span> WORK
          </h1>
        </div>
        <div className="row">
          <div className="col-md-3">
            <Binabox name="CONNECT THE WALLET" img={avc} />
          </div>
          <div className="col-md-3">
            <Binabox name="SELLECT THE QUAILITY" img={note} />
          </div>
          <div className="col-md-3">
            <Binabox name="CONFIRM TRANSACTION" img={transection} />
          </div>
          <div className="col-md-3">
            <Binabox name="RECEIVE YOUR NFTS" img={cart} />
          </div>
        </div>
        <div>
          <div className="" style={{ marginTop: "8rem" }}>
            <h1 style={{ color: "white" }}>OUR TEAM</h1>
          </div>
          <div className="row">
            <div className="col-md-3">
              <Contactcard name="Ralph Edwards" des="founder" src={b1} />
            </div>
            <div className="col-md-3">
              <Contactcard name="Jason Smith" des="co-founder" src={b2} />
            </div>
            <div className="col-md-3">
              <Contactcard name="Tony Wings" des="Web Designer" src={b3} />
            </div>
            <div className="col-md-3">
              <Contactcard
                name="Esther Howard"
                des="Project Manager"
                src={b4}
              />
            </div>
          </div>
          <div className="" style={{ marginTop: "8rem" }}>
            <h1 style={{ color: "white" }}>FAQS</h1>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Faqs title="What Are NFTs" />
            </div>
            <div className="col-md-6">
              <Faqs title="Where We Can Buy And Sell NFts ?" />
            </div>
            <div className="col-md-6">
              <Faqs title="How Do I Get NFTs?" />
            </div>
            <div className="col-md-6">
              <Faqs title="Who Are The Team Behind The Project?" />
            </div>
            <div className="col-md-6">
              <Faqs title="How Do I Get NFTs?" />
            </div>
            <div className="col-md-6">
              <Faqs title="What Is Your Contract Address ?" />
            </div>
            <div className="col-md-6">
              <Faqs title="How We Can Buy And Invest NFT ?" />
            </div>
          </div>
          <div className="" style={{ marginTop: "8rem", marginBottom: "8rem" }}>
            <h1 style={{ color: "white" }}>
              <span style={{ color: "#21e786" }}>BINABOX</span> PARTNERS
            </h1>
          </div>
          <div
            className="sponserss d-flex gap-3"
            style={{ flexWrap: "wrap", justifyContent: "center" }}
          >
            <Sponsers src={a} />
            <Sponsers src={b} />
            <Sponsers src={c} />
            <Sponsers src={d} />
            <Sponsers src={e} />
            <Sponsers src={f} />
            <Sponsers src={g} />
            <Sponsers src={h} />
            <Sponsers src={i} />
            <Sponsers src={o} />
            <Sponsers src={f} />
            <Sponsers src={g} />
          </div>
          ;
          <div style={{ marginTop: "9rem" }}>
            <Community />
          </div>
          <div style={{}}>
            <Footer />
          </div>
          <hr></hr>
        </div>
      </div>
    </div>
  ) : (
    <Login handleloginCB={handleloginCB} />
  );
}

export default App;
