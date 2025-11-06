import { Suspense, type ReactElement } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const Layout = (): ReactElement => {
    const location = useLocation();

    return (
        <>
            <Header/>
            <main>
                <Suspense key={location.pathname} fallback={<p>Loading...</p>}>
                    <Outlet/>
                </Suspense>
            </main>
            <Footer/>
        </>
    )
}

export default Layout;