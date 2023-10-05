import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: auto;
    }

`

export const Form = styled.form`
    max-width: 550px;
    margin: 10px auto;

    > header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 20px;

        a {
            font-size: 20px;
            color: ${({ theme }) => theme.COLORS.PURPLE};
        }


    }

    > div {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        
        h2 {
            font-weight: 300;
            font-size: 20px;
        }
        div{
            border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700} ;
            padding-bottom: 16px;
            margin-bottom: 24px;
        }
        article {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;

            div {
                width: 35%;
                display: flex;
                align-items: center;
                padding-bottom: 0px;
            }
        }
    }

    > section {
        display: flex;
        flex-direction: column;

        > div {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            article {
                background-color: ${({ theme }) => theme.COLORS.PURPLE};
                padding: 10px;
                border-radius: 10px;
                width: 25%;
                display: flex;
                align-items: center;
                justify-content: space-around;
            }

        }

    }

    .containerButtons {
        width: 100%;
        display: flex;
        gap: 10px;
    }
`