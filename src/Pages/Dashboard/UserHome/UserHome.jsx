// import React from 'react';
import pic from '../../../assets/imges/userhome/userhome.jpg'

const UserHome = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-3xl mb-8">User Home</h2>
            <img
                src={pic}
                alt="Animation"
                className="w-full"
            />
        </div>
    );
};

export default UserHome;
