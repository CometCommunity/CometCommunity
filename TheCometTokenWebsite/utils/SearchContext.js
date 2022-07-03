import { createContext, useContext, useState } from 'react'

// The Context 
const SearchContext = createContext();

// Template Provider
const SearchProvider = ({children}) => {

    const [search, setSearch] = useState('');

    // Context values passed to consumer
    const value = {
        search,    // <------ Expose Value to Consumer
        setSearch  // <------ Expose Setter to Consumer
    };

    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    )
}

// Template Consumer
const SearchConsumer = ({children}) => {
    return (
        <SearchContext.Consumer>
            {(context) => {
                if (context === undefined) {
                    throw new Error('SearchConsumer must be used within SearchProvider');
                }
                return children(context)
            }}
        </SearchContext.Consumer>
    )
}

// useTemplate Hook
const useSearch = () => {
    const context = useContext(SearchContext);
    if(context === undefined)
        throw new Error('useSearch must be used within SearchProvider');
    return context;
}

export {
    SearchProvider,
    SearchConsumer,
    useSearch
}