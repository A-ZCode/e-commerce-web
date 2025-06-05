import React from 'react';

const CardSelection = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h2 className="text-lg font-semibold mb-4 tracking-wide uppercase">Select a Card</h2>
            <div className="text-sm mb-2 flex items-center text-gray-700">
                <i className="fas fa-credit-card mr-2 text-gray-500" />
                MasterCard ending in 4242
            </div>
            <div className="text-sm mb-2 flex items-center text-gray-700">
                <i className="fas fa-credit-card mr-2 text-gray-500" />
                VISA Debit ending in 2894
            </div>
        </div>
    );
};

export default CardSelection;
