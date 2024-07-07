

import React, { MouseEventHandler } from 'react';

const TabButton = ({ active, setTab, children }: { active: boolean, setTab: MouseEventHandler<HTMLButtonElement>, children: React.ReactNode }) => {
    
    const buttonClasses = active ? ' border-b border-[#bd79fc]' : 'text-[#122222]';
    return (
        <button onClick={setTab}>
            <p className={`mr-3 font-semibold  ${buttonClasses}`}>
                {children}
            </p>
            
        </button>
    )
}

export default TabButton
