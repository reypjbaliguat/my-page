import React from 'react';
import SideNav from './SideNav';
import MainSection from './MainSection';

function Container() {
    return (
        <div className="h-[calc(100vh-8px)] grid grid-cols-24 w-screen min-w-[700px]">
            <SideNav />
            <MainSection />
        </div>
    );
}

export default Container;
