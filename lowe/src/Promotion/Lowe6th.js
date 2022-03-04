import { Component } from "react";
import "./Lowe6th.css";
import Slider from "react-slick";
import Map from "./P_Map2";
import ScrollContainer from 'react-indiana-drag-scroll'

const { kakao } = window;

class Lowe6th extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            clickloc: '',
            space: '01.png',
        };
    }


    kakaoMap = () => {
        let container = document.getElementById('promtion_map');
        let options = {}
        options = {
            center: new kakao.maps.LatLng(37.55572265644609, 126.92168633510501),
            level: 4,
            disableDoubleClickZoom: true,
            draggable: true
        };

        let positions = [
            {
                title: 'L7 홍대점',
                latlng: new kakao.maps.LatLng(37.55572265644609, 126.92168633510501)
            }
        ];

        let map = new kakao.maps.Map(container, options);
        let click = process.env.PUBLIC_URL + "/image/info/map_green.png";


        for (let i = 0; i < positions.length; i++) {

            // 마커 이미지의 이미지 크기 입니다
            let imageSize = new kakao.maps.Size(66, 66);

            // 마커 이미지를 생성합니다    
            let NormalmarkerImage = new kakao.maps.MarkerImage(click, imageSize);

            // 마커를 생성합니다
            let marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: positions[i].latlng, // 마커를 표시할 위치
                title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image: NormalmarkerImage // 마커 이미지 
            });

            marker.NormalmarkerImage = NormalmarkerImage;
        }
    }

    onclickImg = (val) => (e) => {
        this.setState({ space: val })
    }

    render() {
        var setting = {
            dots: true,
            infinite: false,
            autoplaySpeed: 10000,
            pauseOnHover: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
        };
        let spaceimg = ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png"]
        return (
            <section className="Lowe5th_section">
                <div className="Lowe5th_div" >
                    {/* <img src={process.env.PUBLIC_URL + "/image/promotion/06/01.png"} alt="로위 6호점 L7" /> */}

                    <div className="Lowe5th_slider_div">
                        <div className="Lowe5th_slider_title">
                            <div className="Lowe5th_slider_title_sub"><span>NEW</span>4월 중 오픈예정</div>
                            <div className="Lowe5th_slider_title_main">로위 L7홍대점</div>
                            <div className="Lowe5th_slider_title_loc">마포구 양화로 141 (홍대 L7롯데호텔) 3층</div>
                        </div>
                        <div className="Lowe5th_slider">
                            <Slider {...setting}>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/image/promotion/06/main/01.png"} alt="로위 6호점 L7" />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/image/promotion/06/main/02.png"} alt="로위 6호점 L7" />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/image/promotion/06/main/03.png"} alt="로위 6호점 L7" />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/image/promotion/06/main/04.png"} alt="로위 6호점 L7" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="Lowe5th_space_div">
                        <div>
                            <div className="Lowe5th_space_first">출퇴근길과 고객이 찾아오기 쉬워져요</div>
                            <div className="Lowe5th_space_second">홍대입구역 1번 출구</div>
                        </div>
                        <div className="Lowe5th_care_img_div">
                            <img src={process.env.PUBLIC_URL + "/image/promotion/06/02.png"} alt="로위 6호점 L7" />
                        </div>
                        <div className="Lowe5th_care_text">
                        대표 미용핵심지역, 홍대에 나만의 샵을 오픈하세요!<br />홍대입구역 1번 출구 도보 1분으로 디자이너 출퇴근길과 고객이 찾아오는 길이 쉬워집니다. 홍대만의 트렌디함을 원하는 MZ세대의 많은 고객들을 이제는 로위에서 충분히 만나보실 수 있습니다. 

                        </div>
                            <div className="Lowe5th_space_text_div" style={{marginTop: "20px"}}>
                                <ul className="notice-list">
                                    <li><span className="num">✔</span><span style={{color:"#FB6F20", fontWeight: "700"}}>홍대입구역 1번 출구</span> 도보 1분 (횡단보도x)️</li>
                                    <li><span className="num">✔</span><span style={{color:"#FB6F20", fontWeight: "700"}}>초역세권,</span> 메인 홍대입구역 사거리 위치</li>
                                    <li><span className="num">✔</span>트렌디한 홍대 감성의 <span style={{color:"#FB6F20", fontWeight: "700"}}>MZ세대의 많은 고객</span></li>
                                </ul>
                            </div>
                    </div>
                    <div className="Lowe5th_map_div">
                        
                    <div>
                            <div className="Lowe5th_space_first">쇼핑,대학교,오피스,병원까지</div>
                            <div className="Lowe5th_space_second">로위 L7홍대점 빌딩은</div>
                        </div>
                        <div className="Lowe5th_care_img_div">
                            <img src={process.env.PUBLIC_URL + "/image/promotion/06/03.png"} alt="로위 6호점 L7" />
                        </div>
                        <div className="Lowe5th_care_text">
                        로위 L7홍대점은 밀레니얼 세대에 맞는 다양한 업종들로 이루어진 프리미엄 빌딩에 있습니다. 롯데의 L7홍대 호텔, 라인프렌즈, 엔젤리너스 등을 비롯해 주위에 홍익대학교, 메가박스 등 편리하고 여가를 즐기기 위한 곳들로 가득 차 로위 L7홍대점도 이러한 여가공간 중심에 위치합니다.    
                        </div>
                            <div className="Lowe5th_space_text_div" style={{marginTop: "20px"}}>
                                <ul className="notice-list">
                                    <li><span className="num">✔</span><span style={{color:"#FB6F20", fontWeight: "700"}}>롯데 L7홍대 호텔 건물 3층</span></li>
                                    <li><span className="num">✔</span>홍대 메인 사거리가 모두 보이는 <span style={{color:"#FB6F20", fontWeight: "700"}}>통창뷰 건물</span></li>
                                    <li><span className="num">✔</span>호텔, 피부과, 카페 등 입점한 <span style={{color:"#FB6F20", fontWeight: "700"}}>복합 여가공간 중심에 위치</span></li>
                                </ul>
                            </div>
                    </div>
                    <div className="Lowe5th_recommand_div">
                        <div>
                            <div className="Lowe5th_care_first">홍대에서 처음 경험하는</div>
                            <div className="Lowe5th_care_first"><strong>새로운 프라이빗룸 미용실</strong></div>
                        </div>
                        <div className="Lowe5th_care_img_div">
                            <img src={process.env.PUBLIC_URL + "/image/promotion/06/05.png"} alt="로위 6호점 L7" />
                        </div>

                        <div className="Lowe5th_care_text">
                            다른 디자이너와 눈이 마주치거나, 고객과의 대화 내용이 들릴까 신경 쓰지 마세요! 이제 샵에서 근무할 때도 나만의 룸에서 고객을 맞이할 수 있답니다.
                        </div>

                        <div className="Lowe5th_care_img_div">
                            <img src={process.env.PUBLIC_URL + "/image/promotion/06/06.png"} alt="로위 6호점 L7" />
                        </div>
                    </div>
                    <div className="Lowe5th_map_div">
                        <div>
                            <div className="Lowe5th_map_first">로위 L7홍대점 위치</div>
                            <div className="Lowe5th_care_text" style={{marginBottom: "60px"}}>디자이너, 신규&기존 고객 모두 만족할 수 있는<br />홍대입구역 초역세권 위치</div>
                        </div>
                        <Map kakaoMap={this.kakaoMap} />
                        <div>
                            <div className="Lowe5th_map_thrid">마포구 양화로 141 (홍대 L7롯데호텔) 3층, 로위 L7 홍대점</div>
                        </div>
                    </div>
                    {/* <div className="Lowe5th_space_div">
                        <div>
                            <div className="Lowe5th_space_first">먼저 눈으로 확인해보세요!</div>
                            <div className="Lowe5th_space_second">L7홍대점 공간이미지</div>
                        </div>
                        <div>
                            <img className="Lowe5th_space_mainimg" src={process.env.PUBLIC_URL + "/image/promotion/06/space/" + this.state.space} alt="로위 공간이미지" />
                            <div>
                                <ScrollContainer className="filter_subimg" hideScrollbars={false}>
                                    {
                                        spaceimg.map((e) => (
                                            <img onClick={this.onclickImg(e)} className={this.state.space === e ? "Lowe5th_space_subimg" : "Lowe5th_space_subimg darkmode"} src={process.env.PUBLIC_URL + "/image/promotion/06/space/" + e} alt="로위 공간이미지" />
                                        ))
                                    }
                                </ScrollContainer>
                            </div>
                            <div className="Lowe5th_space_text_div">
                                <div><strong>홍대입구역</strong> 프라이빗룸 공유미용실</div>
                                <ul className="notice-list">
                                    <li><span className="num">+</span>자연광이 들어오는 <strong>통창 개별룸(선착순 룸선택)</strong></li>
                                    <li><span className="num">+</span>최적의 룸온도를 유지할 <strong>천장형 개별 냉난방 시스템</strong></li>
                                    <li><span className="num">+</span>지하 5층 규모의 <strong>건물 전용 주차시설</strong></li>
                                    <li><span className="num">+</span>디자이너 전용 <strong>휴게 공간</strong></li>
                                    <li><span className="num">+</span>외부 소음에 영향 없는 <strong>프라이빗룸 방음 설계</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div> */}
                    <div className="Lowe5th_free_div">
                        <div className="Lowe5th_free_title">
                            <div className="Lowe5th_free_title_main">일한 만큼 가져가는</div>
                            <div className="Lowe5th_free_title_main"><strong>최대 60% 매출 인센티브제</strong></div>
                        </div>
                        <img src={process.env.PUBLIC_URL + "/image/promotion/06/04.png"} alt="로위 6호점 L7" />
                    </div>
                    <div className="Lowe5th_recommand_div">
                        <div>
                            <div className="Lowe5th_care_first">로위 디자이너</div>
                            <div className="Lowe5th_care_first"><strong>근무 혜택</strong></div>
                        </div>

                        <div className="Lowe5th_care_img_div">
                            <img src={process.env.PUBLIC_URL + "/image/promotion/06/08.png"} alt="로위 6호점 L7" />
                        </div>
                    </div>
                    <div className="Lowe5th_free_div">
                        <div className="Lowe5th_recommand_text_div">
                            <div>이런 헤어디자이너 분들께<br />추천해요!</div>
                            <ul className="notice-list">
                                <li><span className="num">1.</span><strong>1:1로 고객을 맞이할 프라이빗 공간</strong>을 원하<br />시는 헤어디자이너분들</li>
                                <li><span className="num">2.</span><strong>마포구, 서대문구에서 근무</strong>하고 있는 헤어<br />디자이너분들</li>
                                <li><span className="num">3.</span>이제는 <strong>일한 만큼 가져가고 싶은</strong> 헤어디자<br />이너분들</li>
                                <li><span className="num">4.</span>마케팅으로 <strong>이제 나만의 브랜드를 더 알리<br />고 싶은</strong> 헤어디자이너분들</li>
                            </ul>
                        </div>
                    </div>
                    
                    
                    
                    <div className="Lowe5th_recommand_div">
                        <div>
                            <div className="Lowe5th_promotion_div_title">로위 L7홍대점<br />입점 특별 프로모션</div>
                            <div className="Lowe5th_promotion_div_content">
                                오직 오픈멤버 디자이너에게만 드리는 혜택
                            </div>
                        </div>
                        <div className="Lowe5th_promotion_img">
                            <img src={process.env.PUBLIC_URL + "/image/promotion/06/07.png"} alt="로위 6호점 L7" />
                            <div >
                                ‘잘 할 수 있을까?’<br /><strong>부담은 덜고, 동기부여는 높이고<br />6개월동안 정착지원금을 지원</strong>해드립니다
                            </div>
                        </div>
                    </div>
                    <div className="Lowe5th_banners_div">
                        <span style={{color: "#F4ED3D"}}>**인기있는 룸은 <strong>빠르게 마감</strong></span>됩니다. 서두르세요!!
                    </div>

                    <div className="Lowe6th_request_div" id="6th_request">
                        <div className="Lowe6th_request_div_title">채용 절차</div>
                        <div className="Lowe6th_request_div_content">
                            <div className="Lowe6th_request_div_circle">서류</div>
                            <div ><img src={process.env.PUBLIC_URL + "/image/promotion/06/arrow.svg"} alt="로위 6호점 L7" /></div>
                            <div className="Lowe6th_request_div_circle">면접</div>
                            <div><img src={process.env.PUBLIC_URL + "/image/promotion/06/arrow.svg"} alt="로위 6호점 L7" /></div>
                            <div className="Lowe6th_request_div_circle">최종 합격</div>
                        </div>
                        <div className="Lowe6th_request_div_title" style={{marginTop: "70px"}}>지원방법</div>
                        <div className="Lowe6th_request_div_content_text">
                        자유로운 양식의 이력서 작성 후,<br /><strong style={{color: "#fb6f20"}}>E-mail<u style={{fontWeight: 400}}>(recruit@bentlespace.com)</u>로 접수</strong>해주세요
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Lowe6th;





