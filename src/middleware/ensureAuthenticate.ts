import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string
}

export function ensureAuthenticate(request: Request, response: Response, nextFunction: NextFunction) {

    const authToken = request.headers.authorization;

    if(!authToken){
        return response.status(401).json({
            errorCode: "Token invalid"
        })
    }

    const [, token ] = authToken.split(" ");

    try {        
        const { sub } = verify(token, process.env.JWT_SECRET) as IPayload
        request.user_id = sub

        return nextFunction();
    } catch (error) {
        return response.status(401).json({
            errorCode: "Token expired"
        })
    }
}