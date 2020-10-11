import { useContext } from 'react';
import { useRouter } from 'next/router';

import { ProfileContext } from '../context/profile-context';
import Card from './UI/Card';

const ProfileList = props => {
    const { filteredProfiles } = useContext(ProfileContext);
    const router = useRouter();

    const goToProfile = id => {
        router.push(`/profile/${id}`);
    };

    let listContent = "Loading profiles...";
    if (filteredProfiles) {
        listContent = filteredProfiles.map(profile => {
            return (
                <li key={profile.login.uuid}>
                    <Card 
                        image={profile.picture.medium}
                        title={`${profile.name.first} ${profile.name.last}`}
                        subtitle={profile.location.city}
                        clicked={() => goToProfile(profile.login.uuid)}
                    />
                </li>
            );
        });
    }

    return (
        <React.Fragment>
            <ul>
                {listContent}
            </ul>
            <style>{`
                ul { list-style-type: none; }
                li { display: inline-block; padding: 10px; }
            `}</style>
        </React.Fragment>
    );
}

export default ProfileList;