<Form onSubmit={handleNewKegFormSubmission}>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" id="name" placeholder="Name" ref={(input) => {_name = input;}}/>
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
</Form>

<Form onSubmit={handleNewKegFormSubmission}>
         <Row>
           <Col>
             <Form.Control type='text'
               id='name'
               placeholder="Name"
               ref={(input) => {_name = input;}}/>

           </Col>
           <Col>
             <Form.Control type='text'
               id='brand'
               placeholder='Brand'
               ref={(input) => {_brand = input;}}/>

           </Col>
           <Col>
             <Form.Control type='number'
               id='price'
               placeholder="Price"
               ref={(input) => {_price = input;}}/>

           </Col>
           <Col>
             <Form.Control type='text'
             id='abv'
             placeholder='ABV'
             ref={(input) => {_abv = input;}}/>}/>

           </Col>
         </Row>
         <br/>
         <Row>
           <Col>
             <Form.Control id='flavor'
             placeholder='Flavor profile'
             ref={(textarea) => {_flavor = textarea;}}/>

           </Col>
           <Button variant="primary" type="submit">
             Add
           </Button>
         </Row>
       </Form>
