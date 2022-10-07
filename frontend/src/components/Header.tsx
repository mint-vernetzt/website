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
    <Link to={url} className="flex text-left mb-8">
      <div className="w-24 mr-6 pt-2 shrink-0">
        {image && <GatsbyImage image={image} alt={title} className="w-24 h-16" />}
      </div>
      <div className="">
        <h4 className="font-bold m-0 leading-normal">{title}</h4>
        <p className="text-base">{description}</p>
      </div>        
    </Link>
  );
}

function Teaser(props: { menu: MenuItem }) {
  const { title, description, url, image } = props.menu;

  return (
    <Link to={url} className="flex text-left mb-8">
      <div className="w-24 mr-6 pt-2 shrink-0">
        {image && <GatsbyImage image={image} alt={title} className="w-24 h-16" />}
      </div>
      <div className="">
        <h4 className="font-bold m-0 leading-normal">{title}</h4>
        <p className="text-base">{description}</p>
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
      <button onClick={() => setActiveMenu(null)} className={`w-screen h-screen absolute top-0 left-0 ${activeMenu !== null ? "block" : "hidden"}`}></button>
      <div className="container relative py-4 bg-white z-10">
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
              } flex-100 lg:block lg:flex-auto`}
          >
            <ul className="py-8 text-sm leading-6 lg:py-0 lg:flex lg:items-center lg:-mx-2">
              {megaMenu.menu.map((mainMenu, index) => (
                <li
                  key={`nav-item-${index}`}
                  className="mainNav text-center py-2 px-2 lg:py-0"
                >
                  {hasMenus(mainMenu) === true && (
                    <>
                      <a
                        className={`inline-block py-1 px-4 rounded-lg hover:bg-blue-500 hover:text-neutral-200 ${activeMenu === index ? "bg-blue-500 text-neutral-200" : ""
                          }`}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveMenu(index === activeMenu ? null : index);
                        }}
                      >
                        {mainMenu.title}
                      </a>
                    
                      {activeMenu === index && (
                        <div className="absolute top-full left-0 right-0 overflow-hidden mx-20">
                          <div className="subNav flex mx-8 mb-8 bg-white shadow-[0px_8px_24px_-4px_#00000029] rounded-b-2xl">
                            <div className="w-1/2 bg-white rounded-bl-2xl">
                              <ul className="menu p-8">
                                {mainMenu.items.map((menu) => (
                                  <li key={mainMenu.url + menu.url}>
                                    <SubMenuItem menu={menu} />
                                  </li>
                                ))}
                              </ul>
                            </div>  
                            <div className="w-1/2 bg-[#EFE8E6] rounded-br-2xl">
                              <ul className="teaser p-8">
                                {mainMenu.teaser.map((teaser) => (
                                  <li key={mainMenu.url + teaser.url}>
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
                      className="inline-block py-1 px-4 rounded-lg hover:bg-blue-500 hover:text-neutral-200"
                      as={GatsbyLink}
                      to={mainMenu.url}
                    >
                      {mainMenu.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            {megaMenu.teasers.map((menu) => menu.title)}
          </nav>
          <div className="ml-auto">
            <a
              className="inline-block py-2 px-6 rounded-lg text-sm leading-6 bg-blue-500 text-neutral-200" 
              href="https://community.mint-vernetzt.de/" target="_blank">Zur Community-Plattform</a>
          </div>
          <button
            className="h-6 w-6 lg:hidden ml-auto"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <span
              className={`${isExpanded ? `hidden` : `block`
                } items-center h-6 w-6 px-0.5 flex flex-col justify-center`}
            >
              <span className="my-0.5 w-full h-0.5 rounded-sm bg-gray-900"></span>
              <span className="my-0.5 w-full h-0.5 rounded-sm bg-gray-900"></span>
            </span>
            <span
              className={`${isExpanded ? `block` : `hidden`
                } items-center h-6 w-6 px-0.5 flex flex-col relative`}
            >
              <span className="my-0.5 w-full h-0.5 rounded-sm bg-gray-900 transform rotate-45 absolute top-2 left-0"></span>
              <span className="my-0.5 w-full h-0.5 rounded-sm bg-gray-900 transform -rotate-45 absolute top-2 left-0"></span>
            </span>
          </button>
        </div>
      </div>      
    </div>
  );
}

export default Header;
