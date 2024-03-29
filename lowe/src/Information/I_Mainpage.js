/* eslint-disable no-loop-func */
import { Component } from "react";
import Firstsec from "./I_Firstsec";
import Map from "./I_Map";
import Secondsec from "./I_Secondsec";
import Header from "../nav/SubHeader";
import Footer from "../nav/Footer";
import { Helmet } from 'react-helmet';

const { kakao } = window;

class I_Mainpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '방배점',
      clickloc: ''
    };
  }

  componentDidMount = () =>{

    window.localStorage.setItem("route", "지점현황");
}

  kakaoMap = () => {
    let container = document.getElementById('map');
    let options = {}
    if (window.innerWidth > 1000) {
      options = {
        center: new kakao.maps.LatLng(37.52777036753169, 126.975538807699239),
        level: 8,
        disableDoubleClickZoom: true,
        draggable: true
      };
    } else {
      options = {
        center: new kakao.maps.LatLng(37.52777036753169, 126.975538807699239),
        level: 9,
        disableDoubleClickZoom: true,
        draggable: true
      };

    }

    let positions = [
      {
        title: '강남점',
        latlng: new kakao.maps.LatLng(37.49203234734332, 127.031030518148)
      },
      {
        title: '신촌점',
        latlng: new kakao.maps.LatLng(37.55603234734332, 126.93504930518148)
      },
      {
        title: '홍대점',
        latlng: new kakao.maps.LatLng(37.55451175644609, 126.92030633510501)
      },
      {
        title: '합정점',
        latlng: new kakao.maps.LatLng(37.5503158455698, 126.9158487203200)
      },
      {
        title: 'L7홍대점',
        latlng: new kakao.maps.LatLng(37.55572265644609, 126.92168633510501)
      },
      {
        title: '이수역점',
        latlng: new kakao.maps.LatLng(37.48511234734332, 126.982730518148)
      },
      {
        title: '성수점',
        latlng: new kakao.maps.LatLng(37.54481234734332, 127.0543230518148)
      },
      {
        title: '방배점',
        latlng: new kakao.maps.LatLng(37.481133111289, 126.99736034543)
      },

      
    ], selectedMarker = null;

    let map = new kakao.maps.Map(container, options);
    let normal = process.env.PUBLIC_URL + "/image/info/map_black.png";
    let click = process.env.PUBLIC_URL + "/image/info/map_green.png";


    for (let i = 0; i < positions.length; i++) {

      // 마커 이미지의 이미지 크기 입니다
      let imageSize = new kakao.maps.Size(66, 66);

      // 마커 이미지를 생성합니다    
      let NormalmarkerImage = new kakao.maps.MarkerImage(normal, imageSize);
      let ClickmarkerImage = new kakao.maps.MarkerImage(click, imageSize);

      // 마커를 생성합니다
      let marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: NormalmarkerImage // 마커 이미지 
      });

      marker.NormalmarkerImage = NormalmarkerImage;

      marker.setClickable(true);
      marker.setMap(map);
      let iwContent = positions[i].title;

      kakao.maps.event.addListener(marker, 'mouseover', function () {
        // 클릭된 마커가 없고, mouseover된 마커가 클릭된 마커가 아니면
        // 마커의 이미지를 오버 이미지로 변경합니다
        if (!selectedMarker || selectedMarker !== marker) {
          marker.setImage(NormalmarkerImage);
        }
      });


      kakao.maps.event.addListener(marker, 'mouseout', () => {

        if (!selectedMarker || selectedMarker !== marker) {
          marker.setImage(NormalmarkerImage);
        }
      });

      kakao.maps.event.addListener(marker, 'click', () => {
        if (!selectedMarker || selectedMarker !== marker) {
          !!selectedMarker && selectedMarker.setImage(selectedMarker.NormalmarkerImage);
          marker.setImage(ClickmarkerImage);
        }

        selectedMarker = marker;
        this.setState({ location: iwContent })
      })
    }
  }

  onClicklocation = (value) => () => {
    this.setState({ location: value, clickloc: value }, () => this.kakaoMap())
  }

  render() {
    return (
      <>
        <Helmet>
          <title>국내 대표 공유미용실 로위(LOWE) - 지점 위치 소개</title>
          <meta charSet="utf-8" />
          <meta property="og:title" content="국내 대표 공유미용실 로위(LOWE) - 지점 위치 소개" />
          <meta property="og:url" content="https://lo-we.kr/info" />
        </Helmet>
        <div id="header_trigger" />
        <Header navColor={true} />
        <Firstsec />
        <Secondsec location={this.state.location} onClicklocation={this.onClicklocation} />
        <Map kakaoMap={this.kakaoMap} />
        <div id="script"></div>
        <Footer />
      </>
    )
  }
}

export default I_Mainpage;