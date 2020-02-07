import styled from "styled-components"

export const Anchor = styled.a`
  color: #4834d4;
  position: relative;
  text-decoration: none;

  &::after {
    bottom: 0;
    border-bottom: 1px solid currentColor;
    color: currentColor;
    content: '';
    height: 1px;
    left: 0;
    position: absolute;
    transform: scaleX(0);
    transform-origin: ${props => props.fromLeft ? 'left' : 'right'};
    transition: transform 125ms ease-in;
    width: 100%;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: ${props => props.fromLeft ? 'right' : 'left'}
  }
`