"use client";
import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  background-image: url("/assets/images/lib1.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroContent = styled.div`
  background-color: rgba(0, 0, 0, 0.28);
  border-radius: 10px;
  padding: 2rem;
  width: 65%;
  height: 55%;
  align-items: center;
  align-text: left;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 3rem;
`;

const HeroText = styled.h1`
  color: white;
  text-align: left;
  font-size: 18px;
`;
const HeroH1 = styled.h1`
  color: white;
  text-align: center;
  font-size: 70px;
  font-weight: 600;
  text-transform: capitalize;
  margin-bottom: 2rem;
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroH1>Butterfly Effect Universe</HeroH1>
        <HeroText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid sed
          totam quibusdam molestiae eius ullam iste necessitatibus quidem
          perferendis autem veritatis libero nesciunt nihil non, inventore fuga,
          ipsam voluptates illum. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Aliquid sed totam quibusdam molestiae eius ullam
          iste necessitatibus quidem perferendis autem veritatis libero nesciunt
          nihil non, inventore fuga, ipsam voluptates illum.
        </HeroText>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
