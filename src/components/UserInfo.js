import React, { Component } from 'react'
import tania from '../../content/images/fattul.webp'
import patreon from '../../content/thumbnails/patreon.png'
import kofi from '../../content/thumbnails/kofi.png'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div className="flex-avatar">
              <img className="avatar" src={tania} alt="Fatul Mundzir" />
            </div>
            <div>
              <p>
                {`I'm Tania, a web developer specializing in modern JavaScript. I make
              open source coding projects and write free, quality articles and tutorials that help
              thousands of people daily. No ads, no sponsored posts, no bullshit.`}
              </p>

              <div className="flex">
                <a
                  href="https://ko-fi.com/fattul"
                  className="donate-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={kofi} className="coffee-icon" alt="Coffee icon" />
                  Buy me a coffee!
                </a>
                <a
                  className="patreon-button"
                  href="https://www.patreon.com/fattul"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={patreon} height="50" width="50" /> Patreon
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
