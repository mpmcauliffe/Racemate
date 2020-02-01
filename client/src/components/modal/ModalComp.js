import styled from 'styled-components'
import ReactModal from 'react-modal'


export const ModalComp = styled(ReactModal)`
    position: relative;
    height: 90vh;
    width: 87vw;
    margin: 1rem auto 0 auto;

    padding: 1rem 2rem;
    background: ${props => props.theme.colorDark};

    h3 {
        text-align: center;
        margin: .5rem 0 1rem 0;
        color: ${props => props.theme.primaryGray}
    }
`
export const ModalCloseButton = styled.div`
    display: inline;
    position: absolute;
    top: .5rem;
    right: 1.5rem;
`
export const FooterIcon = styled.i`
    font-size: 5rem;
    color: ${props => props.theme.unGray};

    &:hover {
        cursor: pointer;
    }
`
