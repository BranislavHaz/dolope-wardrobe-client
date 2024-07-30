import styled from "styled-components";
import { device } from "@/utils/configurator/devices";

export const WrapPreview = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: default;

  @media ${device.tablet} {
    flex-direction: row;
    margin-top: var(--l-header-height);
  }
`;

export const WardrobeWrap = styled.div`
  width: 100%;
  position: relative;

  @media ${device.tablet} {
    width: 70vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    width: 30vw;
    margin: 0 2rem;
  }
`;

export const BackButton = styled.div`
  width: 90%;
  height: 3rem;
  margin-top: 1rem;
  padding: 0.5rem 2rem;
  border: 2px solid #282828;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-weight: 500;
  color: #282828;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  @media ${device.tablet} {
    width: 20vw;
  }

  &:hover {
    transform: translateX(-0.2rem) scale(1.02);
  }
`;
