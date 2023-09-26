import React, { useState, useEffect, ComponentType } from 'react';
import Loader from "../components/ui/loader";

const withAppLoader = <P extends object>(WrappedComponent: ComponentType<P>): React.FC<P> => {
    return (props: P) => {
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            setTimeout(() => {
                setLoading(false)
            },2000)
        }, []);

        if (loading) {
            return <Loader />;
        }

        return <WrappedComponent {...props} />;
    };
};

export default withAppLoader;
