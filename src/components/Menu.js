import './sass/Menu.css';
import TabContainer from './TabContainer';
import PageLayout from './PageLayout';

function Menu() {
  return (
    <PageLayout 
      children={<TabContainer />} 
    />
  );
}

export default Menu;
