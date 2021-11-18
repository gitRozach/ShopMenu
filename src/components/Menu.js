import './sass/PageLayout.css';

function PageLayout(props) {
    return (
        <div className="PageLayout">
            {props.children}
        </div>
    );
}

export default PageLayout;