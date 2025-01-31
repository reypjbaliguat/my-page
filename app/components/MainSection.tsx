import React from 'react';
import SubMenu from './SubMenu';
import Main from './Main';

function MainSection() {
    return (
        <div className="bg-neutral-900 rounded-tl-xl rounded-bl-xl flex grow text-white ">
            <SubMenu />
            <Main />
        </div>
    );
}

export default MainSection;
