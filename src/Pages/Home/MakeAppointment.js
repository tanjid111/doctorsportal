import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images//appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center'>

            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" srcSet="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make  an Appointment Today</h2>
                <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab maiores ipsam odio corrupti itaque possimus autem hic quasi quas dolore commodi magnam accusamus, labore deleniti a ea adipisci quibusdam nemo, velit officia, tempora id. Est quidem, amet architecto quo atque eum neque, illo quam laborum pariatur obcaecati cum, consectetur nulla.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;