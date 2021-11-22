import React from "react";
import "./R_Modal.css";

class R_modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    handleClose = () => {
        this.props.close();
    }

    render() {
        const { open } = this.props;
        return (
            <>
                {open ? (
                    <div className="R_modalBody">
                        <div className="modalclick" onClick={this.handleClose}></div>
                        <img className="R_modalClose" onClick={this.handleClose} src={`${process.env.PUBLIC_URL}/image/Nav/modalClose.svg`} alt="로위 상세보기 닫기" />
                        <div className="R_modalInner">
                            <div>
                                <div className="R_Modal_Title">개인정보 처리방침 동의</div>
                                <div style={{marginTop: "5.20833vw", fontWeight:"bold", marginBottom: "0.520833vw" }}>개인정보처리방침</div>
                                <div style={{lineHeight: "150%"}}>
                                    <div>(주)벤틀스페이스 (‘lo-we.kr’이하 ‘로위) 은(는) 정보주체로부터 개인정보를 수집할 때 동의 받은 개인정보 보유·이용기간 또는 법령에 따른 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다. </div>
                                    <div>구체적인 개인정보 처리 및 보유 기간은 다음과 같습니다. </div>
                                    <div>개인정보의 수집 및 이용목적, 수집하는 개인정보의 항목, 개인정보의 보유 및 이용기간을 안내 드립니다.</div>
                                </div>
                                <div className="R_Modal_content">
                                    <div style={{marginTop: "5.20833vw", fontWeight:"bold" }}>1. 수집 및 이용 목적</div>
                                    <ul>
                                        <li>서비스 제공</li>
                                        <li>서비스 상담 및 안내</li>
                                    </ul>
                                </div>
                                <div className="R_Modal_content">
                                    <div style={{marginTop: "5.20833vw", fontWeight:"bold" }}>2. 수집 항목</div>
                                    <ul>
                                        <li>이름</li>
                                        <li>전화번호</li>
                                        <li>SNS계정 ID</li>
                                    </ul>
                                </div>
                                <div className="R_Modal_content">
                                    <div style={{marginTop: "5.20833vw", fontWeight:"bold", marginBottom: "0.520833vw" }}>3. 보유 및 이용 기간</div>
                                    <div>관련 법령 또는 회사 내부방침에 의해 보존 필요 시까지, 그 외 이용 목적 달성 후 지체없이 파기</div>
                                </div>
                                <div className="R_Modal_content" style={{ marginBottom: "10.20833vw" }}>
                                    <div style={{marginTop: "5.20833vw", fontWeight:"bold", marginBottom: "0.520833vw" }}>4. 미동의 시 불이익 사항</div>
                                    <div>귀하는 위 개인정보 수집 및 이용을 거부할 수 있으나, 동의를 거부하실 경우 서비스를 이용할 수 없습니다.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </>
        );
    }
}

export default R_modal;