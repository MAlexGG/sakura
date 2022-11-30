import styled from 'styled-components';

export const CtCard = styled.div`
    width: 67px;
    height: 150px;
    filter: drop-shadow(0px -4px 4px rgba(0, 0, 0, 0.5));
    border-radius: 5px;
    overflow: hidden;
    position: absolute;
    top: ${(props) => props.top};
`;

export const ImgCard = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;