import './sass/Menu.css';
import './sass/TabContainer.css';
import './sass/TabButton.css';

import MenuItem from './MenuItem';
import { MenuButton, MenuContainer } from './MenuContainer';
import ShopMenuLayout from './ShopMenuLayout';

import { useState, useEffect } from 'react';
import useMenuToggle from '../hooks/useMenuToggle';
import useStorage from '../hooks/useStorage';

const ShopMenuWrapper = () => {

}

const ShopMenu = () => {
  const [toggleState, setToggleState, toggleDelay] = useMenuToggle();
  
  const [menuItemsStorage, menuItemsFirestore, storedMenuItems] = useStorage('menu-items');

  const [menuTabs, setMenuTabs] = useState([]);
  const [menuPages, setMenuPages] = useState([]);

  const tabs = [
      <MenuButton
        key="pizza"
        text="Pizza"
        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
        onClick={() => setToggleState(1)}
      />,

      <MenuButton
        key="pizzabrötchen"
        text="Pizzabrötchen"
        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
        onClick={() => setToggleState(2)}
      />,

      <MenuButton
        key="calzone"
        text="Calzone"
        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
        onClick={() => setToggleState(3)}
      />,

      <MenuButton
        key="getränke"
        text="Getränke"
        className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
        onClick={() => setToggleState(4)}
      />
  ];



  const pages = [
    <div
      key={toggleState === 1 ? "activeContent1" : "1"}
      className={toggleState === 1 ? "content  active-content" : "content"}
      id={toggleState === 1 ? "activeContent" : ""}>
      <h2 className="content-title">Pizza</h2>
      <MenuItem name="Pizza Margherita" description="mit Tomatensauce und Käse" prices={[{priceName: "klein", priceValue: "4,50€"}, {priceName: "groß", priceValue: "6,00€"}]} />
      <MenuItem name="Pizza Salami" description="mit Tomatensauce und Salami" prices={[{priceName: "klein", priceValue: "5,00€"}, {priceName: "groß", priceValue: "7,00€"}]}/>
      <MenuItem name="Pizza Tonno" description="mit Tomatensauce und Thunfisch" prices={[{priceName: "klein", priceValue: "5,50€"}, {priceName: "groß", priceValue: "7,50€"}]}/>
      <MenuItem name="Pizza Funghi" description="mit Tomatensauce und Champignons" prices={[{priceName: "klein", priceValue: "5,00€"}, {priceName: "groß", priceValue: "7,00€"}]}/>
      <MenuItem name="Pizza Prociutto" description="mit Tomatensauce und Schinken" prices={[{priceName: "klein", priceValue: "5,50€"}, {priceName: "groß", priceValue: "7,50€"}]}/>
    </div>,

    <div
      key={toggleState === 2 ? "activeContent2" : "2"}
      className={toggleState === 2 ? "content  active-content" : "content"}
      id={toggleState === 2 ? "activeContent" : ""}>
      <h2 className="content-title">Pizzabrötchen</h2>
      <MenuItem name="Pizzabrötchen mit Kräuterbutter" description="Wahl aus: mit Aioli oder mit Kräuterbutter." prices={[{priceName: "8x", priceValue: "5,00€"}]}/>
      <MenuItem name="Pizzabrötchen mit Salami und Käse" description="Wahl aus: mit Aioli, mit Kräuterbutter, mit Ananas, mit Artischocken, mit Barbecuesauce und mehr." prices={[{priceName: "8x", priceValue: "6,00€"}]}/>
      <MenuItem name="Pizzabrötchen mit Schinken und Käse" description="Wahl aus: mit Aioli, mit Kräuterbutter, mit Ananas, mit Artischocken, mit Barbecuesauce und mehr." prices={[{priceName: "8x", priceValue: "6,50€"}]}/>
      <MenuItem name="Pizzabrötchen mit Dönerfleisch und Käse" description="Wahl aus: mit Aioli, mit Kräuterbutter, mit Ananas, mit Artischocken, mit Barbecuesauce und mehr." prices={[{priceName: "8x", priceValue: "6,00€"}]}/>
      <MenuItem name="Pizzabrötchen mit Schafskäse und Käse" description="Wahl aus: mit Aioli, mit Kräuterbutter, mit Ananas, mit Artischocken, mit Barbecuesauce und mehr." prices={[{priceName: "8x", priceValue: "6,50€"}]}/>
    </div>,

    <div 
      key={toggleState === 3 ? "activeContent3" : "3"}
      className={toggleState === 3 ? "content  active-content" : "content"}
      id={toggleState === 3 ? "activeContent" : ""}>
      <h2 className="content-title">Calzone</h2>
      <MenuItem name="Calzone" description="mit Hähnchen-Dönerfleisch und Peperoni" prices={[{priceName: null, priceValue: "5,00€"}]}/>
      <MenuItem name="Calzone Schinken" description="mit Schinken, Champignons, Paprika und Käse" prices={[{priceName: null, priceValue: "6,00€"}]}/>
      <MenuItem name="Calzone Spezial" description="mit drei Zutaten nach Wahl" prices={[{priceName: null, priceValue: "6,50€"}]}/>
    </div>,

    <div 
      key={toggleState === 4 ? "activeContent4" : "4"}
      className={toggleState === 4 ? "content  active-content" : "content"}
      id={toggleState === 4 ? "activeContent" : ""}>
      <h2 className="content-title">Getränke</h2>
      <MenuItem name="Coca-Cola" description="Mehrweg" prices={[{priceName: "0,33l", priceValue: "1,40€"}, {priceName: "1,0l", priceValue: "2,50€"}]}/>
      <MenuItem name="Coca-Cola light" description="Mehrweg" prices={[{priceName: "0,33l", priceValue: "1,40€"}, {priceName: "1,0l", priceValue: "2,50€"}]}/>
      <MenuItem name="Coca-Cola zero" description="Mehrweg" prices={[{priceName: "0,33l", priceValue: "1,40€"}, {priceName: "1,0l", priceValue: "2,50€"}]}/>
      <MenuItem name="Mezzo Mix" description="Mehrweg" prices={[{priceName: "0,33l", priceValue: "1,40€"}, {priceName: "1,0l", priceValue: "2,50€"}]}/>
      <MenuItem name="Fanta" description="Mehrweg" prices={[{priceName: "0,33l", priceValue: "1,40€"}, {priceName: "1,0l", priceValue: "2,50€"}]}/>
      <MenuItem name="Sprite" description="Mehrweg" prices={[{priceName: "0,33l", priceValue: "1,40€"}, {priceName: "1,0l", priceValue: "2,50€"}]}/>
    </div>
  ];

  useEffect(() => {
    if (!storedMenuItems) return;    

    setMenuTabs(Object.keys(storedMenuItems).map((key, index) => (
      <MenuButton 
        key={key + index} 
        text={key} 
        className={toggleState === (index + 1) ? "tabs active-tabs" : "tabs"} 
        onClick={() => setToggleState(index + 1)}
      />)
    ));

    setMenuPages(Object.keys(storedMenuItems).map(key => storedMenuItems[key].map((entry, index) => (
      <div>
        {entry.description}
      </div>
    ))));

  }, [storedMenuItems]);

  return (
    <ShopMenuLayout>
      <MenuContainer menuTabs={menuTabs} menus={menuPages} />
    </ShopMenuLayout>
  );
}

export default (ShopMenuWrapper, ShopMenu);
