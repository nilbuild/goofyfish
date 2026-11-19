export type Game = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  addedAt: string;
  controls: 'tap' | 'hold' | 'swipe' | 'aim' | 'steer' | 'arrows' | 'draw' | 'body' | 'type';
  needs?: 'webcam' | 'keyboard';
  hidden?: boolean;
};

const allGames: Game[] = [
  {
    slug: 'punching',
    name: 'Keep Punching',
    tagline: 'Goons from both sides, tap a side to strike',
    description:
      'Goons come from both sides. Tap a side to strike, jump the sweeps and barrels, punch bottles back, and slam the floor when the crowd piles up. Flying kicks, clones, counters and banana peels.',
    addedAt: '2026-11-14',
    controls: 'tap',
  },
  {
    slug: 'rolling',
    name: 'Keep Rolling',
    tagline: 'Roll up the universe, outrun the avalanche',
    description:
      'Start in the garden and roll up daisies, chickens, people, buses, whole towns and the wonders of the world. Jump whatever is bigger than you and stay ahead of the avalanche. 15 worlds, 32 real landmarks, power-ups, then the Big Bang starts a harder lap.',
    addedAt: '2026-11-14',
    controls: 'tap',
  },
  {
    slug: 'chopping',
    name: 'Keep Chopping',
    tagline: 'Duck the branches, keep your axe sharp',
    description:
      'A little chopping game. Tap left or right to chop and duck the branches before the clock runs out. Your axe dulls as you go, and sharpening is quick but the clock keeps ticking.',
    addedAt: '2026-11-11',
    controls: 'tap',
  },
  {
    slug: 'stacks',
    name: 'Keep Stacking',
    tagline: 'Stack as high as you can, one drop and it is over',
    description:
      'A little stacking game. A crane swings each box over your tower: tap to drop it. Stack as high as you can; the first box that falls ends the run.',
    addedAt: '2026-11-11',
    controls: 'tap',
  },
  {
    slug: 'hoops',
    name: 'Ten Balls',
    tagline: 'Ten shots, a swish is worth three',
    description:
      'A little basketball game. Ten balls, one round: hold to power up, release to shoot. A swish is worth three, and three in a row doubles it.',
    addedAt: '2026-11-10',
    controls: 'hold',
  },
  {
    slug: 'bridging',
    name: 'Keep Bridging',
    tagline: 'Every word you type is a plank, keep it ahead of their feet',
    description:
      'A typing game. Every word you type lays a board under a stick figure who never stops walking. They keep pace with you, typos make them stumble, and if they reach the edge it is a splash. 25 lessons from f and j to full sentences, with a ghost of your best run to race, a hat to win in each lesson and an endless goose chase.',
    addedAt: '2026-11-18',
    controls: 'type',
    needs: 'keyboard',
  },
  {
    slug: 'bopping',
    name: 'Keep Bopping',
    tagline: "Bop the balloon, don't let it touch the floor",
    description:
      "Tap where to hop and bop the balloon back up before it touches the floor. More balloons join in and every bop counts for each one in the air. Gusts blow through the window, and a goon throws darts that you can block by jumping in the way.",
    addedAt: '2026-11-15',
    controls: 'tap',
  },
  {
    slug: 'stomping',
    name: 'Keep Stomping',
    tagline: 'The floor is spikes, stay up on their heads',
    description:
      'The floor is spikes. Bounce from head to head to stay in the air, chain stomps for a multiplier, and outrun the bramble wall. Springboards, bird flocks, balloons and a Big Goon boss along the way.',
    addedAt: '2026-11-14',
    controls: 'steer',
  },
  {
    slug: 'knockdown',
    name: 'Knockdown',
    tagline: 'Point, fire, knock it all down',
    description:
      'A little cannon game. Point at a stack of boxes, let go to fire, and knock every block off its shelf. TNT, glass, jelly, balloons, rubber ducks, wrecking balls and warp rings across 32 levels, then an endless mode.',
    addedAt: '2026-11-13',
    controls: 'aim',
  },
  {
    slug: 'slicing',
    name: 'Keep Slicing',
    tagline: 'Slice the picnic before it spoils',
    description:
      'A little slicing game. Swipe to slice picnic food tossed into the air before it spoils, let spoiled food fall, and keep clear of wasps and cutlery. Drop fresh food or cut a spoiled one and you lose a plate.',
    addedAt: '2026-11-11',
    controls: 'swipe',
  },
  {
    slug: 'selves',
    name: 'Past Selves',
    tagline: 'Every attempt replays, work with your past selves',
    description:
      "A puzzle platformer where you can't win alone. Every attempt is recorded and replays beside you on the next loop. Stand on your past selves, let them hold doors and weigh down switches. 24 levels with hints and solutions.",
    addedAt: '2026-11-12',
    controls: 'arrows',
  },
  {
    slug: 'glider',
    name: 'Paper Glider',
    tagline: 'Glide room to room, climb too long and you stall',
    description:
      'A little paper glider game. Hold to climb, let go to dive, and weave through gates, fans and swinging lamps from the hallway up to the attic. Climb too long and you stall.',
    addedAt: '2026-11-11',
    controls: 'hold',
  },
  {
    slug: 'stones',
    name: 'Stepping Stones',
    tagline: 'Cross the river, land dead centre for a combo',
    description:
      'A little river crossing game. Hold to wind up, release to jump from stone to stone. Land dead centre to build a combo, and watch out for sinking lilies and diving turtles.',
    addedAt: '2026-11-11',
    controls: 'hold',
  },
  {
    slug: 'mirror',
    name: 'Mirror',
    tagline: 'Copy the cut-out with your body',
    description:
      'A webcam game. Walls with cut-out poses roll towards you and a stick figure copies your body in real time. Match the shape before the wall arrives. Pose tracking runs locally in your browser, nothing is uploaded. Also playable with a mouse.',
    addedAt: '2026-11-12',
    controls: 'body',
    needs: 'webcam',
  },
  {
    slug: 'boxline',
    name: 'Boxline',
    tagline: 'A 20-level line-drawing puzzle',
    description:
      'Draw a line, dodge the red boxes one beat at a time, and slide into the slot. A 20-level puzzle.',
    addedAt: '2026-09-27',
    controls: 'draw',
  },
];

export const games = allGames.filter((g) => !g.hidden);
