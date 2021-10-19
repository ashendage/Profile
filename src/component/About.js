import './AboutPage.css';
const About = (props) => {
    const calculateExperience = (start_date) => {
        start_date = new Date(start_date);
        var expDifMs = Date.now() - start_date;
        var expDate = new Date(expDifMs);
        return Math.abs(expDate.getUTCFullYear() - 1970);
    }
    return (
        <><div className="about_page" >

            <div className="about_page_header">About Me</div>
            <div className="about_page-content">
                <div className="professional_info animate__animated animate__flipInX animate__delay-1s">
                    <div className="prof_summary_header">PROFESSIONAL SUMMARY
                    </div>
                    <div className="prof_summary">
                        <ul>
                            <li ><strong>Total Experience :</strong> {calculateExperience("2014 06 19")}+ Years</li>
                            <li ><strong>Expert Level:</strong> Angular,ReactJs, Bootstrap CSS, Angular Material
                            </li>
                            <li ><strong>Practitioner Level :</strong> Servicenow, Vue.Js, NodeJs, MongoDB
                            </li>
                            <li ><strong>Beginner Level :</strong> Java, Graphql, Python, Jenkins ...</li>
                        </ul>
                    </div>
                </div>
                <div className="personal_info animate__animated animate__flipInX animate__delay-3s">

                    <div className="pers_summary">
                        <ul>
                            <li ><strong>Country :</strong> India</li>
                            <li ><strong>City :</strong> Pune, Maharashtra
                            </li>
                            <li><strong>Email :</strong> example@example.com
                            </li>
                            <li ><strong>ZIP Code :</strong> ABC123XYZ</li>
                        </ul>
                    </div>
                    <div className="pers_summary_header">PERSONAL INFORMATION
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default About;