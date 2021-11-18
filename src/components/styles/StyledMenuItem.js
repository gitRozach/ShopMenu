import styled from 'styled-components';

export const StyledMenuItemTitle = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;

    h3 {
        @keyframes menuItemContentIn {
            from {
                opacity: 0;
                transform: translateX(-100%);
            }
            to {
                opacity: 1;
                transform: translateX(0%);
            }
        }
        color: white;
        background: linear-gradient(to right, #434343, #242424);
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        padding: 10px 20px;
        font-size: 20px;
        margin: 0px;
        text-align: left;   
        animation: menuItemContentIn 1.2s forwards;         
    }
`;

export const StyledMenuItemDescription = styled.div`
    h4 {
        color: rgb(192, 192, 192);
        background: linear-gradient(to right, #434343, #242424);
        opacity: 0.6;
        font-size: 15px;
        margin: 0px;
        padding: 10px 20px;
        text-align: left; 
    }

    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
`;

export const StyledMenuItemPriceName = styled.h4`
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    color: white;
    background: black;
    border-radius: 7px;
`;

export const StyledMenuItemPriceValue = styled.h4`
    text-align: center;
    margin-left: 20px;
    color: white;
`;

export const StyledMenuItemPriceItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;    
`;

export const StyledMenuItemPrices = styled.div`
    @keyframes menuItemPricesIn {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0%);
        }
    }
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    column-gap: 10px;
    row-gap: 10px;
    padding: 10px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    width: 100%;
    background: linear-gradient(to right, #434343, #242424); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: white;
    animation: menuItemPricesIn 1.2s forwards;
`;

export const StyledMenuItemContent = styled.div`
    display: grid;
    grid-template-rows: auto auto auto;
    width: 100%;
`;

export const StyledMenuItem = styled.div`
    @keyframes menuItemIn {
        0% {
            transform: translateY(100vh);
            background: transparent;
        }
        40% {
            background: transparent;
        }
        100% {
            transform: translateY(0);
            background: rgba(247, 247, 247, 0.2);
        }
    }

    font-family: 'Source Sans Pro', sans-serif;

    display: flex;
    flex-direction: row;
    padding: 3px;

    background: transparent;

    transition: transform .9s;
    
    margin-bottom: 20px;
    border: 0px solid rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    filter: drop-shadow(0px 0px 10px black);
`;