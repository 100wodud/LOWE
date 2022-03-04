import { Component } from "react";
import "./Lowe5th.css";
import Slider from "react-slick";
import Map from "./P_Map";
import ScrollContainer from 'react-indiana-drag-scroll'
import ReactPlayer from 'react-player'

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

                    <div className="Lowe5th_slider_div">
                        <div className="Lowe5th_slider_title">
                            <div className="Lowe5th_slider_title_sub"><span>NEW</span>입점 디자이너 모집 중</div>
                            <div className="Lowe5th_slider_title_main">로위 강남점</div>
                            <div className="Lowe5th_slider_title_loc">신분당선 강남역 4번 출구 도보 5분</div>
                        </div>
                        <div className="Lowe5th_slider">
                            <Slider {...setting}>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/image/promotion/05/main/01.png"} alt="로위 5호점 강남" />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/image/promotion/05/main/02.png"} alt="로위 5호점 강남" />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/image/promotion/05/main/03.png"} alt="로위 5호점 강남" />
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
                    <div className="Lowe5th_second_div">
                        <div style={{ marginBottom: "60px" }}>
                            <div className="Lowe5th_second_title"><strong>로위</strong>는 헤어디자이너에게</div>
                            <div className="Lowe5th_second_title"><strong>더 나은 미용 환경을 제공</strong>하고, </div>
                            <div className="Lowe5th_second_title"><strong>더 성장할 수 있도록 돕는</strong></div>
                            <div className="Lowe5th_second_title">공유미용실 서비스입니다</div>
                        </div>
                        <div>
                            <div className="Lowe5th_second_content">
                                <div>
                                    <div><strong>국내최초 월세 없는</strong></div>
                                    <div>인센티브제 공유미용실</div>
                                </div>
                                <img src={process.env.PUBLIC_URL + "/image/promotion/05/02/01.png"} alt="로위 5호점 강남" />
                            </div>
                            <div className="Lowe5th_second_content">
                                <div>
                                    <div><strong>내가 정하는 출퇴근, 휴무일.</strong></div>
                                    <div>자유롭게 근무하세요!</div>
                                </div>
                                <img src={process.env.PUBLIC_URL + "/image/promotion/05/02/02.png"} alt="로위 5호점 강남" />
                            </div>
                            <div className="Lowe5th_second_content">
                                <div>
                                    <div>오롯이 고객에게만</div>
                                    <div>집중할 수 있는 <strong>프라이빗룸</strong></div>
                                </div>
                                <img src={process.env.PUBLIC_URL + "/image/promotion/05/02/03.png"} alt="로위 5호점 강남" />
                            </div>
                            <div className="Lowe5th_second_content">
                                <div>
                                    <div>찾아오기 쉽고 편리한</div>
                                    <div><strong>초역세권 프라임 빌딩</strong></div>
                                </div>
                                <img src={process.env.PUBLIC_URL + "/image/promotion/05/02/04.png"} alt="로위 5호점 강남" />
                            </div>
                        </div>
                    </div>
                    <div className="Lowe5th_free_div">
                        <div className="Lowe5th_free_title">
                            <div className="Lowe5th_free_title_sub">공유미용실 최초, 월세 없는 인센티브제</div>
                            <div className="Lowe5th_free_title_main">월세 없이 일한 만큼 가져가는</div>
                            <div className="Lowe5th_free_title_main"><strong>최대 60% 매출 인센티브제</strong></div>
                        </div>
                        <img src={process.env.PUBLIC_URL + "/image/promotion/05/03/01.png"} alt="로위 5호점 강남" />
                    </div>
                    <div className="Lowe5th_incentive_div">
                        <div className="Lowe5th_free_title">
                            <div className="Lowe5th_free_title_sub">요즘 헤어디자이너의 근무 환경</div>
                            <div className="Lowe5th_free_title_main">내가 정하는</div>
                            <div className="Lowe5th_free_title_main"><strong>자유로운 근무 시간과 휴무일</strong></div>
                            <div className="Lowe5th_incentive_content">모두가 1인 원장으로<br />출, 퇴근 시간, 휴무일, 연차 등 자유롭게,<br />자율 출퇴근</div>
                        </div>
                        <img src={process.env.PUBLIC_URL + "/image/promotion/05/04/01.png"} alt="로위 5호점 강남" />
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
                            <div className="Lowe5th_space_first">먼저 눈으로 확인해보세요!</div>
                            <div className="Lowe5th_space_second">강남점 공간이미지</div>
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
                            <div className="Lowe5th_space_text_div">
                                <div><strong>강남역 최초</strong> 프라이빗룸 공유미용실</div>
                                <ul className="notice-list">
                                    <li><span className="num">+</span>자연광이 들어오는 <strong>통창 개별룸(선착순 룸선택)</strong></li>
                                    <li><span className="num">+</span>최적의 룸온도를 유지할 <strong>천장형 개별 냉난방 시스템</strong></li>
                                    <li><span className="num">+</span>지하 5층 규모의 <strong>건물 전용 주차시설</strong></li>
                                    <li><span className="num">+</span>디자이너 전용 <strong>휴게 공간</strong></li>
                                    <li><span className="num">+</span>외부 소음에 영향 없는 <strong>프라이빗룸 방음 설계</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="Lowe5th_map_div">
                        <div>
                            <div className="Lowe5th_care_first">로위 디자이너만을 위한 혜택,</div>
                            <div className="Lowe5th_care_first"><strong>로위 케어<span style={{ fontFamily: "Montserrat" }}>(LOWE CARE)</span></strong></div>
                        </div>
                        <div className="Lowe5th_care_img_div">
                            <img src={process.env.PUBLIC_URL + "/image/promotion/05/05/01.png"} alt="로위 5호점 강남" />
                            <img src={process.env.PUBLIC_URL + "/image/promotion/05/05/02.png"} alt="로위 5호점 강남" />
                            <img src={process.env.PUBLIC_URL + "/image/promotion/05/05/03.png"} alt="로위 5호점 강남" />
                            <img src={process.env.PUBLIC_URL + "/image/promotion/05/05/04.png"} alt="로위 5호점 강남" />
                            <img src={process.env.PUBLIC_URL + "/image/promotion/05/05/05.png"} alt="로위 5호점 강남" />
                        </div>
                    </div>
                    <div className="Lowe5th_recommand_div">
                        <div className="Lowe5th_recommand_text_div">
                            <div>이런 헤어디자이너 분들께<br />추천해요!</div>
                            <ul className="notice-list">
                                <li><span className="num">1.</span><strong>1:1로 고객을 맞이할 프라이빗 공간</strong>을 원하<br />시는 헤어디자이너분들</li>
                                <li><span className="num">2.</span><strong>강남과 근접한 곳에서 근무</strong>하고 있는 헤어<br />디자이너분들</li>
                                <li><span className="num">3.</span>이제는 <strong>일한 만큼 가져가고 싶은</strong> 헤어디자<br />이너분들</li>
                                <li><span className="num">4.</span>마케팅으로 <strong>이제 나만의 브랜드를 더 알리<br />고 싶은</strong> 헤어디자이너분들</li>
                                <li><span className="num">5.</span><strong>자유로운 근무시간</strong>을 원하는 헤어디자이너 <br />분들</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Lowe5th_movie_div">
                        <div>
                            <div className="Lowe5th_movie_text">현재 로위 디자이너가 말하는</div>
                            <div className="Lowe5th_movie_text" style={{ fontWeight: "700" }}>“왜 로위일까요?”</div>
                        </div>
                        <div className="Lowe5th_movie_div_div">
                            <ReactPlayer width="100%" height="216px" url='https://youtu.be/zghzU0qseJ8' controls />
                            <ReactPlayer width="100%" height="216px" style={{ marginTop: "12px" }} url='https://youtu.be/em7FoOXS8zU' controls />
                        </div>
                    </div>

                    <div className="Lowe5th_recommand_div">
                        <div>
                            <div className="Lowe5th_promotion_div_title">로위 강남점<br />입점 특별 프로모션</div>
                            <div className="Lowe5th_promotion_div_content">
                                오직 오픈멤버 디자이너에게만 드리는 혜택
                            </div>
                        </div>
                        <div className="Lowe5th_promotion_img">
                            <img src={process.env.PUBLIC_URL + "/image/promotion/05/07/01.png"} alt="로위 5호점 강남" />
                            <div >
                                ‘잘 할 수 있을까?’<br /><strong>부담은 덜고, 동기부여는 높이고<br />6개월동안 정착지원금을 지원</strong>해드립니다
                            </div>
                            <img src={process.env.PUBLIC_URL + "/image/promotion/05/07/02.png"} alt="로위 5호점 강남" />
                            <div >
                                <strong>지인과 함께 입점하세요!</strong><br />함께 입점 시, <strong>정착지원금과 더불어 미용재료비<br />혜택을 두 분께 추가 지원</strong>해 드립니다.
                            </div>
                        </div>
                    </div>
                    <div className="Lowe5th_banners_div">
                        <span style={{color: "#F4ED3D"}}>**인기있는 룸은 <strong>빠르게 마감</strong></span>됩니다. 서두르세요!!
                    </div>

                    <div className="Lowe5th_request_div">
                        <div className="Lowe5th_request_div_title">로위에 입점 문의 해보세요</div>
                        <div className="Lowe5th_request_div_content">
                            공유미용실 로위를 더 자세히 알고 싶으신가요?<br />로위는 미용인 여러분들께 항상 열려있습니다.<br /><strong>아래의 버튼을 눌러 신청해주세요</strong>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Lowe5th;





