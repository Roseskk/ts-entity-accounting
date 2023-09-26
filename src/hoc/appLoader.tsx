import React, {useState, useEffect, ComponentType, startTransition} from 'react';
import Loader from "../components/ui/loader";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../redux/store";
import {fetchTeam} from "../redux/features/team/teamSlice";

const withAppLoader = <P extends object>(WrappedComponent: ComponentType<P>): React.FC<P> => {
    return (props: P) => {
        const dispatch: AppDispatch = useDispatch();
        const {status} = useSelector((state: RootState) => state.team)
        const [loading, setLoading] = useState<boolean>(true);
        useEffect(() => {

            if (status === 'idle') {
                startTransition(() => {
                    dispatch(fetchTeam())
                });
            }
            if (status === 'success') setLoading(false)
        }, [status, dispatch]);

        if (loading) {
            return <Loader />;
        }

        return <WrappedComponent {...props} />;
    };
};

export default withAppLoader;
