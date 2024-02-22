import styled from "styled-components";
import { Link } from "react-router-dom";

export const EventsItem = styled.li`
    width: 360px;
    min-height: 320px;
    background-color: #FFFFFF;
    -webkit-box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.3);
    box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.3);
    list-style-type: none;
`
export const EventTitle = styled.h3`
    font-family: 'Playfair Display', serif;
    font-size: 18px;
    padding: 15px 15px 0 15px;
    font-weight: 300;
    line-height: 150%;
`
export const EventImage = styled.img`
    padding: 15px;
    width: 100%;
    aspect-ratio: 16/10; 
    object-fit: cover;
`
export const EventDateTime = styled.p`
   font-size: 14px;
   padding: 15px;
   line-height: 150%;
`
export const EventLink = styled(Link)`
    display: block;
    font-size: 14px;
    padding: 15px;
    line-height: 150%;
    color: #1F0049;
    text-decoration: none;
`