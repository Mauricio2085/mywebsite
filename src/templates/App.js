import React from 'react';
import { MainPortfolio } from '../components/MainPortfolio';
import { MainHeader } from '../components/MainHeader';
import { MainFooter } from '../components/MainFooter';
import { MainJumbo } from '../components/MainJumbo';


const App =  () => {
    return (
        <>
            <MainHeader />
            <MainJumbo />
            <MainPortfolio />
            <MainFooter />
        </>
    );

};

export { App };