import {Route, Routes} from "react-router-dom";
import {PageWrapper} from "../../presentation/layout/pageWrapper";
import {Dashboard} from "../../presentation/modules/dashboard";


export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<PageWrapper />}>
                <Route path="/" element={<Dashboard/>} />
            </Route>
        </Routes>
    )
}
