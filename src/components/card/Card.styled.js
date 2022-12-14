import styled from 'styled-components';

export const CtCard = styled.button`
    width: auto;
    height: 100%;
    filter: drop-shadow(0px -4px 4px rgba(0, 0, 0, 0.5));
    visibility: ${(props => props.picked ? 'hidden' : 'visible')};
    border: 2px solid var(--secondary-color);
    border-radius: 5px;
    overflow: hidden;
    position: absolute;
    top: 0px;
    left: ${(props) => props.left};
    padding: 0px;
`;

export const ImgCard = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;