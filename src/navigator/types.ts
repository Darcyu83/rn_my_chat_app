import { TAuthStackParams } from './authStackNav/types';
import { TChatStackParams } from './chatStackNav/types';
import { TUserStackParams } from './userStackNav/types';

export type RootBottomParamsList = {
    TodosStackNav: JSX.Element;
    ChatStackNav: TChatStackParams;
    AuthStackNav: TAuthStackParams;
    UserStackNav: TUserStackParams;
};
