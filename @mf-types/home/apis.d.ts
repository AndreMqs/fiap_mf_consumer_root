
    export type RemoteKeys = 'home';
    type PackageType<T> = T extends 'home' ? typeof import('home') :any;