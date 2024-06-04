

import React, { MouseEventHandler } from 'react';

const TabButton = ({ active, setTab, children }: { active: boolean, setTab: MouseEventHandler<HTMLButtonElement>, children: React.ReactNode }) => {
    
    const buttonClasses = active ? 'text-white border-b border-[#bd79fc]' : 'text-[#ADB7BE]';
    return (
        <button onClick={setTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
                {children}
            </p>
            
        </button>
    )
}

export default TabButton
