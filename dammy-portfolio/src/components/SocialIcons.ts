import type { ComponentType } from 'react'
import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import type { SocialKey } from '../data/portfolio'

type IconProps = { size?: number | string; className?: string }

export const socialIconMap: Record<SocialKey, ComponentType<IconProps>> = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  twitter: FaXTwitter,
  mail: Mail,
}