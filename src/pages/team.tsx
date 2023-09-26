import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import ProfileCard from "../components/ui/cards/profileCard";

const Team: React.FC = () => {
    const {data} = useSelector((state: RootState) => state.team)
    return(
        <div className={'flex flex-col mt-[20px]  h-screen rounded'}>
            <div className={'flex flex-wrap justify-center'}>
                {
                    data.map(profile => {
                        return(
                            <ProfileCard key={profile.id} card={profile} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Team;