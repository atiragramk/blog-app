import { StyledImage } from './styled'

import error from '../../assets/img/error.gif'


export const ErrorMessage = () => {

    return (
        <div>
            <StyledImage src={error} alt="error"/>
        </div>
    )
}