import React from 'react'
import tags from "../data/tags.json"
import technology from "../data/technology.json"

interface ITagProp{
    name: string
}

export const Tag = ({name}: ITagProp) => {
    const defaultStyles = "text-xs pt-0.5 px-1 pb-1 mr-1 rounded"
    const allTags = [...tags, ...technology]
    const selectedTag = allTags.find(t => t.name === name)
    if(!selectedTag){
        return(
            <span>{capitalizeFirstLetter(name)}</span>
        )
    }
    return (
        <span className={`${defaultStyles} ${pickTextColorBasedOnBgColorSimple(selectedTag.color, 'text-white', 'text-black')}`}
        style={{backgroundColor:selectedTag.color}}>{capitalizeFirstLetter(name)}
            
        </span>
    )
}

function pickTextColorBasedOnBgColorSimple(bgColor, lightColor, darkColor) {
    const color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
    const r = parseInt(color.substring(0, 2), 16); // hexToR
    const g = parseInt(color.substring(2, 4), 16); // hexToG
    const b = parseInt(color.substring(4, 6), 16); // hexToB
    return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186)
      ? darkColor : lightColor;
  }
  
  function isLowerCase(str)
  {
    return str === str.toLowerCase() && str !== str.toUpperCase();
  }
  
  function capitalizeFirstLetter(string){
    const split = string.split('');
    if(!isLowerCase(split[0])){
      return string
    }
    split[0] = split[0].toUpperCase();
    return split.join('')
  }
