import {Component} from "react";
import axios from "axios";

class Request extends Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: '',
      phone: '',
      year:  '',
      salary: '',
      custom: 0,
      instagram: '',
      career: '',
      question: '',
      error: '',
    };
  }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  handlesubmit = () => {
    const clickTour = 'input[name="tour"]:checked';
    const tourlist = document.querySelectorAll(clickTour);
    let tour = '';

    tourlist.forEach((e) => {
      tour = tour +e.value;
    });

    const clickRoute = 'input[name="route"]:checked';
    const routelist = document.querySelectorAll(clickRoute);
    let route = '';

    routelist.forEach((e) => {
      route = route + e.value;
    });

    this.setState({ error: "" });

    if(this.state.name === '' || this.state.phone === '' || this.state.instagram === ''){
      this.setState({error: "하나 이상의 필드에 오류가 있습니다. 재확인 후 다시 시도하세요"})
    } else {
        axios.post("http://localhost:3306/designer", {
          tour: tour,
          full_name: this.state.full_name,
          phone: this.state.phone,
          year: this.state.year,
          salary: this.state.salary,
          custom: this.state.custom,
          instagram: this.state.instagram,
          route: route,
          career: this.state.career,
          question: this.state.question,
        }).then(()=>{
          window.alert("요청에 성공하셨습니다")
        }).catch(err => {
            this.setState({error: "동일한 전화번호가 있습니다"})
      })
    }
  }

  render() {
    return (
        <div>
          <p><label> ◼︎ 투어를 원하시는 지점을 선택해주세요.</label></p>
          <p>
              <span className="">
                  <span className="">
                      <span className="">
                          <input name="tour" type="checkbox" value="1" />
                          <span className="">1호점(홍대점) - 전석 입점 완료</span>
                      </span>
                  </span>
              </span>
          </p>
          <p>
              <span className="">
                  <span className="">
                      <span className="">
                          <input name="tour" type="checkbox" value="2" />
                          <span className="">2호점(신촌점) - 전석 입점 완료</span>
                      </span>
                  </span>
              </span>
          </p>
          <p>
              <span className="">
                  <span className="">
                      <span className="">
                          <input name="tour" type="checkbox" value="3" />
                          <span className="">3호점(합정점) - 전석 입점 완료</span>
                      </span>
                  </span>
              </span>
          </p>
          <p>
              <span className="">
                  <span className="">
                      <span className="">
                        <input name="tour" type="checkbox" value="4" />
                        <span className="">4호점(홍대점) - 전석 입점 완료</span>
                      </span>
                  </span>
              </span>
          </p>
          <p>
              <span className="">
                  <span className="">
                      <span className="">
                          <input name="tour" type="checkbox" value="5" />
                          <span className="">5호점(2021년 12월 오픈예정) - 희망지역 문의</span>
                      </span>
                  </span>
              </span>
          </p>
      <p></p>
      <p>
          <label> ◼︎ 성함을 입력해주세요. <span className="">*</span><br></br>
              <span className="">
                <input type="text"  size="40" className="" onChange={this.handleInputValue("full_name")} />
              </span>
          </label>
      </p>
      <p>
          <label> ◼︎ 연락처를 입력해주세요.<span className="">*</span><br></br>
              <span className="">
                  <input type="tel" size="40" className="" onChange={this.handleInputValue("phone")} />
              </span>
          </label>
      </p>
      <p>
          <label> ◼︎ 디자이너 경력을 입력해주세요. (단위 : 년)<br></br>
              <span className="">
                  <input type="text" size="40" className="" onChange={this.handleInputValue("year")} />
              </span>
          </label>
      </p>
      <p>
          <label> ◼︎ 이전 근무지에서의 매출(평균)을 입력해주세요. (단위 : 만원)<br></br>
              <span className="">
                  <input type="text" size="40" className="" onChange={this.handleInputValue("salary")} />
              </span>
          </label>
      </p>
      <p>
          <label> ◼︎ 개인(단골)고객을 보유하고 계신가요?<br></br> - 개인고객 : 샵을 옮겨도 방문 가능한 고객<br></br>
              <span className="">
                  <span className="">
                      <span className="">
                          <input name="custom" type="radio" value="1" onClick={()=>{this.setState({custom:1})}}/>
                          <span className="">있음</span>
                      </span>
                      <span className="">
                          <input name="custom" type="radio" value="0" onClick={()=>{this.setState({custom:0})}}/>
                          <span className="">없음</span>
                      </span>
                  </span>
              </span>
          </label>
      </p>
      <p>
          <label> ◼︎ 인스타그램 계정 아이디를 입력해주세요.<span className="">*</span><br></br>
              <span className="">
                  <input type="text" size="40" className="" onChange={this.handleInputValue("instagram")} />
              </span>
          </label>
      </p>
      <p>
          <label> ◼︎ 로위를 찾아오신 유입경로를 선택해주세요.<br></br>
              <span className="">
                  <span className="">
                      <span className="">
                          <input name="route" type="checkbox" value="1" />
                          <span className="">SNS광고(페이스북,인스타그램)</span>
                      </span>
                      <span className="">
                          <input name="route" type="checkbox" value="2" />
                          <span className="">검색(네이버,구글)</span>
                      </span>
                      <span className="">
                          <input name="route" type="checkbox" value="3" />
                          <span className="">기타 매체(뉴스,블로그 등)</span>
                      </span>
                      <span className="">
                          <input name="route" type="checkbox" value="4" />
                          <span className="">지인추천</span>
                      </span>
                      <span className="">
                          <input name="route" type="checkbox" value="5" />
                          <span className="">헤어인잡</span>
                      </span>
                  </span>
              </span>
              <br></br>
          </label>
      </p>
      <p>
          <label> ◼︎ 경력이 될 만한 사항이 있으시다면 적어주세요.<br></br> - 교육수료내용, 브랜드샵 근무, 인플루언서 등<br></br>
              <span className="">
                  <textarea cols="40" rows="10" className="" onChange={this.handleInputValue("career")} />
              </span>
          </label>
      </p>
      <p>
          <label> ◼︎ 궁금하신 문의사항을 작성해주세요.<br></br>
              <span className="">
                  <textarea cols="40" rows="10" className="" onChange={this.handleInputValue("question")} />
              </span>
          </label>
      </p>
      <button className="" onClick={this.handlesubmit}> submit </button>
      <div>{this.state.error}</div>
    </div>
    );
  }
}

export default Request;





