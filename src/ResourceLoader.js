import axios from "axios";
import React, { useState, useEffect } from "react"
export const ResourceLoader = ({resourceUrl, resourceName, children}) => {

    const [state, setState] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get(resourceUrl);
            const currentUser = response.data
            setState(currentUser) // Or setUser(reponse.data)
        })()
    }, [resourceUrl]);

    return(
        <>
            {React.Children.map(children, child => {
                if(React.isValidElement(child)){
                    return React.cloneElement(child, {[resourceName]: state})
                }
                return child;
            })}
        </>
    )
}