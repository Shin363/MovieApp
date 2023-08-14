import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

// 이 새로운 컴포넌트는 URL을 보고 있는 거고, URL에 따라서 Home/Detail을 보여줄 것임.
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* path안에 들어가는 건 url의 경로인데, 동적인 url을 형성하기 위해서 :id 를 넣어준것. {id:~~ } 형식으로 보내진다.*/}
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
