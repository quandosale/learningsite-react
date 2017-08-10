import React, { PropTypes } from 'react';
import { analytics } from '../config';

class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    styles: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      cssText: PropTypes.string.isRequired,
    }).isRequired),
    scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
    children: PropTypes.string.isRequired,
  };

  static defaultProps = {
    styles: [],
    scripts: [],
  };

  render() {
    const { title, description, styles, scripts, children } = this.props;
    return (
      <html className="no-js" lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          <link rel="stylesheet" type="text/css" href="css/reset.css"/>
          <link rel="stylesheet" type="text/css" href="fontawesome/css/font-awesome.min.css"/>
          <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"/>

          <link rel="stylesheet" type="text/css" href="highlight/styles/github.css"/>

          <link rel="stylesheet" type="text/css" href="css/style.css?ver54"/>

          <script type="text/javascript" src="js/jquery-2.2.4.min.js"></script>
          <script type="text/javascript" src="js/bootstrap.min.js"></script>
          <script type="text/javascript" src="highlight/highlight.pack.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.0/ace.js"></script>
          <script type="text/javascript" src="js/foldscroll.js"></script>
        </head>
        <body>
          <div
            id="app"
            dangerouslySetInnerHTML={{ __html: children }}
          />
      
          <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
          <script type="text/javascript" src="js/script.js?var=14"></script>
        </body>
      </html>
    );
  }
}
  
export default Html;
