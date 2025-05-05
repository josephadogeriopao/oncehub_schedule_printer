import { IJWTRequest } from "./interfaces/IJWTRequest";
import { JwtPayload } from "./interfaces/IJWTPayload";
import { IUser } from "./interfaces/IUser";
import { IUserReset } from "./interfaces/IUserReset";
import { IUserDeactivated } from "./interfaces/IUserDeacitivated";
import { IUserForgot } from "./interfaces/IUserForgot";
import { IUserAuthorized } from "./interfaces/IUserAuthorized";

declare global {
   var localStorage: LocalStorage;
    namespace Express {
      interface Request {
        params:{
          searchTerm : string;

        },
        user: {
            username:string;
            email:string;
            id:mongoose.Types.ObjectId
        },
        body: IUser | IUserReset | IUserDeactivated | IUserForgot | IUserAuthorized | IBusiness | IDetail
      }
    }
    namespace NodeJS {
      interface ProcessEnv {
        REACT_APP_ONCEHUB_API_KEY: string;
        REACT_APP_ONCEHUB_BASE_URL: string;


      }
    }
  }

  export {}

