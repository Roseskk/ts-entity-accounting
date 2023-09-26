import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import {ITeam} from "../../../types/teamTypes";
import {CardContent, Typography} from "@mui/material";

interface CardProps {
    card: ITeam
}

const ProfileCard: React.FC<CardProps> = ({card}) => {
    return (
        <div className={'w-1/2 p-10'}>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar aria-label="person">
                            <PersonIcon />
                        </Avatar>
                    }
                    title={card.name}
                    subheader={card.spec}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Здесь какая-то дополнительная информация о персоне. Например, опыт работы, навыки и так далее.
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default ProfileCard