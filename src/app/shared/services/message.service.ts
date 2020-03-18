import { Injectable } from '@angular/core';
import { messages } from '../resources/messages';

@Injectable({ providedIn: 'root' })
export class MessageService {
    get(key: string): string {
        return messages[key] || key;
    }
}
