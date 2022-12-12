import { useGiftContext } from "../context/GiftContext";

const Form = () => {

    const {inputText, inputUrl, inputNumber, handleOnSubmit, handleOnChange, handleOnChangeUrl, handleOnChangeNumber} = useGiftContext();

    return (
        <form
            onSubmit={handleOnSubmit}
        >
            <input
                type='text'
                className='input-text'
                value={inputText}
                onChange={handleOnChange}
                placeholder='Ingrese su regalo...'
                required
            />
            <input
                type='text'
                className='input-url'
                value={inputUrl}
                onChange={handleOnChangeUrl}
                placeholder='http://image...'
                required
            />
            <input
                type='number'
                className='input-number'
                min={1}
                max={1000}
                value={inputNumber}
                onChange={handleOnChangeNumber}
                placeholder='Cantidad...'
                required
            />
            <button
                type='submit'
            >
                Agregar regalo
            </button>
        </form>
    )
}

export default Form;