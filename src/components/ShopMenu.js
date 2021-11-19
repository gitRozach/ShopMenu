import './sass/Menu.css';
import MenuContainer from './MenuContainer';
import ShopMenuLayout from './ShopMenuLayout';

const ShopMenuWrapper = () => {

}

const ShopMenu = () => {
  return (
    <ShopMenuLayout 
      children={<MenuContainer />} 
    />
  );
}

export default (ShopMenuWrapper, ShopMenu);
