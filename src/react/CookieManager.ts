class CookieManager{

    static setCookie(cname: string, cvalue: string) {
        const d = new Date();
        d.setTime(d.getTime() + (300000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

}

export default CookieManager;