import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { themeConfig } from '../../contexts/theme';


interface TodoContainerProps {
    children: React.ReactNode
}

export const TodoContainer = ({ children }: TodoContainerProps) => {

    const { theme } = useContext(ThemeContext);


    return (
        <>
        <main className={`h-screen ${themeConfig[theme].layout.backgroundColor}`}>
            <div className={`${themeConfig[theme].layout.heroClass}`}>
                <div className=' max-w-[43.75rem] m-auto p-8'>{children}</div>

            </div>
        </main>
        </>
    )
}