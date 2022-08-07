import React from 'react'
import { Carousel} from "react-carousel-minimal";

export const Mainnavstore = () => {
        const data = [
                {
                  image:
                    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_JurassicWorldDominion/ffcaef47-3330-441f-ada9-ce80cf5f0508._UR3000,600_SX1500_FMwebp_.jpeg",
                  caption: "",
                },
                {
                  image:
                    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_SpiderNoWayHomeRevised_Launch/2a2b2cc2-e20b-492f-b53b-984627f3eb4e._UR3000,600_SX1500_FMwebp_.jpeg",
                  caption: "",
                },
                {
                  image:
                    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_TheFateOfTheFurious/7f0db24f-c900-464a-80bd-162193198525._UR3000,600_SX1500_FMwebp_.jpeg",
                  caption: "",
                },
                {
                  image:
                    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_Sonic2TheHedgehog/a66a359b-2c20-4851-9037-7c8253682a31._UR3000,600_SX1500_FMwebp_.jpeg",
                  caption: "",
                },
                {
                  image:
                    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_FantasticBeastsSODRevised/babc7901-3ed1-49db-b2da-88ea10d9f9be._UR3000,600_SX1500_FMwebp_.jpeg",
                  caption: "",
                },
                {
                  image:
                    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_VenomLetThereBeCarnage/53ac5367-24d7-4ee5-b799-a9cfca515ee9._UR3000,600_SX1500_FMwebp_.jpeg",
                  caption: "",
                },
                {
                  image:
                    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_Uncharted/90097e63-ec24-4589-a7d6-922e413ca5c9._UR3000,600_SX1500_FMwebp_.jpeg",
                  caption: "",
                },
                {
                  image:
                    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_TheLostCity/e18af5cc-50a2-4354-a7d4-9778dd255be4._UR3000,600_SX1500_FMwebp_.jpeg",
                  caption: "",
                },
                {
                  image:
                    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_iOS_Moonfall/c93bb4e0-9ad3-4659-8508-7fa018d093b5._UR3000,600_SX1500_FMwebp_.jpeg",
                  caption: "",
                },
                {
                  image:
                    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_GhostbustersAfterlife/01562ab3-d860-4cde-8876-cf40d026bfdf._UR3000,600_SX1500_FMwebp_.jpeg",
                  caption: "",
                },
                {
                  image:
                    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_Dog/bb613a89-32c8-4b3b-a948-1015e451c447._UR3000,600_SX1500_FMwebp_.jpeg",
                  caption: "",
                },
                {
                  image:
                    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_AmericanUnderdog/6d6b1a04-265d-423b-923e-cea375ae91fe._UR3000,600_SX1500_FMwebp_.jpeg",
                  caption: "",
                },
              ];
              const captionStyle = {
                fontSize: "2em",
                fontWeight: "bold",
              };
              const slideNumberStyle = {
                fontSize: "20px",
                fontWeight: "bold",
              };
  return (
    <>
    <div style={{ textAlign: "center", maxHeight: "273.8px", marginTop:'70.5px' }}>
          <div
            style={{
              width: "100%",
            }}
          >
            <Carousel
              data={data}
              time={5000}
              width="maxContent"
              height="273.8px"
              captionStyle={captionStyle}
              radius="0"
              slideNumber={false}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={true}
              pauseIconColor="transparent"
              pauseIconSize="60px"
              slideBackgroundColor="darkgrey"
              slideImageFit="fitContent"
              thumbnails={false}
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                width: "100%",
                margin: "0",
                fitItems: "auto",
              }}
            />
          </div>
        </div>
    </>
  )
}
