import { Component } from "react";
import "./Lowe5th.css";
import Slider from "react-slick";
import Map from "./P_Map";
import ScrollContainer from 'react-indiana-drag-scroll'

const { kakao } = window;

class Lowe5th extends Component {
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
            center: new kakao.maps.LatLng(37.49403234734332, 127.031030518148),
            level: 5,
            disableDoubleClickZoom: true,
            draggable: true
        };

        let positions = [
            {
                title: '강남점',
                latlng: new kakao.maps.LatLng(37.49203234734332, 127.031030518148)
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
                    {/* <img src={process.env.PUBLIC_URL + "/image/promotion/05/01.png"} alt="로위 5호점 강남" /> */}

                    <div className="Lowe6th_firstsec_div">
                        <div>
                            <div className="Lowe6th_firstsec_title">로위 <span>강남점</span></div>
                            <div className="Lowe6th_firstsec_title">디자이너</div>
                            <div className="Lowe6th_firstsec_title" style={{color: "#ffffff"}}>상반기 공개 모집</div>
                        </div>
                        <div style={{marginTop: "40px"}}>
                            <div className="Lowe6th_firstsec_sub" style={{lineHeight: "150%"}}>로위 강남점은</div>
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
                                <div className="Lowe6th_firstsec_content_text" style={{fontWeight: "400", marginBottom: "16px"}}>강남점</div>
                                <div className="Lowe6th_firstsec_content_text" style={{fontSize: "18px", color: "#9c9c9c"}}>강남구 강남대로 328 강남역쉐르빌 2층</div>
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
                                <div><img src={process.env.PUBLIC_URL + "/image/promotion/06/01/01.png"}  style={{marginBottom: "16px"}} alt="로위 6호점 L7" /></div>
                                <div><img src={process.env.PUBLIC_URL + "/image/promotion/06/01/02.png"}  style={{marginBottom: "40px"}} alt="로위 6호점 L7" /></div>
                                <div className="Lowe6th_firstsec_content_text" style={{marginBottom: "18px"}}>헤어사진 촬영 전문가 교육</div>
                                <div><img src={process.env.PUBLIC_URL + "/image/promotion/06/01/03.png"}  style={{marginBottom: "40px"}} alt="로위 6호점 L7" /></div>
                                <div className="Lowe6th_firstsec_content_text" style={{marginBottom: "18px"}}>CS 교육</div>
                                <div><img src={process.env.PUBLIC_URL + "/image/promotion/06/01/04.png"}  alt="로위 6호점 L7" /></div>
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
                                    <div><img src={process.env.PUBLIC_URL + "/image/promotion/06/arrow.svg"} alt="로위 6호점 L7" /></div>
                                    <div className="Lowe6th_request_div_circle">면접</div>
                                    <div><img src={process.env.PUBLIC_URL + "/image/promotion/06/arrow.svg"} alt="로위 6호점 L7" /></div>
                                    <div className="Lowe6th_request_div_circle">최종 합격</div>
                                </div>
                            </div>
                            <div style={{marginBottom: "20px"}}>
                                <div className="Lowe6th_firstsec_content_circle">지원방법</div>
                                <div className="Lowe6th_firstsec_content_text" style={{fontWeight: "400"}}>1. 하단 ‘지원하기’ 버튼 클릭</div>
                                <div className="Lowe6th_firstsec_content_text" style={{fontWeight: "400"}}>2. 이력서 다운로드 후</div>
                                <div className="Lowe6th_firstsec_content_text" style={{fontWeight: "400"}}>3. 아래 이메일로 첨부하여 제출</div>
                            </div>
                            <div style={{marginBottom: "60px"}}>
                                <div className="Lowe6th_firstsec_content_address">recruit@bentlespace.com</div>
                            </div>
                        </div>
                    </div>
                    <div className="Lowe5th_slider_div">
                        <div className="Lowe5th_slider_title">
                            <div className="Lowe5th_slider_title_sub"><span>NEW</span>입점 디자이너 모집 중</div>
                            <div className="Lowe5th_slider_title_main">로위 강남점</div>
                            <div className="Lowe5th_slider_title_loc">신분당선 강남역 4번 출구 도보 5분</div>
                        </div>
                        <div className="Lowe5th_slider">
                            <Slider {...setting}>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/image/promotion/05/main/03.png"} alt="로위 5호점 강남" />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/image/promotion/05/main/01.png"} alt="로위 5호점 강남" />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/image/promotion/05/main/02.png"} alt="로위 5호점 강남" />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/image/promotion/05/main/04.png"} alt="로위 5호점 강남" />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/image/promotion/05/main/05.png"} alt="로위 5호점 강남" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="Lowe5th_map_div">
                        <div>
                            <div className="Lowe5th_map_first">로위 강남점 위치</div>
                            <div className="Lowe5th_map_second">디자이너, 신규&기존 고객 모두 만족할 수 있는<br />강남역 초역세권 위치</div>
                        </div>
                        <Map kakaoMap={this.kakaoMap} />
                        <div>
                            <div className="Lowe5th_map_thrid">강남구 강남대로 328 강남역쉐르빌 2F 로위 강남점<br />(스타벅스 건물)</div>
                            <div className="Lowe5th_map_fourth">
                                로위 강남점이 위치한 강남역 신분당선 쪽은<br />
                                문화시설, 주거, 상업, 오피스 등이 밀집되어<br />
                                다양한 고객을 만나볼 수 있는<br />
                                고객&디자이너 모두가 만족할 최적의 입지입니다.
                            </div>
                        </div>
                    </div>
                    <div className="Lowe5th_space_div">
                        <div>
                            <div className="Lowe5th_space_first">강남에서 처음 경험하는</div>
                            <div className="Lowe5th_space_second">새로운 프라이빗룸 미용실</div>
                        </div>
                        <div>
                            <img className="Lowe5th_space_mainimg" src={process.env.PUBLIC_URL + "/image/promotion/05/space/" + this.state.space} alt="로위 공간이미지" />
                            <div>
                                <ScrollContainer className="filter_subimg" hideScrollbars={false}>
                                    {
                                        spaceimg.map((e) => (
                                            <img onClick={this.onclickImg(e)} className={this.state.space === e ? "Lowe5th_space_subimg" : "Lowe5th_space_subimg darkmode"} src={process.env.PUBLIC_URL + "/image/promotion/05/space/" + e} alt="로위 공간이미지" />
                                        ))
                                    }
                                </ScrollContainer>
                            </div>
                            
                            <div className="Lowe5th_care_text" style={{marginTop: "20px"}}>
                                다른 디자이너와 눈이 마주치거나, 고객과의 대화 내용이 들릴까 신경 쓰지 마세요! 이제 샵에서 근무할 때도 나만의 룸에서 고객을 맞이할 수 있답니다.
                            </div>
                        <div className="Lowe5th_care_img_div">
                            <img src={process.env.PUBLIC_URL + "/image/promotion/06/06.png"} alt="로위 6호점 L7" />
                        </div>
                        </div>
                    </div>
                    
                    <div className="Lowe5th_space_div">
                        <div>
                            <div className="Lowe5th_promotion_div_title">로위 강남점<br />기본급 보장</div>
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
                </div>
            </section>
        )
    }
}

export default Lowe5th;





