import sprite from '../assets/partners/logo-sprite.webp'
import bodyarmor from '../assets/partners/logo-bodyarmor.webp'
import newbalance from '../assets/partners/logo-newbalance.webp'
import playmaker from '../assets/partners/logo-playmaker.webp'
import tommyjohn from '../assets/partners/logo-tommyjohn.webp'
import hellmans from '../assets/partners/logo-hellmans.webp'
import bettercollective from '../assets/partners/logo-bettercollective.webp'
import carnival from '../assets/partners/logo-carnival.webp'
import bmw from '../assets/partners/logo-bmw.webp'
import gatorade from '../assets/partners/logo-gatorade.webp'
import action from '../assets/partners/logo-action.webp'

export type Partner = { name: string; src: string }

export const partners: Partner[] = [
  { name: 'Sprite', src: sprite },
  { name: 'Gatorade', src: gatorade },
  { name: 'BMW', src: bmw },
  { name: 'New Balance', src: newbalance },
  { name: 'BODYARMOR', src: bodyarmor },
  { name: 'Tommy John', src: tommyjohn },
  { name: "Hellmann's", src: hellmans },
  { name: 'Carnival', src: carnival },
  { name: 'Playmaker', src: playmaker },
  { name: 'Better Collective', src: bettercollective },
  { name: 'Action', src: action },
]
