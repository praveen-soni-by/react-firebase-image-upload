import React from 'react';

function MultiSelect({ items, selected, onSelect }) {
    return (
        <ul className="bg-white overflow-auto w-56 rounded-lg h-28 border border-gray-200 text-gray-900">
            {items.map(val => <li className="px-2 h-8 py-1 border-b border-gray-200 w-full" key={val}>
                <input
                    onChange={() => onSelect(val)}
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox" value={selected[val]} id="flexCheckDefault" />{val}</li>
            )}
        </ul>
    )

}

export default MultiSelect;
