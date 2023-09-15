import PropTypes from 'prop-types';

const Popup = ({ children, close }) => (
  <div
    style={{
      width: 500,
      position: 'fixed',
      left: '50%',
      top: '50%',
      maxWidth: '100%',
      maxHeight: '100%',
      background: 'white',
      transform: 'translate(-50%, -50%)',
      borderRadius: 20,
      padding: 20,
      zIndex: 100,
    }}
  >
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div
        style={{
          position: 'absolute',
          top: -30,
          right: -30,
          width: 30,
          height: 30,
          border: '1px solid white',
          background: '#3B3B3B',
          borderRadius: '100%',
          textAlign: 'center',
          cursor: 'pointer',
        }}
        onClick={close}
      >
        X
      </div>
      {children}
    </div>
  </div>
);

Popup.propTypes = {
  children: PropTypes.element,
  close: PropTypes.func,
};

export default Popup;
