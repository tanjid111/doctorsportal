import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './service'

const AvailableAppointments = ({ date }) => {
    //replaced with react query
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');

    const { data: services, isLoadinng, refetch } = useQuery(['available', formattedDate], () => fetch(`https://fathomless-forest-20211.herokuapp.com/available?date=${formattedDate}`)
        .then(res => res.json())
    )
    if (isLoadinng) {
        return <Loading></Loading>
    }

    //replaced with react query
    // useEffect(() => {
    //     // fetch('https://fathomless-forest-20211.herokuapp.com/service') change it to available
    //     fetch(`https://fathomless-forest-20211.herokuapp.com/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formattedDate])
    return (
        <div>
            <h4 className='text-xl text-center text-secondary'> Available appointments on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;