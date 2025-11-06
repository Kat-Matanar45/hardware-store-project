import type { ReactElement } from "react";
import { useRouteError } from "react-router-dom";

const ErrorBoundary = (): ReactElement => {
    const error = useRouteError() as Error;
    console.log(error);
    return (
        <div>
            <h1>Error!</h1>
            <p>{error.message}</p>
        </div>
    )
}

export default ErrorBoundary;