import { Component } from "react";
import "./Lowe6th.css";
import Slider from "react-slick";
import Map from "./P_Map3";
import ScrollContainer from 'react-indiana-drag-scroll'

const { kakao } = window;

class Lowe7th extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            clickloc: '',
            space: '01.jpg',
        };
    }


    kakaoMap = () => {
        let container = document.getElementById('promtion_map');
        let options = {}
        options = {
            center: new kakao.maps.LatLng(37.48504234734332, 126.982750518148),
            level: 3,
            disableDoubleClickZoom: true,
            draggable: true
        };

        let positions = [
            {
                title: '이수역점',
                latlng: new kakao.maps.LatLng(37.48504234734332, 126.982750518148)
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
        let spaceimg = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"]
        return (
            <section className="Lowe5th_section">
                <div className="Lowe5th_div" >
                    {/* <img src={process.env.PUBLIC_URL + "/image/promotion/06/01.png"} alt="로위 7호점 이수역점" /> */}

                    <div className="Lowe6th_firstsec_div">
                        <div>
                            <div className="Lowe6th_firstsec_title">로위 <span>이수역점</span></div>
                            <div className="Lowe6th_firstsec_title">디자이너</div>
                            <div className="Lowe6th_firstsec_title" style={{color: "#ffffff"}}>상반기 공개 모집</div>
                        </div>
                        <div style={{marginTop: "40px"}}>
                            <div className="Lowe6th_firstsec_sub" style={{lineHeight: "150%"}}>로위 이수역점은</div>
                            <div className="Lowe6th_firstsec_sub" style={{lineHeight: "150%"}}><span>공유미용실 시스템(입점형)이 아닌</span></div>
                            <div className="Lowe6th_firstsec_sub" style={{lineHeight: "150%"}}>일반미용실 시스템(채용형)과 동일<span>합니다</span></div>
                        </div>
                        <div style={{marginTop: "115px"}}>
                            <div style={{marginBottom: "40px"}}>
                                <div className="Lowe6th_firstsec_content_circle">모집분야</div>
                                <div className="Lowe6th_firstsec_content_text">신입/경력 1년 이상 헤어 디자이너</div>
                            </div>
                            <div style={{marginBottom: "40px"}}>
                                <div className="Lowe6th_firstsec_content_circle">근무위치</div>
                                <div className="Lowe6th_firstsec_content_text" style={{fontWeight: "400", marginBottom: "16px"}}>이수역점</div>
                                <div className="Lowe6th_firstsec_content_text" style={{fontSize: "18px", color: "#9c9c9c"}}>서초구 방배동 1715 이수파이브(ISUFIVE), 3층</div>
                            </div>
                            <div style={{marginBottom: "40px"}}>
                                <div className="Lowe6th_firstsec_content_circle">근무시간</div>
                                <div className="Lowe6th_firstsec_content_text">주5일 근무제, 10:30 ~ 19:30</div>
                            </div>
                            <div style={{marginBottom: "40px", maxWidth: "404px", wordBreak: "keep-all"}}>
                                <div className="Lowe6th_firstsec_content_circle">급여</div>
                                <div className="Lowe6th_firstsec_content_text" style={{fontWeight: "400", marginBottom: "4px"}}>인센티브 42~60%</div>
                                <div className="Lowe6th_firstsec_content_text" style={{fontSize: "18px", color: "#9c9c9c",marginBottom: "12px"}}>(*매출별 차등 지급)</div>
                                <div className="Lowe6th_firstsec_content_text" style={{fontWeight: "400", marginBottom: "4px"}}>정착지원금 6개월 지원, 220~300만원 지원</div>
                                <div className="Lowe6th_firstsec_content_text" style={{fontSize: "18px", color: "#9c9c9c"}}>(*경력별 차등 지급)</div>
                            </div>
                            <div style={{marginBottom: "40px"}} className="Lowe6th_firstsec_content_img">
                                <div className="Lowe6th_firstsec_content_circle">교육사항</div>
                                <div className="Lowe6th_firstsec_content_text" style={{marginBottom: "18px"}}>탑디자이너 기술 내,외부교육</div>
                                <div><img src={process.env.PUBLIC_URL + "/image/promotion/06/01/01.png"}  style={{marginBottom: "16px"}} alt="로위 7호점 이수역점" /></div>
                                <div><img src={process.env.PUBLIC_URL + "/image/promotion/06/01/02.png"}  style={{marginBottom: "40px"}} alt="로위 7호점 이수역점" /></div>
                                <div className="Lowe6th_firstsec_content_text" style={{marginBottom: "18px"}}>헤어사진 촬영 전문가 교육</div>
                                <div><img src={process.env.PUBLIC_URL + "/image/promotion/06/01/03.png"}  style={{marginBottom: "40px"}} alt="로위 7호점 이수역점" /></div>
                                <div className="Lowe6th_firstsec_content_text" style={{marginBottom: "18px"}}>CS 교육</div>
                                <div><img src={process.env.PUBLIC_URL + "/image/promotion/06/01/04.png"}  alt="로위 7호점 이수역점" /></div>
                            </div>
                            <div style={{marginBottom: "40px"}}>
                                <div className="Lowe6th_firstsec_content_circle">복리후생</div>
                                <div className="Lowe6th_firstsec_content_text">
                                    <li>설/추석, 디자이너 생일 선물 지급</li>
                                    <li>여름휴가</li>
                                    <li>우수 디자이너 프리미엄 호텔 식사권 증정</li>
                                    <li>디자이너 로위 웰컴키트 증정</li>
                                </div>
                            </div>
                            <div style={{marginBottom: "40px"}}>
                                <div className="Lowe6th_firstsec_content_circle">우대사항</div>
                                <div className="Lowe6th_firstsec_content_text" style={{fontWeight: "400", marginBottom: "16px"}}>SNS 활성화</div>
                                <div className="Lowe6th_firstsec_content_text" style={{fontSize: "18px", color: "#9c9c9c"}}>ex. 인스타그램/블로그/유튜브 등</div>
                            </div>
                            <div style={{marginBottom: "40px"}}>
                                <div className="Lowe6th_firstsec_content_circle">면접장소</div>
                                <div className="Lowe6th_firstsec_content_text" style={{fontWeight: "400", marginBottom: "16px"}}>서울 마포구 동교로 25길 10 3층(로위 본사)</div>
                            </div>
                            <div style={{marginBottom: "40px"}}>
                                <div className="Lowe6th_firstsec_content_circle">채용절차</div>
                                <div className="Lowe6th_request_div_content">
                                    <div className="Lowe6th_request_div_circle">서류</div>
                                    <div><img src={process.env.PUBLIC_URL + "/image/promotion/06/arrow.svg"} alt="로위 7호점 이수역점" /></div>
                                    <div className="Lowe6th_request_div_circle">면접</div>
                                    <div><img src={process.env.PUBLIC_URL + "/image/promotion/06/arrow.svg"} alt="로위 7호점 이수역점" /></div>
                                    <div className="Lowe6th_request_div_circle">최종 합격</div>
                                </div>
                            </div>
                            <div style={{marginBottom: "20px"}}>
                                <div className="Lowe6th_firstsec_content_circle">지원방법</div>
                                <div className="Lowe6th_firstsec_content_text" style={{fontWeight: "400"}}>1. 하단 ‘지원하기’ 버튼 클릭</div>
                                <div className="Lowe6th_firstsec_content_text" style={{fontWeight: "400"}}>2. 이력서 다운로드 후</div>
                                <div className="Lowe6th_firstsec_content_text" style={{fontWeight: "400"}}>3. 아래 이메일로 첨부하여 제출</div>
                            </div>ㅡ먀ㅜ
                            <div style={{marginBottom: "60px"}}>
                                <div className="Lowe6th_firstsec_content_address">recruit@bentlespace.com</div>
                            </div>
                        </div>
                    </div>
                    <div className="Lowe5th_slider_div">
                        <div className="Lowe5th_slider_title">
                            <div className="Lowe5th_slider_title_sub"><span>NEW</span>5월 중 오픈예정</div>
                            <div className="Lowe5th_slider_title_main">로위 이수역점</div>
                            <div className="Lowe5th_slider_title_loc">서초구 방배동 1715 이수파이브(ISUFIVE), 3층</div>
                        </div>
                        <div className="Lowe5th_slider">
                            <Slider {...setting}>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/image/promotion/07/main/01.jpg"} alt="로위 7호점 이수역점" />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/image/promotion/07/main/02.jpg"} alt="로위 7호점 이수역점" />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/image/promotion/07/main/03.jpg"} alt="로위 7호점 이수역점" />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/image/promotion/07/main/04.jpg"} alt="로위 7호점 이수역점" />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/image/promotion/07/main/05.jpg"} alt="로위 7호점 이수역점" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="Lowe5th_space_div">
                        <div>
                            <div className="Lowe5th_space_first">지하철역 내리자마자 로위가 반겨요</div>
                            <div className="Lowe5th_space_second">이수역 5번 출구</div>
                        </div>
                        <div className="Lowe5th_care_img_div">
                            <img src={process.env.PUBLIC_URL + "/image/promotion/07/02.png"} alt="로위 7호점 이수역점" />
                        </div>
                        <div className="Lowe5th_care_text">
                        이수역점 5번 출구에서 오직 도보 30초로 디자이너 출퇴근길과 고객이 찾아오는 길이 쉬워집니다.<br />
                        4,7호선이 다니는 더블 역세권으로 유동인구가 많은 환승역이며, 다양한 고객들을 워킹 고객 이상으로 만나보실 수 있습니다.

                        </div>
                            <div className="Lowe5th_space_text_div" style={{marginTop: "20px"}}>
                                <ul className="notice-list">
                                    <li><span className="num">✔</span>이수역 5,6번 출구 <span style={{color:"#FB6F20", fontWeight: "700"}}>도보 30초</span></li>
                                    <li><span className="num">✔</span>4,7호선 더블 <span style={{color:"#FB6F20", fontWeight: "700"}}>초초역세권</span></li>
                                    <li><span className="num">✔</span>다양하고 많은 <span style={{color:"#FB6F20", fontWeight: "700"}}>워킹 고객</span></li>
                                </ul>
                            </div>
                    </div>
                    <div className="Lowe5th_map_div">
                        
                    <div>
                            <div className="Lowe5th_space_first">카페,병원,영화관,오피스까지</div>
                            <div className="Lowe5th_space_second">로위 이수역점 빌딩은</div>
                        </div>
                        <div className="Lowe5th_care_img_div">
                            <img src={process.env.PUBLIC_URL + "/image/promotion/07/03.png"} alt="로위 7호점 이수역점" />
                        </div>
                        <div className="Lowe5th_care_text">
                        2021년에 완공된 신축 빌딩으로 100평 이상의 고객님들이 이용하기 최적화된 편의시설을 자랑합니다. 건물 내 투썸플레이스, 병원 등을 비롯하여 주변 메가박스, 스타벅스 등이 있으며, 주차공간 또한 넉넉하여 고객의 불편함을 최소화한 미용공간입니다.    
                        </div>
                            <div className="Lowe5th_space_text_div" style={{marginTop: "20px"}}>
                                <ul className="notice-list">
                                    <li><span className="num">✔</span><span style={{color:"#FB6F20", fontWeight: "700"}}>이수파이브 건물 3층</span></li>
                                    <li><span className="num">✔</span>카페,병원 등이 입점한 <span style={{color:"#FB6F20", fontWeight: "700"}}>복합 여가공간의 중심</span></li>
                                    <li><span className="num">✔</span><span style={{color:"#FB6F20", fontWeight: "700"}}>100평 이상</span>의 대규모 미용공간</li>
                                </ul>
                            </div>
                    </div>
                    <div className="Lowe5th_recommand_div">
                        <div>
                            <div className="Lowe5th_care_first">룸과는 다른 매력,</div>
                            <div className="Lowe5th_care_first"><strong>로위의 새로운 오픈형 공간</strong></div>
                        </div>
                        <div style={{marginTop: "60px"}}>
                            <img className="Lowe5th_space_mainimg" src={process.env.PUBLIC_URL + "/image/promotion/07/space/" + this.state.space} alt="로위 공간이미지" />
                            <div>
                                <ScrollContainer className="filter_subimg" hideScrollbars={false}>
                                    {
                                        spaceimg.map((e) => (
                                            <img onClick={this.onclickImg(e)} className={this.state.space === e ? "Lowe5th_space_subimg" : "Lowe5th_space_subimg darkmode"} src={process.env.PUBLIC_URL + "/image/promotion/07/space/" + e} alt="로위 공간이미지" />
                                        ))
                                    }
                                </ScrollContainer>
                            </div>
                            
                            <div className="Lowe5th_care_text" style={{marginTop: "20px"}}>
                                로위의 또 다른 오픈형 공간은<br />
                                디자이너에게 동료 디자이너를 보며 배울 수 있는 점, 고객에게는 로위만의 분위기를 더 느낄 수 있는 공간으로 다가갑니다. <br />
                                로위의 프리미엄 공간을 확인해보세요! 
                            </div>
                            <div className="Lowe5th_space_text_div" style={{marginTop: "20px"}}>
                                <ul className="notice-list">
                                    <li><span className="num">✔</span><span style={{color:"#FB6F20", fontWeight: "700"}}>동시 시술이 가능한 </span>경대 다수 보유</li>
                                    <li><span className="num">✔</span>디자인을 더 빛내는 <span style={{color:"#FB6F20", fontWeight: "700"}}>자연광 가득 통창</span></li>
                                    <li><span className="num">✔</span>한 눈에 볼 수 있는 <span style={{color:"#FB6F20", fontWeight: "700"}}>프리미엄 미용 공간</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="Lowe5th_map_div">
                        <div>
                            <div className="Lowe5th_map_first">로위 이수역점 위치</div>
                            <div className="Lowe5th_care_text" style={{marginBottom: "60px"}}>디자이너, 신규&기존 고객 모두 만족할 수 있는<br />홍대입구역 초역세권 위치</div>
                        </div>
                        <Map kakaoMap={this.kakaoMap} />
                        <div>
                            <div className="Lowe5th_map_thrid">서초구 방배동 1715 이수파이브(ISUFIVE), 3층</div>
                        </div>
                    </div>
                    {/* <div className="Lowe5th_space_div">
                        <div>
                            <div className="Lowe5th_space_first">먼저 눈으로 확인해보세요!</div>
                            <div className="Lowe5th_space_second">이수역점 공간이미지</div>
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
                    
                    <div className="Lowe5th_space_div">
                        <div>
                            <div className="Lowe5th_promotion_div_title">로위 이수역점<br />기본급 보장</div>
                            <div className="Lowe5th_promotion_div_content">
                                오직 오픈멤버 디자이너에게만 드리는 혜택
                            </div>
                        </div>
                        <div className="Lowe5th_promotion_img">
                            <img src={process.env.PUBLIC_URL + "/image/promotion/06/07.png"} alt="로위 7호점 이수역점" />
                            <div >
                                ‘잘 할 수 있을까?’<br /><strong>부담은 덜고, 동기부여는 높이고<br />6개월동안 정착지원금을 지원</strong>해드립니다
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Lowe7th;





