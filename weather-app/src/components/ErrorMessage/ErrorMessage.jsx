import './ErrorMessage.css';

const ErrorMessage = ({ message }) => {
    if (!message) return null;
    return (
        <div className='Error-message'>
            <p>{message}</p>
        </div>
    );
};

export default ErrorMessage;