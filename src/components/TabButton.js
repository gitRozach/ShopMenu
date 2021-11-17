import './sass/TabButton.css';

function TabButton(props) {
    return (
        <button className={props.className} onClick={props.onClick}>{props.text}</button>);
}

export default TabButton;