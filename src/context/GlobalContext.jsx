import { createContext, useState } from "react";

const SnapContext = createContext ();

export function SnapProvider ({children}) {
    const [features, setFeatures] = useState(false);
    const [company, setCompany] = useState(false);
    const [menu, setMenu] = useState(false);

    return (
        <SnapContext.Provider value = {{
            features,
            setFeatures,
            company,
            setCompany,
            menu,
            setMenu
        }}>
            {children}
        </SnapContext.Provider>
    )
}

export default SnapContext;