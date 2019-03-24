export interface FeatureModuleRouter {
    moduleName: any;
    parser: string;
}

export class ModulesRouterMapper {
    public registerdModules: Array<FeatureModuleRouter> = [
        {
            moduleName: 'NomeDaClasse',
            parser: 'parser'
        }
    ];
}