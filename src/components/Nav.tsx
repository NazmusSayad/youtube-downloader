import Wrapper from '@/layouts/Wrapper'
import Link from 'next/link'
import css from './Nav.module.scss'

const Nav = () => {
  return (
    <header>
      <Wrapper className={css.wrapper}>
        <h1>YouTube</h1>

        <nav>
          <ul>
            <li>
              <Link href="./mp3">Mp3</Link>
            </li>
          </ul>
        </nav>
      </Wrapper>
    </header>
  )
}

export default Nav
