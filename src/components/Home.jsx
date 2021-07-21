import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
    
    return (
        <Container>
            
            <Mark><a href="https://www.linkedin.com/in/arya-sah-5100121b3/">@Arya Sah ~2021</a></Mark>
            <Section title="Model-S" description="Order Online for graet discounts" backgroundImg="model-s.jpg" leftBtnText="Custom Order" rightBtnText="Existing Inventory"  />
            <Section title="Model-Y" description="Order Online for graet discounts" backgroundImg="model-y.jpg" leftBtnText="Custom Order" rightBtnText="Existing Inventory"  />
            <Section title="Model-3" description="Order Online for graet discounts" backgroundImg="model-3.jpg" leftBtnText="Custom Order" rightBtnText="Existing Inventory"  />
            <Section title="Model-X" description="Order Online for graet discounts" backgroundImg="model-x.jpg" leftBtnText="Custom Order" rightBtnText="Existing Inventory"  />
            <Section title="Lowest Cost Solar Panel" description="30 days Money Back Guarantee" backgroundImg="solar-panel.jpg" leftBtnText="Order Now" rightBtnText="Learn More"  />
            <Section title="Solar for New Roofs" description="Solar Roof Costs Less Than a New Roof Plus Solar Panels" backgroundImg="solar-roof.jpg" leftBtnText="Order Now" rightBtnText="Learn More"  />
            <Section title="Accessories" description="" backgroundImg="accessories.jpg" leftBtnText="Shop Now"  />
            
        </Container>
    )
}

export default Home

const Container = styled.div`
    height:100vh;
    background-color:whitesmoke;
    
`
const Mark = styled.p`
    padding:20px;
    font-size:14px;
    color:gray;
    font-weight:bold;
    transform:rotate(0deg);
    width:fit-content;
    position:fixed;
    top:90%;
    left:0;
    right:100%;
    z-index:10002;
    @media (max-width:768px){
        transform:rotate(-90deg);
        padding:0px;

    }
`