import { Link } from 'react-router'

export function LogoMark({ size = 36 }) {
  return (
    <svg
      className="logo__mark"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="64" height="64" rx="16" fill="#1B1D4D" />
      <path
        d="M20 16h24l10 12-22 22-22-22z"
        fill="#3EB290"
        stroke="#fff"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M10 28h44M26 16l-4 12 10 22 10-22-4-12"
        fill="none"
        stroke="#fff"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Logo({ light = false, onClick }) {
  return (
    <Link
      to="/"
      className={`logo${light ? ' logo--light' : ''}`}
      aria-label="RatnDevelopers home"
      onClick={onClick}
    >
      <LogoMark />
      <span className="logo__text">
        Ratn<span className="logo__accent">Developers</span>
      </span>
    </Link>
  )
}
