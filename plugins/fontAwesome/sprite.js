import fs from 'fs'
import icons from './icons'

const fontAwesomeSpriteGenerator = require('fontawesome-svg-sprite-generator')

const sprite = fontAwesomeSpriteGenerator.generate(icons)

const dir = 'public'
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir)
}

fs.writeFileSync(`${dir}/icons.svg`, sprite.svg)
