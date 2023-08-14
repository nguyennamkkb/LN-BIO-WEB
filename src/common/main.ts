import md5 from "md5";


export class Common {
    
    static isAuth: boolean = true
    static key: string = "50829317681RT3RUH3EZ"
    static MD5(s: string): string {
        return md5(s);
      }
}