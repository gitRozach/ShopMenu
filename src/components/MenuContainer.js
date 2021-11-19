import { useState, useEffect } from 'react';
import MenuItem from './MenuItem';
import './sass/TabContainer.css';
import './sass/TabButton.css';

import anime from 'animejs/lib/anime.es.js';

const MenuButton = (props) => (
  <button className={props.className} onClick={props.onClick}>{props.text}</button>
);

const MenuContainer = (props) => {
  let tabIndex = 1;
  let tabCount = 4;

  const [toggleState, setToggleState] = useState(1);
  const [toggleDelay] = useState(8000);
  const toggleTab = (index) => setToggleState(index);

  function toggleActiveContent() {
    toggleTab(tabIndex);
    tabIndex += 1;
    if (tabIndex > tabCount) tabIndex = 1;
    animateMenuItemsOut();
    animateMenuTitleOut();
  }

  function animateMenuItemsOut() {
    anime({
      targets: '.MenuItem',
      translateY: {
        value: ['0px', '100%'],
        easing: 'easeInOutQuad',
      },
      opacity: {
        value: [1.0, 0.0],
        easing: 'easeInOutExpo',
      },
      delay: anime.stagger(75, {start: toggleDelay * 0.75, from: 'center'})
    });
  }

  function animateMenuTitleOut() {
    anime({
      targets: '.content-title',
      opacity: {
        value: [1.0, 0.0],
        easing: 'easeInOutExpo',
      },
      delay: anime.stagger(75, {start: toggleDelay * 0.85, from: 'center'})
    });
  }

  useEffect(() => {
    const tabHideInterval = setInterval(() => {
      toggleActiveContent();
    }, toggleDelay);

    return () => clearInterval(tabHideInterval);
  }, [toggleDelay, toggleActiveContent]);

  return (
    <div className="container">

      <div className="bloc-tabs">

        <MenuButton
          text="Pizza"
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        />

        <MenuButton
          text="Pizzabrötchen"
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        />

        <MenuButton
          text="Calzone"
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        />

        <MenuButton
          text="Getränke"
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        />

      </div>

      <div className="content-tabs">        
        <div 
          className={toggleState === 1 ? "content  active-content" : "content"}
          id={toggleState === 1 ? "activeContent" : ""}>
          <h2 className="content-title">Pizza</h2>
          <MenuItem name="Pizza Margherita" description="mit Tomatensauce und Käse" prices={[{priceName: "klein", priceValue: "4,50€"}, {priceName: "groß", priceValue: "6,00€"}]} />
          <MenuItem name="Pizza Salami" description="mit Tomatensauce und Salami" prices={[{priceName: "klein", priceValue: "5,00€"}, {priceName: "groß", priceValue: "7,00€"}]}/>
          <MenuItem name="Pizza Tonno" description="mit Tomatensauce und Thunfisch" prices={[{priceName: "klein", priceValue: "5,50€"}, {priceName: "groß", priceValue: "7,50€"}]}/>
          <MenuItem name="Pizza Funghi" description="mit Tomatensauce und Champignons" prices={[{priceName: "klein", priceValue: "5,00€"}, {priceName: "groß", priceValue: "7,00€"}]}/>
          <MenuItem name="Pizza Prociutto" description="mit Tomatensauce und Schinken" prices={[{priceName: "klein", priceValue: "5,50€"}, {priceName: "groß", priceValue: "7,50€"}]}/>
        </div>

        <div 
          className={toggleState === 2 ? "content  active-content" : "content"}
          id={toggleState === 2 ? "activeContent" : ""}>
          <h2 className="content-title">Pizzabrötchen</h2>
          <MenuItem name="Pizzabrötchen mit Kräuterbutter" description="Wahl aus: mit Aioli oder mit Kräuterbutter." prices={[{priceName: "8x", priceValue: "5,00€"}]}/>
          <MenuItem name="Pizzabrötchen mit Salami und Käse" description="Wahl aus: mit Aioli, mit Kräuterbutter, mit Ananas, mit Artischocken, mit Barbecuesauce und mehr." prices={[{priceName: "8x", priceValue: "6,00€"}]}/>
          <MenuItem name="Pizzabrötchen mit Schinken und Käse" description="Wahl aus: mit Aioli, mit Kräuterbutter, mit Ananas, mit Artischocken, mit Barbecuesauce und mehr." prices={[{priceName: "8x", priceValue: "6,50€"}]}/>
          <MenuItem name="Pizzabrötchen mit Dönerfleisch und Käse" description="Wahl aus: mit Aioli, mit Kräuterbutter, mit Ananas, mit Artischocken, mit Barbecuesauce und mehr." prices={[{priceName: "8x", priceValue: "6,00€"}]}/>
          <MenuItem name="Pizzabrötchen mit Schafskäse und Käse" description="Wahl aus: mit Aioli, mit Kräuterbutter, mit Ananas, mit Artischocken, mit Barbecuesauce und mehr." prices={[{priceName: "8x", priceValue: "6,50€"}]}/>
        </div>

        <div 
          className={toggleState === 3 ? "content  active-content" : "content"}
          id={toggleState === 3 ? "activeContent" : ""}>
          <h2 className="content-title">Calzone</h2>
          <MenuItem name="Calzone" description="mit Hähnchen-Dönerfleisch und Peperoni" prices={[{priceName: null, priceValue: "5,00€"}]}/>
          <MenuItem name="Calzone Schinken" description="mit Schinken, Champignons, Paprika und Käse" prices={[{priceName: null, priceValue: "6,00€"}]}/>
          <MenuItem name="Calzone Spezial" description="mit drei Zutaten nach Wahl" prices={[{priceName: null, priceValue: "6,50€"}]}/>
        </div>

        <div 
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

      </div>
    </div>
  );
}

export default (MenuButton, MenuContainer);