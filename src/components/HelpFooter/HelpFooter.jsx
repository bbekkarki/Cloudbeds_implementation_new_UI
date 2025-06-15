// HelpFooter.jsx
import { HelpingHand, ChevronRight } from "lucide-react"
import "./HelpFooter.css"

export default function HelpFooter() {
  return (
    <div className="help-footer">
      <div className="help-footer-content">
        <HelpingHand size={24} className="help-footer-icon" />
        <div className="help-footer-text">
          <h3 className="help-footer-title">Need some help?</h3>
          <p className="help-footer-description">
            Contact our front desk at extension 0 or visit the concierge desk in the lobby.
          </p>
        </div>
        <ChevronRight size={40} className="help-footer-arrow" />
      </div>
    </div>
  )
}
