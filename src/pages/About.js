import { useState } from "react";
import { FaBullseye, FaEye } from "react-icons/fa";
import "./About.css";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>
        Luztow Resources Ltd is a Limoted Liability Company owned by a Nigerian of repute. Luztow has capacity in Clearing and Forwarding, Air Freighting, Ship Agency, upstream and downstream operation, Information and Communication Technology,
        before incorporation we have handled several projects for both individuals and corporate bodies, we have learnt by the ropes and grow like an oak tree with global standard and international best practices in Logistics, shipping, information and communication technology and supply chain.
      </p>
      <p>We have continued to hone our skills in Clearing and forwarding, Air freighting , in the Downstream in Ship Chattering Services, Ship Management, Ship Husbandry, Oil & Gas Trading while in the Upstream, Offshore industry Support Services, Sales and Leasing of Capital Goods, Special Transportation, Provision of Marine Vessels Supply and Operation, Marine Security and Escort. Mooring Services, House Boats, Tugboats and Berges, etc </p>
      <p>In addition to our Ship Husbandry, we manage vessels and broker charter to cargo owners with VLCC Tankers, Afromat vessels, MR vessels, small sized vessels for DPP and CPP cargoes. We trade in clean petroleum products, supply bulk cargoes to international Oil Companies, Independent Petroleum marketers, Oil rigs, terminals and platforms offshore. We are flexible and able to attend to calls anywhere, anytime and we have capacity for service delivery.</p>
      <button 
        onClick={() => setIsExpanded(!isExpanded)} 
        className="read-toggle"
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
      {isExpanded && (
        <>
      <img
        src="/assets/idea.jpg"
        alt="Idea"
        className="standalone-image"
      />
      <img
        src="/assets/oil rig 1.jpg"
        alt="Maritime scene"
        className="standalone-image"
      />
      <h3>Our Commitment to Service Excellence</h3>
      <div className="about-commitment">
        <p>We are committed to making available to our Customers outstanding professional who render superior and distinctive service. Luztow  growth has been as a result of its ingenuity and expertise in service delivery.</p>
        <ul>
          <li>Professional Competence and experience in the industry.</li>
          <li>Quick response and turnaround time.</li>
          <li>Commitment to high standards of quality and excellence.</li>
          <li>Capacity for specialized services</li>
          <li>Integrity</li>
          <li>Willingness to undertake new challenging assignments enthusiastically</li>
          <li>Strong relationship over time with Shipping /Oil & Gas /Upstream /Downstream industry operatives and Government agencies</li>
        </ul>
        <p>Our professional approach ensures that the right human and capital resources are available for discharging every aspect of the project.
          We constantly train and motivate our staff to ensure that we continue to deliver on our promise of excellent service.
        </p>
        <img
        src="/assets/tanker ship 1.jpg"
        alt="tanker ship 1.jpg"
        className="standalone-image"
        />
      </div>
      <div className="mission-vision-container">
        <div className="mission-card">
          <FaBullseye className="icon" />
          <h3>Our Mission</h3>
          <p>To provide each client with professional, comprehensive and efficient service.</p>
          <p>To continue to be a custodian of trust for our customers as we manage their interests and strive to make each port call and any other transaction a complete and cost effective operational success.</p>
        </div>
        <div className="vision-card">
          <FaEye className="icon" />
          <h3>Our Vision</h3>
          <p>To be a one stop shop for Shipping, clearing and forwarding, Information and communication Technology service provider in Africa. To be a Company known for her high levels of efficiency and integrity with the most satisfied customers; ensuring that all stakeholders are justifiably proud to be associated with "Luztow Resources Ltd."</p>
        </div>
      </div>
      <img
      src="/assets/Mr-Akin-2.jpg.jpeg"
      alt="Tosin Akinlofa"
      className="person-image"
      />
      <h3>Tosin Akinlofa</h3>
      <p>MD/CEO</p>
      <div className="board-management">
        <h3>Board and Management</h3>
        <p>At Luztow Resources, we are guided by a visionary board of directors and an exceptional management team, united in our commitment to driving the success and growth of our organization. With our collective expertise, forward-thinking strategies, and unwavering dedication to excellence, we lay the foundation for innovation, profitability, and sustainable success.</p>
        <h4>Board of Directors: Shaping the Future</h4>
        <p>Our esteemed board of directors is composed of accomplished leaders, industry veterans, and experts in their respective fields. They bring a wealth of knowledge, strategic insights, and diverse perspectives that steer our organization towards new horizons. Through their visionary guidance, they ensure that our strategic goals are aligned with market dynamics, customer needs, and long-term sustainability.</p>
        <p>Key responsibilities of our board of directors include:</p>
        <ul>
          <li>Strategic Planning: Our board oversees the development and implementation of strategic plans that drive our organization's growth, competitive advantage, and financial success. They conduct thorough market analyses, assess industry trends, and provide guidance on new business opportunities and expansion initiatives.</li>
          <li>Risk Management: We prioritize effective risk management, and our board plays a crucial role in identifying potential risks and implementing robust mitigation strategies. They establish governance frameworks, ensure compliance with regulatory requirements, and foster a culture of ethical decision-making and responsible business practices.</li>
          <li>Talent Management: Our board recognizes the importance of attracting and retaining top talent. They provide guidance on executive appointments, succession planning, and talent development strategies. Their focus on cultivating a diverse and inclusive workforce enhances our organizational capabilities and fosters innovation.</li>
        </ul>
        <h4>Management Team: Driving Operational Excellence</h4>
        <p>Our exceptional management team translates the strategic vision set by the board into action, leading our organization with passion, expertise, and a relentless pursuit of operational excellence. They combine a wealth of industry experience, business acumen, and leadership skills to guide our day-to-day operations, inspire our employees, and deliver exceptional value to our stakeholders.</p>
        <p>Key responsibilities of our management team include:</p>
        <ul>
          <li>Leadership and Vision: Our management team sets a clear direction, fosters a culture of collaboration and innovation, and empowers our employees to achieve their full potential. They inspire a shared vision, encourage creativity, and foster an environment where individuals are motivated to excel and contribute their best.</li>
          <li>Operational Efficiency: Our management team is committed to maximizing operational efficiency and delivering outstanding results. They implement robust processes, optimize workflows, and leverage technology to streamline operations, reduce costs, and enhance productivity. Their focus on continuous improvement drives innovation and agility across all functions.</li>
          <li>Stakeholder Engagement: Our management team recognizes the importance of building strong relationships with our stakeholders. They foster open and transparent communication, ensuring that our investors, customers, employees, and partners are engaged, informed, and aligned with our strategic goals. By actively listening to feedback and addressing concerns, they nurture long-term partnerships and drive customer loyalty.</li>
          <li>Financial Performance: Our management team maintains a keen focus on financial performance, working diligently to achieve sustainable growth and profitability. They develop comprehensive financial strategies, optimize resource allocation, and make data-driven decisions to ensure the long-term financial health of our organization.</li>
        </ul>
        <p>Together, our board of directors and management team forge a strong partnership, combining strategic vision with operational excellence. They inspire our employees, nurture a culture of innovation, and ensure that our organization remains at the forefront of our industry.</p>
      </div>
        </>
      )}
    </div>
  );
}
