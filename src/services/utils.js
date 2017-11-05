export default class Utils {

    static formatISOtoViewDate(ISOString){
        if(!ISOString){
            return "";
        }

        const date = new Date(ISOString);
        const mo = date.getMonth() + 1; // getMonth() is zero-based
        const da = date.getDate();
        const ye = date.getFullYear();

        return `${(da>9 ? '' : '0') + da}.${(mo>9 ? '' : '0') + mo}.${ye}`;
    }

    static formatISOtoViewTime(ISOString){
        if(!ISOString){
            return "";
        }

        const date = new Date(ISOString);
        const ho = date.getHours();
        const mi = date.getMinutes();

        return `${ho}:${mi}`;
    }
}