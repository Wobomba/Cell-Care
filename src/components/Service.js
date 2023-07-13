import React from "react";
import Card from "./Card";
import img1 from "../src/Pictures/img1.png";
import img2 from "../src/Pictures/img2.png";
import img3 from "../src/Pictures/img3.png";
import img4 from "../src/Pictures/img4.png";
import img5 from "../src/Pictures/img5.png";
import img6 from "../src/Pictures/img6.png";

function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <Card title="Safari Packages" imgsrc={img1} />
              <Card title="Private Trips" imgsrc={img2} />
              <Card title="Honey Moon Packages" imgsrc={img3} />
              <Card title="Tour Guiding" imgsrc={img4} />
              <Card title="Retreats" imgsrc={img5} />
              <Card title="Airport Pickups and Drops" imgsrc={img6} />
              <Card title="Hotel Bookings" imgsrc={img6} />
              <Card title="Events Planning" imgsrc={img6} />
              <Card title="Photography" imgsrc={img6} />
              <Card title="Camp Tent Booking" imgsrc={img6} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;