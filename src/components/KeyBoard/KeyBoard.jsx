
import { useState } from "react"
import { Delete, Space, CornerDownLeft } from "lucide-react"
import "./KeyBoard.css"
export default function VirtualKeyboard({
  isVisible,
  onKeyPress,
  onBackspace,
  onEnter,
  onClose,
  inputType = "text",
}) {
  const [isShiftActive, setIsShiftActive] = useState(false)
  const [capsLock, setCapsLock] = useState(false)

  const qwertyLayout = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
  ]

  const numberLayout = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["*", "0", "#"],
  ]

  const emailSymbols = ["@", ".", "-", "_"]
  const phoneSymbols = ["+", "-", "(", ")", " "]

  const getKeyboardLayout = () => {
    if (inputType === "number" || inputType === "tel") {
      return numberLayout
    }
    return qwertyLayout
  }

  const getSymbols = () => {
    if (inputType === "email") return emailSymbols
    if (inputType === "tel") return phoneSymbols
    return [".", ",", "?", "!", ";", ":"]
  }

  const handleKeyPress = (key) => {
    let finalKey = key
    if (inputType === "text" || inputType === "email") {
      if (isShiftActive || capsLock) {
        finalKey = key.toUpperCase()
      }
    }
    onKeyPress(finalKey)

    if (isShiftActive && !capsLock) {
      setIsShiftActive(false)
    }
  }

  const handleShift = () => {
    setIsShiftActive(!isShiftActive)
  }

  const handleCapsLock = () => {
    setCapsLock(!capsLock)
    setIsShiftActive(false)
  }

  if (!isVisible) return null

  return (
    <div className="virtual-keyboard-overlay">
      <div className="virtual-keyboard">
        <div className="keyboard-header">
          <div className="keyboard-title">Keyboard</div>
          <button className="keyboard-close" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="keyboard-body">
          {(inputType === "text" || inputType === "email") && (
            <>
              {getKeyboardLayout().map((row, rowIndex) => (
                <div key={rowIndex} className="keyboard-row">
                  {rowIndex === 2 && (
                    <button
                      className={`keyboard-key special-key ${capsLock ? "active" : ""}`}
                      onClick={handleCapsLock}
                    >
                      Caps
                    </button>
                  )}
                  {row.map((key) => (
                    <button key={key} className="keyboard-key" onClick={() => handleKeyPress(key)}>
                      {isShiftActive || capsLock ? key.toUpperCase() : key}
                    </button>
                  ))}
                  {rowIndex === 2 && (
                    <button className="keyboard-key special-key" onClick={onBackspace}>
                      <Delete size={18} />
                    </button>
                  )}
                </div>
              ))}

              <div className="keyboard-row">
                <button
                  className={`keyboard-key special-key ${isShiftActive ? "active" : ""}`}
                  onClick={handleShift}
                >
                  Shift
                </button>
                {getSymbols().map((symbol) => (
                  <button key={symbol} className="keyboard-key" onClick={() => onKeyPress(symbol)}>
                    {symbol}
                  </button>
                ))}
                <button className="keyboard-key special-key" onClick={onEnter}>
                  <CornerDownLeft size={18} />
                </button>
              </div>

              <div className="keyboard-row">
                <button className="keyboard-key space-key" onClick={() => onKeyPress(" ")}>
                  <Space size={18} />
                  Space
                </button>
              </div>
            </>
          )}

          {(inputType === "number" || inputType === "tel") && (
            <>
              {getKeyboardLayout().map((row, rowIndex) => (
                <div key={rowIndex} className="keyboard-row number-row">
                  {row.map((key) => (
                    <button key={key} className="keyboard-key number-key" onClick={() => handleKeyPress(key)}>
                      {key}
                    </button>
                  ))}
                </div>
              ))}

              {inputType === "tel" && (
                <div className="keyboard-row">
                  {getSymbols().map((symbol) => (
                    <button key={symbol} className="keyboard-key" onClick={() => onKeyPress(symbol)}>
                      {symbol}
                    </button>
                  ))}
                  <button className="keyboard-key special-key" onClick={onBackspace}>
                    <Delete size={18} />
                  </button>
                </div>
              )}

              {inputType === "number" && (
                <div className="keyboard-row">
                  <button className="keyboard-key special-key" onClick={onBackspace}>
                    <Delete size={18} />
                  </button>
                  <button className="keyboard-key special-key" onClick={onEnter}>
                    <CornerDownLeft size={18} />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
