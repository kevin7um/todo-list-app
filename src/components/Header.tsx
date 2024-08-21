import Logo from '../assets/Logo.svg'  
import style from './Header.module.css'

export function Header(){
  return (
    <header className={style.header} >
      <img src={Logo}  alt="Logo Todo List App" />
    </header>
  ) 
}