var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Grindavík'>Grindavík, Iceland</Link>
        </li>
        <li>
          <Link to='/?location=Þingeyri'>Þingeyri, Iceland</Link>
        </li>
        <li>
          <Link to='/?location=Berlin'>Berlin, Germany</Link>
        </li>
        <li>
          <Link to='/?location=London'>London, UK</Link>
        </li>
        <li>
          <Link to='/?location=Glasgow'>Glasgow, Scotland</Link>
        </li>
        <li>
          <Link to='/?location=New York'>New York, USA</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
