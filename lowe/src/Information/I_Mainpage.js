import { Component } from "react";
import Firstsec from "./I_Firstsec";
import Secondsec from "./I_Secondsec";
import Thirdsec from "./I_Thirdsec";
import "./I_Mainpage.css";

const { kakao } = window;

class D_Mainpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        location: '',
        clickloc: ''
    };
  }
  
  kakaoMap = () => {
    let container = document.getElementById('map');
    let options = {};
    if(this.state.clickloc === '신촌점'){
      options = {
        center: new kakao.maps.LatLng(37.55603234734332, 126.93504930518148),
        level: 1,
      };
    } else if(this.state.clickloc === '홍대점'){
      options = {
        center: new kakao.maps.LatLng(37.55041175644609, 126.92279833510501),
        level: 1,
      };      
    } else if(this.state.clickloc === '합정점'){
      options = {
        center: new kakao.maps.LatLng(37.5503158455698, 126.9158487203200),
        level: 1,
      };      
    } else {
      options = {
        center: new kakao.maps.LatLng(37.55217036753169, 126.92538807699239),
        level: 7,
      };
    }

    let map = new kakao.maps.Map(container, options);

    let positions = [
        {
            title: '신촌점', 
            latlng: new kakao.maps.LatLng(37.55603234734332, 126.93504930518148)
        },
        {
            title: '홍대점', 
            latlng: new kakao.maps.LatLng(37.55041175644609, 126.92279833510501)
        },
        {
            title: '합정점', 
            latlng: new kakao.maps.LatLng(37.5503158455698, 126.9158487203200)
        },

    ];

    let imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    

    for (let i = 0; i < positions.length; i ++) {
        
        // 마커 이미지의 이미지 크기 입니다
        let imageSize = new kakao.maps.Size(24, 35); 
        
        // 마커 이미지를 생성합니다    
        let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);  

        // 마커를 생성합니다
        let marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng, // 마커를 표시할 위치
            title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image : markerImage // 마커 이미지 
        });

        marker.setClickable(true);
        marker.setMap(map);
            // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
        let iwContent = positions[i].title; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        // let iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다



        // 인포윈도우를 생성합니다
        let infowindow = new kakao.maps.InfoWindow({
            content : iwContent,
        });
        kakao.maps.event.addListener(marker, 'mouseover', function() {
          // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
            infowindow.open(map, marker);
        });
        
        // 마커에 마우스아웃 이벤트를 등록합니다
        kakao.maps.event.addListener(marker, 'mouseout', function() {
            // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
            infowindow.close();
        });

        kakao.maps.event.addListener(marker, 'click', () => {
          // 마커 위에 인포윈도우를 표시합니다
          // infowindow.open(map, marker);
          this.setState({location: iwContent})
        })
      }
  } 

   onClicklocation = (value) => () => {
    this.setState({location: value, clickloc: value}, ()=>this.kakaoMap())
  }

  render() {
    console.log(this.state.clickloc)
    return (
      <div className="Info_main">
        <div className="Info_top_sec">
          <Firstsec kakaoMap={this.kakaoMap} onClicklocation={this.onClicklocation} />
          <Secondsec location={this.state.location} />
        </div>
        <div className="Info_bottom_sec">
          <Thirdsec location={this.state.location} />
        </div>
      </div>
    )
  }
}

export default D_Mainpage;





