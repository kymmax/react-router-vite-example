import { useLayoutEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./Pages/Home";

import ReactLazyImage from "./Pages/example/ReactLazyImage";
import ReactHookForm from "./Pages/example/ReactHookForm";
import BoostrapModal from "./Pages/example/BoostrapModal";
import ReactCustomHook from "./Pages/example/ReactCustomHook";
import ReactLifeCycle from "./Pages/example/ReactLifeCycle";
import ReactUseMemo from "./Pages/example/ReactUseMemo";
import ReactMemo from "./Pages/example/ReactMemo";
import ReactUseCallback from "./Pages/example/ReactUseCallback";
import ReactUseContext from "./Pages/example/ReactUseContext";
import ReactUseReducer from "./Pages/example/ReactUseReducer";
import ReactUseSearchParams from "./Pages/example/ReactUseSearchParams";

import EnvParameter from "./Pages/example/EnvParameter";

import Error from "./Pages/Error";

import ReactFramerMotion from "./Pages/example/ReactFramerMotion";

import HandleMouseCursor from "./Pages/example/HandleMouseCursor";

import ReactGSAP from "./Pages/example/ReactGSAP";

import ReactSwiper from "./Pages/example/ReactSwiper";

import ReactThreeFiber1 from "./Pages/example/ReactThreeFiber1";
import ReactThreeFiber2 from "./Pages/example/ReactThreeFiber2";
import ReactThreeFiber3 from "./Pages/example/ReactThreeFiber3";
import ReactThreeFiber4 from "./Pages/example/ReactThreeFiber4";
import ReactThreeFiber5 from "./Pages/example/ReactThreeFiber5";
import ReactThreeFiber6 from "./Pages/example/ReactThreeFiber6";
import ReactThreeFiber7 from "./Pages/example/ReactThreeFiber7";
import ReactThreeFiber8 from "./Pages/example/ReactThreeFiber8";
import ReactThreeFiber9 from "./Pages/example/ReactThreeFiber9";

import flashCSS from "html-flash-css";


function App() {

  useLayoutEffect(() => {
    console.log("flashCSS init");    
    new flashCSS({
      observeDOM: true
    })
  },[])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path='' element={<Home/>}></Route>
          <Route path='example/ReactLazyImage' element={<ReactLazyImage/>}></Route>
          <Route path='example/ReactHookForm' element={<ReactHookForm/>}></Route>
          <Route path='example/BoostrapModal' element={<BoostrapModal/>}></Route>
          <Route path='example/ReactCustomHook' element={<ReactCustomHook/>}></Route>
          <Route path='example/ReactLifeCycle' element={<ReactLifeCycle/>}></Route>
          <Route path='example/ReactUseMemo' element={<ReactUseMemo/>}></Route>
          <Route path='example/ReactMemo' element={<ReactMemo/>}></Route>
          <Route path='example/ReactUseCallback' element={<ReactUseCallback/>}></Route>
          <Route path='example/ReactUseContext' element={<ReactUseContext/>}></Route>
          <Route path='example/ReactUseReducer' element={<ReactUseReducer/>}></Route>
          <Route path='example/ReactUseSearchParams' element={<ReactUseSearchParams/>}></Route>

          <Route path='example/EnvParameter' element={<EnvParameter/>}></Route>

          <Route path='example/ReactFramerMotion' element={<ReactFramerMotion/>}></Route>

          <Route path='example/HandleMouseCursor' element={<HandleMouseCursor/>}></Route>

          <Route path='example/ReactGSAP' element={<ReactGSAP/>}></Route>

          <Route path='example/ReactSwiper' element={<ReactSwiper/>}></Route>

          <Route path='example/ReactThreeFiber1' element={<ReactThreeFiber1/>}></Route>
          <Route path='example/ReactThreeFiber2' element={<ReactThreeFiber2/>}></Route>
          <Route path='example/ReactThreeFiber3' element={<ReactThreeFiber3/>}></Route>
          <Route path='example/ReactThreeFiber4' element={<ReactThreeFiber4/>}></Route>
          <Route path='example/ReactThreeFiber5' element={<ReactThreeFiber5/>}></Route>
          <Route path='example/ReactThreeFiber6' element={<ReactThreeFiber6/>}></Route>
          <Route path='example/ReactThreeFiber7' element={<ReactThreeFiber7/>}></Route>
          <Route path='example/ReactThreeFiber8' element={<ReactThreeFiber8/>}></Route>
          <Route path='example/ReactThreeFiber9' element={<ReactThreeFiber9/>}></Route>
          <Route path="*" element={<Error/>}></Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
