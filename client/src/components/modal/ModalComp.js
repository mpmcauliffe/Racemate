import styled from 'styled-components'
import ReactModal from 'react-modal'


export const ModalComp = styled(ReactModal)`
    /* position: absolute; */
    /* position: fixed; */
    height: 90vh;
    width: 87vw;
    margin: 3rem auto 0 auto;
    z-index: 10000;

    padding: 1rem 2rem;
    background: ${props => props.theme.colorDark};

    h3 {
        text-align: center;
        color: ${props => props.theme.primaryGray}
    }
`
export const ModalTitle = styled.h3`
    color: ${props => props.theme.primaryGray}
`
