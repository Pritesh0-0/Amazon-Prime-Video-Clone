import React from "react";
import { Mainnavstore } from "./Mainnavstore";
import "../styles/store.css";
import { Corsecstore } from "./Corsecstore";

export const Store = () => {
  return (
    <>
      <Mainnavstore />
      <div className="store">
        <div className="store-definer">
          <p>RENT New release movies</p>
          <p
            style={{
              marginLeft: "8px",
              fontSize: "15px",
              marginTop: "8px",
              marginBottom: "auto",
              color: "#79b8f3",
              fontWeight: "normal",
              cursor: "pointer",
            }}
          >
            See more...
          </p>
        </div>
        <div style={{ marginLeft: "48px" }}>
          <Corsecstore type="Toprateds"/>
        </div>
        <div className="store-definer">
          <p>RENT Movies in Tamil</p>
          <p
            style={{
              marginLeft: "8px",
              fontSize: "15px",
              marginTop: "auto",
              marginBottom: "auto",
              color: "#79b8f3",
              fontWeight: "normal",
              cursor: "pointer",
            }}
          >
            See more...
          </p>
        </div>
        <div style={{ marginLeft: "48px" }}>
          <Corsecstore type="Populars"/>
        </div>
        <div className="store-definer">
          <p>RENT Science fiction movies</p>
          <p
            style={{
              marginLeft: "8px",
              fontSize: "15px",
              marginTop: "auto",
              marginBottom: "auto",
              color: "#79b8f3",
              fontWeight: "normal",
              cursor: "pointer",
            }}
          >
            See more...
          </p>
        </div>
        <div style={{ marginLeft: "48px" }}>
          <Corsecstore type="Toprateds"/>
        </div>
        <div className="store-definer">
          <p>RENT Comedy movies</p>
          <p
            style={{
              marginLeft: "8px",
              fontSize: "15px",
              marginTop: "auto",
              marginBottom: "auto",
              color: "#79b8f3",
              fontWeight: "normal",
              cursor: "pointer",
            }}
          >
            See more...
          </p>
        </div>
        <div style={{ marginLeft: "48px" }}>
          <Corsecstore type="Populars"/>
        </div>
        <div className="store-definer">
          <p>RENT Kids and family movies</p>
          <p
            style={{
              marginLeft: "8px",
              fontSize: "15px",
              marginTop: "auto",
              marginBottom: "auto",
              color: "#79b8f3",
              fontWeight: "normal",
              cursor: "pointer",
            }}
          >
            See more...
          </p>
        </div>
        <div style={{ marginLeft: "48px" }}>
          <Corsecstore type="Toprateds"/>
        </div>
        <div className="store-definer">
          <p>RENT Action and adventure movies</p>
          <p
            style={{
              marginLeft: "8px",
              fontSize: "15px",
              marginTop: "auto",
              marginBottom: "auto",
              color: "#79b8f3",
              fontWeight: "normal",
              cursor: "pointer",
            }}
          >
            See more...
          </p>
        </div>
        <div style={{ marginLeft: "48px" }}>
          <Corsecstore type="Toprateds"/>
        </div>
        <div className="store-definer">
          <p>RENT Romance movies</p>
          <p
            style={{
              marginLeft: "8px",
              fontSize: "15px",
              marginTop: "auto",
              marginBottom: "auto",
              color: "#79b8f3",
              fontWeight: "normal",
              cursor: "pointer",
            }}
          >
            See more...
          </p>
        </div>
        <div style={{ marginLeft: "48px" }}>
          <Corsecstore type="Toprateds"/>
        </div>
        <div className="store-definer">
          <p>RENT Horror movies</p>
          <p
            style={{
              marginLeft: "8px",
              fontSize: "15px",
              marginTop: "auto",
              marginBottom: "auto",
              color: "#79b8f3",
              fontWeight: "normal",
              cursor: "pointer",
            }}
          >
            See more...
          </p>
        </div>
        <div style={{ marginLeft: "48px" }}>
          <Corsecstore type="Toprateds"/>
        </div>
        <div className="store-definer">
          <p>RENT Movies in Telugu</p>
          <p
            style={{
              marginLeft: "8px",
              fontSize: "15px",
              marginTop: "auto",
              marginBottom: "auto",
              color: "#79b8f3",
              fontWeight: "normal",
              cursor: "pointer",
            }}
          >
            See more...
          </p>
        </div>
        <div style={{ marginLeft: "48px" }}>
          <Corsecstore type="Toprateds"/>
        </div>
        <div className="store-definer">
          <p>RENT Drama movies</p>
          <p
            style={{
              marginLeft: "8px",
              fontSize: "15px",
              marginTop: "auto",
              marginBottom: "auto",
              color: "#79b8f3",
              fontWeight: "normal",
              cursor: "pointer",
            }}
          >
            See more...
          </p>
        </div>
        <div style={{ marginLeft: "48px" }}>
          <Corsecstore type="Toprateds"/>
        </div>
        <div className="store-definer">
          <p>RENT Animated movies</p>
          <p
            style={{
              marginLeft: "8px",
              fontSize: "15px",
              marginTop: "auto",
              marginBottom: "auto",
              color: "#79b8f3",
              fontWeight: "normal",
              cursor: "pointer",
            }}
          >
            See more...
          </p>
        </div>
        <div style={{ marginLeft: "48px" }}>
          <Corsecstore type="Toprateds"/>
        </div>
        <div className="store-definer">
          <p>RENT Documentary movies</p>
          <p
            style={{
              marginLeft: "8px",
              fontSize: "15px",
              marginTop: "auto",
              marginBottom: "auto",
              color: "#79b8f3",
              fontWeight: "normal",
              cursor: "pointer",
            }}
          >
            See more...
          </p>
        </div>
        <div style={{ marginLeft: "48px" }}>
          <Corsecstore type="Toprateds"/>
        </div>
      </div>
    </>
  );
};
