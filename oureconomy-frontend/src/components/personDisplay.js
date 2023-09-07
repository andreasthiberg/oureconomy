import '../css/purchases-page.css';

function PersonDisplay(props) {
  return (
    <div className="person-display">
        <div className="person-header">
          <p className="person-name">
            {props.name}
          </p>
        </div>
    </div>
    
  );
}

export default PersonDisplay;
