import React from 'react';
import OpenedSvg from '../images/opened';
import ClosedSvg from '../images/closed';
import config from '../../../config';
import Link from '../link';

const TreeNode = ({ className = '', setCollapsed, collapsed, url, title, items, ...rest }) => {
  const isCollapsed = collapsed[url];

  const collapse = () => {
    setCollapsed(url);
  };

  const hasChildren = items.length !== 0;

  let location;

  if (typeof document != 'undefined') {
    location = document.location;
  }
  const active =
    location && (location.pathname === url || location.pathname === config.gatsby.pathPrefix + url);

  const calculatedClassName = `${className} item ${active ? 'active' : ''}`;

  // crappy hardcoded fix to change sidebar item order and titles
  if (hasChildren) {
    switch (items[0].label) {
      case 'best-moves': // pokemon
        items[0] = { items:[], label: 'pokedex', title: 'Pokedex', url: '/pokemon/pokedex'};
        items[1] = { items:[], label: 'best-moves', title: 'Best Moves', url: '/pokemon/best-moves'};
        items[2] = { items:[], label: 'shiny-pokemon', title: 'Shiny', url: '/pokemon/shiny-pokemon'};
        break;
      case 'buried-relic': // dungeons
        items[0] = { items:[], label: 'buried-relic', title: 'Buried Relic', url: '/dungeons/buried-relic'};
        items[1] = { items:[], label: 'darknight-relic', title: 'Darknight Relic', url: '/dungeons/darknight-relic'};
        items[2] = { items:[], label: 'desert-region', title: 'Desert Region', url: '/dungeons/desert-region'};
        items[3] = { items:[], label: 'fantasy-strait', title: 'Fantasy Strait', url: '/dungeons/fantasy-strait'};
        items[4] = { items:[], label: 'far-off-sea', title: 'Far-Off Sea', url: '/dungeons/far-off-sea'};
        items[5] = { items:[], label: 'fiery-field', title: 'Fiery Field', url: '/dungeons/fiery-field'};
        items[6] = { items:[], label: 'frosty-forest', title: 'Frosty Forest', url: '/dungeons/frosty-forest'};
        items[7] = { items:[], label: 'grand-sea', title: 'Grand Sea', url: '/dungeons/grand-sea'};
        items[8] = { items:[], label: 'great-canyon', title: 'Great Canyon', url: '/dungeons/great-canyon'};
        items[9] = { items:[], label: 'howling-forest', title: 'Howling Forest', url: '/dungeons/howling-forest'};
        items[10] = { items:[], label: 'joyous-tower', title: 'Joyous Tower', url: '/dungeons/joyous-tower'};
        items[11] = { items:[], label: 'lapis-cave', title: 'Lapis Cave', url: '/dungeons/lapis-cave'};
        items[12] = { items:[], label: 'lightning-field', title: 'Lightning Field', url: '/dungeons/lightning-field'};
        items[13] = { items:[], label: 'magma-cavern', title: 'Magma Cavern', url: '/dungeons/magma-cavern'};
        items[14] = { items:[], label: 'marvelous-sea', title: 'Marvelous Sea', url: '/dungeons/marvelous-sea'};
        items[15] = { items:[], label: 'meteor-cave', title: 'Meteor Cave', url: '/dungeons/meteor-cave'};
        items[16] = { items:[], label: 'mt-blaze', title: 'Mt. Blaze', url: '/dungeons/mt-blaze'};
        items[17] = { items:[], label: 'mt-faraway', title: 'Mt. Faraway', url: '/dungeons/mt-faraway'};
        items[18] = { items:[], label: 'mt-freeze', title: 'Mt. Freeze', url: '/dungeons/mt-freeze'};
        items[19] = { items:[], label: 'mt-steel', title: 'Mt. Steel', url: '/dungeons/mt-steel'};
        items[20] = { items:[], label: 'mt-thunder', title: 'Mt. Thunder', url: '/dungeons/mt-thunder'};
        items[21] = { items:[], label: 'murky-cave', title: 'Murky Cave', url: '/dungeons/murky-cave'};
        items[22] = { items:[], label: 'northern-range', title: 'Northern Range', url: '/dungeons/northern-range'};
        items[23] = { items:[], label: 'northwind-field', title: 'Northwind Field', url: '/dungeons/northwind-field'};
        items[24] = { items:[], label: 'oddity-cave', title: 'Oddity Cave', url: '/dungeons/oddity-cave'};
        items[25] = { items:[], label: 'pitfall-valley', title: 'Pitfall Valley', url: '/dungeons/pitfall-valley'};
        items[26] = { items:[], label: 'purity-forest', title: 'Purity Forest', url: '/dungeons/purity-forest'};
        items[27] = { items:[], label: 'remains-island', title: 'Remains Island', url: '/dungeons/remains-island'};
        items[28] = { items:[], label: 'rock-path', title: 'Rock Path', url: '/dungeons/rock-path'};
        items[29] = { items:[], label: 'silent-chasm', title: 'Silent Chasm', url: '/dungeons/silent-chasm'};
        items[30] = { items:[], label: 'silver-trench', title: 'Silver Trench', url: '/dungeons/silver-trench'};
        items[31] = { items:[], label: 'sinister-woods', title: 'Sinister Woods', url: '/dungeons/sinister-woods'};
        items[32] = { items:[], label: 'sky-tower', title: 'Sky Tower', url: '/dungeons/sky-tower'};
        items[33] = { items:[], label: 'snow-path', title: 'Snow Path', url: '/dungeons/snow-path'};
        items[34] = { items:[], label: 'solar-cave', title: 'Solar Cave', url: '/dungeons/solar-cave'};
        items[35] = { items:[], label: 'southern-cavern', title: 'Southern Cavern', url: '/dungeons/southern-cavern'};
        items[36] = { items:[], label: 'stormy-sea', title: 'Stormy Sea', url: '/dungeons/stormy-sea'};
        items[37] = { items:[], label: 'thunderwave-cave', title: 'Thunderwave', url: '/dungeons/thunderwave-cave'};
        items[38] = { items:[], label: 'tiny-woods', title: 'Tiny Woods', url: '/dungeons/tiny-woods'};
        items[39] = { items:[], label: 'unown-relic', title: 'Unown Relic', url: '/dungeons/unown-relic'};
        items[40] = { items:[], label: 'uproar-forest', title: 'Uproar Forest', url: '/dungeons/uproar-forest'};
        items[41] = { items:[], label: 'waterfall-pond', title: 'Waterfall Pond', url: '/dungeons/waterfall-pond'};
        items[42] = { items:[], label: 'western-cave', title: 'Western Cave', url: '/dungeons/western-cave'};
        items[43] = { items:[], label: 'wish-cave', title: 'Wish Cave', url: '/dungeons/wish-cave'};
        items[44] = { items:[], label: 'wyvern-hill', title: 'Wyvern Hill', url: '/dungeons/wyvern-hill'};
        break;
      default:
        // do nothing
    }
  }

  return (
    <li className={calculatedClassName}>
      {title && (
        <Link to={url}>
          {title}
          {!config.sidebar.frontLine && title && hasChildren ? (
            <button onClick={collapse} aria-label="collapse" className="collapser">
              {!isCollapsed ? <OpenedSvg /> : <ClosedSvg />}
            </button>
          ) : null}
        </Link>
      )}

      {!isCollapsed && hasChildren ? (
        <ul>
          {items.map((item, index) => (
            <TreeNode
              key={item.url + index.toString()}
              setCollapsed={setCollapsed}
              collapsed={collapsed}
              {...item}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default TreeNode;
