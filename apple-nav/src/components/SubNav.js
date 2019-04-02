import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import data from '../data.js'

export default function(props){
    let activeTab = props.location.pathname.split("/")[1]
    let tabData = data[activeTab]
    console.log(tabData)
    return (
        <SubNav>
            {tabData.map(tab => <Link key={tab} to={`/${activeTab}/${tab}`}>{tab}</Link>)}
        </SubNav>
    )
}

const SubNav = styled.nav`
    width: 100%;
    height: 170px;

    background: rgb(50,50,50);
    color: rgb(225,225,225);

    display: flex;
    justify-content: center;
    align-items: center;

    a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 100px;

        margin: 0 25px;
        padding: 15px 10px;

        text-decoration: none;
        color: inherit;

        border: 2px solid rgba(200,200,200);
        border-radius: 15px;

        :hover {
            background: rgb(100,100,100);
        }

    }

`