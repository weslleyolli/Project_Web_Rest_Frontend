import styled from "styled-components"
import backgroundImage from '../../assets/Coffee.png'

export const Container = styled.button`
    width: 18%;
    background-color:${({ theme }) => theme.COLORS.BACKGROUND_700};

    border: none;
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 36px;
    border-bottom-right-radius: 0.375rem;
    border-bottom-left-radius: 36px;
    

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    padding: 22px;
    margin-bottom: 10px;

    >h1 {
        font-weight: 700;
        font-size: 20px;
        color: ${({ theme }) => theme.COLORS.WHITE};

    }

    > p {
        font-size: 12px;
        color: ${({ theme }) => theme.COLORS.GRAY_100}
    }

    > h4 {
        color: ${({ theme }) => theme.COLORS.WHITE};

        margin-top: 10px;
    }

    > footer {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 20px;

        

    div {
        width: 100%;
        background-color: ${({ theme }) => theme.GRAY_300};
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        


        svg {
        width: 20px;
        height: 20px;
        color: ${({ theme }) => theme.COLORS.WHITE} ;
        }

        p {
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }

    > article {
        padding: 5px;
        border-radius: 10px; 
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${({ theme }) => theme.COLORS.PURPLE};
        color: ${({ theme }) => theme.COLORS.WHITE};
    }


        
    }


`

export const ImageProduct = styled.div`
    background: url(${backgroundImage}) no-repeat center center;
    width: 64px;
    height: 64px;
    margin-top: -40px;
    margin-bottom: 15px;
`

