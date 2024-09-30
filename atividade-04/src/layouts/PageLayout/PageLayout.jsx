import { Navbar } from "../../components";

import './pagelayout.css';

export function PageLayout({ children }) {
    return (
        <div className="layout">
            <Navbar />
            <div className="layout-content">
                {children}
            </div>
        </div>
    )
}