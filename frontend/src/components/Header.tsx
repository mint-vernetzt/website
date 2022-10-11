import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Link } from "./Link";
import { MainMenu, MenuItem, useMenu } from "../hooks/useMenu";
import { GatsbyImage } from "gatsby-plugin-image";

function hasMenus(mainMenu: MainMenu) {
  return mainMenu.teaser.length > 0 || mainMenu.items.length > 0;
}


function SubMenuItem(props: { menu: MenuItem }) {
  const { title, description, url, image } = props.menu;

  return (
    <Link to={url} className="flex text-left">
      <div className="hidden md:block w-24 mr-6 pt-2 shrink-0">
        {image && <GatsbyImage image={image} alt={title} className="w-24 h-16" />}
      </div>
      <div className="">
      <h4 className="text-base lg:text-lg font-bold m-0 leading-normal">{title}</h4>
        <p className="lg:text-base">{description}</p>
      </div>        
    </Link>
  );
}

function Teaser(props: { menu: MenuItem }) {
  const { title, description, url, image } = props.menu;

  return (
    <Link to={url} className="flex text-left">
      <div className="hidden md:block w-24 mr-6 pt-2 shrink-0">
        {image && <GatsbyImage image={image} alt={title} className="w-24 h-16" />}
      </div>
      <div className="">
        <h4 className="text-base lg:text-lg font-bold m-0 leading-normal">{title}</h4>
        <p className="lg:text-base">{description}</p>
      </div>        
    </Link>
  );
}

function MainTeaser(props: { menu: MenuItem }) {
  const { title,  description, url, image } = props.menu;

  return (
    <Link to={url} className="flex text-left">
      <div>
        <h4 className="text-base lg:text-lg font-bold m-0 leading-normal">{title}</h4>
        <p>{description}</p>
      </div>        
    </Link>
  );
}

