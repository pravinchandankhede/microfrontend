import { LoadRemoteModuleOptions } from '@angular-architects/native-federation';

export type PluginOptions = LoadRemoteModuleOptions & {
    displayName: string;
    componentName: string;
};
