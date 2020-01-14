import React from 'react';
import Hero from '../ChildComponents/Hero'
import MyForm from '../ChildComponents/MyForm'
import Content from '../ChildComponents/Content'


function ContactPage( props ){
  return(
    <div>
      <Hero title={ props.title } subTitle={ props.subTitle } subText={ props.subText }></Hero>
      <Content>
        <MyForm></MyForm>
      </Content>
    </div>
  )
}
export default ContactPage
