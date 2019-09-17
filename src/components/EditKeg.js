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
