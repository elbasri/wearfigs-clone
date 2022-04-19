/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { isEmpty } from 'lodash'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser,
    faBriefcase,
    faMagnifyingGlass,
    faMars,
    faVenus
  } from "@fortawesome/free-solid-svg-icons";
import {Modal} from 'react-bootstrap'
import MenMega from './menMega'
import WomenMega from './womenMega'
import AboutMenu from './aboutMenu'
import MenuMobile from './menuMobile'

const Header = () => {
  const [show, setShow] = useState(false);

  const router = useRouter();

  const goToHome = () => router.push('/')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [search, setSearch] = useState(false);
  const handleSearchShow = () => setSearch(true);
  const handleSearchClose = () => setSearch(false);
  const toggleSearch = () => {
        if(search){
            setSearch(false);
        }else{
          setSearch(true);
        }
  }

  const [WomenMenu, setWomen] = useState(false);

    return (
            <>
              <header className='navbarHeader sticky-top'>
                <navbar className="navbar d-flex">
                    <div className="brand">
                      <div className="toggle" onClick={()=> handleShow()}>
                          &#9776;
                      </div>
                      <div className="logoArea" style={{ cursor: 'pointer'}} onClick={goToHome}>
                        <img
                          src='https://wearfigs-back.tasyer.com/wp-content/uploads/2022/03/photo_2022-03-24_00-25-44.jpg'
                          alt='alfa' width="50" />
                      </div>
                    </div>
                    <div className="headerMenu">
                        <div className="menu">
                          <ul className="navList list-unstyled">
                            <li className="menuItem menMenu">
                              <Link href='/products'>
                                  <a ><b>Men</b></a>
                              </Link>
                                  <MenMega />
                              </li>
                            <li className="menuItem womenMenu">
                              <Link href='/products'>
                                  <a><b>Women</b></a>
                              </Link>
                                <WomenMega />
                              </li>
                            <li className="menuItem abMenu">
                              <Link href='/products'>
                                  <a><b>Who We Are</b></a>
                              </Link>
                              <AboutMenu/>
                              </li>
                            <li className="menuItem" id="MenuHov">
                              <Link href='/products'>
                                  <a><b>Teams Order</b></a>
                              </Link></li>
                            <li className="menuItem" id="MenuHov">
                              <Link href='/products'>
                                  <a><b>Students</b></a>
                              </Link></li>
                          </ul>
                        </div>
                    </div>
                    <div className="searchBar  mr-2 pb-3">
                      <button onClick={toggleSearch} className='btnToggle btn col-m-2 btn-outline-dark btn-sm'>
                      <FontAwesomeIcon icon={faMagnifyingGlass} size="1x"/>
                        Search
                      </button>
                    </div>
                    <div className="user mb-3">
                      <div>
                        <FontAwesomeIcon icon={faBriefcase} size="1x" />
                      </div>
                      <div className='ml-2'>
                        <FontAwesomeIcon icon={faUser} size="1x" />
                      </div>
                    </div>
                </navbar>
              </header>
              <div className="searchBarSection container-fluid my-4" id={!search ? 'searchBar': 'searchBarDisplay'}>
                  <div className="Search input-group">
                    <input type="text" className='searchText ' placeholder="Search"/>
                    <div className="searchIconGroup d-flex">
                        <div className='searchType '>
                          <FontAwesomeIcon icon={faMars} size="1x"/>
                        </div>
                        <div className='searchType'>
                          <FontAwesomeIcon icon={faVenus} size="1x"/>
                        </div>
                    </div>
                  </div>
              </div>
              { show ? <MenuMobile handleClose={handleClose}/> : null}
            </>
            );
}

export default Header;