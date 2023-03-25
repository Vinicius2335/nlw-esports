// estamos declarando quais parametros queremos passar de uma tela pra outra
// undefined quando nao passamos nada
// não é recomendado passar muitas informaçoes, objetos complexos, somente dados simples
export interface GameParams {
    id: string;
    title: string;
    bannerUrl: string;
}

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined,
            game: GameParams
        }
    }
}