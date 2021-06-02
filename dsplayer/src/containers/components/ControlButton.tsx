type ButtonProps = {
        children: any;
        onClick?:() => void;
};


const ControlButton = ({children, onClick}: ButtonProps)  => {
    return (
    <button onClick={onClick} className="control-buttom">
        
        {children}

    </button>
       

    );
};

export default ControlButton;