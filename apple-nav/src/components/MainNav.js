import React from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

export default function(props) {

    return (
        <Header>
            <nav>
                <Link to="/">Apple</Link>
                <NavLink to="/mac">Mac</NavLink>
                <NavLink to="/ipad">iPad</NavLink>
                <NavLink to="/iphone">iPhone</NavLink>
                <NavLink to="/watch">Watch</NavLink>
                <NavLink to="/tv">TV</NavLink>
                <NavLink to="/music">Music</NavLink>
                <Link to="">Support</Link>
                <Link to="">Search</Link>
                <Link to="">Shop</Link>
            </nav> 
        </Header>
    )
}

const Header = styled.header`
    width: 100%;
    padding: 0 50px;
    background: rgb(75,75,75);

    nav {
        width: 100%;
        height: 100%;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
            text-decoration: none;
            color: white;

            &.active {
                color: lightgray;
            }
        }
    }

`