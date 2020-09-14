import styled from 'styled-components'

export const Card = styled.div`
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14);
    margin-bottom: 20px;
`

export const CardContent = styled.div`
    
`

export const Information = styled.div`
    padding: 20px;
`

export const Name = styled.div`
    font-size: 2rem;
    font-weight: 500;
`

export const Customer = styled.div`

`

export const InformationDate = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin: 15px 0 0 0;

    & svg {
        position: relative;
        top: 5px;
    }
`

export const DueDate = styled.div`
    margin-right: 20px;
`

export const LegalDate = styled.div`

`

export const Documents = styled.div`
    padding: 20px;
    border-top: 1px solid lightgray;
`

export const DocumentItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    &:nth-child(2n) {
        margin-top: 20px;
    }

    & .link-icon {
        color: var(--bluelight)
    }
    
    & .delete-icon {
        color: var(--red)
    }
`

export const DocumentIcon = styled.div`
    width: 48px;
    height: 48px;
    background: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;

    & svg {
        fill: var(--white)
    }
`

export const DocumentName = styled.div`
    width: calc(100% - 160px);
    padding: 0 15px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`