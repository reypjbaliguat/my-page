import React from 'react';
import SideNav from './SideNav';
import MainSection from './MainSection';

function Container() {
    return (
        <div className="h-[calc(100vh-8px)] flex w-screen">
            <SideNav />
            <MainSection />
        </div>
    );
}

export default Container;
