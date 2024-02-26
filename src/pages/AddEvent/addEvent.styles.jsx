import styled from "styled-components";

export const Container = styled.div`
margin: 30px 120px;
padding: 30px 0;
-webkit-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.3);
-moz-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.3);
box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.3);
display: flex;
flex-direction: column;
align-items: center;
background: white;
min-height: calc(100vh - 240px);
`
export const Title = styled.h1`
    font-family: 'Playfair Display', serif;
    padding-top: 58px;
    font-size: 36px;
    font-weight: 400;
    color: #1F0049;

`
export const FormContent = styled.form``

export const FormLabel = styled.label`
	font-size: 14px;
	font-weight: 700;
	line-height: 125%;
`

export const FormInput = styled.input`
    display: block;
    width: calc(100% - 30px);
    margin-top: 5px;
    padding: 0 15px;
    border: none;
    height: 36px;
    font-size: 14px;
    line-height: 150%;
    font-weight: 400;
    border-radius: 4px;
    background-color: #f4f4f4;
`

export const SendBtn = styled.button`
	width: 60%;
	margin: 10px 0 10px 0;
	height: 36px;
	background: #1f0049;
	color: #ffffff;
	text-align: center;
	border-radius: 18px;
`