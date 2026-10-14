import { useEffect, useRef, useState } from 'react'
import { mailtoLink, site } from '../data/site'
import Icon from './Icon.jsx'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const EMPTY = { name: '', email: '', subject: '', message: '' }

const fields = [
  { name: 'name', label: 'Name', type: 'text', autoComplete: 'name', placeholder: 'Your name' },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    autoComplete: 'email',
    placeholder: 'you@example.com',
  },
  { name: 'subject', label: 'Subject', type: 'text', placeholder: 'How can we help?' },
]

function validate(values) {
  const errors = {}
  if (values.name.trim().length < 2) errors.name = 'Please enter your name.'
  if (!values.email.trim()) errors.email = 'Please enter your email address.'
  else if (!EMAIL_PATTERN.test(values.email.trim()))
    errors.email = 'Please enter a valid email address.'
  if (values.subject.trim().length < 3) errors.subject = 'Please enter a subject.'
  if (values.message.trim().length < 10)
    errors.message = 'Please enter a message of at least 10 characters.'
  return errors
}

function buildMailto(values) {
  const body = `${values.message.trim()}\n\n---\nName: ${values.name.trim()}\nEmail: ${values.email.trim()}`
  return mailtoLink({ subject: values.subject.trim(), body })
}

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [mailto, setMailto] = useState('')
  const formRef = useRef(null)
  const statusRef = useRef(null)

  useEffect(() => {
    if (!mailto) return undefined
    statusRef.current?.focus()
    const timer = window.setTimeout(() => {
      window.location.href = mailto
    }, 1200)
    return () => window.clearTimeout(timer)
  }, [mailto])

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    const firstInvalid = Object.keys(nextErrors)[0]
    if (firstInvalid) {
      formRef.current?.elements.namedItem(firstInvalid)?.focus()
      return
    }
    setMailto(buildMailto(values))
  }

  const reset = () => {
    setValues(EMPTY)
    setErrors({})
    setMailto('')
  }

  if (mailto) {
    return (
      <div className="form-success" role="status" tabIndex={-1} ref={statusRef}>
        <span className="form-success__icon">
          <Icon name="checkCircle" size={32} />
        </span>
        <h3>Thanks, {values.name.trim().split(' ')[0]}! Your message is ready.</h3>
        <p>
          We&apos;re opening your email app with your message filled in. Please review it and press{' '}
          <strong>Send</strong> to deliver it to us.
        </p>
        <p className="form-success__hint">
          Email app didn&apos;t open? <a href={mailto}>Click here to try again</a> or email us
          directly at{' '}
          <a className="break-anywhere" href={mailtoLink()}>
            {site.email}
          </a>
          .
        </p>
        <button type="button" className="btn btn--ghost" onClick={reset}>
          Write another message
        </button>
      </div>
    )
  }

  return (
    <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__row">
        {fields.slice(0, 2).map((field) => (
          <Field key={field.name} field={field} value={values[field.name]} error={errors[field.name]} onChange={handleChange} />
        ))}
      </div>
      <Field field={fields[2]} value={values.subject} error={errors.subject} onChange={handleChange} />
      <Field
        field={{ name: 'message', label: 'Message', placeholder: 'Write your message…' }}
        value={values.message}
        error={errors.message}
        onChange={handleChange}
        multiline
      />

      <p className="contact-form__note">
        <Icon name="alertCircle" size={16} />
        <span>
          This form doesn&apos;t send messages from the website. When you submit, it opens your
          email app with your message filled in, ready for you to send.
        </span>
      </p>

      <button type="submit" className="btn btn--primary btn--lg btn--block">
        Send Message
        <Icon name="send" size={18} />
      </button>
    </form>
  )
}

function Field({ field, value, error, onChange, multiline = false }) {
  const id = `contact-${field.name}`
  const errorId = `${id}-error`
  const shared = {
    id,
    name: field.name,
    value,
    onChange,
    placeholder: field.placeholder,
    required: true,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? errorId : undefined,
    className: `form-control${error ? ' has-error' : ''}`,
  }
  return (
    <div className="form-field">
      <label htmlFor={id}>{field.label}</label>
      {multiline ? (
        <textarea {...shared} rows={5} />
      ) : (
        <input {...shared} type={field.type} autoComplete={field.autoComplete} />
      )}
      {error && (
        <p id={errorId} className="form-error">
          {error}
        </p>
      )}
    </div>
  )
}
