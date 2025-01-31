import React from 'react';
import SubMenu from './SubMenu';
import Main from './Main';

function MainSection() {
    return (
        <div className="bg-neutral-800 rounded-tl-xl rounded-bl-xl col-span-21 md:col-span-22 xl:col-span-23 grid-cols-21 md:grid-cols-22 xl:grid-cols-23 grid text-white ">
            <SubMenu />
            <Main />
        </div>
    );
}

export default MainSection;
