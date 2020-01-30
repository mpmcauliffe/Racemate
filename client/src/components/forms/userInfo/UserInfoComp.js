import styled from 'styled-components'


export const UserInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    position: absolute;
    top: 10%;
    height: 80vh;
    width: 90%;
    z-index: 2500;
    margin: 0 auto;

    padding: 2rem;

    /* border: 1rem solid white; */
`

export const InfoSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    margin: 0 auto;

    @media (min-width: 640px) {
        width: 80%;
    }
    @media (min-width: 769px) {
        width: 75%;
    }
    @media (min-width: 1025px) {
        width: 60%;
        margin: 0 auto;
    }
    @media (min-width: 1601px) {
        width: 45%;
    }
`
export const InfoText = styled.h3`
    font-size: 1.9rem;
    color: ${props => props.theme.midLtGray};
`
export const InfoIcon = styled.i`
    font-size: 3rem;
    color: ${props => props.theme.primaryGray};
    cursor: pointer;
`

export const InfoButton = styled.div`
    display: inline-block;
    margin: 1.5rem 0;
    width: 10rem;

    padding: 1rem 2rem;

    text-align: center;
    font-family: "proxima-nova-condensed";
    font-size: 1.9rem;
    color: ${props => props.theme.primaryGray};
    
    border: .2rem solid ${props => props.theme.primaryGray};
    border-radius: .5rem;
    cursor: pointer;
`
export const UserLabel = styled.label`
    color: ${props => props.theme.midLtGray};
`
