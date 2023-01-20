declare namespace NextS {
    function call_getBaseData(callback: (data: any) => void);
    function gotoSet();
    function exitApp();
    function exitLogin();
    function getValue(strKey: string, callback: (value: any) => void);
    function setValue(arrData: { key: string, val: any }, callback: () => void);
    function backHistory();
    function backNavi();
    function captureAndSketch();
    function goChatRoom(roomId: string, roomType: 'A' | 'B');
    function selectOrg(selectMode: string, selectDeptMode: string, oldSelectedList: any[], callback: (list: any[] | null) => void);
    function saveClipboard(value?: string);
    function goProfile(empSeq: string, compSeq?: string, deptSeq?: string);
    function commonCmtInfo(event: any, mentionEmpList: [], pathSeq: string, moduleSeq: string, commentType: string, isShowCommentInputBar: string, isShowAttachBtn: string, callback: () => void);
    function goFileViewer(pathSeq: string, files: any[]);
    function callAmaranthLink(type: string, data: any);
    function isAndroid();
    function localDirPath(type: string, callback: any);
    function download(downloadInfo: any, downloadDir: string, callback: any);
    function execFile(pathSeq: string, filePath: string);
    function captureImageData(callback : any);
}

declare module 'pdfjs-dist/build/pdf.worker.entry';
declare module 'pdfjs-dist/build/pdf.js';
declare module 'pdfjs-dist/lib/display/display_utils';

type SelectedTargetState = { // 단일 선택
    selectedTarget : any,
    selectedTargetMenuInfo: null,
    index : number
}

type SortMenuState = {
    currentPageName: string,
    selectedValue : any,
    sortMenuInfo : any
}

type CenterDialogState = {
    dialogName: string,
    dialogItem: any,
    isAction: boolean
}

type CommonContextType = {
    selectedTargetState : SelectedTargetState,
    setSelectedTarget : any,
    sortMenuState : SortMenuState,
    setSortMenu : any,
    centerDialogState: CenterDialogState,
    setCenterDialog: any,
}

interface CommonProviderProps {
    children : JSX.Element | JSX.Element[];
}