import './sass/Menu.css';
import TabContainer from './MenuContainer';
import PageLayout from './Menu';

const ShopMenuWrapper = () => {

}

const ShopMenu = () => {
  return (
    <PageLayout 
      children={<TabContainer />} 
    />
  );
}

export default (ShopMenuWrapper, ShopMenu);
