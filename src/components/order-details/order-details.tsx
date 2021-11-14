import React, { FC } from 'react';
import { useParams } from 'react-router';

export const OrderDetails: FC = () => {

  const { id } = useParams<{id: string}>();

  return (
    <h1> Здесь будет страница с заказом {id} </h1>
  )
}
