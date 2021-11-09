import React, { memo } from "react"

const Description = ({
  title,
  description,
  src,
  alt,
  className,
  hideTitle,
}) => {
  return (
    <div className={className}>
      <div className="text-box">
        {!hideTitle && <h4>{title}</h4>}

        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className="description"
        ></div>
      </div>
      <img src={src} alt={alt} />
    </div>
  )
}

export default memo(Description)
