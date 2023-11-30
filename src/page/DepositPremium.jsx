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
import AOS from "aos";
import 'aos/dist/aos.css';
import "../App.scss";
import { Field, Formik, useFormik } from "formik";
import * as Yup from "yup";
import axiosInstance from '../Utils/httpCalls';
import { useWContext } from '../helper/contextapi';

const initialValues = {
  policyNo: '',
  dob: '',
  mobileNumber: '',
  premiumAmount: '',
  email: ''
}

const validation = Yup.object().shape({
  policyNo: Yup.string().required('Policy Number is required'),
  dob: Yup.date().required('Date of Birth is required'),
  mobileNumber: Yup.number().required('Mobile Number is required'),
  premiumAmount: Yup.number()
    .required('Installment Amount is required')
    .min(0, 'Installment Amount must be greater than or equal to 0'),
  email: Yup.string().email("Please Enter a valid Email").required("Please Enter the Email"),
});
const DepositPremium = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [errorText, setErrorText] = useState("");
  const { updateLog, loader, setLoader } = useWContext();

  const handlePremiumSubmit = (formValues) => {
    setLoader(true);
    const httpData = {
      "policyNo": formValues['policyNo'],
      "userId": userData["usreId"],
      "policyDate": formValues['dob'],
      "policyAmount": formValues['premiumAmount'],
      "policyStatus":1
  }
    axiosInstance.post("policy/payPolicy", httpData).then((resp) => {
      console.log("The Response ",resp);
      const data = [formValues]
      navigate('/builder', {
        replace: true,
        state: {data}
      });
    }).catch((err) => {
      setErrorText("Error in Paying Premium! Please Try Again Later");
    }).finally(() => {
      setLoader(false);
    })

  }

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log("The Formik Forms Values are ", values);
      handlePremiumSubmit(values);
    },
    validationSchema: validation
  });

  


  useEffect(() => {
    AOS.init({
      once: true,
      offset: 50,
      duration: 1000
    });
    const userData = JSON.parse(localStorage.getItem("userData"));
    setUserData(userData);
    if(!userData) {
      navigate("/", {replace: true});
    }

  }, []);


  return (
    <div className='depositPremiumMainContainer'>
      <CustomCard>
        <div className="depositPremiumContainer" data-aos="zoom-out">
          <div className='depositPremiumHeading'>Premium Collection Form</div>

          <Container>
            <Form onSubmit={formik.handleSubmit}>
              <Row>
                <span className='mb-3' style={{ color: "red" }}>* All fields are mandatory</span>

                <Col md={6}>
                  <FormGroup floating>
                    <Input
                      onBlur={formik.handleBlur} onChange={formik.handleChange("policyNo")} value={formik.values.policyNo}
                      id="policyNo"
                      name="policyNo"
                      placeholder="Policy Number"
                    />
                    <Label for="policyNo">
                      Policy Number
                    </Label>
                    {formik.errors.policyNo && <div className="errorMessageContainer">{formik.errors.policyNo}</div>}
                  </FormGroup>

                  <FormGroup floating>
                    <Input
                    onBlur={formik.handleBlur} onChange={formik.handleChange("dob")} value={formik.values.dob}
                      id="dob"
                      type='date'
                      name="dob"
                      placeholder="Date of Birth"
                    />
                    <Label for="dob">
                      Date of Birth
                    </Label>
                    {formik.errors.dob && <div className="errorMessageContainer">{formik.errors.dob}</div>}

                  </FormGroup>

                  <FormGroup floating>
                    <Input
                    onBlur={formik.handleBlur} onChange={formik.handleChange("mobileNumber")} value={formik.values.mobileNumber}
                      id="mobileNumber"
                      name="mobileNumber"
                      placeholder="Mobile number"
                      type='number'
                    />
                    <Label for="mobileNumber">
                      Mobile number
                    </Label>
                    {formik.errors.mobileNumber && <div className="errorMessageContainer">{formik.errors.mobileNumber}</div>}

                  </FormGroup>

                </Col>
                <Col md={6}>
                  <FormGroup floating>
                    <Input
                      onBlur={formik.handleBlur} onChange={formik.handleChange("premiumAmount")} value={formik.values.premiumAmount}
                      id="premiumAmount"
                      name='premiumAmount'
                      type='number'
                    />
                    <Label for="premiumAmount">
                      Instalment Premium (₹)
                    </Label>
                    {formik.errors.premiumAmount && <div className="errorMessageContainer">{formik.errors.premiumAmount}</div>}

                  </FormGroup>

                  <FormGroup floating>
                    <Input
                      onBlur={formik.handleBlur} onChange={formik.handleChange("email")} value={formik.values.email}
                      id="email"
                      name="email"
                      type='email'
                    />
                    <Label for="email">
                      Email Id
                    </Label>
                    {formik.errors.email && <div className="errorMessageContainer">{formik.errors.email}</div>}

                  </FormGroup>
                </Col>
                <Col md={6}>

                </Col>
              </Row>

  

              <Row>
                <Col className=' text-center'>
                  <Button type='submit' color='dark' className='mt-4'>
                    Proceed
                  </Button>
                </Col>
              </Row>

            </Form>
          </Container>
        </div>
        <div className='errorText'>
          {errorText}
        </div>

      </CustomCard>
    </div>

  )
}

export default DepositPremium