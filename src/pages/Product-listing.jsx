import React, { useContext } from 'react';
import { InputField } from '../components/input-field/Input-field.component';
import { Button } from '../components/button/Button.component';
import { ProductList } from '../components/products-list/product-list.component';
import { Modal } from '../components/modal/Modal.component';
import { UserFrom } from '../components/form/User-from.component';
import { SearchContext } from '../contexts/SearchCtx';

const ProductListing = () => {
  const { getSearchQuery } = useContext(SearchContext);
  const [show, setShow] = React.useState(false);
  const handleShow = () => setShow((prev) => !prev);

  return (
    <div className=' flex flex-col justify-center max-w-[70%] flex-wrap m-auto gap-6 h-screen'>
      <h1 className='text-center mb-2 first:text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        InnoSTARK Assignment
      </h1>
      <InputField
        type='search'
        name='search'
        id='search'
        placeholder='Search product here'
        label='Quick Search'
        onChange={getSearchQuery}
      />
      <Button onClick={handleShow}>Add New product</Button>
      <ProductList />
      {show && (
        <Modal handleShow={handleShow}>
          <UserFrom handleShow={handleShow} />
        </Modal>
      )}
    </div>
  );
};

export default ProductListing;
