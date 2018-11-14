import React from 'react';

class Portfolio extends React.Component {

  render() {
      return (

        <div className="container">

            {this.props.work.map( (example, idx) => {
              return <ExampleWork example={example} key={idx} />
              })
            }

        <div className="side__nav">
          <ul className="icon_control">
            <li>
              <a className="linkedin"
                 title="LinkedIn Profile"
                 target="_blank"
                 href="https://linkedin.com/in/jerolgraves">
                <i className="ico fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a className="github"
                 title="GitHub Profile"
                 target="_blank"
                 href="https://github.com/grosspath">
                <i className="ico fab fa-github"></i>
              </a>
            </li>
            <li>
              <a className="resume"
                 title="Resume"
                 target="_blank"
                 href="AnalystResume.pdf">
                <i className="ico far fa-file-pdf"></i>
              </a>
            </li>
          </ul>
        </div>
        </div>

      )
  }
}

class ExampleWork extends React.Component {
  render() {
    let example = this.props.example;
    return (
      <a href={example.href} className={example.comment}>
        <div className="name-space flex-container">
          <h6 className="name">{example.title}</h6>
          <p className="description">{example.desc}</p>
        </div>
      </a>
      )
  }
}

export default Portfolio;
export {ExampleWork};
