import { React, useState } from "react";

const androidGames = [
  "FIFA Soccer",
  "PewDiePie's Tuber Simulator",
  "Wheel of Fortune: TV Game",
  "Slither.io",
  "Subway Surfers",
  "Kill Shot Bravo: 3D Sniper FPS",
  "Pokémon GO",
  "Toy Blast",
  "Block! Hexa Puzzle",
  "Roblox",
  "Among Us",
  "Candy Crush Saga",
  "Clash Royale",
  "Plants vs. Zombies",
  "Temple Run",
  "Call of Duty: Mobile",
  "Asphalt 9: Legends",
  "Brawl Stars",
  "Angry Birds 2",
  "FarmVille 2: Country Escape",
  "Gardenscapes",
  "PUBG Mobile",
  "8 Ball Pool",
  "Words With Friends",
  "Mario Kart Tour",
  "Hearthstone",
  "Castle Clash",
  "Trivia Crack",
  "Subway Princess Runner",
  "Fishing Clash",
  "Coin Master",
  "Jetpack Joyride",
  "Bowmasters",
  "Kingdom Rush",
  "Paper.io 2",
  "Dumb Ways to Die",
  "Ludo King",
  "World of Tanks Blitz",
  "Shadow Fight 2",
  "Rise of Kingdoms",
  "War Robots",
  "Top War: Battle Game",
  "TETRIS",
  "Zombs Royale",
  "Garena Free Fire",
  "Blade Bound",
  "Plants vs. Zombies 2",
  "Idle Heroes",
  "Race Master 3D",
  "Zombie Tsunami",
  "Bus Simulator Indonesia",
  "Street Fighter IV Champion Edition",
  "Marvel Contest of Champions",
  "Bike Race Free",
  "Grand Theft Auto: Vice City",
  "World War Heroes",
  "Doodle Jump",
  "Mordhau",
  "Paper.io",
  "Zombie Catchers",
  "Alto’s Odyssey",
  "Super Mario Run",
  "MadOut2 BigCityOnline",
  "Space Frontier",
  "Sniper 3D Gun Shooter",
  "Magic Tiles 3",
  "Hill Climb Racing",
  "Fast Racing 3D",
  "Tank Stars",
  "Hungry Shark Evolution",
  "Lineage 2 Revolution",
  "LifeAfter",
  "GTA: San Andreas",
  "Jurassic World Alive",
  "Asphalt 8: Airborne",
  "Flow Free",
  "King of Avalon",
  "World of Warships Blitz",
  "Angry Birds Friends",
  "Dragon City",
  "The Simpsons: Tapped Out",
  "Sonic Dash",
  "Dumb Ways to Die 2",
  "Candy Crush Soda Saga",
  "Farm Heroes Saga",
  "My Talking Tom",
  "Dream League Soccer",
  "Subway Surf",
  "Tiny Room Stories",
  "Bingo Blitz",
  "Stickman Legends",
  "Sky Dancer Run",
  "Hyper Jump",
  "Army Men Strike",
  "Warplane Inc",
  "Ninja Arashi",
  "Monster Legends",
  "AdventureQuest 3D",
  "Mobile Legends: Bang Bang",
  "Badland",
  "Guns of Boom",
  "Clash of Clans",
  "The Battle Cats",
  "Rumble Stars Football",
  "Survival Arena",
  "Plants vs. Zombies Heroes",
  "Mastercraft",
  "Criminal Case",
  "Puzzle & Dragons",
  "Color Road",
  "Top War",
  "Rising Supergates",
  "Super Mechs",
  "Mino Monsters",
  "Xtreme Motorbikes",
  "Ocean Is Home",
  "Grow Castle",
  "War Commander: Rogue Assault",
  "Sniper Strike",
  "Pixel Gun 3D",
  "Dragon Mania Legends",
  "Neon Legend",
  "Black Desert Mobile",
  "Kingdom Defense",
  "Agent Dash",
  "Bubbu Restaurant",
  "Kingdom Rush Vengeance",
  "Clash of Kings",
  "Lost Island: Blast Adventure",
  "Boom Beach",
  "Kingdom Rush Frontiers",
  "Goat Simulator",
  "Epic Seven",
  "Medieval: Total War",
  "Super Mario Bros",
  "Galaxy Attack: Alien Shooter",
  "Star Wars: Galaxy of Heroes",
  "Sonic Dash 2",
  "Boomerang Fu",
  "Star Wars Battlefront",
  "Madden NFL Mobile",
  "Final Fantasy Brave Exvius",
  "Traffic Rider",
  "Star Wars: Knights of the Old Republic",
  "Dragon Ball Legends",
  "Critical Ops",
  "Worms 3",
  "Hill Climb Racing 2",
  "Grand Battle Royale",
  "Despicable Me: Minion Rush",
  "N.O.V.A. Legacy",
  "Transformers: Forged to Fight",
  "Angry Birds Star Wars",
  "War Robots Multiplayer Battles",
  "Superhero Fight",
  "Metal Slug",
  "Stick War: Legacy",
  "Dinosaur War",
  "Dynasty Warriors Unleashed",
  "Ninja Fight",
  "Shadowgun Legends",
  "The Walking Dead: No Man’s Land",
  "Stickman Soccer 2016",
  "Pixel Dungeon",
  "Sniper 3D Assassin",
  "Redline Rush",
  "Hero Hunters",
  "Warship Battle",
  "Jurassic Park Builder",
  "Shadow Fight 3",
  "Blade & Soul Revolution",
  "Chaos Battle League",
  "Dark Age: Undead Lords",
  "Zombies: Battle Royale",
  "Survival Simulator",
  "Crossy Road",
  "Left to Survive",
  "Exos Heroes",
  "Gun War: Shooting Games",
  "Ludo Star",
  "Zombie Frontier 3",
  "Shadow of Death: Dark Knight",
  "Swamp Attack",
  "Crying Suns",
  "Last Shelter: Survival",
  "Black Desert Online Mobile",
  "FIFA Mobile Soccer",
  "Sea Battle 2",
  "Strategy & Tactics",
  "Lords Mobile",
  "Plants vs. Zombies 3",
  "Dragon Raja",
  "Grand Theft Auto: Chinatown Wars",
  "Stickman Warriors",
  "Infinity Kingdom",
  "Tales of Crestoria",
  "Fast & Furious: Takedown",
  "The Room",
  "The Last of Us",
  "Warframe",
  "CyberConnect2",
  "Samurai II: Vengeance",
  "Rage of Bahamut",
  "Dr. Driving 2",
  "Resogun",
  "Puzzles & Survival",
  "War Legends",
  "Clash of Lords 2",
  "Mighty Battles",
  "Soul Knight",
  "Anki Drive",
  "Noodlecake Studios",
  "Little Big Planet",
  "Dragon Ball Z Dokkan Battle",
  "Vikings: War of Clans",
  "Heroes of Order & Chaos",
  "Modern Combat Versus",
  "Gunship Battle: Helicopter 3D",
  "Super Sniper",
  "Warhammer 40,000: Freeblade",
  "Iron Blade: Medieval Legends",
  "Ragnarok M: Eternal Love",
  "Battle of Zombies",
  "Mighty Quest For Epic Loot",
  "WWE Champions",
  "Gladiator Heroes",
  "Rising Storm",
  "Art of Conquest",
  "Last Day on Earth: Survival",
  "PUBG Mobile Lite",
  "One Piece Treasure Cruise",
  "Elite Dangerous",
  "Astracraft",
  "Survival Craft",
  "Survival Island",
  "Hades",
  "Saints Row",
  "Endless Frontier",
  "The Wolf Among Us",
  "Bloons TD 5",
  "Outfit7",
  "Day R Survival",
  "The Sims FreePlay",
  "Idle Miner Tycoon",
  "Hay Day",
  "Pixel Dungeon",
  "Tower Defense",
  "Alien Creeps TD",
  "Rush Wars",
  "Homerun Battle 2",
  "Sea of Thieves",
  "Escape from Tarkov",
  "Dungeon Hunter 5",
  "Kingdom Wars",
  "F1 Mobile Racing",
  "Knights & Dragons",
  "Kung Fu Pet",
  "Forza Street",
  "Dragon Soul",
  "Kingdom Rush Origins",
  "Worms Armageddon",
  "Warfare 1944",
  "Darkest Dungeon",
  "Space Marshals",
  "Attack on Titan",
  "World War 3",
  "Brawlhalla",
  "Golf Clash",
  "Yugioh Duel Links",
  "Warpath",
  "Idle Supermarket Tycoon",
  "Tower Defense King",
  "Brave Frontier",
  "Farm Town",
  "Jungle Heat",
  "Shadow Legends",
  "FIFA 23 Mobile",
  "Sea Battle",
  "Neon Blitz",
  "Kingdom Guard",
  "Worms Rumble",
  "Heroes Arena",
  "War Dragons",
  "Legacy of Discord",
  "Battlefield Mobile",
  "Darkness Rises",
  "Dragon X",
  "Battle of Polytopia",
  "League of Legends",
  "Bus Simulator Ultimate",
  "Combat Master",
  "Block Craft 3D",
  "Realm Royale",
  "Dead Target: Zombie",
  "Matchington Mansion",
  "Real Racing 3",
  "Tom Clancy’s Elite Squad",
  "Battle Royale",
  "Star Wars",
];

function Ex4SearchFilter() {
  var [filteredGames, setFilteredGames] = useState(androidGames);
  const filter = (e) => {
    const keyword = e.target.value;
    if (keyword !== "") {
      const filterData = androidGames.filter((game) => {
        return game.toLowerCase().includes(keyword.toLowerCase());
      });
      setFilteredGames(filterData);
    } else {
      setFilteredGames(androidGames);
    }
  };
  return (
    <div className="ex4">
      <div>
        <input
          className="filter-bar"
          placeholder="Filter Things Out!!!"
          type="search"
          onChange={filter}
        ></input>
      </div>
      <div className="allGames">
        {filteredGames && filteredGames.length > 0 ? (
          filteredGames.map((games) => <div className="games">{games}</div>)
        ) : (
          <h3>No Such Game Exists!!!</h3>
        )}
      </div>
    </div>
  );
}
export default Ex4SearchFilter;
