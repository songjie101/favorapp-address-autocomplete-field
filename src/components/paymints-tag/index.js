import React, { useState } from 'react'
import { Tag } from 'antd'
import FavorAppsButton, { BUTTON_TYPE } from '../favorapp-button'
import FavorAppsInput from '../favorapp-input'
import FavorAppsIconButton, { ICON_BUTTON_TYPE } from '../favorapp-icon-button'

export default function FavorAppsTag({ value, onChange }) {
  const valueAsArray = value && value.map ? value : []
  const [addingTag, setAddingTag] = useState(false)
  const [newTag, setNewTag] = useState('')
  const onCloseTag = closedTag => {
    const newTags = valueAsArray.filter(tag => tag !== closedTag)
    onChange(newTags)
  }
  const onAddTag = whichTag => {
    onChange([...valueAsArray, whichTag])
    setAddingTag(false)
    setNewTag('')
  }
  const tags = valueAsArray.map(tag => (
    <Tag key={tag} onClose={() => onCloseTag(tag)} closable>
      {tag}
    </Tag>
  ))
  const addPersonButton = (
    <FavorAppsButton
      className="ml-2"
      type={BUTTON_TYPE.PRIMARY}
      noShadow
      onClick={() => setAddingTag(true)}
    >
      Add person
    </FavorAppsButton>
  )
  const addPersonInput = (
    <div className="d-flex">
      <FavorAppsInput
        type="text"
        value={newTag}
        onChange={e => setNewTag(e.target.value)}
        onPressEnter={() => onAddTag(newTag)}
      />
      <FavorAppsIconButton
        className="ml-2"
        type={ICON_BUTTON_TYPE.PRIMARY}
        onClick={() => setAddingTag(false)}
      >
        <i className="fa fa-close" />
      </FavorAppsIconButton>
    </div>
  )
  return (
    <>
      <div>{tags}</div>
      <div>
        {!addingTag && addPersonButton}
        {addingTag && addPersonInput}
      </div>
    </>
  )
}
