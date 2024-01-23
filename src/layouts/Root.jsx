import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <section>
            <Outlet></Outlet>
        </section>
    );
};

export default Root;