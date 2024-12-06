import { FC } from "react"

interface IProps {
    onShowInfoText: () => void
}


export const Header: FC<IProps> = ({ onShowInfoText }) => {


    
    return (

        <header className="mb-[10px]">
            <h3  className="header__title-gradient text-center text-[40px] cursor-pointer" onClick={onShowInfoText}>
                Star Way
            </h3>
        </header>
    )
}