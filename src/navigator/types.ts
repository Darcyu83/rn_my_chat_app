import { AuthStackParams } from './AuthStackNav/types';
import { ChatStackParams } from './ChatStackNav/types';
import { UserStackParams } from './UserStackNav/types';

export type RootBottomParamsList = {
    ChatStackNav: ChatStackParams;
    AuthStackNav: AuthStackParams;
    UserStackNav: UserStackParams;
};
