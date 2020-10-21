// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { registerUser } from "../redux/actions/userActions";

// export default function Register2() {
//   const { register, handleSubmit, errors } = useForm();
//   const onSubmit = data => console.log(data);
//   console.log(errors);
  
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input type="text" placeholder="First name" name="First name" ref={register({required: true, maxLength: 80})} />
//       <input type="text" placeholder="Last name" name="Last name" ref={register({required: true, maxLength: 100})} />
//       <input type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
//       <input type="tel" placeholder="Mobile number" name="Mobile number" ref={register({required: true, minLength: 6, maxLength: 12})} />
     
//       <input type="submit" />
//     </form>
//   );
// }



import React from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "../redux/actions/userActions";

export default function Register2() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log('data ::::', data)
    
  }
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
       <input
        type="text"
        placeholder="Username"
        name="username"
    
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
      
      />
          <input
        type="text"
        placeholder="password"
        name="password"
       
      />
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
       
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
     
      />
      <input
        type="text"
        placeholder="House Number"
        name="houseNumber"
       
      />
          <input
        type="text"
        placeholder="Street Name"
        name="streetName"
       
      />
           <input
        type="text"
        placeholder="City"
        name="city"
        
      />
             <input
        type="text"
        placeholder="Zip"
        name="zip"
       
      />
                <input
        type="text"
        placeholder="State"
        name="state"
       
      />
                  <input
        type="text"
        placeholder="Country"
        name="country"
       
      />

      <input type="submit" />
    </form>
  );
}
