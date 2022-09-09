import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { CardComponent } from '../Components/Card';
import { Row, Col , Container } from 'react-bootstrap';
import { getSubjects } from '../state/reducers/dataReducer';
import { Loader } from '../Components/Loader';

export const HomePage = () => {

    const { data, loading, error } = useSelector((state) => state.dataReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSubjects())
    }, [dispatch])

    return (
        <>
            <Container>

            <Row>
                {
                    error.length ?
                        <p>{error}</p>
                        :
                        ''
                }
                {
                    loading ?
                        <Loader /> :

                        data.length ? data.map((e) => {
                            return (
                                <Col key={e._id} md={3} className='mb-3' >
                                    <CardComponent {...e} />
                                </Col>
                            )
                        })
                            :
                            ''

                }

            </Row>
            </Container>

        </>
    )
}
