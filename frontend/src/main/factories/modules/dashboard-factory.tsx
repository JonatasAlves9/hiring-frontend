import React from 'react';
import {Dashboard} from "../../../presentation/modules/dashboard";
import {makeStock} from "../usecases/stocks/remote-stocks-factory.ts";

export const MakeDashboard: React.FC = () => {
    return <Dashboard stock={makeStock()}/>;
};

export default MakeDashboard;
