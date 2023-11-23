import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWContext } from '../helper/contextapi';
import { ToastContainer, toast } from 'react-toastify';
import { useSpring,animated } from 'react-spring';
import 'react-toastify/dist/ReactToastify.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Input,
  FormGroup,
  Label,
  Button,
} from 'reactstrap';

function Login() {


  
const [flip,setFlip] = useState(false);
const props = useSpring({
  to:{opacity:1},
  from:{opacity:0},
  reset:false,
  reverse:flip,
  delay:380,
  onRest: () => setFlip(flip),
})

const props2 = useSpring({
  to:{opacity:1},
  from:{opacity:0},
  reset:false,
  reverse:flip,
  delay:100,
  onRest: () => setFlip(flip),
})


    const { updateLog } = useWContext();
  
    const [username, setUsername] = useState('');
    const [isError, setError] = useState(false);
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    const notify = () => toast.error("All fields are required!");


    const handleLogin = () => {
      if(username !== '' && password !== '')
      {
              setLoggedIn(true);
              updateLog('login');

              alert("Welcome to Dashboard!");
              localStorage.setItem('token',"HHyvloJi0VZH32vCpOi6HkFVBHv23GEdX5r9hUm4aJKByZvOkhbBzOgcL81tbCQD")
      }else{
        notify();
      }
    };
  
    useEffect(() =>{
      if(localStorage.getItem("token")){
        navigate("/deposit-premium");
      }
    },[],navigate);

    // Redirect to another page when logged in
    useEffect(() => {
      if (loggedIn) {
        navigate('/deposit-premium');
      }
    }, [loggedIn, navigate]);


  return (
    <Container fluid className='p-4' >

    <ToastContainer />

      <Row>
        <Col  md={{ size: 4, offset: 2 }} className='text-center text-md-start d-flex flex-column justify-content-center'>
        <animated.div style={props2}>
          <h2 className="my-5 display-4 fw-bold ls-tight px-2">
            The best way <br />
            <span className="text-primary">for deposit premium</span>
          </h2>
          
          <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>
          </animated.div>

        </Col>

        <Col md='4'>
        <animated.div style={props}>
          <Card shadow="lg" style={{boxShadow:"0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 6px 6px 0 rgba(0, 0, 0, 0.30)"}} className='my-5'>
            
           <CardBody className='p-5'>
             <p className='mb-2' style={{color:"#222",fontWeight:"bold",marginBottom:"1rem",fontSize:".9rem",display:"block"}}>Customer Login<br/></p>
          
         
            <FormGroup  floating>
                <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Label for="exampleEmail">
                    Email
                </Label>
                </FormGroup>
                {' '}
                <FormGroup floating>
                <Input
                    id="examplePassword"
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <Label for="examplePassword">
                    Password
                </Label>
                </FormGroup>



              <div className='d-flex mb-3'>
              <FormGroup switch>
                    <Input
                    style={{fontSize:"1rem",marginTop:".5rem"}}
                    type="switch"
                    // checked={state}
                    // onClick={() => {
                    //     setState(!state);
                    // }}
                    />
                    <Label style={{fontSize:".8rem"}} check> <FontAwesomeIcon icon="coffee" />Agent Login</Label>
                </FormGroup>
              </div>
              

              <Button  onClick={handleLogin} color='primary' className='w-100 mb-4' size='md'>Login</Button>

              <FontAwesomeIcon icon={['fab', 'apple']} />
              <FontAwesomeIcon icon={['fab', 'microsoft']} />
              <FontAwesomeIcon icon={['fab', 'google']} />
              
              <div className="text-center">

                <Button color='none' className='mx-3' style={{ color: '#1266f1' }}>
                   
                </Button>

                <Button color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <i className='fab fa-twitter' style={{ fontSize: '1.5rem' }}></i>
                </Button>

                <Button color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <i className='fab fa-google' style={{ fontSize: '1.5rem' }}></i>
                </Button>

                <Button color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <i className='fab fa-github' style={{ fontSize: '1.5rem' }}></i>
                </Button>

              </div>

            </CardBody>
          </Card>
        </animated.div>
        </Col>

      </Row>

    </Container>
  );
}

export default Login;
