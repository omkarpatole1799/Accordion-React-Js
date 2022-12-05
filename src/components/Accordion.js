// this is accordion
import React, { useState } from 'react'
import { AccordionData } from './ArrodionData';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordionSection = styled.div`

display:flex;
flex-direction:column;
align-item:center;
position: relative;
align-items: center;
justify-content: center;
height: 100vh;
background-color: #FFFBEB; 
`
const Container = styled.div`
padding: 2rem;
background: #DAE2B6;
position: absolute;
// display: flex;
box-shadow: 3px 3px 9px #00ffb9;
`
const Wrap = styled.div`
padding: 0 2rem;
cursor:pointer;
display: flex;
justify-content: space-between;
box-shadow: 3px 3px 9px #fff;
align-items: center;
`

const DropDown = styled.div`
display: flex;
flex-direction: column;
justify-conent: center;
-webkit-transition: all 0.3s ease-in-out;
-moz-transition: all 0.3s ease-in-out;
-o-transition: all 0.3s ease-in-out;
transition: all 0.3s ease-in-out;

`

function Accordion() {
    const [clicked, setClicked] = useState(false);
    const toggle = (key) => {
        if (clicked === key) {
            return setClicked(null)
        }
        else {
            return setClicked(key)
        }
    }
    return (
        <AccordionSection className="container">
            <Container>
                {AccordionData.map((item, key) => {
                    return (
                        <>
                            <Wrap onClick={() => toggle(key)}>
                                <h3>{item.question}</h3>
                                <span>{clicked === key ? <FiPlus /> : <FiMinus />}</span>
                            </Wrap>
                            {clicked === key ? (
                            <DropDown>
                                <p>{item.answer}</p>
                            </DropDown>
                            ):null}

                        </>
                    )
                })}
            </Container>
        </AccordionSection>
    )
}

export default Accordion