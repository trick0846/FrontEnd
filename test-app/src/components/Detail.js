import {useParams} from 'react-router-dom'


function Detail() {
    const id = useParams().id
    return(
        <div>
            <p>Detail - {id}</p>
        </div>
    )
};

export default Detail;