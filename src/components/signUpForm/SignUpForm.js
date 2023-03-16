import { useRef, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react";

const SignUpForm = () => {
  const emailInput = useRef("");
  const nomInput = useRef("");
  const premonInput = useRef("");
  const phone = useRef("");
  const MDPInput = useRef("");
  const CMDPInput = useRef("");
  const [errors, setErrors] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    /*
    pour un email :   /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    pour un strong password :  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/
     pour un phone number : /^\d{8}$/
    pour chaine de caractére et nombre : /^[a-zA-Z0-9\s,'-]*$/
    
    */
    const nameRegex = /^[a-zA-Z ]+$/; // Matches letters and spaces only

    const email = emailInput.current.value;
    const name = nomInput.current.value;
    if (email === "") {
      setErrors({ emailIsEmpty: " l'emai est obligatoire" });
    } else if (!nameRegex.test(name)) {
      setErrors({ nameIsEmpty: " le nom  doit etre une ffffff " });
    } else {
      emailInput.current.value = "";
      setErrors([]);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <VStack>
        <FormControl id="email" isInvalid={errors.emailIsEmpty}>
          <FormLabel>email</FormLabel>
          <Input type="text" ref={emailInput} />
          <FormHelperText>{errors.emailIsEmpty}</FormHelperText>
        </FormControl>
        <HStack>
          <FormControl id="nom" isInvalid={errors.nameIsEmpty}>
            <FormLabel>nom</FormLabel>
            <Input type="text" ref={nomInput} />
            <FormHelperText>{errors.nameIsEmpty}</FormHelperText>
          </FormControl>
          <FormControl id="prenom">
            <FormLabel>prenom</FormLabel>
            <Input type="text" ref={premonInput} />
            <FormHelperText>hhhh</FormHelperText>
          </FormControl>
        </HStack>
        <FormControl id="phone">
          <FormLabel>phone</FormLabel>
          <Input type="text" ref={phone} />
          <FormHelperText>fffff</FormHelperText>
        </FormControl>
        <HStack>
          <FormControl id="PSD">
            <FormLabel>PASSWORD</FormLabel>
            <Input type="password" ref={MDPInput} />
            <FormHelperText>hhhh</FormHelperText>
          </FormControl>
          <FormControl id="CPD">
            <FormLabel>confirm password</FormLabel>
            <Input type="password" ref={CMDPInput} />
            <FormHelperText>hhhh</FormHelperText>
          </FormControl>
        </HStack>
      </VStack>
      <Button type="submit">send</Button>
    </form>
  );
};

export default SignUpForm;
