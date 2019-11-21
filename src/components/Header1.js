import React from 'react';

import { lang_mainMenu } from '../data/lang';
import '../styles/css/header1.css';

const Header = ({ lang, мenuShow, menuVisible, mainMenuText, changeMainMenuText }) => {
  const menu = lang_mainMenu[lang];

  return (
    <div 
      className={menuVisible ? "mainMenu mainMenu--scaled" : "mainMenu mainMenu--unscaled"}
      onMouseOver={() => мenuShow(true)}
      onMouseLeave={() => мenuShow(false)}
    >
      <div 
        className={menuVisible ? "menuWrapper menuWrapper--full" : "menuWrapper menuWrapper--small"}
      >
        <div className="hexagonWrapper__p1">
          <div 
            className="hexagon hexagon__show"
            onMouseOver={() => changeMainMenuText(menu.menu)}
            onMouseLeave={() => changeMainMenuText("")}
          >
            <svg className="hexagon__picture" />
          </div>
        </div>

        <div className="hexagonWrapper__p2">
          <div 
            className={menuVisible 
              ? "hexagon hexagon__show" 
              : "hexagon hexagon__hide delay7"
            }
            onMouseOver={() => changeMainMenuText(menu.catchword1)}
            onMouseLeave={() => changeMainMenuText("")}
          >
            <div className="hexagon--add">
              <img 
                className="hexagon__picture" 
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8%0D%0Ac3ZnDQp4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQp4bWxuczp4bGluaz0iaHR0%0D%0AcDovL3d3dy53My5vcmcvMTk5OS94bGluayINCnZlcnNpb249IjEuMSIgaGVpZ2h0PSIzMTUiIHdp%0D%0AZHRoPSIzNDIiID4NCiA8ZGVmcz4NCiAgPHN0eWxlIHR5cGU9InRleHQvY3NzIj48IVtDREFUQVsN%0D%0ACiAgICAub3V0bGluZSB7IHN0cm9rZTpub25lOyBzdHJva2Utd2lkdGg6MCB9DQogIF1dPjwvc3R5%0D%0AbGU+DQogICA8ZyBpZD0iaGVhcnQiPg0KICAgPHBhdGggDQogICAgZD0iTTAgMjAwIHYtMjAwIGgy%0D%0AMDAgDQogICAgYTEwMCwxMDAgOTAgMCwxIDAsMjAwDQogICAgYTEwMCwxMDAgOTAgMCwxIC0yMDAs%0D%0AMA0KICAgIHoiIC8+DQogIDwvZz4NCiA8L2RlZnM+DQogPGRlc2M+DQogICBhIG5lYXJseSBwZXJm%0D%0AZWN0IGhlYXJ0DQoJIG1hZGUgb2YgdHdvIGFyY3MgYW5kIGEgcmlnaHQgYW5nbGUNCiA8L2Rlc2M+%0D%0ADQogIDx1c2UgeGxpbms6aHJlZj0iI2hlYXJ0IiBjbGFzcz0ib3V0bGluZSAiIGZpbGw9IiMwOTU3%0D%0AODRkZCIgdHJhbnNmb3JtPSJyb3RhdGUoMjI1LDE1MCwxMjEpIiAvPg0KPC9zdmc+DQo="
              />
            </div>
          </div>
        </div>

        <div className="hexagonWrapper__p3">
          <div 
            className={menuVisible 
              ? "hexagon hexagon__show delay4" 
              : "hexagon hexagon__hide delay6"
            }
            onMouseOver={() => changeMainMenuText(menu.faqs)}
            onMouseLeave={() => changeMainMenuText("")}
          >
            <img 
              className="hexagon__picture"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0%0D%0Ab3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZl%0D%0AcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8v%0D%0ARFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQv%0D%0Ac3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDov%0D%0AL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5%0D%0AL3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjkxMi4xcHgiIGhlaWdodD0iOTEyLjFw%0D%0AeCIgdmlld0JveD0iMCAwIDkxMi4xIDkxMi4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3%0D%0AIDAgMCA5MTIuMSA5MTIuMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQoJZmlsbD0id2hpdGUiPg0K%0D%0APGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik01MDQuNjA3LDU3NC45YzEwMi44LDAsMTg2LjQtODMuNjAx%0D%0ALDE4Ni40LTE4Ni40cy04My42MDEtMTg2LjQtMTg2LjQtMTg2LjRjLTEwMi43OTksMC0xODYuNCw4%0D%0AMy42LTE4Ni40LDE4Ni40DQoJCQlTNDAxLjgwOCw1NzQuOSw1MDQuNjA3LDU3NC45eiIvPg0KCQk8%0D%0AZz4NCgkJCTxwYXRoIGQ9Ik0zNDYuMTA4LDYxMS45Yy03MS44LDAtMTMwLDU4LjE5OS0xMzAsMTMw%0D%0AVjg4Ny4xYzAsMTMuODAxLDExLjIsMjUsMjUsMjVoNTI3YzEzLjgsMCwyNS0xMS4xOTksMjUtMjVW%0D%0ANzQ1LjUNCgkJCQljMi4yLTMuOCw0LjItNy45LDUuOC0xMi4ybDEwMi0yNzBjMy40LTksNS4yLTE4%0D%0ALjYsNS4yLTI4LjNWMTMyYzAtNDQuMi0zNS44LTgwLTgwLTgwcy04MCwzNS44LTgwLDgwdjI4OC40%0D%0AbC03Mi4zLDE5MS41SDM0Ni4xMDh6DQoJCQkJIi8+DQoJCQk8cGF0aCBkPSJNMzAuODA4LDE3OC4x%0D%0AaDU5YzEyLjQsMCwyMi45LTksMjQuNy0yMS4yYzMuNC0yMi4yLDEwLjMtMzguNiwyMC41LTQ4LjVj%0D%0AOS41LTkuMiwyMi42LTEzLjcsNDAuMi0xMy43DQoJCQkJYzE4LjIsMCwzMi4xLDUsNDIuNywxNS40%0D%0AYzEwLjYsMTAuNCwxNS41LDIyLjksMTUuNSwzOS41YzAsNy44LTEuOCwxNS01LjUsMjJjLTEuOSwz%0D%0ALjUtOS4zLDE0LjMtMzcuNSwzOC4yDQoJCQkJYy0yNi4yLDIyLjItNDMuOSw0My4xLTU0LjIsNjMu%0D%0AOGMtMTAuNSwyMS4xLTE1LjYsNTEuOC0xNS42LDkzLjZsMCwwYzAsMTMuOCwxMS4yLDI1LDI1LDI1%0D%0AaDUzLjNjMTMuOCwwLDI1LTExLjIsMjUtMjVsMCwwDQoJCQkJYzAtMzIuMywzLjktNDUuNSw2LjIt%0D%0ANTAuNWMxLjgtNCw5LjMtMTUuOCwzOS00MC40YzI3LjYtMjIuOSw0Ni4yLTQzLjgsNTYuOC02My44%0D%0AYzEwLjktMjAuNSwxNi40LTQzLDE2LjQtNjYuOA0KCQkJCWMwLTQyLjUtMTYuMTAxLTc4LTQ4LTEw%0D%0ANS42Yy0zMC44LTI2LjYtNzEtNDAuMS0xMTkuNS00MC4xYy00Ni4yLDAtODUuMywxMy44LTExNiw0%0D%0AMC45Yy0zMSwyNy40LTQ4LjcsNjQuNS01Mi43LDExMC4ybDAsMA0KCQkJCUM0LjcwOCwxNjUuNSwx%0D%0ANi4yMDgsMTc4LjEsMzAuODA4LDE3OC4xeiIvPg0KCQkJPHBhdGggZD0iTTE5OC43MDgsNTMzLjZj%0D%0AMTMuOCwwLDI1LTExLjE5OSwyNS0yNVY0NTUuNGMwLTEzLjgwMS0xMS4yLTI1LTI1LTI1aC01My4y%0D%0AYy0xMy44LDAtMjUsMTEuMTk5LTI1LDI1VjUwOC42DQoJCQkJYzAsMTMuODAxLDExLjIsMjUsMjUs%0D%0AMjVIMTk4LjcwOHoiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+%0D%0ADQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0K%0D%0APGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxn%0D%0APg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
            />
          </div>
        </div>

        <div className="hexagonWrapper__p4"> 
          <div 
            className={menuVisible 
              ? "hexagon hexagon__show delay5" 
              : "hexagon hexagon__hide delay5"
            }
            onMouseOver={() => changeMainMenuText(menu.home)}
            onMouseLeave={() => changeMainMenuText("")}
          >
            <svg className="hexagon__picture"/>
          </div>
        </div>

        <div className="hexagonWrapper__p5">
          <div 
            className={menuVisible 
              ? "hexagon hexagon__show delay6" 
              : "hexagon hexagon__hide delay4"
            }
            onMouseOver={() => changeMainMenuText(menu.catchword2)}
            onMouseLeave={() => changeMainMenuText("")}
          >
            <div className="hexagon--add">
              <svg className="hexagon__picture"/>
            </div>
          </div>
        </div>

        <div className="hexagonWrapper__p6">
          <div 
            className={menuVisible 
              ? "hexagon hexagon__show delay7" 
              : "hexagon hexagon__hide delay3"
            }
            onMouseOver={() => changeMainMenuText(menu.products)}
            onMouseLeave={() => changeMainMenuText("")}
          >
            <img 
              className="hexagon__picture"
              src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMzUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY0IDY0IiBoZWln%0D%0AaHQ9IjUxMiIgdmlld0JveD0iMCAwIDY0IDY0IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3%0D%0Ady53My5vcmcvMjAwMC9zdmciIGZpbGw9IndoaXRlIj48cGF0aCBkPSJtMTYgMTNoMjBjLjU1MSAw%0D%0AIDEtLjQ0OSAxLTF2LTRjMC0uNTUxLS40NDktMS0xLTFoLTN2LTFjMC0xLjY1NC0xLjM0Ni0zLTMt%0D%0AM2gtOGMtMS42NTQgMC0zIDEuMzQ2LTMgM3YxaC0zYy0uNTUxIDAtMSAuNDQ5LTEgMXY0YzAgLjU1%0D%0AMS40NDkgMSAxIDF6bTEwLThjMS42NTQgMCAzIDEuMzQ2IDMgM3MtMS4zNDYgMy0zIDMtMy0xLjM0%0D%0ANi0zLTMgMS4zNDYtMyAzLTN6Ii8+PGNpcmNsZSBjeD0iMjYiIGN5PSI4IiByPSIxIi8+PHBhdGgg%0D%0AZD0ibTE5IDI5Yy00LjQxMSAwLTggMy41ODktOCA4aDE2YzAtNC40MTEtMy41ODktOC04LTh6Ii8+%0D%0APGNpcmNsZSBjeD0iMTkiIGN5PSIyMyIgcj0iNCIvPjxwYXRoIGQ9Im00NyAxNS40MjZjLjY0NS0u%0D%0AMTgzIDEuMzEyLS4zMTMgMi0uMzc2di02LjA1aC0xMHYyaDh6Ii8+PHBhdGggZD0ibTQ5IDMxaDJ2%0D%0ALTRoNHYtMmgtNHYtNGgtMnY0aC00djJoNHoiLz48cGF0aCBkPSJtNDEgMjZjMCA0Ljk2MiA0LjAz%0D%0AOCA5IDkgOXM5LTQuMDM4IDktOS00LjAzOC05LTktOS05IDQuMDM4LTkgOXptNi03aDZ2NGg0djZo%0D%0ALTR2NGgtNnYtNGgtNHYtNmg0eiIvPjxwYXRoIGQ9Im03IDQxaDEwdjEwaDIyLjk5NmwtLjkwOS0x%0D%0AMGgtMi4wODd2LTZoNi42OTVjLTIuODM0LTEuOTkyLTQuNjk1LTUuMjgtNC42OTUtOSAwLTQuMjY0%0D%0AIDIuNDQ0LTcuOTYxIDYtOS43ODZ2LTMuMjE0aC02LjE4NGMtLjQxNCAxLjE2MS0xLjUxNCAyLTIu%0D%0AODE2IDJoLTIwYy0xLjMwMiAwLTIuNDAyLS44MzktMi44MTYtMmgtNi4xODR6bTI4IDZoLTE2di0y%0D%0AaDE2em0tMTYtNHYtMmgydjJ6bTE2IDBoLTEydi0yaDEyem0tNC0xMnYtMmgydjJ6bTYgMGgtMnYt%0D%0AMmgyem0tMTAtMTRoMTB2MmgtMTB6bTAgNGgxMHYyaC0xMHptMCA0aDEwdjJoLTEwem0tMTggMTJj%0D%0AMC00LjIwOCAyLjYxNi03LjgxIDYuMzA0LTkuMjgzLTEuNC0xLjEtMi4zMDQtMi44MDMtMi4zMDQt%0D%0ANC43MTcgMC0zLjMwOSAyLjY5MS02IDYtNnM2IDIuNjkxIDYgNmMwIDEuOTE0LS45MDQgMy42MTct%0D%0AMi4zMDQgNC43MTcgMy42ODggMS40NzMgNi4zMDQgNS4wNzUgNi4zMDQgOS4yODN2MmgtMjB6Ii8+%0D%0APHBhdGggZD0ibTE1LjU4NiA1My0xMC41ODYtMTAuNTg2di0zMS40MTRoOHYtMmgtMTB2NDZoMzcu%0D%0AMzU5bC0uMTgxLTJ6Ii8+PHBhdGggZD0ibTE1IDQzaC02LjU4Nmw2LjU4NiA2LjU4NnoiLz48cGF0%0D%0AaCBkPSJtNDIuNjY2IDU4LjI3MmMuMTQxIDEuNTU1IDEuNDI1IDIuNzI4IDIuOTg3IDIuNzI4aDgu%0D%0ANjk0YzEuNTYyIDAgMi44NDYtMS4xNzMgMi45ODctMi43MjhsLjExNi0xLjI3MmgtMi40NXYtMmgy%0D%0ALjYzMmwuMTgyLTJoLTQuODE0di0yaDQuOTk2bC4xODItMmgtMy4xNzh2LTJoMy4zNTlsLjE4Mi0y%0D%0AaC01LjU0MXYtMmg1LjcyM2wuMTgyLTJoLTE3LjgxeiIvPjxwYXRoIGQ9Im0zOSAzN2gyMnYyaC0y%0D%0AMnoiLz48L3N2Zz4="
            />
          </div>
        </div>

        <div className="hexagonWrapper__p7">
          <div 
            className={menuVisible 
              ? "hexagon hexagon__show delay8" 
              : "hexagon hexagon__hide delay2"
            }
            onMouseOver={() => changeMainMenuText(menu.prices)}
            onMouseLeave={() => changeMainMenuText("")}
          >
            <img 
              className="hexagon__picture"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gU3ZnIFZlY3RvciBJ%0D%0AY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gLS0+DQo8IURPQ1RZUEUg%0D%0Ac3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9H%0D%0AcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5z%0D%0APSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMu%0D%0Ab3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBl%0D%0AbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUi%0D%0AIGZpbGw9IndoaXRlIj4NCjxtZXRhZGF0YT4gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cu%0D%0Ab25saW5ld2ViZm9udHMuY29tL2ljb24gPC9tZXRhZGF0YT4NCjxnPjxwYXRoIGQ9Ik02ODcuMyw1%0D%0AMjQuNmMtMjYuNS02LjUtNDUuNC0xNC4zLTU2LjItMjMuN2MtMTEuMS05LjYtMTYuOC0yMi41LTE2%0D%0ALjgtMzguNmMwLTE4LjIsNi4xLTMyLjQsMTgtNDIuNWMxMi4yLTEwLjIsMjktMTUuMyw1MC41LTE1%0D%0ALjNjMjAuNywwLDM2LjUsNSw0Ny42LDE1YzExLDEwLjEsMTcuOCwyNS4zLDIwLjQsNDZoNDJjLTEu%0D%0ANS0yOS40LTEyLjEtNTIuNS0zMS43LTY5LjRjLTE1LjgtMTMuNS0zNi0yMS42LTYwLjYtMjQuNXYt%0D%0ANDcuOGgtNDQuNXY0OS41Yy0yMC4yLDMuMy0zNy43LDEwLjktNTIuNiwyMy4zYy0yMC43LDE3LjIt%0D%0AMzEsMzkuMy0zMSw2Ni4zYzAsMjMuNiw4LDQzLjIsMjQuMyw1OC43YzE2LjIsMTUuNSw0MC42LDI3%0D%0ALjIsNzMuMywzNS4xYzMwLjcsNy41LDUyLjcsMTYuNCw2NS43LDI3YzEzLDEwLjcsMTkuNCwyNSwx%0D%0AOS40LDQyLjhjMCwyMS40LTYuOCwzOC4yLTIwLjIsNTAuM2MtMTMuNywxMi0zMi41LDE4LjEtNTYu%0D%0ANiwxOC4xYy0yNC4xLDAtNDIuOC02LjEtNTYuMS0xOC4xYy0xMy4yLTEyLjEtMjAuMS0yOS4xLTIw%0D%0ALjQtNTEuM2gtNDEuOGwtMC41LDguNGMwLjIsMjMuNywxMC45LDQ0LjcsMzIuMiw2My40YzE4Ljgs%0D%0AMTYsNDAuMSwyNS43LDY0LjQsMjkuNXY0Mi4yaDQ0LjV2LTAuN2gwLjRsLTAuNC0yNy41VjcyN2My%0D%0ANS0zLjIsNDYuMS0xMi4zLDYzLjEtMjcuMWMyMi41LTE5LjQsMzMuNS00NC4xLDMzLjUtNzQuM2Mw%0D%0ALTI1LTktNDUuNy0yNi45LTYyLjVDNzUxLjksNTQ2LjQsNzI0LjMsNTMzLjUsNjg3LjMsNTI0LjZ6%0D%0AIi8+PHBhdGggZD0iTTcyMi43LDIzNi41VjEwLjNWMTBoLTQ5MHYwLjRMMTAuNCwyMzIuN0gxMFY5%0D%0AOTBoMC4yaDcxMi41Vjg1NC42Qzg3My44LDgzMi41LDk5MCw3MDIuNyw5OTAsNTQ1LjVDOTkwLDM4%0D%0AOC4zLDg3My44LDI1OC41LDcyMi43LDIzNi41eiBNMjMyLjcsNzMuNHYxNTkuM0g3My40TDIzMi43%0D%0ALDczLjR6IE02NzguMiw5NDUuNEg1NC44aC0wLjJWMjc3LjJoMjIyLjdWNTQuNWg0MDAuOXYxNzgu%0D%0AM2MtMC4zLDAtMC42LDAtMC45LDBjLTE3Mi43LDAtMzEyLjgsMTQwLTMxMi44LDMxMi43YzAsMTcy%0D%0ALjcsMTQwLDMxMi44LDMxMi44LDMxMi44YzAuMywwLDAuNiwwLDAuOSwwVjk0NS40eiBNNjc4LjIs%0D%0AODEzLjdjLTE0Ny42LDAtMjY3LjMtMTE5LjYtMjY3LjMtMjY3LjNjMC0xNDcuNywxMTkuNi0yNjcu%0D%0AMywyNjcuMy0yNjcuM2MxNDcuNiwwLDI2Ny4zLDExOS42LDI2Ny4zLDI2Ny4zQzk0NS41LDY5NCw4%0D%0AMjUuOCw4MTMuNyw2NzguMiw4MTMuN3oiLz48cGF0aCBkPSJNOTkuMSw0MTFoMjIyLjd2NDQuNUg5%0D%0AOS4xVjQxMXoiLz48cGF0aCBkPSJNOTkuMSw1MDBoMjIyLjd2NDQuNUg5OS4xVjUwMHoiLz48cGF0%0D%0AaCBkPSJNOTkuMSw2NzguMmgyMjIuN3Y0NC41SDk5LjFWNjc4LjJ6Ii8+PHBhdGggZD0iTTk5LjEs%0D%0ANzY3LjNoMjIyLjd2NDQuNUg5OS4xVjc2Ny4zeiIvPjxwYXRoIGQ9Ik0zMjEuOCwxNDMuN0g1MDB2%0D%0ANDQuNUgzMjEuOFYxNDMuN0wzMjEuOCwxNDMuN3oiLz48cGF0aCBkPSJNMzIxLjgsMjMyLjhINTAw%0D%0AdjQ0LjVIMzIxLjhWMjMyLjhMMzIxLjgsMjMyLjh6Ii8+PC9nPg0KPC9zdmc+"
            />
          </div>
        </div>  

        <div className="hexagonWrapper__p8">
          <div 
            className={menuVisible 
              ? "hexagon hexagon__show delay9" 
              : "hexagon hexagon__hide delay1"
            }
            onMouseOver={() => changeMainMenuText(menu.contacts)}
            onMouseLeave={() => changeMainMenuText("")}
          >
            <img 
              className="hexagon__picture"
              src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgaGVpZ2h0PSI1MTJwdCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdp%0D%0AZHRoPSI1MTJwdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJt%0D%0AMjU2IDc1Yy0yNC44MTI1IDAtNDUgMjAuMTg3NS00NSA0NXMyMC4xODc1IDQ1IDQ1IDQ1IDQ1LTIw%0D%0ALjE4NzUgNDUtNDUtMjAuMTg3NS00NS00NS00NXptMCAwIi8+PHBhdGggZD0ibTI1NiAwYy02Ni4x%0D%0ANjc5NjkgMC0xMjAgNTMuODMyMDMxLTEyMCAxMjAgMCAyMi42OTE0MDYgNi4zNzEwOTQgNDQuNzk2%0D%0AODc1IDE4LjQyOTY4OCA2My45MjU3ODFsMTAxLjU3MDMxMiAxNjIuMDc0MjE5IDEwMS41NzAzMTIt%0D%0AMTYyLjA3NDIxOWMxMi4wNTg1OTQtMTkuMTI4OTA2IDE4LjQyOTY4OC00MS4yMzQzNzUgMTguNDI5%0D%0ANjg4LTYzLjkyNTc4MSAwLTY2LjE2Nzk2OS01My44MzIwMzEtMTIwLTEyMC0xMjB6bTAgMTk1Yy00%0D%0AMS4zNTE1NjIgMC03NS0zMy42NDg0MzgtNzUtNzVzMzMuNjQ4NDM4LTc1IDc1LTc1IDc1IDMzLjY0%0D%0AODQzOCA3NSA3NS0zMy42NDg0MzggNzUtNzUgNzV6bTAgMCIvPjxwYXRoIGQ9Im0xODIuOTk2MDk0%0D%0AIDUxMmgxNDUuOTU3MDMxbC0xMS41MzUxNTYtOTFoLTEyMy4xNzU3ODF6bTAgMCIvPjxwYXRoIGQ9%0D%0AIm0xOTcuOTkyMTg4IDM5MWg1MC45MTQwNjJsLTQyLjQ4ODI4MS02Ny4zODY3MTl6bTAgMCIvPjxw%0D%0AYXRoIGQ9Im0zNDMuODI4MTI1IDM5MWgxMTguMTc1NzgxbC0zNy41LTkwaC05Mi4yMTg3NXptMCAw%0D%0AIi8+PHBhdGggZD0ibTQ5Ljk5NjA5NCAzOTFoMTE3Ljc2NTYyNWwxMS4yNS05MGgtOTEuNTE1NjI1%0D%0Aem0wIDAiLz48cGF0aCBkPSJtMjYzLjA5Mzc1IDM5MWg1MC40NzY1NjJsLTguNTI3MzQzLTY2LjUy%0D%0AMzQzOHptMCAwIi8+PHBhdGggZD0ibTE2NC4wMTE3MTkgNDIxaC0xMjYuNTE1NjI1bC0zNy40OTYw%0D%0AOTQgOTFoMTUyLjc2NTYyNXptMCAwIi8+PHBhdGggZD0ibTQ3NC41MDM5MDYgNDIxaC0xMjYuODMy%0D%0AMDMxbDExLjUzOTA2MyA5MWgxNTIuNzg5MDYyem0wIDAiLz48L3N2Zz4="
            />
          </div>
        </div>  

        <div className="hexagonWrapper__p10">
          <div 
            className={menuVisible 
              ? "hexagon hexagon__show delay10" 
              : "hexagon hexagon__hide"
            }
            onMouseOver={() => changeMainMenuText(menu.gifts)}
            onMouseLeave={() => changeMainMenuText("")}
          >
            <img 
              className="hexagon__picture"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0%0D%0Ab3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZl%0D%0AcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEi%0D%0AIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93%0D%0Ad3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTk5%0D%0ALjU1NiAxOTkuNTU2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOTkuNTU2IDE5%0D%0AOS41NTY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRo%0D%0AIHN0eWxlPSJmaWxsOiNmZmZmZmY7IiBkPSJNNjkuMDEyLDE0Ni43NzdsMjcuMDczLTQ3Ljg5M3Yx%0D%0AMDAuNjcySDI0LjM2MlY5OC44ODRoNDIuMDdsLTIxLjU2MywzOC4yNmwxNi40MTQtMi45MDINCgkJ%0D%0ACQlMNjkuMDEyLDE0Ni43Nzd6IE05NC43OTUsOTAuODcySDEyLjQ5MWwtMC4xMTctNDAuMDA5aDQz%0D%0ALjg0OGMtNi40NDgtMy4zMjItMTEuMTE4LTcuNDA2LTE0LjA2OS0xMi4wNDcNCgkJCQljLTIuMzc0%0D%0ALTMuNzAzLTMuNDU5LTcuODA2LTMuNDU5LTExLjY3NWMwLTYuNzAyLDMuMTA3LTE2LjA2Miw3LjUz%0D%0AMy0yMC4yMjRDNTAuNjczLDIuNzQ1LDU2LjYyMywwLDYzLjA5MSwwDQoJCQkJYzYuNTI2LDAsMTIu%0D%0ANTk0LDIuMjM3LDE3Ljc3Miw1Ljc0NWM1LjIwNywzLjQxLDkuNjMzLDguMTA5LDEzLjMxNywxMy4z%0D%0AODVjMi4xNCwzLjAyOSw0LjAwNiw5LjcwMiw1LjU4OSwxMy4wMzNsMC42NTUtMS4zMDkNCgkJCQlj%0D%0ANC4zNjctOC42MTcsMTAuNDU0LTE5Ljk0MSwxOC4yOC0yNS4xMDlDMTIzLjg3MSwyLjIzNywxMjku%0D%0AOTE5LDAsMTM2LjQ0NSwwYzYuMTQ1LDAsMTEuODUxLDIuMjM3LDE2LjE2LDUuOTc5DQoJCQkJYzQu%0D%0AMjg5LDMuNzUyLDcuMjMsMTIuNjgyLDcuMjMsMTguOTc0YzAuMDM5LDcuNjMtNC40NjUsMTUuMzEt%0D%0AMTIuOTM2LDIxLjM2N2MtMi4xOTgsMS41ODMtNC42OSwzLjEwNy03LjQ2NCw0LjU0M2g0Ny42Mw0K%0D%0ACQkJCWwwLjExNyw0MC4wMDlIMTA0LjhWNTAuODYzSDk0Ljc4NXY0MC4wMDlIOTQuNzk1eiBNMTA2%0D%0ALjkzLDQ4LjQ0YzE2LjE4OS0zLjE1NiwyNi43MDItNy43MDksMzIuNzY5LTEyLjA4Ng0KCQkJCWM2%0D%0ALjM5OS00LjY0MSw3LjgwNi0xMC45ODIsNy44NDUtMTMuNzM3YzAtMi4yODYtMS4wMzYtNS41Nzkt%0D%0AMy4wNzgtNy4zNzZjLTIuMDAzLTEuNzY4LTQuOTA1LTIuOTYtNy45NzItMi45NmgtMC4wMzkNCgkJ%0D%0ACQljLTMuNjI1LDAuMDItNy4zMDgsMS4yOC0xMC45MzMsMy42NzRjLTMuNjA1LDIuNDMzLTcuMTIy%0D%0ALDkuNDA5LTEwLjA5MywxMy42NDlDMTExLjQ3MywzNS4yNDEsMTA4LjUxMiw0Mi4wNjEsMTA2Ljkz%0D%0ALDQ4LjQ0eg0KCQkJCSBNOTIuNDExLDQ3LjU2MWMtMC45NzctMy43MDMtMi4zNzQtNy41MjMtNC4y%0D%0ANC0xMS4xMThjLTMuNTQ3LTcuMTYyLTguNjg2LTE2LjkwMi0xNC4xNDctMjAuNDg4DQoJCQkJYy0z%0D%0ALjY0NC0yLjM5NC03LjI0OS0zLjY1NC0xMC45MzMtMy42NzRoLTAuMDU5Yy0yLjg2MywwLTUuOTg5%0D%0ALDEuMzY4LTguMzUzLDMuNTg2Yy0yLjM2NCwyLjIyOC0zLjc0Miw2Ljk2Ni0zLjcwMyw5LjYzMw0K%0D%0ACQkJCWMwLDEuNjQxLDAuNDIsNC45MDUsMS41ODMsNi44MWMxLjIwMiwxLjgxNywzLjIyNCwzLjkz%0D%0ANyw2LjQ4Nyw2LjAzOEM2NS4yMzEsNDIuMjQ2LDc1LjkzOSw0NS44NzEsOTIuNDExLDQ3LjU2MXoN%0D%0ACgkJCQkgTTE1NC44MDMsMTM3LjAwN2wtMTYuMzk0LTIuNzY1bC03Ljc0OCwxMi43NmwtMjYuNjky%0D%0ALTQ3LjQ2M3YxMDAuMDE3aDcxLjMzMlY5OC44ODRIMTMzLjI2TDE1NC44MDMsMTM3LjAwN3oiLz4N%0D%0ACgkJPC9nPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxn%0D%0APg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4N%0D%0ACjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8%0D%0AL2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
            />
          </div>
        </div>  
      
        <p 
          className={mainMenuText 
            ? "mainMenu__text mainMenu__text--visible" 
            : "mainMenu__text mainMenu__text--invisible"
          }
        >
          {mainMenuText ? mainMenuText : null}
        </p>
      </div>
      
    </div>
  )
}

export default Header;


