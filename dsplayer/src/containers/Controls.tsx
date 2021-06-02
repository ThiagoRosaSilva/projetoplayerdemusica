import {useState} from 'react';
import cover from "../assets/images/cover/cradles.jpg";
import ControlButtom from "./components/ControlButton";
import {next, pause, play, prev, stop} from '../assets/images/buttons';


const Controls = () => {
    const [isPaused, setIsPaused] = useState(false);

    const handlePlay = () => {
            setIsPaused(!isPaused);

    };   
    return(
       
        <div className="control-container">
            <img src={cover} alt="Capa do Álbum" className="current" />
            <div className="buttons-container">
                <ControlButtom>
                    <img src={prev} alt="Voltar" className="button-icon"/>
                </ControlButtom>
                <ControlButtom>
                    <img src={stop} alt="Parar" className="button-icon"/>
                </ControlButtom>
                <ControlButtom>
                    <img src={isPaused ? pause : play} alt="Play/Pause" className="button-icon" onClick={()=> handlePlay()}  /> 
                </ControlButtom>
                <ControlButtom>
                    <img src={next} alt="Avançar" className="button-icon"/>
                </ControlButtom>
            </div>
        </div>
    );
    
};

export default Controls;
