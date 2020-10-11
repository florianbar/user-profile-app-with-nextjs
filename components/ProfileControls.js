import { useContext } from 'react';

import { ProfileContext } from '../context/profile-context';
import Input from './UI/Input';
import Button from './UI/Button';

const ProfileControls = props => {
    const { 
        searchValue,
        selectedGender,
        sortOrder,
        filterProfilesByName,
        filterProfilesByGender,
        sortProfiles 
    } = useContext(ProfileContext);

    return (
        <React.Fragment>
            <Input 
                type="text"
                placeholder="Search by name..." 
                value={searchValue}
                change={event => filterProfilesByName(event.target.value)} 
            />
            <Input 
                elementType="select"
                value={selectedGender}
                change={event => filterProfilesByGender(event.target.value)} 
                options={[
                    {value: "all", displayValue: "Male & Female"},
                    {value: "male", displayValue: "Male"},
                    {value: "female", displayValue: "Female"},
                ]}
            />
            <Button clicked={sortProfiles}>
                { sortOrder === "asc" ? "Ascending" : "Descending" }
            </Button>
        </React.Fragment>
    );
}

export default ProfileControls;