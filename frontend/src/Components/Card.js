import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { getCourses } from '../state/reducers/dataReducer';


export const CardComponent = (props) => {

    const dispatch = useDispatch();

    return (
        <>
            <Card className="text-center" >
                <Card.Body>
                    <div style={{ height: '80%' , marginBottom : '12px' }} >
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>
                            {props.description}
                            <br />
                            {props.subject ? props.subject.name : ''}
                        </Card.Text>
                    </div>

                    <Button variant="primary" onClick={ () => dispatch(getCourses(props._id)) } >Check this out</Button>
                </Card.Body>
            </Card>
        </>
    )
}
