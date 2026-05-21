import type { ProjectCard } from '../types';

export const PROJECTS: ProjectCard[] = [
  {
    id: 'john-stockbot',
    title: 'Basketball Rebounding Robot',
    description:
      'Wheeled robot that catches missed shots mid-air, and fires it back to the user.',
    image: '/images/bot_image_1.png',
    date: 'Sep 2025 → present',
    inProgress: true,
    tags: ['Teensy 4.1', 'BLDC + CAN', 'Fusion 360', 'ROS2'],
  },
];

export const MINI_PROJECTS: ProjectCard[] = [
  {
    id: 'printer-upgrades',
    title: '3D printer upgrades',
    description: 'Upgrades for my Ender 3.',
    image: 'short_printer_upgrades_ldeimh.png',
    date: 'Dec 2024',
    tags: ['Ender 3', 'SKR Mini', 'CR-Touch'],
  },
  {
    id: 'bedframe-holder',
    title: 'Bedframe phone holder',
    description: 'A bedframe-clamp holder for my AirPods and iPhone.',
    image: 'short_iphone_bedframe_holder_wgnm1a.png',
    date: 'Sep 2024',
    tags: ['Fusion 360', '3D print'],
  },
  {
    id: 'stair-bot',
    title: 'Stair Climbing Robot',
    description: 'A robot that climbs stairs.',
    image: 'completed_chassis_uti0xi.png',
    date: 'Jul 2024',
    tags: ['Scissor lift', 'NEMA17'],
  },
  {
    id: 'vex-gui',
    title: 'Telemetry GUI',
    description: 'GUI displaying VEX motor and sensor telemetry.',
    image: 'short_vex_gui_zwkf1p.png',
    date: 'Jan 2023',
    tags: ['VEX V5', 'C++'],
  },
];

export const ALL_PROJECTS: ProjectCard[] = [...PROJECTS, ...MINI_PROJECTS];
