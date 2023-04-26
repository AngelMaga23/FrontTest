import { useEffect, useState } from 'react';
import { getOrders } from '../helpers/getOrders';

export const useFetchOrders = () => {
 
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getOrderF = async() => {
        const newOrders = await getOrders();
        setOrders(newOrders);
        setIsLoading(false);
    }
    
    useEffect( () => {
        getOrderF();
    }, []);

    return {
        orders,
        isLoading
    }

}