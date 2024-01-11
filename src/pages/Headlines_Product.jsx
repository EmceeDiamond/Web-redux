import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const HeadlinesProduct = () => {

return (
    <div>
        <div className="container">
                <Row>
                    <Col>
                    <div className="mb-3">
                        <label className="form-lable" htmlFor="element_name">Name</label>
                        {/*<input type="text" className="form-control" name="element_name" id="element_name" onChange={handleInput}/>*/}
                    </div>
                    </Col>
                    <Col>
                    <div className="mb-3">
                        {/*<label htmlFor="price" className="form-lable">Price</label>*/}
                        <label className="form-lable" htmlFor="price">Price</label>
                       { /*<input type="number" step={0.01} className="form-control" name="price" id="price" onChange={handleInput}/>*/}
                    </div>
                    </Col>
                    <Col>
                    <div className="mb-3">
                        {/*(<label htmlFor="deadline" className="form-lable">Deadline</label>*/}
                        <label className="form-lable" htmlFor="deadline">Deadline</label>
                        {/*<input type="text" className="form-control" name="deadline" id="deadline" onChange={handleInput}/>*/}
                    </div>
                    </Col>
                </Row>
        </div>
    </div>
  )
}