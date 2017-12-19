import { Action } from '@ngrx/store';

export function simpleReducer(state: string = 'hello world', action: Action) {
   console.log( state, action);
   switch (action.type) {
       case 'SPANISH':
         return state = 'Hola Mundo';
       case 'FRENCH':
         return state = 'Bonjour le monde';
       default:
         return state;
   }
}
