import {Base} from './base';
import {Group} from './group';
import {Location} from './location';

export class Leassons extends Base{
    public Group:Group;

    public Start:Date

    public End:Date

    public Location:Location

    public Name:string

    public Description:string
}