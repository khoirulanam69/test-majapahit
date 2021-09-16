import { Component } from "react";
import { Card } from "react-bootstrap";
import { connect } from 'react-redux';
import axios from 'axios';
import globalActionType from "../redux/reducer/globalActionType";

import Img from '../img/cardimg.jpg';

const getData = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            return dispatch({
                type: globalActionType.ADD_DATA,
                payload: res.data
            });
        })
    }
}

class ListData extends Component {
    componentDidMount() {
        getData();
        this.props.setData();
    }

    render() {
        return (
            <div className="listitem">
                {this.props.data.map((element, idx) => {
                    return (
                        <Card key={idx}>
                            <Card.Img variant="top" src={Img} />
                            <div className="number">{element.id}</div>
                            <Card.Body>
                                <Card.Title>{element.title}</Card.Title>
                                <Card.Subtitle className="mb-2 mt-4 text-muted">Description</Card.Subtitle>
                                <Card.Text>{element.body}</Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        )
    }
}

const getGlobalState = (state) => {
    return { data: state.data }
}

const setGlobalState = (dispatch) => {
    return {
        setData: () => dispatch(getData())
    }
}

export default connect(getGlobalState, setGlobalState)(ListData);