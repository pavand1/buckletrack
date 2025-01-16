import { useEffect, useState } from 'react';


function useFormValidation() {
  const [inputValues, setInputValue] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });
  const [validation, setValidation] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });
  const [nameErrorMsg, setNameErrorMsg] = useState('');
  const [messageErrorMsg, setMessageErrorMsg] = useState('');
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [mobileErrorMsg, setMobileErrorMsg] = useState('');

  
  //handle submit updates
  function handleChange(event: any) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
  }

  const handleValidation = (event: any, valueToCompare?: any, compareText?: any) => {
    const { name, value } = event.target;

    switch (name) {
      case 'name': {
        //Name validation
        const nameRegex = /^[A-Za-z]+[A-Za-z ]*$/;
        if (!value.trim()) {
          setNameErrorMsg('Name Is Required');
        } else if (!value.match(nameRegex)) {
          setNameErrorMsg('Please Enter Valid Name');
        } else {
          setNameErrorMsg('');
        }
        break;
      }
      case 'email': {
        // email validation
        const emailRegex = /^[0-9\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!value.trim()) {
          setEmailErrorMsg('Email Id Is Required');
        } else if (!value.match(emailRegex)) {
          setEmailErrorMsg('Please Enter Valid Email Id');
        } else {
          setEmailErrorMsg('');
        }
        break;
      }
      case 'mobileNumber': {
        //mobile validation
        const mobileRegex = /^[6-9]\d{9}$/;
        if (!value.trim()) {
          setMobileErrorMsg('Mobile Number Is Required');
        } else if (!value.match(mobileRegex)) {
          setMobileErrorMsg('Please Enter Valid Mobile Number');
        } else {
          setMobileErrorMsg('');
        }
        break;
      }
      case 'message': {
        //Message validation
        const messageRegex = /^[A-Za-z]+[A-Za-z ]*$/;
        if (!value.trim()) {
          setMessageErrorMsg('Message Is Required');
        } else if (!value.match(messageRegex)) {
          setMessageErrorMsg('Please Enter Valid Message');
        } else {
          setMessageErrorMsg('');
        }
        break;
      }
    }
  };

  return {
    handleChange,
    validation,
    handleValidation,
    mobileErrorMsg,
    emailErrorMsg,
    nameErrorMsg,
    messageErrorMsg,
  };
}

export default useFormValidation;
