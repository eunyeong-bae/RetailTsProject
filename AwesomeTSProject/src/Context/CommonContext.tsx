import { createContext, useCallback, useState} from 'react';

const CommonContext = createContext<CommonContextType>({
    selectedTargetState : {
        selectedTarget: '',
        selectedTargetMenuInfo: null,
        index: -1
    },
    sortMenuState: {
        currentPageName: '',
        selectedValue : null,
        sortMenuInfo : null
    },

    setSelectedTarget : ( selectedTarget: string, selectedTargetMenuInfo: null, index : number) : void => {},
    setSortMenu: ( currentPageName: string, selectedValue: any, sortMenuInfo: any) : void => {},

});

const CommonProvider = ({ children} : CommonProviderProps) : JSX.Element => {
    const [ selectedTargetState, setSelectedTargetState] = useState<SelectedTargetState>({ selectedTarget: '', selectedTargetMenuInfo: null,index : -1});
    const [ sortMenuState, setSortMenuState] = useState<SortMenuState>({ currentPageName: '', selectedValue : null, sortMenuInfo : null});
    
    const setSelectedTarget = useCallback(( selectedTarget: string, selectedTargetMenuInfo: any, index: number) : void => {
        setSelectedTargetState({ ...setSelectedTargetState, selectedTarget, selectedTargetMenuInfo, index});
    }, [ selectedTargetState, setSelectedTargetState]);

    const setSortMenu = useCallback(( currentPageName: string, selectedValue: any, sortMenuInfo: any) : void => {
        setSortMenuState({ ...sortMenuState, currentPageName, selectedValue, sortMenuInfo});
    }, [ sortMenuState, setSortMenuState]);

    return (
        <CommonContext.Provider value={{
            selectedTargetState,
            sortMenuState,

            setSelectedTarget,
            setSortMenu
        }}>
            { children}
        </CommonContext.Provider>
    )
}

export { CommonContext, CommonProvider}