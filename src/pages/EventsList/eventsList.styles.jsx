import styled from "styled-components";
import { Link } from "react-router-dom"

export const ListContainer = styled.div`
    width: 100%;
    padding: 30px;
    min-height: calc(100vh - 240px);
    display: block;
    margin: auto;
`
export const ListTitle = styled.h1`
    font-family: 'Playfair Display', serif;
    padding: 10px 0;
    font-size: 36px;
    font-weight: 400;
    color: #1F0049;
`

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
    border-radius: 10px;
    background-color: #FFFFFF;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0,0,0,0.15);
`

export const TableHeader = styled.thead``

export const HeaderRow = styled.tr``

export const HeaderItem = styled.th`
    text-align: left;
    padding: 10px;
    font-size: 12px;
    background-color: #1F0049;
    color: #FFFFFF;
`

export const TableBody = styled.tbody``

export const Event = styled.tr``

export const EventItem = styled.td`
    text-align: left;
    padding: 10px;
    font-size: 12px;
`

export const RemoveButton = styled.button`
    display: block;
    margin: auto;
    text-align: center;
    width: 72px;
    height: 24px;
    border: 1px solid transparent;
    border-radius: 12px;
    background-color: red;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: 700;
    line-height: 24px;
    text-decoration: none;
`

export const AddButton = styled(Link)`
	display: block;
	margin: 10px auto;
	text-align: center;
	width: 140px;
	height: 44px;
	border: 1px solid transparent;
	border-radius: 22px;
	background-color: #008080;
	color: #ffffff;
	font-size: 16px;
	font-weight: 700;
	line-height: 44px;
	text-decoration: none;
`