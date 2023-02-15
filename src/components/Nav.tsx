import { RootWrapper } from '@/layouts/Wrapper'
import Link from 'next/link'
import css from './Nav.module.scss'

const Nav = () => {
  return (
    <header className={css.Header}>
      <RootWrapper className={css.wrapper}>
        <h1 className={css.heading}>YT DL</h1>

        <nav>
          <ul className={css.ul}>
            <li>
              <Link href="./mp3">Mp3</Link>
            </li>

            <li>
              <Link href="./mp3">Mp4</Link>
            </li>

            <li>
              <Link href="./mp3">Webm</Link>
            </li>
          </ul>
        </nav>
      </RootWrapper>
    </header>
  )
}

export default Nav
