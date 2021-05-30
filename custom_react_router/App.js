import Nav from './Nav';
import {Route} from './Router';

export default () => {
    return (
        <>
            <Nav />
            <Route path="/go1">
                YU
            </Route>
            <Route path="/go2">
                MINSANG
            </Route>
        </>
    )
}