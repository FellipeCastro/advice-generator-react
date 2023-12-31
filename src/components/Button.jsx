import './Button.css'

export default function Button(props) {

    return (
        <button className='btn' onClick={props.onClick}>
            {props.text}
        </button>
    )
}