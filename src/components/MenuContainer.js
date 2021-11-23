export const MenuButton = (props) => (
  <button className={props.className} onClick={props.onClick}>{props.text}</button>
);

export const MenuContainer = ({ menuTabs, menus }) => (
  <div className="container">
      <div className="bloc-tabs">
          {menuTabs}
      </div>
      
      <div className="content-tabs">        
          {menus}    
      </div>
    </div>
);