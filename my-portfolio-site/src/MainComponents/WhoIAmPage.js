import React from 'react';
import Hero from '../ChildComponents/Hero'
import Content from '../ChildComponents/Content'


function WhoIAmPage( props ){
  return(
    <div>
      <Hero title={ props.title } subTitle={ props.subTitle } subText={ props.subText }></Hero>
      <Content>
        <p> Name: Kimberly Bone </p>
        <p> Education: University of North Carolina at Greensboro c/o May 2019 | Flatiron School's coding bootcamp c/o November 2019.</p>
        <p> Hobbies: Cooking, volunteering, photography, and inspiring other women of color </p>
        <p> Fun Fact: I am bilingual (I speak Spanish).
            I traveled to Costa Rica and loved it so much that I went back a second time.
            The first time to volunteer and the second time to study abroad.
            Both times I stayed with at least 2 different families where they taught us how to live like a Costa Rican. </p>
        <p> I'm always eager to learn new things. </p>
        <p> Take a look at my resume! <a href="public/SoftwareResume.pdf" download > Download Kimberly's Resume </a></p>
      </Content>
    </div>
  )
}
export default WhoIAmPage
