import './ImageLinkForm.css';
import deleteSVG from '../assets/delete.svg';
const ImageLinkForm = ( {onInputChange, onButtonSubmit, deleteImage, input}) => {
    return (
        <div style={{zIndex: "9", position: 'relative'}}>
        <p className='f3 center' >
            {'This Magic Brain will detect faces in your pictures. Give it a try!'}
        </p>
        <div className='center'>
            <div className='form center pa4 br3 shadow-5'>
                <input onChange={onInputChange} className='f4 pa2 w-70 center' type='text' value={input} placeholder="Enter a URL" />
                <button onClick={onButtonSubmit} className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
                <button onClick={deleteImage} className='w-6 grow f4 link dib white bg-light-red'>
                    <img width={20} src={deleteSVG} alt="delete" />
                </button>
            </div>
        </div>
        </div>
    );
    }
    export default ImageLinkForm;
