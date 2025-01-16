import { useNavigate } from "react-router-dom";
import HomeComponent from "../../components/home";
import "./style.css";
import { BLOG1, BLOG2 } from "../../utils/constants";

const Resource = () => {
  const navigator = useNavigate();
  return (
    <>
      <HomeComponent />
      <div className="blog-section">
      <div className="blog-card">
            <img src="../../images/blog/blog-1.png" alt="Blog Image" />
            <div className="blog-content">
                <h3>Logistics Solution: Streamlining Your Business Operations</h3>
                <p>The right logistics solution is the backbone of the organization, is cost-effective and aids in customer satisfaction in today’s dynamic business environment. Whether you’re a small business or an international operator, working with a logistics partner and strategy you can count on to transport goods and services is important for any organization. The article outlines how a logistics solution can be a game-changer for your business</p>
                {/* <a href="#" className="btn">Read More</a> */}
                <span className="btn" onClick={()=>navigator(BLOG1)}>Read More</span>
            </div>
        </div>
        <div className="blog-card">
            <img src="../../images/blog/b2b-logistics.png" alt="Blog Image" />
            <div className="blog-content">
                <h3>B2B Logistics: The Backbone of Efficient Business Operations</h3>
                <p>B2B logistics & Transportation refers to the part of the supply chain that synchronises the flow of products between businesses and users, one of the most important components in today’s persistently shifting landscape of commerce. No matter if the company you are dealing with is a manufacturer, a retailer, or a wholesaler, the core of a well-organized B2B logistics system, is to deliver products at their scheduled destinations and the lowest price. </p>
                {/* <a href="#" className="btn">Read More</a> */}
                <span className="btn" onClick={()=>navigator(BLOG2)}>Read More</span>
            </div>
        </div>
         
      </div>
    </>
  );
};

export default Resource;
