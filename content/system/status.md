---
title: "Status"
metaTitle: "Status Conditions - PMD1 DX Wiki"
metaDescription: "Status Condition details for Pokemon Mystery Dungeon: Rescue Team DX."
---

# Overview



# Status List

Status Colors = <span class="good">Good</span>, <span class="highlightGray">Neutral</span>, <span class="bad">Bad</span><br/>Cause / Counter Colors = <span class="item">Item</span>, <span class="redText">Trap</span>, <span class="boost">Move</span>, <span class="boss">Ability</span>

<table class="statusTable">
  <thead>
    <tr>
      <th>Status</th>
      <th>Category</th>
      <th>Effect</th>
      <th>Causes</th>
      <th>Cures / Counters</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td id="quick" class="good">Quick</td>
      <td>Speed</td>
      <td>Move 2 times per turn.<br/>This effect can stack up to x4 speed.<br/>Non-movement action ends turn immediately.<br/>(Each speed boost is tracked individually)</td>
      <td><span class="item">Quick Seed</span>, <span class="item">Quick Orb</span>,<br/><span class="boss">Speed Boost</span>, <span class="boss">Quick Feet</span>,<br/><span class="boost">Agility</span>, <span class="boost">Tailwind</span>, etc.</td>
      <td>6 turns elapsing from<br/>the perspective of regular<br/>speed pokemon.<br/><br/>In terms of steps:<br/>x2 = 12 steps<br/>x3 = 18 steps<br/>x4 = 24 steps</td>
    </tr>
    <tr>
      <td id="slow" class="bad">Slow</td>
      <td>Speed</td>
      <td>1 action every 2 turns.</td>
      <td><span class="item">Slow Wand</span>, <span class="item">Slow Orb</span>,<br/><span class="redText">Slow Trap</span>, <span class="boost">String Shot</span>, etc.</td>
      <td>10 turns elapsing from<br/>the perspective of regular<br/>speed pokemon.</td>
    </tr>
    <tr>
      <td colspan="5" class="tableDivider"></td>
    </tr>
    <tr>
      <td id="explosion" class="highlightGray">Explosion</td>
      <td>Reaction</td>
      <td>Explodes in a 2 tile radius when damaged by<br/>an attack (Same effect as Big Blast Trap).</td>
      <td><span class="boost">Explosion</span></td>
      <td>1 turn elapses,<br/>receive damage</td>
    </tr>
    <tr>
      <td id="self-destruct" class="highlightGray">Self-Destruct</td>
      <td>Reaction</td>
      <td>Explodes in a 1 tile radius when damaged by<br/>an attack (Same effect as Blast Trap).</td>
      <td><span class="boost">Self-Destruct</span></td>
      <td>1 turn elapses,<br/>receive damage</td>
    </tr>
    <tr>
      <td colspan="5" class="tableDivider"></td>
    </tr>
    <tr>
      <td id="enduring" class="good">Enduring</td>
      <td>Evade</td>
      <td>Survive any attack with 1 HP remaining.<br/>(No effect vs. weather or ailment damage)</td>
      <td><span class="boost">Endure</span></td>
      <td>1 turn elapses</td>
    </tr>
    <tr>
      <td id="protect" class="good">Protect</td>
      <td>Evade</td>
      <td>Protect against any attack.<br/>(No effect vs. blast damage or item effects)</td>
      <td><span class="boost">Protect</span></td>
      <td>1 turn elapses, <span class="boost">Feint</span></td>
    </tr>
    <tr>
      <td id="spiky-shield" class="good">Spiky Shield</td>
      <td>Evade</td>
      <td>Protect against any attack.<br/>If the attacker made contact, deal 10 damage.<Br/>(No effect vs. blast damage or item effects)</td>
      <td><span class="boost">Spiky Shield</span></td>
      <td>1 turn elapses, <span class="boost">Feint</span></td>
    </tr>
    <tr>
      <td id="quick-guard" class="good">Quick Guard</td>
      <td>Evade</td>
      <td>Protect against attacks by faraway Pokemon.<br/>(No effect vs. blast damage or item effects)</td>
      <td><span class="boost">Quick Guard</span></td>
      <td>1 turn elapses, <span class="boost">Feint</span></td>
    </tr>
    <tr>
      <td id="wide-guard" class="good">Wide Guard</td>
      <td>Evade</td>
      <td>Protect against wide range attacks.<br/>(No effect vs. blast damage or item effects)</td>
      <td><span class="boost">Wide Guard</span></td>
      <td>1 turn elapses, <span class="boost">Feint</span></td>
    </tr>
    <tr>
      <td colspan="5" class="tableDivider"></td>
    </tr>
    <tr>
      <td id="transform" class="highlightGray">Transform</td>
      <td>Body</td>
      <td>Looks, type, moves, ability, walk type, and stat<br/>modifiers are the same as the copied target.<br/>(Copied moves have full PP)</td>
      <td><span class="boost">Transform</span></td>
      <td>Change floors, faint</td>
    </tr>
    <tr>
      <td colspan="5" class="tableDivider"></td>
    </tr>
    <tr>
      <td id="paralysis" class="bad">Paralysis</td>
      <td>Ailment</td>
      <td>Can't use any moves.<br/>Travel Speed is decreased by 1 stage.<br/>(Electric types can't get this status)</td>
      <td><span class="item">Grimy Food</span>, <span class="boss">Effect Spore</span>,<br/><span class="boss">Static</span>, <span class="boost">Nuzzle</span>, <span class="boost">Stun Spore</span>,<br/><span class="boost">Thunder Wave</span>, etc.</td>
      <td><span class="item">Cheri Berry</span>, <span class="boss">Limber</span>,<br/>receive damage (chance)<br/><br/>30 turns elapsing from<br/>the perspective of regular<br/>speed pokemon.</td>
    </tr>
    <tr>
      <td id="poisoned" class="bad">Poisoned</td>
      <td>Ailment</td>
      <td>Occasionally lose 40 HP as turns elapse.<br/>(Poison and Steel types can't get this status)</td>
      <td><span class="item">Grimy Food</span>, <span class="redText">Poison Trap</span>,<br/><span class="redText">Toxic Spikes</span>, <span class="boss">Effect Spore</span>,<br/><span class="boss">Poison Point</span>, <span class="boost">Poison Gas</span>,<br/><span class="boost">Poison Powder</span>, etc.</td>
      <td><span class="item">Pecha Berry</span>, <span class="item">Pecha Scarf</span>,<br/><span class="boss">Immunity</span>, <span class="boss">Poison Heal</span></td>
    </tr>
    <tr>
      <td id="badly-poisoned" class="bad">Badly Poisoned</td>
      <td>Ailment</td>
      <td>Occasionally lose 60 HP as turns elapse.<br/>(Poison and Steel types can't get this status)</td>
      <td><span class="boost">Toxic</span>, <span class="boost">Poison Fang</span></td>
      <td><span class="item">Pecha Berry</span>, <span class="item">Pecha Scarf</span>,<br/><span class="boss">Immunity</span>, <span class="boss">Poison Heal</span></td>
    </tr>
    <tr>
      <td id="burn" class="bad">Burn</td>
      <td>Ailment</td>
      <td>Attack is reduced.<br/>Occasionally lose 20 HP as turns elapse.<br/>(Fire types can't get this status)</td>
      <td><span class="item">Grimy Food</span>, <span class="boss">Flame Body</span>,<br/><span class="boost">Will-O-Wisp</span>, lava tiles, etc.</td>
      <td>Step on a water tile,<br/><span class="item">Rawst Berry</span>, <span class="boss">Water Veil</span></td>
    </tr>
    <tr>
      <td colspan="5" class="tableDivider"></td>
    </tr>
    <tr>
      <td id="stuck" class="bad">Stuck</td>
      <td>Pinning</td>
      <td>Can't move from current position.<br/>Knockback or warp effects from moves or<br/>items are still effective.<br/>(Ghost types can't get this status)</td>
      <td><span class="item">Grimy Food</span>, <span class="item">Lasso Orb</span>,<br/><span class="boss">Arena Trap</span>, <span class="boss">Shadow Tag</span>,<br/><span class="boss">Magnet Pull</span>, <span class="boost">Mean Look</span>,<br/><span class="boost">Spider Web</span>, <span class="boost">Block</span></td>
      <td>6 turns elapse, <span class="boss">Run Away</span>,<br/>receive knockback or warp</td>
    </tr>
    <tr>
      <td id="whirlpool" class="bad">Whirlpool</td>
      <td>Pinning</td>
      <td>Can't move from current position.<br/>Lose 3 HP every 2 turns.</td>
      <td><span class="boost">Whirlpool</span></td>
      <td>6 turns elapse, <span class="boost">Rapid Spin</span>,<br/>receive knockback or warp</td>
    </tr>
    <tr>
      <td id="clamp" class="bad">Clamp</td>
      <td>Pinning</td>
      <td>Can't move from current position.<br/>Lose 3 HP every 2 turns.</td>
      <td><span class="boost">Clamp</span></td>
      <td>6 turns elapse, <span class="boost">Rapid Spin</span>,<br/>receive knockback or warp</td>
    </tr>
    <tr>
      <td id="bound" class="bad">Bound</td>
      <td>Pinning</td>
      <td>Can't move from current position.<br/>Lose 3 HP every 2 turns.</td>
      <td><span class="boost">Bind</span>, <span class="boost">Wrap</span></td>
      <td>6 turns elapse, <span class="boost">Rapid Spin</span>,<br/>receive knockback or warp</td>
    </tr>
    <tr>
      <td id="sand-tomb" class="bad">Sand Tomb</td>
      <td>Pinning</td>
      <td>Can't move from current position.<br/>Lose 3 HP every 2 turns.</td>
      <td><span class="boost">Sand Tomb</span></td>
      <td>6 turns elapse, <span class="boost">Rapid Spin</span>,<br/>receive knockback or warp</td>
    </tr>
    <tr>
      <td id="infestation" class="bad">Infestation</td>
      <td>Pinning</td>
      <td>Can't move from current position.<br/>Lose 3 HP every 2 turns.</td>
      <td><span class="boost">Infestation</span></td>
      <td>6 turns elapse, <span class="boost">Rapid Spin</span>,<br/>receive knockback or warp</td>
    </tr>
    <tr>
      <td id="fire-spin" class="bad">Fire Spin</td>
      <td>Pinning</td>
      <td>Can't move from current position.<br/>Lose 3 HP every 2 turns.</td>
      <td><span class="boost">Fire Spin</span></td>
      <td>6 turns elapse, <span class="boost">Rapid Spin</span>,<br/>receive knockback or warp</td>
    </tr>
    <tr>
      <td id="ingrain" class="good">Ingrain</td>
      <td>Pinning</td>
      <td>Can't move from current position.<br/>Heal 15 HP every 2 turns (3 times total).<br/>Immune to knockback effects.</td>
      <td><span class="boost">Ingrain</span></td>
      <td>6 turns elapse, warp</td>
    </tr>
    <tr>
      <td colspan="5" class="tableDivider"></td>
    </tr>
    <tr>
      <td id="petrified" class="bad">Petrified</td>
      <td>Freeze</td>
      <td>Can't take any action.<br/>Wears off when the Pokemon takes damage.<br/>For leader only, wears off after 20 turns.<br/>(Press A facing a petrified ally to cure them)</td>
      <td><span class="item">Stun Seed</span>, <span class="item">Petrify Wand</span>,<br/><span class="item">Foe-Hold Orb</span>, <span class="item">Petrify Orb</span>,<br/><span class="item">Stayaway Wand</span></td>
      <td>20 turns elapse (leader),<br/>receive damage</td>
    </tr>
    <tr>
      <td id="frozen" class="bad">Frozen</td>
      <td>Freeze</td>
      <td>Can't take any action.<br/>(Ice types can't get this status)</td>
      <td><span class="boost">Blizzard</span>, <span class="boost">Ice Beam</span>, etc.</td>
      <td>3 turns elapse, <span class="boost">Scald</span>,<br/><span class="boss">Magma Armor</span>, <span class="boss">Shield Dust</span>,<br/>get hit by a Fire type move,<br/>receive damage (chance),<br/>sunlight, stand on lava tile</td>
    </tr>
    <tr>
      <td colspan="5" class="tableDivider"></td>
    </tr>
    <tr>
      <td id="encore" class="bad">Encore</td>
      <td>Mind</td>
      <td>Can only use the last used move for a while.<br/>(Items can still be used)</td>
      <td><span class="boost">Encore</span></td>
      <td>11 turns elapse</td>
    </tr>
    <tr>
      <td id="taunt" class="bad">Taunt</td>
      <td>Mind</td>
      <td>Can only use damaging moves for a while.</td>
      <td><span class="boost">Taunt</span></td>
      <td>11 turns elapse, <span class="boss">Oblivious</span></td>
    </tr>
    <tr>
      <td colspan="5" class="tableDivider"></td>
    </tr>
    <tr>
      <td id="eyedrops" class="good">Eyedrops</td>
      <td>Sight</td>
      <td>The Pokemon can see hidden traps.<br/>(Goggle Specs has the same effect)</td>
      <td><span class="item">Eyedrop Seed</span></td>
      <td>Change floors</td>
    </tr>
    <tr>
      <td id="blinker" class="bad">Blinker</td>
      <td>Sight</td>
      <td>The Pokemon can't see, map icons are hidden.<br/>Can't switch leaders, attacks can hit allies.<br/>(Non-leader Pokemon walk in a straight line)</td>
      <td><span class="item">Grimy Food</span>, <span class="item">Blinker Seed</span>,<br/><span class="boost">Octazooka</span></td>
      <td>5 turns elapse,<br/><span class="item">Eyedrop Seed</span></td>
    </tr>
    <tr>
      <td colspan="5" class="tableDivider"></td>
    </tr>
    <tr>
      <td id="digging" class="highlightGray">Digging</td>
      <td>Charge</td>
      <td>Status is removed when attacking next turn.<br/>Avoid moves besides Earthquake/Magnitude.<br/>(Earthquake/Magnitude deal x2.0 damage)</td>
      <td><span class="boost">Dig</span></td>
      <td>1 turn elapses</td>
    </tr>
    <tr>
      <td id="razor-wind" class="highlightGray">Razor Wind</td>
      <td>Charge</td>
      <td>Status is removed when attacking next turn.</td>
      <td><span class="boost">Razor Wind</span></td>
      <td>1 turn elapses</td>
    </tr>
    <tr>
      <td id="bide" class="highlightGray">Bide</td>
      <td>Charge</td>
      <td>Can't move for a few turns, then attacks.<br/>Attack deals x1.5 damage received.</td>
      <td><span class="boost">Bide</span>, <span class="boost">Avalanche</span>, <span class="boost">Revenge</span></td>
      <td>3 turns elapse</td>
    </tr>
    <tr>
      <td id="focus-punch" class="highlightGray">Focus Punch</td>
      <td>Charge</td>
      <td>Status is removed when attacking next turn.<br/>(Status isn't canceled if you take damage)</td>
      <td><span class="boost">Focus Punch</span></td>
      <td>1 turn elapses</td>
    </tr>
    <tr>
      <td id="phantom-force" class="highlightGray">Phantom Force</td>
      <td>Charge</td>
      <td>Status is removed when attacking next turn.</td>
      <td><span class="boost">Phantom Force</span></td>
      <td>1 turn elapses</td>
    </tr>
    <tr>
      <td id="sky-attack" class="highlightGray">Sky Attack</td>
      <td>Charge</td>
      <td>Status is removed when attacking next turn.</td>
      <td><span class="boost">Sky Attack</span></td>
      <td>1 turn elapses</td>
    </tr>
    <tr>
      <td id="charging" class="good">Charging</td>
      <td>Charge</td>
      <td>Doubles damage of Electric move next turn.<br/>(Status is removed next turn even if you don't<br/>use an Electric type move on that turn)</td>
      <td><span class="boost">Charge</span></td>
      <td>1 turn elapses</td>
    </tr>
    <tr>
      <td id="solar-beam" class="highlightGray">Solar Beam</td>
      <td>Charge</td>
      <td>Status is removed when attacking next turn.</td>
      <td><span class="boost">Solar Beam</span></td>
      <td>1 turn elapses</td>
    </tr>
    <tr>
      <td id="flying" class="highlightGray">Flying</td>
      <td>Charge</td>
      <td>Status is removed when attacking next turn.<br/>Avoid moves besides Smack Down/Gust/<br/>Thunder/Sky Uppercut/Twister/Hurricane.<br/>(Gust/Twister deal x2.0 damage)</td>
      <td><span class="boost">Fly</span></td>
      <td>1 turn elapses, <span class="boost">Gravity</span>, <br/><span class="boost">Smack Down</span></td>
    </tr>
    <tr>
      <td id="dive" class="highlightGray">Dive</td>
      <td>Charge</td>
      <td>Status is removed when attacking next turn.<br/>Avoid moves besides Whirlpool/Surf.<br/>(Whirlpool/Surf deal x2.0 damage)</td>
      <td><span class="boost">Dive</span></td>
      <td>1 turn elapses</td>
    </tr>
    <tr>
      <td id="suspended" class="highlightGray">Suspended</td>
      <td>Charge</td>
      <td>Can't take any action.<br/>Occurs when you're the target of Sky Drop.<br/>Status is removed when damaged next turn.<br/>(Flying types won't receive damage)</td>
      <td><span class="boost">Sky Drop</span></td>
      <td>1 turn elapses, <span class="boost">Gravity</span></td>
    </tr>
    <tr>
      <td id="bouncing" class="highlightGray">Bouncing</td>
      <td>Charge</td>
      <td>Status is removed when attacking next turn.<br/>Avoid moves besides Smack Down/Gust/<br/>Thunder/Sky Uppercut/Twister/Hurricane.<br/>(Gust/Twister deal x2.0 damage)</td>
      <td><span class="boost">Fly</span></td>
      <td>1 turn elapses, <span class="boost">Gravity</span>, <br/><span class="boost">Smack Down</span></td>
    </tr>
    <tr>
      <td id="doom-desire" class="highlightGray">Doom Desire</td>
      <td>Charge</td>
      <td>Status is removed when attacking next turn.</td>
      <td><span class="boost">Doom Desire</span></td>
      <td>1 turn elapses</td>
    </tr>
    <tr>
      <td id="sky-drop" class="highlightGray">Sky Drop</td>
      <td>Charge</td>
      <td>Status is removed when attacking next turn.<br/>Avoid moves besides Smack Down/Gust/<br/>Thunder/Sky Uppercut/Twister/Hurricane.<br/>(Gust/Twister deal x2.0 damage)</td>
      <td><span class="boost">Sky Drop</span></td>
      <td>1 turn elapses,<br/><span class="boost">Smack Down</span></td>
    </tr>
    <tr>
      <td id="future-sight" class="highlightGray">Future Sight</td>
      <td>Charge</td>
      <td>Status is removed when attacking next turn.</td>
      <td><span class="boost">Future Sight</span></td>
      <td>1 turn elapses</td>
    </tr>
    <tr>
      <td id="skull-bash" class="highlightGray">Skull Bash</td>
      <td>Charge</td>
      <td>Status is removed when attacking next turn.</td>
      <td><span class="boost">Skull Bash</span></td>
      <td>1 turn elapses</td>
    </tr>
    <tr>
      <td colspan="5" class="tableDivider"></td>
    </tr>
    <tr>
      <td id="yawning" class="bad">Yawning</td>
      <td>Sleep</td>
      <td>Fall asleep after 2 turns elapse.</td>
      <td><span class="boost">Yawn</span>, <span class="boss">Truant</span></td>
      <td>2 turns elapse, <span class="boost">Uproar</span>,<br/><span class="item">Chesto Berry</span>, <span class="item">Insomniscope</span>,<br/><span class="boss">Insomnia</span>, <span class="boss">Vital Spirit</span></td>
    </tr>
    <tr>
      <td id="nightmare" class="bad">Nightmare</td>
      <td>Sleep</td>
      <td>Can't take any action.<br/>Susceptible to Dream Eater.<br/>Receive 10 damage when waking up.</td>
      <td><span class="boost">Nightmare</span></td>
      <td>7 turns elapse, <span class="boost">Uproar</span>,<br/><span class="boost">Wake-Up Slap</span>, <span class="item">Chesto Berry</span>,<br/><span class="item">Insomniscope</span>, <span class="boss">Insomnia</span>,<br/><span class="boss">Vital Spirit</span></td>
    </tr>
    <tr>
      <td id="sleep" class="bad">Sleep</td>
      <td>Sleep</td>
      <td>Can't take any action.<br/>Susceptible to Dream Eater.</td>
      <td><span class="item">Sleep Seed</span>, <span class="item">Slumber Wand</span>,<br/><span class="item">Slumber Orb</span>, <span class="redText">Slumber Trap</span>,<br/><span class="boost">Sleep Powder</span>, <span class="boost">Hypnosis</span>,<br/><span class="boss">Effect Spore</span>, etc.</td>
      <td>8 turns elapse, <span class="boost">Uproar</span>,<br/>receive damage (chance),<br/><span class="boost">Wake-Up Slap</span>, <span class="item">Chesto Berry</span>,<br/><span class="item">Insomniscope</span>, <span class="boss">Insomnia</span>,<br/><span class="boss">Vital Spirit</span></td>
    </tr>
    <tr>
      <td id="sleepless" class="good">Sleepless</td>
      <td>Sleep</td>
      <td>Can't become afflicted with Yawning, Sleep,<br/>Nightmare, or Napping status.</td>
      <td><span class="boost">Uproar</span>, <span class="item">Chesto Berry</span>,<br/><span class="item">Insomniscope</span></td>
      <td>Change floors</td>
    </tr>
    <tr>
      <td id="napping" class="highlightGray">Napping</td>
      <td>Sleep</td>
      <td>Can't take any action.<br/>Susceptible to Dream Eater.<br/>HP and status fully restored when waking up.</td>
      <td><span class="boost">Rest</span></td>
      <td>5 turns elapse, <span class="boost">Uproar</span>,<br/><span class="item">Chesto Berry</span>, <span class="item">Insomniscope</span>,<br/><span class="boss">Insomnia</span>, <span class="boss">Vital Spirit</span></td>
    </tr>
    <tr>
      <td colspan="5" class="tableDivider"></td>
    </tr>
    <tr>
      <td id="counter" class="good">Counter</td>
      <td>Reflect</td>
      <td>When damaged by a physical attack move,<br/>reflects the same amount of damage back<br/>to the adjacent attacker (Can't cut corners).</td>
      <td><span class="boost">Counter</span>, <span class="boost">Payback</span></td>
      <td>6 turns elapse</td>
    </tr>
    <tr>
      <td id="magic-coat" class="good">Magic Coat</td>
      <td>Reflect</td>
      <td>Reflects status moves that lower stats or<br/>inflict status conditions + most wand effects.</td>
      <td><span class="boost">Magic Coat</span>, <span class="boss">Magic Bounce</span></td>
      <td>6 turns elapse (Magic Coat)</td>
    </tr>
    <tr>
      <td id="mirror-coat" class="good">Mirror Coat</td>
      <td>Reflect</td>
      <td>When damaged by a special attack move,<br/>reflects the same amount of damage back<br/>to the adjacent attacker (Can't cut corners).</td>
      <td><span class="boost">Mirror Coat</span></td>
      <td>6 turns elapse</td>
    </tr>
    <tr>
      <td id="metal-burst" class="good">Metal Burst</td>
      <td>Reflect</td>
      <td>When damaged by any attacking move,<br/>reflects 75% of damage back to the adjacent<br/>attacker (Can't cut corners).</td>
      <td><span class="boost">Metal Burst</span></td>
      <td>6 turns elapse</td>
    </tr>
    <tr>
      <td colspan="5" class="tableDivider"></td>
    </tr>
    <tr>
      <td id="low-hp" class="highlightGray">Low HP</td>
      <td>None</td>
      <td>Remaining HP &le; ~25% of max HP.<br/><span class="boss">Overgrow</span>, <span class="boss">Blaze</span>, <span class="boss">Torrent</span>, and <span class="boss">Swarm</span> activate.</td>
      <td>HP &le; ~25%</td>
      <td>HP goes above ~25%</td>
    </tr>
    <tr>
      <td id="aqua-ring" class="good">Aqua Ring</td>
      <td>None</td>
      <td>Heal 6 HP every 2 turns (3 times total).</td>
      <td><span class="boost">Aqua Ring</span></td>
      <td>6 turns elapse</td>
    </tr>
    <tr>
      <td id="puppet" class="bad">Puppet</td>
      <td>None</td>
      <td>The Pokemon is forced to use a move or item.<br/>The forced action ends your turn.</td>
      <td><span class="boost">Hypnosis</span> when target is<br/>asleep (leader)</td>
      <td>1 turn elapses</td>
    </tr>
    <tr>
      <td id="gastro-acid" class="bad">Gastro Acid</td>
      <td>None</td>
      <td>The Pokemon's ability is disabled.</td>
      <td><span class="boost">Gastro Acid</span></td>
      <td>21 turns elapse</td>
    </tr>
    <tr>
      <td id="enraged" class="good">Enraged</td>
      <td>None</td>
      <td>The Pokemon's Attack increases by 1 stage<br/>whenever the Pokemon takes damage from<br/>attacking moves or a Spiky Trap.</td>
      <td><span class="boost">Rage</span></td>
      <td>11 turns elapse</td>
    </tr>
    <tr>
      <td id="aurora-veil" class="good">Aurora Veil</td>
      <td>None</td>
      <td>Reduces damage received from any attacking<br/>moves by 50%.</td>
      <td><span class="boost">Aurora Veil</span></td>
      <td>21 turns elapse, <span class="boost">Brick Break</span></td>
    </tr>
    <tr>
      <td id="decoy" class="highlightGray">Decoy</td>
      <td>None</td>
      <td>Enemies prioritize attacking the decoy.</td>
      <td><span class="item">Decoy Orb</span>, <span class="boost">Spotlight</span>,<br/><span class="boost">Rage Powder</span>, <span class="boss">Illuminate</span></td>
      <td>6 turns elapse, different<br/>Pokemon becomes a decoy</td>
    </tr>
    <tr>
      <td id="terrified" class="bad">Terrified</td>
      <td>None</td>
      <td>Non-leader: Runs away from opponent.<br/>Leader: Can't use moves, pick up or use items,<br/>look around, change leader, or advance floors.</td>
      <td><span class="boost">Hypnosis</span> when target is<br/>asleep (ally), <span class="boss">Stench</span></td>
      <td>11 turns elapse</td>
    </tr>
    <tr>
      <td id="lucky-chant" class="good">Lucky Chant</td>
      <td>None</td>
      <td>The Pokemon won't receive critical hits.</td>
      <td><span class="boost">Lucky Chant</span>, <span class="item">Lucky Ribbon</span></td>
      <td>21 turns elapse (Lucky Chant)</td>
    </tr>
    <tr>
      <td id="grudge" class="highlightGray">Grudge</td>
      <td>None</td>
      <td>When you get hit by an attacker's move, the<br/>PP for the attacker's move is reduced to 0.<br/>This happens even if you're defeated.</td>
      <td><span class="boost">Grudge</span>, <span class="redText">Grudge Trap</span></td>
      <td>2 turns elapse</td>
    </tr>
    <tr>
      <td id="heal-block" class="bad">Heal Block</td>
      <td>None</td>
      <td>HP doesn't naturally regenerate.<br/>Can't use moves or items that restore HP.</td>
      <td><span class="boost">Heal Block</span></td>
      <td>6 turns elapse</td>
    </tr>
    <tr>
      <td id="awakened" class="good">Awakened</td>
      <td>None</td>
      <td>The Pokemon is powered up.<br/>Linked moves always hit critically and ignore<br/>type disadvantages, and Pokemon who can<br/>mega evolve do so.</td>
      <td><span class="item">Empowerment Seed</span>,<br/>defeat a Pokemon (enemy)</td>
      <td>Get a bad status, faint,<br/><span class="item">Reset Orb</span></td>
    </tr>
    <tr>
      <td id="inviting" class="good">Inviting</td>
      <td>None</td>
      <td>Pokemon you defeat are more likely to join.<br/>(Boosts recruit rate by +25.0%)</td>
      <td><span class="item">Inviting Orb</span></td>
      <td>Change floors</td>
    </tr>
    <tr>
      <td id="focus-energy" class="good">Focus Energy</td>
      <td>None</td>
      <td>Critical hit rate is boosted.</td>
      <td><span class="boost">Focus Energy</span></td>
      <td>4 turns elapse</td>
    </tr>
    <tr>
      <td id="fainted" class="highlightGray">Fainted</td>
      <td>None</td>
      <td>The guest is collapsed and unable to move.<br/>Use an item to revive them if desired.</td>
      <td>Guest's HP falls to 0</td>
      <td><span class="item">Tiny Reviver Seed</span>,<br/><span class="item">Reviver Seed</span></td>
    </tr>
    <tr>
      <td id="boosted" class="good">Boosted</td>
      <td>None</td>
      <td>Attack, Defense, Sp. Atk, Sp. Def, Accuracy,<br/>or Evasion has been boosted (max 10 stages).</td>
      <td>Various items and moves</td>
      <td><span class="redText">Wonder Tile</span>, <span class="boost">Clear Smog</span>,<br/><span class="boost">Haze</span></td>
    </tr>
    <tr>
      <td id="healthy" class="good">Healthy</td>
      <td>None</td>
      <td>Protects against bad statuses aside from<br/>Truant and Recoil, and prevents stats from<br/>being lowered by the user or other Pokemon.</td>
      <td><span class="item">Health Orb</span></td>
      <td>Change floors</td>
    </tr>
    <tr>
      <td id="confused" class="bad">Confused</td>
      <td>None</td>
      <td>Movement and attack direction is random.<br/>Wands and projectiles can be used normally.<br/>The Pokemon's moves can hit party members.</td>
      <td><span class="item">Totter Seed</span>, <span class="item">Grimy Food</span>,<br/><span class="item">Totter Orb</span>, <span class="item">Confuse Wand</span>,<br/><span class="redText">Spin Trap</span>, <span class="boost">Confuse Ray</span>,<br/><span class="boost">Supersonic</span>, etc.</td>
      <td>8 turns elapse, <span class="item">Persim Band</span>,<br/><span class="boss">Own Tempo</span></td>
    </tr>
    <tr>
      <td id="embargo" class="bad">Embargo</td>
      <td>None</td>
      <td>Can't use items, held item effect nullified.</td>
      <td><span class="boost">Embargo</span></td>
      <td>6 turns elapse</td>
    </tr>
    <tr>
      <td id="throat-chop" class="bad">Throat Chop</td>
      <td>None</td>
      <td>Can't use sound based moves.</td>
      <td><span class="boost">Throat Chop</span></td>
      <td>Change floors</td>
    </tr>
    <tr>
      <td id="swamp" class="bad">Swamp</td>
      <td>None</td>
      <td>Accuracy and Evasion are sharply reduced.</td>
      <td>Use both <span class="boost">Grass Pledge</span><br/>and <span class="boost">Water Pledge</span> at once</td>
      <td>5 turns elapse</td>
    </tr>
    <tr>
      <td id="weakened" class="highlightGray">Weakened</td>
      <td>None</td>
      <td>Attack, Defense, Sp. Atk, Sp. Def, Accuracy,<br/>or Evasion has been reduced (max 10 stages).</td>
      <td><span class="redText">Mud Trap</span>, various moves</td>
      <td><span class="redText">Wonder Tile</span>, <span class="boost">Clear Smog</span>,<br/><span class="boost">Haze</span>, <span class="boost">Mist</span>, <span class="item">Health Orb</span>,<br/><span class="item">Twist Band</span>, <span class="boss">Clear Body</span>, etc.</td>
    </tr>
    <tr>
      <td id="mist" class="good">Mist</td>
      <td>None</td>
      <td>Stats can't be lowered by enemies or traps.</td>
      <td><span class="boost">Mist</span></td>
      <td>21 turns elapse</td>
    </tr>
    <tr>
      <td id="safeguard" class="good">Safeguard</td>
      <td>None</td>
      <td>Pokemon is protected against bad statuses.</td>
      <td><span class="boost">Safeguard</span></td>
      <td>21 turns elapse</td>
    </tr>
    <tr>
      <td id="stockpiling" class="good">Stockpiling</td>
      <td>None</td>
      <td>Pokemon is storing power using Stockpile.<br/>Stockpile count affects Swallow and Spit Up.<br/>Max Stockpile count is 3.</td>
      <td><span class="boost">Stockpile</span></td>
      <td><span class="boost">Swallow</span>, <span class="boost">Spit Up</span></td>
    </tr>
    <tr>
      <td id="trained" class="good">Trained</td>
      <td>None</td>
      <td>Moves grow faster when they are used.</td>
      <td><span class="item">Training Seed</span>,<br/><span class="redText">Training Switch</span></td>
      <td>Change floors</td>
    </tr>
    <tr>
      <td id="grounded" class="bad">Grounded</td>
      <td>None</td>
      <td>Can't use floating movement, susceptible to<br/>Ground type attacks.</td>
      <td><span class="boost">Smack Down</span></td>
      <td>10 turns elapse, <span class="boost">Fly</span>, <span class="boost">Bounce</span></td>
    </tr>
    <tr>
      <td id="mobile" class="good">Mobile</td>
      <td>None</td>
      <td>Pokemon can traverse any type of tile.<br/>Belly depletes by 5 per turn in walls.</td>
      <td><span class="item">Mobile Orb</span>, <span class="item">Mobile Scarf</span></td>
      <td>Change floors (Mobile Orb)</td>
    </tr>
    <tr>
      <td id="telekinesis" class="bad">Telekinesis</td>
      <td>None</td>
      <td>Pokemon is levitating and can't move.<br/>Evasion is reduced, immune to Ground moves.</td>
      <td><span class="boost">Telekinesis</span></td>
      <td>6 turns elapse, <span class="boost">Gravity</span>,<br/>receive knockback or warp</td>
    </tr>
    <tr>
      <td id="magnet-rise" class="good">Magnet Rise</td>
      <td>None</td>
      <td>Pokemon is levitating.<br/>Evasion is reduced, immune to Ground moves.</td>
      <td><span class="boost">Magnet Rise</span></td>
      <td>10 turns elapse, <span class="boost">Gravity</span>,<br/><span class="boost">Smack Down</span></td>
    </tr>
    <tr>
      <td id="laser-focus" class="good">Laser Focus</td>
      <td>None</td>
      <td>Pokemon's moves always hit critically.</td>
      <td><span class="boost">Laser Focus</span></td>
      <td>2 turns elapse</td>
    </tr>
    <tr>
      <td id="truant" class="highlightGray">Truant</td>
      <td>None</td>
      <td>Can't use moves, but can use items.<br/>(Can't prevent this even with Healthy status)</td>
      <td><span class="boss">Truant</span></td>
      <td>1 turn elapses</td>
    </tr>
    <tr>
      <td id="rainbow" class="good">Rainbow</td>
      <td>None</td>
      <td>Move's additional effects occur more often.</td>
      <td>Use both <span class="boost">Water Pledge</span><br/>and <span class="boost">Fire Pledge</span> at once</td>
      <td>5 turns elapse</td>
    </tr>
    <tr>
      <td id="wish" class="good">Wish</td>
      <td>None</td>
      <td>HP is restored by 75% at end of next turn.<br/>Adjacent party members are also healed.<br/>(Recovery Scarf → heals immediately)</td>
      <td><span class="boost">Wish</span></td>
      <td>2 turns elapse</td>
    </tr>
    <tr>
      <td id="cursed" class="bad">Cursed</td>
      <td>None</td>
      <td>Lose 25% HP after taking an action.</td>
      <td><span class="boost">Curse</span></td>
      <td>2 turns elapse</td>
    </tr>
    <tr>
      <td id="recoil" class="highlightGray">Recoil</td>
      <td>None</td>
      <td>Can't take any action.</td>
      <td><span class="boost">Hyper Beam</span>, <span class="boost">Giga Impact</span>,<br/><span class="boost">Frenzy Plant</span>, <span class="boost">Blast Burn</span>,<br/><span class="boost">Hydro Cannon</span>, etc.</td>
      <td>1 turn elapses</td>
    </tr>
    <tr>
      <td id="light-screen" class="good">Light Screen</td>
      <td>None</td>
      <td>Reduces damage received from special attack<br/>moves by 50%, excluding fixed damage.</td>
      <td><span class="boost">Light Screen</span></td>
      <td>21 turns elapse, <span class="boost">Brick Break</span></td>
    </tr>
    <tr>
      <td id="sure-shot" class="good">Sure Shot</td>
      <td>None</td>
      <td>Pokemon's moves always hit.<br/>(Doesn't affect accuracy of thrown items)</td>
      <td><span class="boost">Lock-On</span>, <span class="boost">Mind Reader</span></td>
      <td>4 turns elapse</td>
    </tr>
    <tr>
      <td id="sea-of-fire" class="bad">Sea of Fire</td>
      <td>None</td>
      <td>Take 15 damage at the end of turn.<br/>(Fire types can't get this status)</td>
      <td>Use both <span class="boost">Fire Pledge</span><br/>and <span class="boost">Grass Pledge</span> at once</td>
      <td>4 turns elapse,<br/>step on a water tile</td>
    </tr>
    <tr>
      <td id="flinch" class="bad">Flinch</td>
      <td>None</td>
      <td>Can't use moves, but can use items.</td>
      <td><span class="boost">Quash</span>, <span class="boost">Bite</span>, <span class="boost">Fake Out</span>,<br/><span class="boost">Headbutt</span>, <span class="boost">Hyper Fang</span>, etc.</td>
      <td>1 turn elapses, <span class="boss">Inner Focus</span>,<br/><span class="boss">Shield Dust</span>, <span class="boss">Steadfast</span></td>
    </tr>
    <tr>
      <td id="autotomize" class="good">Autotomize</td>
      <td>None</td>
      <td>Pokemon gets lighter, reducing damage taken<br/>from moves like Low Kick and Grass Knot but<br/>raising damage taken from Heavy Slam.</td>
      <td><span class="boost">Autotomize</span></td>
      <td>Change floors</td>
    </tr>
    <tr>
      <td id="perish-song" class="bad">Perish Song</td>
      <td>None</td>
      <td>Pokemon faints after 3 turns elapse.</td>
      <td><span class="boost">Perish Song</span></td>
      <td><span class="boss">Soundproof</span></td>
    </tr>
    <tr>
      <td id="substitute" class="good">Substitute</td>
      <td>None</td>
      <td>HP regen stops, and enemies won't target you.<br/>Can't use moves, items, stairs, or swap leader.</td>
      <td><span class="boost">Substitute</span></td>
      <td>11 turns elapse</td>
    </tr>
    <tr>
      <td id="destiny-bond" class="bad">Destiny Bond</td>
      <td>None</td>
      <td>When the Pokemon who used Destiny Bond<br/>takes damage, the target with this status<br/>takes the same amount of damage.</td>
      <td><span class="boost">Destiny Bond</span></td>
      <td>6 turns elapse,<br/>Destiny Bond user faints</td>
    </tr>
    <tr>
      <td id="exposed" class="bad">Exposed</td>
      <td>None</td>
      <td>Ghost type loses its immunity to Normal and<br/>Fighting type moves.</td>
      <td><span class="boost">Odor Sleuth</span>, <span class="boost">Foresight</span></td>
      <td>Change floors</td>
    </tr>
    <tr>
      <td id="miracle-eye" class="bad">Miracle Eye</td>
      <td>None</td>
      <td>Dark type loses its immunity to Psychic type<br/>moves.</td>
      <td><span class="boost">Miracle Eye</span></td>
      <td>Change floors</td>
    </tr>
    <tr>
      <td id="lethargic" class="bad">Lethargic</td>
      <td>None</td>
      <td>Can't take any action.</td>
      <td><span class="item">Foe-Seal Orb</span>, <span class="item">Grimy Food</span></td>
      <td>8 turns elapse</td>
    </tr>
    <tr>
      <td id="infatuated" class="bad">Infatuated</td>
      <td>None</td>
      <td>Moves sometimes fail when used.</td>
      <td><span class="item">Decoy Seed</span>, <span class="boost">Attract</span>,<br/><span class="boss">Cute Charm</span></td>
      <td>6 turns elapse, <span class="boss">Oblivious</span></td>
    </tr>
    <tr>
      <td id="leech-seed" class="bad">Leech Seed</td>
      <td>None</td>
      <td>Siphons 5 HP every 2 turns for 4 turns.<br/>(Grass types can't get this status)</td>
      <td><span class="boost">Leech Seed</span></td>
      <td>4 turns elapse, <span class="boost">Rapid Spin</span>,<br/>Leech Seed user faints</td>
    </tr>
    <tr>
      <td id="snatch" class="good">Snatch</td>
      <td>None</td>
      <td>Snatches the effect of a healing or status<br/>move used by a Pokemon in the same room.</td>
      <td><span class="boost">Snatch</span></td>
      <td>6 turns elapse,<br/>other Pokemon uses Snatch</td>
    </tr>
    <tr>
      <td id="reflect" class="good">Reflect</td>
      <td>None</td>
      <td>Reduces damage received from physical<br/>attack moves by 50%, excluding fixed damage.<br/>(Doesn't reduce damage from projectiles)</td>
      <td><span class="boost">Reflect</span></td>
      <td>21 turns elapse, <span class="boost">Brick Break</span></td>
    </tr>
    <tr>
      <td id="round" class="good">Round</td>
      <td>None</td>
      <td>If Round is used again, its power increases.</td>
      <td><span class="boost">Round</span></td>
      <td>1 turn elapses</td>
    </tr>
    <tr>
      <td id="sealed" class="bad">Sealed</td>
      <td>None</td>
      <td>One or more moves are currently sealed.<br/>Sealed moves cannot be used.</td>
      <td><span class="redText">Seal Trap</span>, <span class="boost">Torment</span>, <span class="boost">Disable</span>,<br/><span class="boost">Imprison</span>, <span class="boss">Cursed Body</span></td>
      <td>Change floors, <span class="item">Max Elixir</span></td>
    </tr>
  </tbody>
</table>

# Dungeon

<table class="statusTable">
  <thead>
    <tr>
      <th>Status</th>
      <th>Category</th>
      <th>Effect</th>
      <th>Causes</th>
      <th>Cures / Counters</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td id="" class=""></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td id="" class=""></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td id="" class=""></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td id="" class=""></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td id="" class=""></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td id="" class=""></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td id="" class=""></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td id="" class=""></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td id="" class=""></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td id="" class=""></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td id="" class=""></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td id="" class=""></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td id="" class=""></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td id="" class=""></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td id="" class=""></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td id="" class=""></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td id="" class=""></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td id="" class=""></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td id="" class=""></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td id="" class=""></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td id="" class=""></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td id="" class=""></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td id="" class=""></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td id="" class=""></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td id="" class=""></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td id="" class=""></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td id="" class=""></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
