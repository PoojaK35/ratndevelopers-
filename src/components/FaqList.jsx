import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'

export default function FaqList({ items }) {
  return (
    <div className="faq">
      {items.map((item, index) => (
        <Reveal key={item.question} delay={index * 50}>
          <details className="faq__item">
            <summary>
              <span>{item.question}</span>
              <Icon name="chevronDown" size={20} className="faq__chevron" />
            </summary>
            <p>{item.answer}</p>
          </details>
        </Reveal>
      ))}
    </div>
  )
}
