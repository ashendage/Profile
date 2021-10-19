import D3Graph from './D3Graph';
import './PortfolioPage.css';
const Portfolio = (props) => {
    return (
        <> <div className="portf-page" >
            <div className="graph_wrapper">
                <D3Graph /></div>
            <div className="portf-page-content">
                <div class="portf_page_header"><h1>Portfolio</h1></div>


            </div>
        </div>

        </>
    );
};
export default Portfolio;