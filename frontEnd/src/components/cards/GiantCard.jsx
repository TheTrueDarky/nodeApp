import { Card } from 'react-bootstrap';
import './GiantCard.css';

function GiantCard(props) {
    function transformImageToURL(image) {
        let route = String.fromCharCode(...image.data);
        let url = 'http://localhost:8900' + route;
        return url;
    }
    return (
        <Card style={{ overflow: "hidden", maxHeight: "1200px", border: "1px solid black", borderStyle: "double", background: "radial-gradient(circle, #ffffff, #dddddd)", fontFamily: "Arial, sans-serif" }} key={props.id}>
            <Card.Body>
                <Card.Title>{props.role}</Card.Title>
                <Card.Text>: {props.role}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default GiantCard;