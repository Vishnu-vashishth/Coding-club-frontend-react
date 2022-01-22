import React from 'react';

const Form = () => {
  return (
            <form  className="Form">
                <input type="text" className='forminput' placeholder='Enter Name'/>
                <input type="text" className='forminput' placeholder='Enter Email'/>
                <input type="text" className='forminput' placeholder='Enter phone'/>
                <input type="text" className='forminput' placeholder='Branch'/>
                <input type="number" className='forminput' placeholder='semester'/>
               <button className='btn' type='submit'>Submit</button>
              
            </form>
  );
};

export default Form;
