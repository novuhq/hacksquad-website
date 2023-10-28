import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import moment from 'moment';
import { getNames } from 'country-list';

import Input from '../../../shared/button/input';
import Select from '../../../shared/button/select';

const Form = ({ info }) => {
  const {
    register,
    formState: { errors, isSubmitSuccessful },
  } = useFormContext();

  return (
    <>
      <div>
        Select Prizes to claim:
        {info.map((winner) => (
          <div className="mt-2 flex" key={winner.id}>
            <div>
              <input
                disabled={isSubmitSuccessful}
                {...register('type', { required: true })}
                name="type"
                value={winner.id}
                type="checkbox"
              />
            </div>
            <div className="ml-2">
              {winner.type === 'COMPETITION' && 'Competition Winner'}
              {winner.type === 'NOVU' && 'Novu Swag Claim'}
              {winner.type === 'EXTRA' && 'Giveaway or other'} - Expires on{' '}
              {moment.utc(winner.lastDateClaim).local().format('DD/MM/YYYY HH:mm')}
            </div>
          </div>
        ))}
        {!!errors.type && (
          <div className="mt-3" style={{ color: 'red' }}>
            You must select a prize to claim
          </div>
        )}
      </div>
      <Input
        name="first_name"
        extra={{ minLength: 2, required: true }}
        label="First Name"
        type="text"
      />
      <Input
        extra={{ minLength: 2, required: true }}
        label="Last Name"
        type="text"
        name="last_name"
      />
      <Input
        extra={{
          required: true,
          pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
        }}
        label="Email"
        type="text"
        name="email"
      />
      <Input
        label="Phone Number"
        type="text"
        name="phone_number"
        placeHolder="+972"
        extra={{
          required: true,
          pattern: /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/i,
        }}
      />
      <Input
        extra={{ minLength: 5, required: true }}
        label="Address"
        type="text"
        name="shipping_address1"
      />
      <Input label="Address 2" type="text" name="shipping_address2" />
      <Input
        extra={{ required: true, minLength: 2 }}
        label="City"
        type="text"
        name="shipping_city"
      />
      <Select label="Country" name="shipping_country">
        <option value="">-- Choose Country --</option>
        {getNames().map((c, index) => (
          <option key={index} value={c}>
            {c}
          </option>
        ))}
      </Select>
      <Input extra={{ required: true }} label="State" type="text" name="shipping_state" />
      <Input extra={{ required: true, minLength: 3 }} label="ZIP" type="text" name="shipping_zip" />
      <Select label="Shirt Size" name="shirt_size">
        <option value="">-- Choose Shirt Size --</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
        <option value="X-Large">Extra Large</option>
        <option value="2X-Large">2 Extra Large</option>
      </Select>
      <button
        type="submit"
        disabled={isSubmitSuccessful}
        className={`${isSubmitSuccessful ? 'pointer-events-none opacity-50' : ''} cta-btn-animation relative flex max-w-full cursor-pointer items-center justify-center leading-none`}
      >
        <svg
          className="cta-btn-animation-border xs:w-full"
          width="200"
          height="59"
          viewBox="0 0 268 59"
          fill="none"
        >
          <path d="M1 58V1H251.586L267 16.4142V58H1Z" stroke="white" strokeWidth="2" />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center space-x-2.5">
          <span className="text-lg sm:text-[18px]">Claim Swag!</span>
        </div>
      </button>
    </>
  );
};

Form.propTypes = {
  info: PropTypes.array,
};

export default Form;
