import React from 'react';

const Navitem = ({route}) => {
    return (
        <div>
            <li className='text-neutral-500 hover:text-neutral-700'>
                <a href="">{route.name}</a>
            </li>
        </div>
    );
};

export default Navitem;