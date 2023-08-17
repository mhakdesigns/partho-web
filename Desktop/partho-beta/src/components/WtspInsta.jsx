import React from "react";
import styled from "styled-components";
import $ from "jquery";

const Wrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  z-index: 1;
  @media (max-width: 480px) {
    right: -20px;
  }
`;

const IconWrapper = styled.div`
  margin-right: 20px;
  cursor: pointer;
`;

const handleClickCall = () => {
  window.location.href = `tel:+919947171200`;
};

const handleClickWhatsApp = () => {
  window.location.href = `https://wa.me/+919947171200`;
};

const handleClickInstagram = () => {
  window.location.href = `https://www.instagram.com/partho.info/`;
};

const FixedIcons = () => {
  $(document).ready(function () {
    $(".my-icon").animate({
      left: "50px",
    });
  });

  return (
    <Wrapper>
      <IconWrapper className="my-icon" onClick={handleClickCall}>
        <i
          className="fa fa-phone"
          style={{ color: "#5b906e", fontSize: "2.10em" }}
          alt="Call Icon"
        />
      </IconWrapper>
      <IconWrapper onClick={handleClickWhatsApp}>
        <i
          className="fa fa-whatsapp"
          style={{ color: "#5b906e", fontSize: "2.10em" }}
          alt="WhatsApp Icon"
        />
      </IconWrapper>
      <IconWrapper onClick={handleClickInstagram}>
        <i
          className="fa fa-instagram"
          style={{ color: "#5b906e", fontSize: "2.10em" }}
          alt="Instagram Icon"
        />
      </IconWrapper>
    </Wrapper>
  );
};

export default FixedIcons;
