import axios from "axios";
import React, { useState, useEffect } from "react"
export const UserLoader = ({userId, children}) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const reponse = await axios.get(`/users/${userId}`);
            const currentUser = reponse.data
            setUser(currentUser) // Or setUser(reponse.data)
        })()
    }, [userId]);

    return(
        <>
            {React.Children.map(children, child => {
                if(React.isValidElement(child)){
                    return React.cloneElement(child, {user})
                }
                return child;
            })}
        </>
    )
}