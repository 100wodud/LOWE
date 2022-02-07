import { Component } from "react";
import "./V_Mainpage.css";
import Slider from "react-slick";
import Hongdae from "./Hongdae";
import Hapjeong from "./Hapjeong";
import Shinchon from "./Shinchon";
// import Banner from "./Banner";
import reservation from "../data/reservation";

class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "",
            lowe: false
        };
    }

    componentDidMount = () => {
        const pathname = this.props.location.pathname;
        let url = ''
        let num = pathname.indexOf("_")
        let path = pathname.split("/");

        if(num >1){
            this.setState({lowe: true})
            url = pathname.slice(num+1, pathname.length)
        } else {
            url = path[path.length-1]
        }
        
        for(let i =0; i < reservation.length; i++){
            if(reservation[i].eng === url){
                return this.setState({data: reservation[i]})
            }
        }
    }

    render() {
        let settings = {
            dots: true,
            infinite: false,
            autoplaySpeed: 10000,
            pauseOnHover: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            arrows: true
        };

        return (
            <div id="wrap">
                {this.state.data ?
                    <>
                        <div id="header">
                            <img className="title_img" src={process.env.PUBLIC_URL + "/image/reservation/"+this.state.data.eng+"/"+this.state.data.eng+".png"} alt={`원장 ${this.state.data.name}`} />
                            <div className="blind">
                                <h1>안녕하세요
                                    원장 {this.state.data.name}입니다</h1>
                                1:1시술로 진행되는 로위 {this.state.data.store}에서 뵈어요

                            </div>
                        </div>
                        <nav id="nav">
                            <ul>
                                <li><a href="#recommend" data-scroll="">추천시술</a></li>
                                <li><a href="#sns" data-scroll="">SNS</a></li>
                                <li><a href="#review" data-scroll="">리뷰</a></li>
                                <li><a href="#shop-info" data-scroll="">매장안내</a></li>
                                <li><a href="#location" data-scroll="">위치</a></li>
                                <li><a href="#detail" data-scroll="">정보</a></li>
                                <li><a href="#notice" data-scroll="">안내사항</a></li>
                            </ul>
                        </nav>
                        <section id="recommend">
                            <h2 className="section-title">{this.state.data.name}원장 <strong>추천 시술</strong></h2>
                            {this.state.data.goods.map((g) => (
                                <div className="recommend-item" key={g.id}>
                                    <Slider {...settings} >
                                        {g.image.map((i) => (
                                            <div className="recommend-slide" key={i}>
                                                <img src={process.env.PUBLIC_URL + "/image/reservation/"+this.state.data.eng+"/"+i} alt={g.goods} />
                                            </div>
                                        ))}
                                    </Slider>
                                    <div className="recommend-item-desc">
                                        <h3 className="recommend-item-title" dangerouslySetInnerHTML={{ __html: g.goods }}></h3>
                                        <p className="recommend-item-detail" dangerouslySetInnerHTML={{ __html: g.content }}></p>

                                    </div>
                                </div>
                            ))}
                        </section>
                        <section id="sns">
                            <h3 className="section-title">Sns 링크</h3>
                            <div className="sns-wrap"><a className="sns-item" href={this.state.data.instagram[0]}>
                                <span className="icon">
                                    <img src={process.env.PUBLIC_URL + "/image/reservation/icon-insta.png"} alt={`${this.state.data.instagram[1]} 인스타그램`} />
                                </span>
                                <span className="text">{this.state.data.instagram[1]}</span>
                            </a>
                                <a className="sns-item" href={this.state.data.blog[0]}>
                                    <span className="icon">
                                        <img src={process.env.PUBLIC_URL + "/image/reservation/icon-blog.png"} alt={`${this.state.data.blog[1]} 블로그`} />
                                    </span>
                                    <span className="text">{this.state.data.blog[1]}</span>
                                </a>
                                <a className="sns-item" href={this.state.data.youtube[0]}>
                                    <span className="icon">
                                        <img src={process.env.PUBLIC_URL + "/image/reservation/icon-youtube.png"} alt={`${this.state.data.youtube[1]} 유튜브`} />
                                    </span>
                                    <span className="text">{this.state.data.youtube[1]}</span>
                                </a></div>
                        </section>
                        <section id="review">
                            <h3 className="section-title">Review</h3>
                            <div className="review-wrap custom-scroll">
                                {this.state.data.review.map((review) => (
                                    <div className="review-item" key={review.id}>
                                        <span className="author">{review.name}</span>
                                        <p className="desc">{review.content}</p>
                                        <div className="meta">
                                            <span className="visit">{review.visit}번째 방문</span>
                                            <span className="date">{review.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                        {this.state.data.store === "홍대입구역점" ?
                            <Hongdae /> :
                            this.state.data.store === "신촌점" ?
                                <Shinchon /> :
                                <Hapjeong />
                        }
                        <section className="details">
                            <h3 className="section-title">상세정보</h3>
                            <div className="detail-table">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <th>영업시간</th>
                                            <td>{this.state.data.time}</td>
                                        </tr>
                                        <tr>
                                            <th>휴무일</th>
                                            <td>{this.state.data.holiday}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section><section id="notice">
                            <h3 className="section-title">
                                안내사항
                                <small>로위 {this.state.data.store} 예약시 안내사항</small>
                            </h3>
                            <ul className="notice-list">
                                <li><span className="num">1</span><strong>시간 예약 변경</strong>은 <strong>최소 하루 전</strong>에는 연락주세요.</li>
                                <li><span className="num">2</span><strong>기장 추가 비용이 발생</strong>할 수 있습니다.</li>
                                <li><span className="num">3</span>로위 할인쿠폰은 <strong>네이버 예약 시 쿠폰번호를 기입</strong>해주시면 적용됩니다.</li>
                                <li><span className="num">4</span><strong>프라이빗 1:1 개별룸에서 안전하게 시술</strong>을 받으실 수 있습니다.</li>
                                <li><span className="num">5</span><strong>10만원 이상 결제시 쿠폰사용 가능</strong>합니다</li>
                            </ul>
                        </section>
                        <div className="floating-buttons">
                            { this.state.data.name !== "민선" ?
                            <>
                            <a className="button" href={this.state.data.question}>
                                {this.state.data.name} <strong>1:1 문의</strong>
                            </a>
                            <a className="button is-green" href={this.state.data.reservation}>
                                {this.state.data.name} <strong>예약</strong>
                            </a>
                            </> :
                            <>
                            <a className="button" style={{width: "100%"}} href={this.state.data.question}>
                                {this.state.data.name} <strong>1:1 문의</strong>
                            </a>
                            </> 
                            }
                        </div>
                        {/* {
                            this.state.lowe ?
                                <Banner /> : null
                        } */}
                    </>
                    : null}
            </div>
        )
    }
}

export default Reservation;