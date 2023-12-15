import { useState } from 'react';
import { FaDice } from 'react-icons/fa';
import './Advice.css';
import Button from './Button';

export default function Advice() {
    const [conselhoNum, setConselhoNum] = useState(0)
    const [conselhoText, setConselhoText] = useState('Spin the dice to receive an advice')

    const gerarConselho = () => {
        fetch('https://api.adviceslip.com/advice?click=true')
            .then((res) => res.json())
            .then((res) => {
                setConselhoNum(res.slip.id)
                setConselhoText(res.slip.advice)
            })
            .catch((err) => {
                console.log('Erro ao bucar o conselho ', err)
            });
    };

    return (
        <div className='advice_container'>
            <h1>Advice #{conselhoNum}</h1>
            <p>{conselhoText}</p>
            <Button text={<FaDice />} onClick={gerarConselho} />
        </div>
    );
}