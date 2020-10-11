import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
//import { Redirect } from 'react-router-dom';
//import styled from 'styled-components';

import { ProfileContext } from '../../context/profile-context';
import Button from '../../components/UI/Button'

export default function Profile() {
    const router = useRouter();
    const { id } = router.query;

    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    const { getProfile } = useContext(ProfileContext);

    useEffect(() => {
        setProfile(getProfile(id));
        setLoading(false);
    }, [setProfile, setLoading, getProfile, id]);

    const goBack = () => {
        router.push("/");
    };

    let profileContent = "Loading profile...";
    if (profile) {
        profileContent = (
            <div>
                <img 
                    className="photo"
                    src={profile.picture.large} 
                    alt={`${profile.name.first} ${profile.name.first}`} 
                />
                <h2 className="title">
                    {profile.name.first} {profile.name.last}
                </h2>
                <table className="info">
                    <tbody>
                        <tr>
                            <td>Cell:</td>
                            <td>{profile.cell}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>{profile.email}</td>
                        </tr>
                        <tr>
                            <td>Country:</td>
                            <td>{profile.location.country}</td>
                        </tr>
                        <tr>
                            <td>City:</td>
                            <td>{profile.location.city}</td>
                        </tr>
                        <tr>
                            <td>State:</td>
                            <td>{profile.location.state}</td>
                        </tr>
                        <tr>
                            <td>Post Code:</td>
                            <td>{profile.location.postcode}</td>
                        </tr>
                        <tr>
                            <td>Street Name:</td>
                            <td>{profile.location.street.name}</td>
                        </tr>
                    </tbody>
                </table>
                <Button clicked={goBack}>Back</Button>
            </div>
        );
    }

    //return !loading && !profile ? <Redirect to="/" /> : profileContent;
    return profileContent;
};

// export async function getStaticPaths() {
//     const { profile } = useContext(ProfileContext);
//     const paths = profile.map(profile => {
//         return {
//             params: {
//                 id: profile.login.uuid
//             }
//         };
//     });

//     return {
//         paths,
//         fallback: false
//     };
// };

// export async function getStaticProps({ params }) {
//     return {
//         props: {
//             id: params.id
//         }
//     };
// };
