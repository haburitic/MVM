import { Result } from './result';

export class RestResponse {
    public messages: string[];
    public result: Result = new Result() ;
  constructor( ) { }
}
