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
    centerDialogState: {
        dialogName: '',
        dialogItem: null,
        isAction: false,
    },

    setSelectedTarget : ( selectedTarget: string, selectedTargetMenuInfo: null, index : number) : void => {},
    setSortMenu: ( currentPageName: string, selectedValue: any, sortMenuInfo: any) : void => {},
    setCenterDialog: ( dialogName: string, dialogItem: any, isAction: boolean) : void => {},
});

const CommonProvider = ({ children} : CommonProviderProps) : JSX.Element => {
    const [ selectedTargetState, setSelectedTargetState] = useState<SelectedTargetState>({ selectedTarget: '', selectedTargetMenuInfo: null,index : -1});
    const [ sortMenuState, setSortMenuState] = useState<SortMenuState>({ currentPageName: '', selectedValue : null, sortMenuInfo : null});
    const [ centerDialogState, setCenterDialogState] = useState<CenterDialogState>({ dialogName: '', dialogItem: null, isAction: false});

    const setSelectedTarget = useCallback(( selectedTarget: string, selectedTargetMenuInfo: any, index: number) : void => {
        setSelectedTargetState({ ...setSelectedTargetState, selectedTarget, selectedTargetMenuInfo, index});
    }, [ selectedTargetState, setSelectedTargetState]);

    const setSortMenu = useCallback(( currentPageName: string, selectedValue: any, sortMenuInfo: any) : void => {
        setSortMenuState({ ...sortMenuState, currentPageName, selectedValue, sortMenuInfo});
    }, [ sortMenuState, setSortMenuState]);

    const setCenterDialog = useCallback(( dialogName: string, dialogItem: any, isAction: boolean) : void => {
        setCenterDialogState({...centerDialogState, dialogName, dialogItem, isAction});
    }, [ centerDialogState, setCenterDialogState]);

    return (
        <CommonContext.Provider value={{
            selectedTargetState,
            sortMenuState,
            centerDialogState,

            setSelectedTarget,
            setSortMenu,
            setCenterDialog,
        }}>
            { children}
        </CommonContext.Provider>
    )
}

export { CommonContext, CommonProvider}