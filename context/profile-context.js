import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

export const ProfileContext = React.createContext({
    filteredProfiles: [],
    searchValue: "",
    selectedGender: "",
    sortOrder: "",
    fetchProfiles: () => {},
    getProfileHandler: () => {},
    filterProfilesByName: () => {},
    filterProfilesByGender: () => {},
    sortProfiles: () => {}
});

const ProfileProvider = props => {
    const [profiles, setProfiles] = useState(null);
    const [filteredProfiles, setFilteredProfiles] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    const [selectedGender, setSelectedGender] = useState("all");
    const [sortOrder, setSortOrder] = useState("asc");

    const fetchProfiles = () => {
        if (profiles === null) {
            axios.get(" https://randomuser.me/api/?results=20")
                .then(response => {
                    setProfiles(response.data.results);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    };

    const getProfile = id => {
        if (profiles) {
            return profiles.find(profile => profile.login.uuid === id);
        }
        return null;
    };

    const updateFilteredProfiles = useCallback(() => {
        let updatedFilteredProfiles = [...profiles];

        // Search by name
        if (searchValue.trim()) {
            updatedFilteredProfiles = profiles.filter(profile => {
                const searchVal = searchValue.toLowerCase();
                const fullname = `${profile.name.first.toLowerCase()} ${profile.name.last.toLowerCase()}`;
                return fullname.includes(searchVal);
            });
        }

        // Filter by gender
        if (selectedGender !== "all") {
            updatedFilteredProfiles = updatedFilteredProfiles.filter(profile => profile.gender === selectedGender);
        }

        // Order by ascending or descending alphabetically
        updatedFilteredProfiles.sort((userA, userB) => {
            if (sortOrder === "asc") {
                return userA.name.first < userB.name.first ? -1 : 1;
            } else {
                return userA.name.first < userB.name.first ? 1 : -1;
            }
        });

        setFilteredProfiles(updatedFilteredProfiles);
    }, [profiles, sortOrder, searchValue, selectedGender]);

    useEffect(() => {
        if (profiles) {
            updateFilteredProfiles();
        }
    }, [profiles, updateFilteredProfiles]);

    const filterProfilesByName = search => {
        setSearchValue(search);
        updateFilteredProfiles();
    };

    const filterProfilesByGender = gender => {
        setSelectedGender(gender);
        updateFilteredProfiles();
    };

    const sortProfiles = () => {
        setSortOrder(sortOrder === "desc" ? "asc" : "desc");
        updateFilteredProfiles();
    };

    return (
        <ProfileContext.Provider value={{
            filteredProfiles: filteredProfiles,
            searchValue: searchValue,
            selectedGender: selectedGender,
            sortOrder: sortOrder,
            fetchProfiles: fetchProfiles,
            getProfile: getProfile,
            filterProfilesByName: filterProfilesByName,
            filterProfilesByGender: filterProfilesByGender,
            sortProfiles: sortProfiles
        }}>
            {props.children}
        </ProfileContext.Provider>
    );
};

export default ProfileProvider;