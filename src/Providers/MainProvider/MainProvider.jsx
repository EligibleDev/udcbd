import { createContext } from "react";
import PropTypes from "prop-types";

export const MainContext = createContext(null);

const MainProvider = ({ children }) => {
    const value = "asdf";
    const values = { value };
    return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

MainProvider.propTypes = {
    children: PropTypes.node,
};
export default MainProvider;
