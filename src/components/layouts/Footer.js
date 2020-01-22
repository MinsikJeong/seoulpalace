import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer className="main-footer">
    <div className="footer-middle">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-12 col-sm-12">
            <h4>서울 궁궐 여행</h4>
            <ul className="list-unstyled">
              <li>정책</li>
              <li>도움말</li>
              <li>여행</li>
              <li>한국의 궁궐</li>
            </ul>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
        <p className="text-xs-center">
        &copy;{new Date().getFullYear()} Seoul Palace Tour - All Rights Reserved
        </p>
        <p className="text-xs-center">
        이 사이트는 포트폴리오 용으로 제작되었으며, 상업적인 용도로 사용하지 않음을 밝힙니다.
        </p>
        </div>
      </div>
      </div>
    </FooterContainer>
  )
}

export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: grey;
    padding-top: 3rem;
    color: black;
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

`;
