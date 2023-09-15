import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

const Input = (props) => {
  const {
    formState: { errors, isSubmitSuccessful },
    register,
  } = useFormContext();
  const { label, name, extra, ...allProps } = props;
  return (
    <div className="flex flex-col">
      <div>{label}</div>
      <input
        className="p-2 text-white"
        disabled={isSubmitSuccessful}
        {...allProps}
        {...register(name, extra)}
      />
      <div style={{ color: 'red', fontSize: 12, height: 15 }}>
        {!!errors[name] && 'Invalid Data'}
      </div>
    </div>
  );
};

Input.propTypes = {
  extra: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string,
};

export default Input;
