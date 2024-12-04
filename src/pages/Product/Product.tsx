import { Await, useLoaderData } from 'react-router-dom';
import { IProduct } from '../../interfaces/product.interface';
import { Suspense } from 'react';

export function Product() {
  const data = useLoaderData() as IProduct;

  return (
    <>
      <Suspense fallback={'Загружаю...'}>
        <Await
          resolve={data}
          errorElement={<div>Не можем отобразить продукт 😬</div>}
        >
          {(resolvedData: IProduct) => (
            <div>Product Name: {resolvedData.name}</div>
          )}
        </Await>
      </Suspense>
    </>
  );
}
