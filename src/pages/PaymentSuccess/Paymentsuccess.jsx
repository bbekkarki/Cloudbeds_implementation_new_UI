import { Home, HelpCircle, Check, Printer, ChevronRight, HelpingHand } from "lucide-react"
import "./Paymentsuccess.css"
import Header from "../../components/Header/header";
import HelpFooter from "../../components/HelpFooter/HelpFooter";
export default function Paymentsuccess() {
  return (
    <div className="transaction-page">
      <div className="transaction-container">
        {/* <header className="transaction-header">
          <div className="logo-section">
            <div className="home-icon">
              <Home color="white" size={32} />
            </div>
            <h1 className="transaction-title">Transaction Details</h1>
          </div>
          <button className="help-button">
            Help? <HelpCircle color="white" size={24} />
          </button>
        </header> */}
<Header />
        <div className="transaction-card">
          <div className="payment-success-icon-container">
            <div className="payment-success-icon">
              <Check color="white" size={52} />
            </div>
          </div>

          <h2 className="success-message">Payment Success!</h2>

          <div className="payment-amount">$429.9</div>

          <div className="divider"></div>

          <div className="payment-details-container">
            <div className="payment-detail-row">
              <div className="payment-detail-label">Ref. Number</div>
              <div className="payment-detail-value">0004565643K</div>
            </div>
            <div className="payment-detail-row">
              <div className="payment-detail-label">Payment time</div>
              <div className="payment-detail-value">28-03-2025, 05:33:19</div>
            </div>
            <div className="payment-detail-row">
              <div className="payment-detail-label">Payment method</div>
              <div className="payment-detail-value">Insert Cash</div>
            </div>
            <div className="payment-detail-row">
              <div className="payment-detail-label">Guest name</div>
              <div className="payment-detail-value">Siemantel Donovan</div>
            </div>
          </div>

          <div className="payment-action-buttons">
            <button className="receipt-print-button">
              <Printer size={30} />
              <span>Print Receipt</span>
            </button>
            <button className="checkin-button">
              <span>Check-In</span>
              <ChevronRight size={30} />
            </button>
          </div>
        </div>

        {/* <div className="help-section">
          <div className="help-content">
            <HelpingHand size={24} className="help-icon" />
            <div className="help-text">
              <h3 className="help-title">Need some help?</h3>
              <p className="help-description">
                Contact our front desk at extension 0 or visit the concierge desk in the lobby.
              </p>
            </div>
            <ChevronRight size={20} className="help-arrow" />
          </div>
        </div> */}
 <HelpFooter />

      </div>
    </div>
  )
}
