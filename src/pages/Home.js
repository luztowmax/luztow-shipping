import { useState } from "react";
import HeroSlider from "../components/Heroslider";
import "./Home.css";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);

  const previewText = (
    <p>
      Luztow Resources  Ltd is a company registred with CAC corporate affairs commission. Luztow  has capacity  and expertise in clearing and forwarding, information and communication technology, (web  designing and development, mobile app development and software development development, )in upstream and downstream operation.
      for almost a decade of our existence, we grew like an oak tree to attain global company status with branches spread accross Nigeria.
    </p>
  );

  const fullText = (
    <>
      <p>
        Luztow Resources  Ltd is a company registred with (CAC) corporate affairs commission. Luztow  has capacity and expertise in clearing and forwarding, information and communication technology, (web  designing and development, mobile app development and software development, )in upstream and downstream operation.
        for almost a decade of our existence, we grew like an oak tree to attain global company status with branches spread accross Nigeria.
      </p>
      <p>We have continued to hone our skills in the Downstream in Ship Agency Services, Ship Management, Oil & Gas Trading while in the Upstream, we provide Offshore industry Support Services, Sales and Leasing of Capital Goods, Special Transportation, Provision of Marine Vessels Supply and Operation, Marine Security and Escort. Mooring Services, House Boats, Tugboats and Berges, etc </p>
      <p>In addition to our Ship Agency, we manage vessels and broker charter to cargo owners. We trade in clean petroleum products, supply bulk cargoes to international Oil Companies, Independent Petroleum marketers, Oil rigs, terminals and platforms offshore. We are flexible and able to attend to calls anywhere, anytime and we have capacity to service delivery</p>
      <p>We provide world-class maritime logistics, shipping, and port services.</p>
    </>
  );

  return (
    <div className="home-container">
      <HeroSlider />
      <section className="home-section">
        <h2>Welcome to Luztow Resources Ltd</h2>
        <div className="description">
          {isExpanded ? fullText : previewText}
          <button 
            onClick={() => setIsExpanded(!isExpanded)} 
            className="read-toggle"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </section>
    </div>
  );
}
