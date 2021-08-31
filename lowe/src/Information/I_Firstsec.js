import { Component } from "react";
const { kakao } = window;

class D_Firstsec extends Component {
  constructor(props) {
    super(props);
    this.state = {
        location: ''
    };
  }
  
  componentDidMount = () => {
    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(37.55217036753169, 126.92538807699239),
      level: 6,
      draggable: false
    };
    let map = new kakao.maps.Map(container, options);
    let mapTypeControl = new kakao.maps.MapTypeControl();

// 지도 타입 컨트롤을 지도에 표시합니다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

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
            latlng: new kakao.maps.LatLng(37.5503258405698, 126.91573972032567)
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
        marker.setMap(map);
            // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
        let iwContent = positions[i].title; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        // iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

        // 인포윈도우를 생성합니다
        // let infowindow = new kakao.maps.InfoWindow({
        //     content : iwContent,
        //     removable : iwRemoveable
        // });
        kakao.maps.event.addListener(marker, 'click', function() {
            // 마커 위에 인포윈도우를 표시합니다
            // infowindow.open(map, marker);
            let message = iwContent
            var resultDiv = document.getElementById('loc'); 
            resultDiv.innerHTML = message;
        })
    }
  } 

  render() {
    return (
      <div>
          <div id="map" style={{width:"400px",height:"400px"}} onClick={()=>{
              if(document.getElementById('loc').outerText === '신촌점'){
                  this.setState({location: '신촌점'})
              } else if (document.getElementById('loc').outerText === '홍대점'){
                this.setState({location: '홍대점'})
              } else {
                this.setState({location: '합정점'})
              }
          }}></div>
          <div id="loc"></div>
          <div>
              {this.state.location === '신촌점' ? 
              <div>안녕하세요 이곳은 신촌점 입니다</div>: 

              this.state.location === '홍대점' ? 
              <div>안녕하세요 이곳은 홍대점 입니다</div> : 

              this.state.location === '합정점' ? 
              <div>안녕하세요 이곳은 합정점 입니다</div> :

              <div>이곳은 로위입니다</div>
              }
          </div>
      </div>
    )
  }
}

export default D_Firstsec;