import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

const Select = (props) => {
  const {
    formState: { errors, isSubmitSuccessful },
    register,
  } = useFormContext();
  const { label, children } = props;
  return (
    <div className="flex flex-col">
      <div className="mb-2">{label}</div>
      <select
        disabled={isSubmitSuccessful}
        {...register(props.name, { required: true })}
        className="p-2 text-white placeholder-white"
        {...props}
      >
        {children}
      </select>
      <div style={{ color: 'red', fontSize: 12, height: 15 }}>
        {!!errors[props.name] && 'Invalid Data'}
      </div>
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node,
};

export default Select;
