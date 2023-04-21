import React from 'react'
import styles from './Rodape.module.scss'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'


export default function Rodape() {
  return (
    <footer>
        <ul className={styles.rodape__lista}>
            <li className={styles.rodape__item}>
                <img src={facebook} alt="" />
            </li>
            <li className={styles.rodape__item}>
                <img src={instagram} alt="" />
            </li>
            <li className={styles.rodape__item}>
                <img src={twitter} alt="" />
            </li>
        </ul>
        <ul className={styles.rodape__lista}>
            <li>
                <span className={styles.rodape__texto}> Desenvolvido por CaioLuwi. </span>
            </li>
        </ul>
    </footer>
  )
}
