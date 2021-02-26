/**É para sobescrever tipos de arquivos 
 * Para ter uma tipagem que ela vai estar disponível para 
 * aplicação inteira
 * 
*/

/**Vai criar uma tipagem para o styled componentes por isso é importado
 * desse jeito
 */
import 'styled-components';


declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors : {
            primary: string,
            secondary: string,
            tertiart: string,

            white: string,
            black: string,
            gray: string,

            success: string,
            info: string,
            warning: string,
        }
    }
}