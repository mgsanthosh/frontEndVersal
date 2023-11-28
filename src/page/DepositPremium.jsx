import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Input,
  FormGroup,
  Label,
  Form,
  Button,
} from 'reactstrap';
import CustomCard from '../Components/CustomCard/CustomCard';



const DepositPremium = () => {

  const navigate = useNavigate();


  useEffect(() =>{
    if(!localStorage.getItem("token")){
      navigate("/login");
    }
  },[]);



  const [formData, setFormData] = useState({
      policyNo: '',
      premiumAmount: '',
      dob: '',
      emailId: '',
      mobNum:'',
      confirmCheck:''
  });

  // Handler for form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, e.g., send it to a server
    
    const data = [
      { pno: formData.policyNo, amt: formData.premiumAmount, email: formData.emailId, mobile: formData.mobNum },
    ];

    navigate('/receipt',{
      replace:true,
      state: {data}
    });

  };
  
  return (
    <CustomCard>
    <div className="depositPremiumContainer">
    <Container  className='p-4 mt-5'>
      <Form onSubmit={handleSubmit}>
        <Row>
        <span className='mb-3' style={{color:"red"}}>* All fields are mandatory</span>
        
            <Col md={6}>
              <FormGroup floating>
                <Input
                    id="exampleEmail"
                    name="policyNo"
                    placeholder="Policy Number"
                    value={formData.policyNo}
                    onChange={handleChange}
                />
                <Label for="exampleEmail">
                    Policy Number
                </Label>
              </FormGroup>
              {' '}

              <FormGroup floating>
                <Input
                    id="exampleEmail"
                    type='date'
                    name="dob"
                    placeholder="Date of Birth"
                    value={formData.dob}
                    onChange={handleChange}
                />
                <Label for="exampleEmail">
                    Date of Birth
                </Label>
              </FormGroup>

              <FormGroup floating>
                <Input
                    id="exampleEmail"
                    name="mobNum"
                    placeholder="Mobile number"
                    type='number'
                    value={formData.mobNum}
                    onChange={handleChange}
                />
                <Label for="exampleEmail">
                   Mobile number
                </Label>
              </FormGroup>

            </Col>
            <Col md={6}>
            <FormGroup floating>
                <Input
                    id="exampleEmail"
                    name='premiumAmount'
                    value={formData.premiumAmount}
                    onChange={handleChange}
                />
                <Label for="exampleEmail">
                    Instalment Premium (₹)
                </Label>
              </FormGroup>

              <FormGroup floating>
                <Input
                    id="exampleEmail"
                    name="emailId"
                    value={formData.emailId}
                    onChange={handleChange}
                    type='email'
                />
                <Label for="exampleEmail">
                    Email Id
                </Label>
              </FormGroup>
            </Col>
            <Col md={6}>

            </Col>
          </Row>
        
          <FormGroup check>
            <Input
              id="exampleCheck"
              name="check"
              type="checkbox"
            />
            <Label
              check
              style={{fontSize:".8rem",fontWeight:"600"}}
              for="exampleCheck"
            >
                  I confirm that the mobile number mentioned above registred with my lic policy,<br/> I hereby authorize lic to use the mobile number for any conversation.
                </Label>
              </FormGroup>
              
            <Row>
              <Col md="12" className=' text-center'>
                  <Button type='submit' color='dark' className='mt-4'>
                       Proceed
                 </Button>
              </Col>
            </Row>  
           
      </Form>
    </Container>
    </div>
    
    </CustomCard>
  )
}

export default DepositPremium