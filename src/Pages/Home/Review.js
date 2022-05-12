import React from 'react';

const Review = ({ review }) => {

    return (
        <div className="card lg:max-w-lg bg-primary text-primary-content">
            <div className="card-body">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem consequuntur et fugiat dolorum error dignissimos?</p>
                <div className='flex items-center'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
                            <img src={review.img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{review.name}</h4>
                        <p className='text-white text-xl'>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;