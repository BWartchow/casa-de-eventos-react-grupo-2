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
`
export const Title = styled.h1`
    font-family: 'Playfair Display', serif;
    padding-top: 58px;
    font-size: 36px;
    font-weight: 400;
    color: #1F0049;

`
export const FormInput = styled.input`
	margin: 8px 0;
	width: 60%;
	padding: 12px 20px;
	margin: 8px 0;
	box-sizing: border-box;
	&:focus {
		border: 3px solid #1f0049;
	}
`

export const SendBtn = styled.button`
	width: 60%;
	margin: 10px 0 10px 0;
	height: 36px;
	background: #1f0049;
	color: #ffffff;
	text-align: center;
	border-radius: 18px;`