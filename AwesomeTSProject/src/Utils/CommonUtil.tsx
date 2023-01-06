export default class CommonUtil {
    public static objectIsNull = ( object: any) => {
        if( object === undefined) {
            return true;
        }
        else if( object === null) {
            return true;
        }
        else if( object !== null && object.length < 1) {
            return true;
        }
        
        return false;
    }
}