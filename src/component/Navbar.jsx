import { NavLink } from "react-router-dom";
import img_logo from '../images/logo192.png';


function Navbar(){
    return (
        <nav>

          <NavLink className="nav-top" to="/">
            <img className="me-1" src={img_logo} alt="" width={30} />
            HOME
          </NavLink>

          <h3>REACT</h3>
          <NavLink to="/example/ReactCustomHook">ReactCustomHook</NavLink>
          <NavLink to="/example/ReactLifeCycle">ReactLifeCycle</NavLink>
          <NavLink to="/example/ReactUseMemo">ReactUseMemo</NavLink>
          <NavLink to="/example/ReactMemo">ReactMemo</NavLink>
          <NavLink to="/example/ReactUseCallback">ReactUseCallback</NavLink>
          <NavLink to="/example/ReactUseContext">ReactUseContext</NavLink>
          <NavLink to="/example/ReactUseReducer">ReactUseReducer</NavLink>
          <NavLink to="/example/ReactUseSearchParams">ReactUseSearchParams</NavLink>
          <NavLink to="/example/ReactSearchSystem">ReactSearchSystem</NavLink>

          <h3>VITE</h3>
          <NavLink to="/example/EnvParameter">EnvParameter</NavLink>

          <h3>STYLED</h3>
          <NavLink to="/example/StyledComponent">StyledComponent</NavLink>

          <h3>LAZY</h3>
          <NavLink to="/example/ReactLazyImage">ReactLazyImage</NavLink>

          <h3>FORM</h3>
          <NavLink to="/example/ReactHookForm">ReactHookForm</NavLink>

          <h3>BOOSTRAP</h3>
          <NavLink to="/example/BoostrapModal">BoostrapModal</NavLink>

          <h3>MOTION</h3>
          <NavLink to="/example/ReactFramerMotion">ReactFramerMotion</NavLink>
          <NavLink to="/example/ReactGSAP">ReactGSAP</NavLink>

          <h3>MOUSE</h3>
          <NavLink to="/example/HandleMouseCursor">HandleMouseCursor</NavLink>

          <h3>SLIDER</h3>
          <NavLink to="/example/ReactSwiper">ReactSwiper</NavLink>

          <h3>THREE.js FIBER</h3>
          <NavLink to="/example/ReactThreeFiber1">Basic</NavLink>
          <NavLink to="/example/ReactThreeFiber2">Light & Shadow</NavLink>
          <NavLink to="/example/ReactThreeFiber3">Helper Transform</NavLink>
          <NavLink to="/example/ReactThreeFiber4">Particle System</NavLink>
          <NavLink to="/example/ReactThreeFiber5">Loader</NavLink>
          <NavLink to="/example/ReactThreeFiber6">Geometry Style</NavLink>
          <NavLink to="/example/ReactThreeFiber7">Leva Controls</NavLink>
          <NavLink to="/example/ReactThreeFiber8">GSAP Animation</NavLink>
          <NavLink to="/example/ReactThreeFiber9">Postprocessing</NavLink>

        </nav>
    )
}

export default Navbar;