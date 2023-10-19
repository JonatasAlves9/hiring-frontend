import {Route, Routes} from "react-router-dom";
import {PageWrapper} from "../../presentation/layout/pageWrapper";
import MakeDashboard from "../factories/modules/dashboard-factory.tsx";


export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<PageWrapper />}>
                <Route path="/" element={<MakeDashboard/>} />
            </Route>
        </Routes>
    )
}
