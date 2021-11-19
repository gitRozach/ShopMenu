// Styled Components
import { StyledMenuItem, StyledMenuItemContent, StyledMenuItemDescription, StyledMenuItemPriceItem, StyledMenuItemPriceName, StyledMenuItemPrices, StyledMenuItemPriceValue, StyledMenuItemTitle } from './styles/StyledMenuItem';

const MenuItem = (props) => {
    return (
        <StyledMenuItem>
            <StyledMenuItemContent>

                <StyledMenuItemTitle>
                    <h3>{props.name}</h3>
                </StyledMenuItemTitle>

                <StyledMenuItemDescription>
                    <h4>{props.description}</h4>
                </StyledMenuItemDescription>    
                
                <StyledMenuItemPrices>
                    {props.prices?.map(item => <StyledMenuItemPriceItem>
                        {item.priceName && <StyledMenuItemPriceName>{item.priceName}</StyledMenuItemPriceName>}
                        {item.priceValue && <StyledMenuItemPriceValue>{item.priceValue}</StyledMenuItemPriceValue>}
                   </StyledMenuItemPriceItem>)}
                </StyledMenuItemPrices>
                
            </StyledMenuItemContent>
        </StyledMenuItem>
    );
}

export default MenuItem;