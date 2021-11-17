import './sass/MenuItem.css';

function MenuItem(props) {
    let name = props.name;
    let description = props.description;
    let priceName1 = props.priceName1;
    let priceValue1 = props.priceValue1;
    let priceName2 = props.priceName2;
    let priceValue2 = props.priceValue2;
    let priceName3 = props.priceName3;
    let priceValue3 = props.priceValue3;
    let priceName4 = props.priceName4;
    let priceValue4 = props.priceValue4;
    let priceName5 = props.priceName5;
    let priceValue5 = props.priceValue5;

    return (
        <div className="MenuItem">
            <div className="MenuItemContent">

                <div className="MenuItemTitle">
                    <h3>{name}</h3>
                </div>

                <div className="MenuItemDescription">
                    <h4>{description}</h4>
                </div>    
                
                <div className="MenuItemPrices">
                    <div>
                        <h4 className="PriceName">{priceName1}</h4>
                        <h4 className="PriceValue">{priceValue1}</h4>
                    </div>
                    <div>
                        <h4 className="PriceName">{priceName2}</h4>
                        <h4 className="PriceValue">{priceValue2}</h4>
                    </div>
                    <div>
                        <h4 className="PriceName">{priceName3}</h4>
                        <h4 className="PriceValue">{priceValue3}</h4>
                    </div>
                    <div>
                        <h4 className="PriceName">{priceName4}</h4>
                        <h4 className="PriceValue">{priceValue4}</h4>
                    </div>
                    <div>
                        <h4 className="PriceName">{priceName5}</h4>
                        <h4 className="PriceValue">{priceValue5}</h4>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default MenuItem;