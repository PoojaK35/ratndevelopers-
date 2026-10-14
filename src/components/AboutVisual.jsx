import Icon from './Icon.jsx'

export default function AboutVisual() {
  return (
    <div
      className="about-visual"
      role="img"
      aria-label="Illustration of React Native code in an editor next to the app running on a phone"
    >
      <div className="code-window">
        <div className="code-window__bar">
          <span />
          <span />
          <span />
          <em>App.jsx</em>
        </div>
        <pre className="code-window__body">
          <code>
            <span className="tok-k">import</span> {'{ View, Text }'}{' '}
            <span className="tok-k">from</span> <span className="tok-s">'react-native'</span>
            {'\n\n'}
            <span className="tok-k">export default function</span>{' '}
            <span className="tok-f">App</span>() {'{'}
            {'\n  '}
            <span className="tok-k">return</span> (
            {'\n    '}
            <span className="tok-t">{'<View>'}</span>
            {'\n      '}
            <span className="tok-t">{'<Text>'}</span>Simple. Useful.
            <span className="tok-t">{'</Text>'}</span>
            {'\n    '}
            <span className="tok-t">{'</View>'}</span>
            {'\n  '}){'\n'}
            {'}'}
          </code>
        </pre>
      </div>

      <div className="mini-phone">
        <div className="mini-phone__screen">
          <span className="mini-phone__badge">
            <Icon name="check" size={14} strokeWidth={3} />
          </span>
          <strong>Simple. Useful.</strong>
          <span className="mini-phone__line" />
          <span className="mini-phone__line mini-phone__line--short" />
          <span className="mini-phone__btn" />
        </div>
      </div>

      <div className="about-visual__chip">
        <Icon name="smartphone" size={16} />
        Android · React Native
      </div>
    </div>
  )
}
