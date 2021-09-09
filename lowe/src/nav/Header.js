import './Header.css';
import { Component } from 'react';

class Header extends Component {

  componentDidMount = () => {
    document.addEventListener('scroll', function () {
      var currentScrollValue = document.documentElement.scrollTop;
      let header = document.getElementById("scroll");
      if (currentScrollValue > 280) {
        header.classList.add("add-background");
      } else {
        header.classList.remove("add-background");
      }
    });
  }

  render() {
    return (
      <header id="scroll" className="smooth">
        <a href="/">
          <div className="logo">
            <img src="image/Nav/logo.png" className="logoView" alt="logo"></img> 
          </div>
        </a>
        <div className="menu-wrap">
          <input type="checkbox" className="toggler" />
          <div className="hamburger">
            <div></div>
          </div>
          <div className="menu">
            <div className="menuAll">
              <div className="menuBar">
                <ul className="menuList">
                  <li>
                    <a href="/info">디자이너</a>
                  </li>
                  <li>
                    <a href="/request">신청양식</a>
                  </li>
                  <li>
                    <div onClick={() => { alert("준비중 입니다") }}>옵션1</div>
                  </li>
                  <li>
                    <a href="/testserver">테스트</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header >
    );
  }
}
export default Header;