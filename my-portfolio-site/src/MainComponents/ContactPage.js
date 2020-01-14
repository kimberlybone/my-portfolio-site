import React from 'react';
import Hero from '../ChildComponents/Hero'
import Form from '../ChildComponents/Form'


function ContactPage( props ){
  return(
    <div>
      <Hero title={ props.title } subTitle={ props.subTitle } subText={ props.subText }></Hero>
      <Form></Form>
    </div>
  )
}
export default ContactPage
