import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function Detail() {
  const [movie, setMovie] = useState({})
  //useParams는 object 객체를 반환한다.
  // const id = useParams().id
  const {id} = useParams() // 이렇게하는게 가독성 + 클린코드
  console.log(id)

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json)
    setMovie(json)
  };

  useEffect(() => {
    getMovie()
  },[])

  return (
    <div>
      <h1>Detail</h1>
      {/* <p>{movie}</p> */}
    </div>
  )
}

export default Detail