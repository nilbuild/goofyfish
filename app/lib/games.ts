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
    name: 'Goon Rush',
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
    name: 'Timber',
    tagline: 'Duck the branches, keep your axe sharp',
    description:
      'A little chopping game. Tap left or right to chop and duck the branches before the clock runs out. Your axe dulls as you go, and sharpening is quick but the clock keeps ticking.',
    addedAt: '2026-11-11',
    controls: 'tap',
  },
  {
    slug: 'stacks',
    name: 'Crane Drop',
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
    slug: 'seat',
    name: 'Last Seat',
    tagline: 'Rush hour train. Grab the empty seat, mind the brakes',
    description: 'Hold to walk to the empty seat on a packed Jakarta commuter train, and let go when the brake light blinks or you go flying. More people board at every stop, and priority seats belong to someone else. Ride from Rangkasbitung to Tanah Abang without losing the race for a seat.',
    addedAt: '2026-11-23',
    controls: 'hold',
  },
  {
    slug: 'skirmish',
    name: 'Skirmish',
    tagline: 'Drop an army, build fences, watch the brawl',
    description:
      'Drop swordsmen, archers, shieldbearers, frost mages, catapults, spiders and more on your side, drag fences to funnel the goons, then hit Fight and watch it play out. Pick an upgrade after every win, survivors earn veteran stars, and twists like bug swarms, the Goon King and the Ant Queen keep coming. Lose your whole army and retry from that round, or take on the daily battle.',
    addedAt: '2026-11-22',
    controls: 'tap',
  },
  {
    slug: 'gaps',
    name: 'Mind the Gap',
    tagline: 'He never stops running, draw the bridges',
    description:
      'A stick figure runs nonstop and you drag to draw the floor in front of him: bridges over gaps, ramps to jump, humps over goons and roofs against falling rocks. Ink is short, so neat lines build a combo. One wrong line and he goes over the edge.',
    addedAt: '2026-11-21',
    controls: 'draw',
  },
  {
    slug: 'slowmo',
    name: 'Slow Mo Hop',
    tagline: 'Spin in slow motion, drop feet first',
    description:
      'Tap to jump and time slows right down while you spin over a messy room. Tap again to drop onto laptops, lamps, books and ice creams, feet first. Landing on your head costs a life, and the floor ends the run.',
    addedAt: '2026-11-21',
    controls: 'tap',
  },
  {
    slug: 'planks',
    name: 'Chop Stack',
    tagline: 'Drop the plank, whatever hangs over gets chopped',
    description:
      'Planks slide back and forth over your tower. Tap to drop one, and whatever hangs over gets chopped off. Land it dead on and the tower grows back a little. Miss completely and the run is over.',
    addedAt: '2026-11-20',
    controls: 'tap',
  },
  {
    slug: 'crossing',
    name: 'Hop Across',
    tagline: 'Hop across, every zone is stranger than the last',
    description:
      'Hop a stick figure across roads, rivers, rail tracks and frozen lakes while a giant eraser rubs out the page behind you. Every 24 rows you reach a new zone, from a duck pond to a night market to the moon, with mystery boxes, parades and UFOs along the way. One bonk and the run is over.',
    addedAt: '2026-11-20',
    controls: 'swipe',
  },
  {
    slug: 'typing',
    name: 'Type Fight',
    tagline: "Type the word on a goon's sign to knock it out",
    description:
      "A typing game. Goons march in holding signs, and every letter you type knocks a letter off with a spring-loaded boxing glove. Finish the word to launch them, but a typo lets them lunge. Eleven levels from f and j to numbers and punctuation, each with a boss carrying a whole sentence, plus an endless mode.",
    addedAt: '2026-11-19',
    controls: 'type',
    needs: 'keyboard',
  },
  {
    slug: 'bopping',
    name: 'Keep It Up',
    tagline: "Bop the balloon, don't let it touch the floor",
    description:
      "Tap where to hop and bop the balloon back up before it touches the floor. More balloons join in and every bop counts for each one in the air. Gusts blow through the window, and a goon throws darts that you can block by jumping in the way.",
    addedAt: '2026-11-15',
    controls: 'tap',
  },
  {
    slug: 'stomping',
    name: 'Floor Is Spikes',
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
    name: 'Picnic Panic',
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
    hidden: true,
  },
];

export const games = allGames.filter((g) => !g.hidden);
