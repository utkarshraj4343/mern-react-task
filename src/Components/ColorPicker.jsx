import React, { useState } from 'react'

const ColorPicker = ({colors}) => {
  const [showColorList, setShowColorList] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  return (
    <div className="color-picker">
        <button onClick={()=>setShowColorList(!showColorList)}>Pick a color</button>
        {showColorList && (
          <div className="color-list">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color"
                style={{ backgroundColor: color }}
                onClick={()=>setSelectedColor(color)}
              />
            ))}
          </div>
        )}
        {selectedColor && (
          <p>You selected: {selectedColor}</p>
        )}
      </div>
  )
}

export default ColorPicker
