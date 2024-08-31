import React, { ReactElement } from 'react';

interface IconBoxProps {
    icon: ReactElement;
    title: string;
    badge?: string;
}

const IconBox: React.FC<IconBoxProps> = ({ icon, title, badge }) => {
    return (
        <div className="relative flex items-center bg-white p-4 rounded-lg shadow-lg border border-gray-300">
            <div className="flex items-center justify-center w-8 h-8 text-green-600 bg-green-600 rounded">
                {React.cloneElement(icon, { className: "w-3 h-3 fill-white" })}
            </div>
            <div className="flex items-center ml-4">
                <h5 className="text-lg font-semibold text-gray-800">{title}</h5>
                {badge && (
                    <div className="ml-2 text-green-600 font-normal text-xl">
                        {badge}
                    </div>
                )}
            </div>
        </div>
    );
};

export default IconBox;
