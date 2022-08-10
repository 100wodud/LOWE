import { Component } from "react";
import "./Sixthsec.css";
import { useMediaQuery } from 'react-responsive'
import media from "../data/media"


const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1000 })
  return isDesktop ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 999 })
  return isMobile ? children : null
}



class Sixthsec extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }



  render() {
    return (
      <section className="Mainpage_Sixth_section">
        <Desktop>
          <div id="Sixth_section_content">

            <div>
              <div data-aos="fade-up" data-aos-duration="3000" id="Sixth_Section_title_text">
                <div className="Sixth_Section_title">
                  언론 속의 로위
                </div>
                <div style={{float:"right" }}>
                  <ul>
                    {media.map((e, i) => (
                      <li key={i}>
                        <a data-tag-index="Main" data-tag-cate="news" data-tag-title={e.title} href={e.url}>
                          <div className="Sixth_review_designer" style={{marginBottom: "8px"}}>
                            <span style={{ fontWeight: "bold", marginRight: "10px", fontSize: "1.1458333vw" }}>{e.location}</span>{e.date}
                          </div>
                          <div className="Sixth_review_content">{e.title}</div>

                          <div className="btn-right">
                            <img className="circle" src={process.env.PUBLIC_URL + "/image/mainpage/circle.svg"} alt="lowe arrow" />
                            <img className="arrow" src={process.env.PUBLIC_URL + "/image/mainpage/arrow.svg"} alt="lowe arrow" />
                          </div>
                        </a>
                      </li>
                    ))
                    }
                  </ul>
                  </div>
              </div>
            </div>
          </div>
        </Desktop>
        <Mobile>
          <div id="Sixth_section_content">
            <div data-aos="fade-up" data-aos-duration="3000" >
              <div className="Sixth_Section_title">
                언론 속의 로위
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="3000" >
              <ul>
                {media.map((e, i) => (
                  <li key={i}>
                    <a data-tag-index="Main" data-tag-cate="news" data-tag-title={e.title} href={e.url}>
                      <div className="Sixth_review_designer">
                        <span style={{ fontWeight: "bold", marginRight: "10px" }}>{e.location}</span>{e.date}
                      </div>
                      <div className="Sixth_review_content">{e.title}</div>

                      <div className="btn-right">
                        <img className="circle" src={process.env.PUBLIC_URL + "/image/mainpage/circle.svg"} alt="lowe arrow" />
                        <img className="arrow" src={process.env.PUBLIC_URL + "/image/mainpage/arrow.svg"} alt="lowe arrow" />
                      </div>
                    </a>
                  </li>
                ))
                }
              </ul>
            </div>
          </div>
        </Mobile>
      </section>
    )
  }
}

export default Sixthsec;





