import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { SECRET_KEY } from '../controllers/signinController';



type RequestWithUser = Request & {
    user?: string | JwtPayload 
}

export function authMiddleware(request: RequestWithUser, response: Response, next: NextFunction) {
    const token = request.headers['authorization']


    if (!token) {
        return response.status(401).json({ error: 'Token not provided' })
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY)
        request.user = decoded
        next()
    } catch (error) {
        return response.json({ error: 'Token invalid' })

    }

}