export function Header() {
  const [isExpanded, toggleExpansion] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState<number | null>(null);
  const megaMenu = useMenu();
  console.log(megaMenu)

  return (
    <div className={`header-section shadow-lg`}>
      <button onClick={() => setActiveMenu(null)} className={`w-screen h-screen absolute top-0 left-0 z-20 hidden ${activeMenu !== null ? "lg:block" : "hidden"}`}></button>
      <div className="container relative py-4 bg-white">
        <div className="flex flex-wrap items-center">
          <div className="logo-mint lg:pr-8">
            <Link to="/" as={GatsbyLink}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                aria-describedby="mint-title-header"
                role="img"
                className="w-10 h-10 md:w-auto md:h-auto"
              >
                <title id="mint-title-header">Logo: mint vernetzt</title>
                <g fill="none">
                  <path
                    fill="#154194"
                    d="M28 56c15.464 0 28-12.536 28-28S43.464 0 28 0 0 12.536 0 28s12.536 28 28 28"
                  />
                  <path
                    fill="#EFE8E6"
                    d="M41.354 25.24c-.43-.89-.998-1.614-1.703-2.17a6.664 6.664 0 0 0-2.447-1.202 11.356 11.356 0 0 0-2.916-.368c-1.358 0-2.532.174-3.524.524-.992.348-1.879.781-2.662 1.298a8.371 8.371 0 0 0-2.681-1.376 10.67 10.67 0 0 0-3.113-.446 14.397 14.397 0 0 0-3.973.543c-1.266.362-2.33.84-3.19 1.434-.523.362-.927.75-1.214 1.163-.288.414-.431.957-.431 1.628v11.98c0 1.085.26 1.816.783 2.19.522.374 1.37.562 2.545.562.573 0 1.096-.033 1.566-.097.47-.065.834-.136 1.096-.213V26.889c.355-.185.72-.347 1.096-.485a4.18 4.18 0 0 1 1.488-.252c.756 0 1.396.2 1.918.6.522.402.783 1.029.783 1.881v9.615c0 1.085.254 1.816.763 2.19.51.374 1.35.562 2.525.562.574 0 1.096-.033 1.566-.097.47-.065.848-.136 1.135-.213V27.897c0-.26-.026-.52-.078-.776a4.99 4.99 0 0 1 1.233-.697 3.95 3.95 0 0 1 1.468-.272c.809 0 1.449.2 1.918.6.47.402.705 1.029.705 1.881v9.615c0 1.085.255 1.816.763 2.19.51.374 1.351.562 2.526.562.573 0 1.096-.033 1.566-.097A9.51 9.51 0 0 0 42 40.69V28.478c0-1.266-.215-2.345-.646-3.237v-.001Z"
                  />
                  <path
                    fill="#B16FAB"
                    d="M18.967 17.982C19.612 18.66 20.457 19 21.5 19s1.887-.34 2.532-1.018c.645-.679.968-1.513.968-2.503 0-.961-.323-1.782-.968-2.46-.645-.68-1.49-1.019-2.532-1.019-1.044 0-1.888.34-2.533 1.018-.645.68-.967 1.5-.967 2.46 0 .991.322 1.825.967 2.504m12 0C31.612 18.66 32.457 19 33.5 19s1.887-.34 2.532-1.018c.645-.679.968-1.513.968-2.503 0-.961-.323-1.782-.968-2.46-.645-.68-1.49-1.019-2.532-1.019-1.044 0-1.888.34-2.533 1.018-.645.68-.967 1.5-.967 2.46 0 .991.322 1.825.967 2.504"
                  />
                </g>
              </svg>
            </Link>
          </div>          
          <nav
            className={`${isExpanded ? `block` : `hidden`
              } flex-100 lg:block lg:flex-auto z-30 shadow-[0px_8px_24px_-4px_#00000029] lg:shadow-none rounded-b-2xl lg:rounded-none`}
          >
            <ul className="w-full bg-white lg:inherit text-base lg:text-sm leading-6 lg:flex lg:items-center lg:-mx-2 px-6 lg:px-0 z-100 mb-0">
              {megaMenu.menu.map((mainMenu, index) => (
                <li
                  key={`nav-item-${index}`}
                  className="mainNav py-2 lg:px-2 lg:py-0 border-b border-neutral-500 last:border-0 lg:border-0"
                >
                  {hasMenus(mainMenu) === true && (
                    <>
                      <a
                        className={`flex items-center font-bold lg:inline-block py-1 lg:px-4 lg:rounded-lg lg:hover:bg-blue-500 lg:hover:text-neutral-200 ${activeMenu === index ? "lg:bg-blue-500 lg:text-neutral-200" : ""
                          }`}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveMenu(index === activeMenu ? null : index);
                        }}
                      >
                        <span>{mainMenu.title}</span>
                        <button className={`ml-auto lg:hidden items-center h-5 w-5 flex item-center justify-center`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`h-3 w-3 lg:hidden ${activeMenu === index ? "rotate-180" : ""}`} viewBox="0 0 16 16">                          
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                          </svg>
                        </button>                        
                      </a>
                    
                      {activeMenu === index && (
                        <div className="lg:absolute lg:top-full lg:left-0 lg:right-0 overflow-hidden lg:mx-20">
                          <div className="subNav flex lg:mx-8 lg:mb-8 bg-white lg:shadow-[0px_8px_24px_-4px_#00000029] lg:rounded-b-2xl">
                            <div className="lg:w-1/2 bg-white lg:rounded-bl-2xl">
                              <ul className="menu pt-4 lg:p-8">
                                {mainMenu.items.map((menu) => (
                                  <li key={mainMenu.url + menu.url} className="mb-4 lg:mb-8 lg:last:mb-0">
                                    <SubMenuItem menu={menu} />
                                  </li>
                                ))}
                              </ul>
                            </div>  
                            <div className="hidden lg:block w-1/2 bg-[#EFE8E6] rounded-br-2xl">
                              <ul className="teaser p-8">
                                {mainMenu.teaser.map((teaser) => (
                                  <li key={mainMenu.url + teaser.url} className="mb-8 last:mb-0">
                                    <Teaser menu={teaser} />
                                  </li>
                                ))}
                              </ul>
                            </div>  
                          </div>
                        </div>  
                      )}
                    </>    
                  )}
                  {hasMenus(mainMenu) === false && (
                    <Link
                      className="flex items-center font-bold lg:inline-block py-1 lg:px-4 lg:rounded-lg lg:hover:bg-blue-500 lg:hover:text-neutral-200"
                      as={GatsbyLink}
                      to={mainMenu.url}
                    >
                      {mainMenu.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="lg:hidden bg-[#EFE8E6] rounded-br-2xl px-6">
              <ul className="main-teaser pt-6">
                {megaMenu.teasers.map((menu) => (
                  <li key={menu.url} className="pb-6">
                    <MainTeaser menu={menu} />
                  </li>
                ))}
              </ul>    
            </div>     
          </nav>
          <div className="ml-auto hidden lg:block">
            <a
              className="inline-block py-2 px-6 rounded-lg text-sm leading-6 bg-blue-500 text-neutral-200" 
              href="https://community.mint-vernetzt.de/" target="_blank">Zur Community-Plattform</a>
          </div>
          <button
            className="h-5 w-5 lg:hidden ml-auto z-30"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <span
              className={`${isExpanded ? `hidden` : `block`
                } items-center h-5 w-5 flex flex-col justify-center`}
            >
              <span className="my-0.5 w-full h-0.5 rounded-sm bg-neutral-800"></span>
              <span className="my-0.5 w-full h-0.5 rounded-sm bg-neutral-800"></span>
            </span>
            <span
              className={`${isExpanded ? `block` : `hidden`
                } items-center h-5 w-5 flex item-center justify-center`}
            >
              <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.80764 0.307518C0.865697 0.249314 0.934667 0.203135 1.0106 0.171627C1.08653 0.140119 1.16793 0.123901 1.25014 0.123901C1.33235 0.123901 1.41375 0.140119 1.48968 0.171627C1.56561 0.203135 1.63458 0.249314 1.69264 0.307518L5.00014 3.61627L8.30764 0.307518C8.36575 0.249408 8.43474 0.203313 8.51066 0.171864C8.58659 0.140415 8.66796 0.124229 8.75014 0.124229C8.83232 0.124229 8.9137 0.140415 8.98962 0.171864C9.06554 0.203313 9.13453 0.249408 9.19264 0.307518C9.25075 0.365628 9.29685 0.434615 9.32829 0.510539C9.35974 0.586463 9.37593 0.667839 9.37593 0.750018C9.37593 0.832198 9.35974 0.913574 9.32829 0.989498C9.29685 1.06542 9.25075 1.13441 9.19264 1.19252L5.88389 4.50002L9.19264 7.80752C9.25075 7.86563 9.29685 7.93461 9.32829 8.01054C9.35974 8.08646 9.37593 8.16784 9.37593 8.25002C9.37593 8.3322 9.35974 8.41357 9.32829 8.4895C9.29685 8.56542 9.25075 8.63441 9.19264 8.69252C9.13453 8.75063 9.06554 8.79672 8.98962 8.82817C8.9137 8.85962 8.83232 8.87581 8.75014 8.87581C8.66796 8.87581 8.58659 8.85962 8.51066 8.82817C8.43474 8.79672 8.36575 8.75063 8.30764 8.69252L5.00014 5.38377L1.69264 8.69252C1.63453 8.75063 1.56554 8.79672 1.48962 8.82817C1.4137 8.85962 1.33232 8.87581 1.25014 8.87581C1.16796 8.87581 1.08659 8.85962 1.01066 8.82817C0.934737 8.79672 0.86575 8.75063 0.80764 8.69252C0.74953 8.63441 0.703435 8.56542 0.671986 8.4895C0.640537 8.41357 0.624351 8.3322 0.624351 8.25002C0.624351 8.16784 0.640537 8.08646 0.671986 8.01054C0.703435 7.93461 0.74953 7.86563 0.80764 7.80752L4.11639 4.50002L0.80764 1.19252C0.749436 1.13446 0.703258 1.06549 0.671749 0.98956C0.640241 0.913629 0.624023 0.832227 0.624023 0.750018C0.624023 0.667809 0.640241 0.586408 0.671749 0.510476C0.703258 0.434545 0.749436 0.365575 0.80764 0.307518Z" fill="#454C5C"/>
              </svg>
            </span>
          </button>
        </div>
      </div>      
    </div>
  );
}

export default Header;
