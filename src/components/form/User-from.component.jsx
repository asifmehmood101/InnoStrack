import React, { useContext } from 'react';
import { InputField } from '../input-field/Input-field.component';
import { Button } from '../button/Button.component';
import { ProductContext } from '../../contexts/ProductCtx';
import { DateFormatter as date } from '../../utility/DateFormater';

const formInitValues = {
  name: '',
  description: '',
  price: '',
};

export const UserFrom = () => {
  const { addNewProduct } = useContext(ProductContext);
  const formRef = React.useRef();
  const [formValues, setFormValues] = React.useState(formInitValues);
  const { name, description, price } = formValues;

  const getFormValues = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      id: crypto.randomUUID(),
      date,
      [name]: value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    addNewProduct(formValues);
    setFormValues(formInitValues);
  };

  return (
    <div className='p-9'>
      <h5 className='text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        ADD PRODUCT
      </h5>
      <form ref={formRef} onSubmit={onFormSubmit}>
        <InputField
          label='Name'
          name='name'
          placeholder='name'
          id='name'
          className='mb-5'
          value={name}
          onChange={getFormValues}
          required
        />
        <InputField
          label='Description'
          name='description'
          placeholder='Description'
          id='description'
          className='mb-5'
          value={description}
          onChange={getFormValues}
          required
        />
        <InputField
          label='Price'
          name='price'
          type='number'
          placeholder='Price'
          id='price'
          className='mb-5'
          min='10'
          step='10'
          value={price}
          onChange={getFormValues}
          required
        />
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  );
};
