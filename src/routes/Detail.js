import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  // id 찾아오기(url의 상세정보를 알려줌)
  const { id } = useParams();
  const getMovie = async () => {
    const json =
      await // 아이디를 알고 있으니까 API로부터 정보를 fetch해올 수 있음
      (
        await fetch(`https://yts.mx/api/v2/list_movies.json?movie_id=${id}`)
      ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}
export default Detail;
