import React from "react"
import MeuCoachHeaderStyle from "./meu-coach-header.module.css"


export default class MeuCoachHeader extends 
React.Component {


  render() {
      return (
        <header className={MeuCoachHeaderStyle.cabecalho}>
          <a href="#">
            <img src="menu.png" className={MeuCoachHeaderStyle.icon} />
            Meu Coach
          </a>
          <div>
            <form>
              <input type="search" />
              <button>Pesquisar</button>
            </form>
          </div>
        </header>
      );
  }
}