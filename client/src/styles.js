import styled from 'styled-components';

export const Container = styled.div`
    width: calc(100% - 1.5rem);
    height: calc(100vh - 1.5rem);
    margin: 0;
    padding: 0.75rem;
    display: flex;
    flex-direction: row;
    border: 1px solid #cccccc;

    @media (min-width: 1024px) {
        flex-direction: column;
        height: 50vh;
        padding: 1.5rem;
        width: 50%;
        margin: calc(50vh / 2) 25%;
    }
`;

export const Wrapper = styled.div`
    width: calc(66.666% - 0.75rem);
    height: 100%;
    margin-right: 0.75rem;
    margin-bottom: 0;
    border: 1px solid #cccccc;
    background-color: #FFFFFF;
    overflow: hidden;
    overflow-y: scroll;

    @media (min-width: 1024px) {
        width: 100%;
        margin-bottom: 1.5rem;
        height: calc(66.666% - 1.5rem);
    }
`;

export const Controll = styled.div`
    width: 33.333%;
    height: 100%;
    border: 1px solid #cccccc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 1024px) {
        width: 100%;
        height: 33.333%;
        flex-direction: row;
    }
`;
export const Cell = styled.div`
    width: calc(100% - 1rem);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 0.5rem;
    border-right-width: 0;
    border-bottom: 1px solid #cccccc;

    @media (min-width: 1024px) {
        border-bottom-width: 0px;
        border-right: 1px solid #cccccc;
        padding: 0;
        width: 25%;
        height: 100%;
    }
`;

export const CellWide = styled.div`
    width: calc(100% - 1rem);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 0.5rem;

    @media (min-width: 1024px) {
        padding: 0;
        width: 50%;
        flex-direction: row;
    }
`;

export const Button = styled.button`
    background-color: #ffffff;
    color: #333333;
    padding: 0.75rem 1.5rem;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border-radius: 0.5rem;
    width: 100%;

    @media (min-width: 1024px) {
        width: auto;
    }
`;

export const InputText = styled.input`
    width: calc(100% - 2rem);
    background-color: transparent;
    border: 2px solid #cccccc;
    color: #ffffff;
    padding: 0.75rem;
    text-align: left;
    text-decoration: none;
    margin-right: 0;
    margin-bottom: 0.5rem;

    @media (min-width: 1024px) {
        width: 100px;
        margin-bottom: 0;
        margin-right: 0.5rem;
    }
`;


