import {UserId} from '../types/user-id';
import { Post } from './posts';

export interface Theme {
    
        subscribers: string[],
        posts:  Post[],
        _id: string,
        themeName: string,
        userId: UserId,
        created_at: string,
        updatedAt: string,
        __v: number
    }
