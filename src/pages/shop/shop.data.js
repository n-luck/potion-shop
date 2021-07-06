const SHOP_DATA = [
    {
      id: 1,
      title: 'Healing Potions',
      routeName: 'healingpotions',
      items: [
        {
          id: 1,
          name: 'Potion of Healing',
          imageUrl: 'https://i.imgur.com/AISaD38.jpg',
          price: 50,
          currency: "GP",
          rarity: "Common",
          type: "Ingested",
          effects: "HP regained: 2d4 + 2",
          pdpUrl: "healingpotions/potionofhealing"
        },
        {
          id: 2,
          name: 'Potion of Greater Healing',
          imageUrl: 'https://i.imgur.com/FZpv4ba.jpg',
          price: 250,
          currency: "GP",
          rarity: "Uncommon",
          type: "Ingested",
          effects: "HP regained: 4d4 + 4",
          pdpUrl: "healingpotions/potionofgreaterhealing"      
        },
        {
          id: 3,
          name: 'Potion of Superior Healing',
          imageUrl: 'https://i.imgur.com/RHAZgNn.jpg',
          price: 2500,
          currency: "GP",
          rarity: "Rare",
          type: "Ingested",
          effects: "HP regained: 8d4 + 8",
          pdpUrl: "healingpotions/potionofsuperiorhealing"
        },
        {
          id: 4,
          name: 'Potion of Supreme Healing',
          imageUrl: 'https://i.imgur.com/C7kjmgs.jpg',
          price: 25000,
          currency: "GP",
          rarity: "Very rare",
          type: "Ingested",
          effects: "HP regained: 10d4 + 20",
          pdpUrl: "healingpotions/potionofsupremehealing"
        }
      ]
    },
    {
      id: 2,
      title: 'Poisons',
      routeName: 'poisons',
      items: [
        {
          id: 1,
          name: 'The Poison. The Poison for Kuzko. The poison chosen specifically to kill Kuzko. Kuzko\'s poison',
          imageUrl: 'https://i.imgur.com/fqPsbEM.jpg',
          price: 220,
          currency: "GP",
          type: "Ingested",
          effects: "Turns you into a llama. Oh well.",
          pdpUrl: "kuzkospoison"
        },
        {
          id: 2,
          name: 'Assassin’s blood',
          imageUrl: 'https://i.imgur.com/rm8cORm.jpg',
          price: 150,
          currency: "GP",
          type: "Ingested",
          effects: "A creature subjected to this poison must make a DC 10 Constitution saving throw. On a failed save, it takes 6 (1d12) poison damage and is Poisoned for 24 hours. On a successful save, the creature takes half damage and isn’t Poisoned.",
          pdpUrl: "assassinsblood"
        },
        {
          id: 3,
          name: 'Crawler mucus',
          imageUrl: 'https://i.imgur.com/wFoBFzx.jpg',
          price: 200,
          currency: "GP",
          type: "Contact",
          effects: "This poison must be harvested from a dead or Incapacitated crawler. A creature subjected to this poison must succeed on a DC 13 Constitution saving throw or be Poisoned for 1 minute. The Poisoned creature is Paralyzed. The creature can repeat the saving throw at the end of each of its turns, Ending the Effect on itself on a success.",
          pdpUrl: "crawlermucus"
        },
        {
          id: 4,
          name: 'Drow poison',
          imageUrl: 'https://i.imgur.com/D2pAZGH.png',
          price: 200,
          currency: "GP",
          type: "Injury",
          effects: "This poison is typically made only by the drow, and only in a place far removed from sunlight. A creature subjected to this poison must succeed on a DC 13 Constitution saving throw or be Poisoned for 1 hour. If the saving throw fails by 5 or more, the creature is also Unconscious while Poisoned in this way. The creature wakes up if it takes damage or if another creature takes an action to shake it awake.",
          pdpUrl: "drowpoison"
        },
        {
          id: 5,
          name: 'Essence of ether',
          imageUrl: 'https://i.imgur.com/0TRBg4K.jpg',
          price: 300,
          currency: "GP",
          type: "Inhaled",
          effects: "A creature subjected to this poison must succeed on a DC 15 Constitution saving throw or become Poisoned for 8 hours. The Poisoned creature is Unconscious. The creature wakes up if it takes damage or if another creature takes an action to shake it awake.",
          pdpUrl: "essenceofether"
        },
        {
          id: 6,
          name: 'Malice',
          imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
          price: 250,
          currency: "GP",
          type: "Inhaled",
          effects: " A creature subjected to this poison must succeed on a DC 15 Constitution saving throw or become Poisoned for 1 hour. The Poisoned creature is Blinded.",
          pdpUrl: "malice"
        },
        {
          id: 7,
          name: 'Midnight tears',
          imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
          price: 1500,
          currency: "GP",
          type: "Ingested",
          effects: "A creature that ingests this poison suffers no Effect until the stroke of midnight. If the poison has not been neutralized before then, the creature must succeed on a DC 17 Constitution saving throw, taking 31 (9d6) poison damage on a failed save, or half as much damage on a successful one.",
          pdpUrl: "midnighttears"
        },
        {
          id: 8,
          name: ' Purple Worm poison',
          imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
          price: 2000,
          currency: "GP",
          type: "Injury",
          effects: "This poison must be harvested from a dead or Incapacitated Purple Worm. A creature subjected to this poison must make a DC 19 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one.",
          pdpUrl: "purplewormpoison"
        }
      ]
    },
    {
      id: 3,
      title: 'Magic Potions',
      routeName: 'magicpotions',
      items: [
        {
          id: 1,
          name: 'Potion of Flying',
          imageUrl: 'https://i.imgur.com/ZOfg3N4.jpg',
          price: 7000,
          currency: "GP",
          rarity: "Very rare",
          effects: "When you drink this potion, you gain a flying speed equal to your walking speed for 1 hour and can hover. If you’re in the air when the potion wears off, you fall unless you have some other means of staying aloft. This potion’s clear liquid floats at the top of its container and has cloudy white impurities drifting in it.",
          pdpUrl: "potionofflying"
        },
        {
          id: 2,
          name: 'Potion of Growth',
          imageUrl: 'https://i.imgur.com/6cmw7hL.jpg',
          price: 400,
          currency: "GP",
          rarity: "Uncommon",
          effects: "When you drink this potion, you gain the “enlarge” effect of the enlarge/reduce spell for 1d4 hours (no concentration required). The red in the potion’s liquid continuously expands from a tiny bead to color the clear liquid around it and then contracts. Shaking the bottle fails to interrupt this process.",
          pdpUrl: "potionofgrowth"
        },
        {
          id: 3,
          name: 'Potion of Invisibility',
          imageUrl: 'https://i.imgur.com/ChsVH1d.jpg',
          price: 10000,
          currency: "GP",
          rarity: "Very rare",
          effects: "This potion’s container looks empty but feels as though it holds liquid. When you drink it, you become invisible for 1 hour. Anything you wear or carry is invisible with you. The effect ends early if you attack or cast a spell.",
          pdpUrl: "potionofinvisibility"
        },
        {
          id: 4,
          name: 'Potion of Mind Reading',
          imageUrl: 'https://i.imgur.com/SM8Knox.jpg',
          price: 2500,
          currency: "GP",
          rarity: "Rare",
          effects: "When you drink this potion, you gain the effect of the detect thoughts spell (save DC 13). The potion’s dense, purple liquid has an ovoid cloud of pink floating in it.",
          pdpUrl: "potionofmindreading"
        },
        {
          id: 5,
          name: 'Potion of Water Breathing',
          imageUrl: 'https://i.imgur.com/KNHukXJ.jpg',
          price: 200,
          currency: "GP",
          effects: "You can breathe underwater for 1 hour after drinking this potion. Its cloudy green fluid smells of the sea and has a jellyfish-like bubble floating in it.",
          rarity: "Uncommon",
          pdpUrl: "potionofwaterbreathing"
        }
      ]
    },
    {
      id: 4,
      title: 'Spell Scrolls',
      routeName: 'spellscrolls',
      items: [
        {
          id: 1,
          name: 'Scroll of Haste',
          imageUrl: 'https://i.imgur.com/3gTmqyn.jpg',
          price: 500,
          currency: "GP",
          effects: "Choose a willing creature that you can see within range. Until the spell ends, the target's speed is doubled, it gains a +2 bonus to AC, it has advantage on Dexterity saving throws, and it gains an additional action on each of its turns. That action can be used only to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action. When the spell ends, the target can't move or take actions until after its next turn, as a wave of lethargy sweeps over it.",
          pdpUrl: "scrollofhaste"
        },
        {
          id: 2,
          name: 'Scroll of Identify',
          imageUrl: 'https://i.imgur.com/BbUy0M3.jpg',
          price: 100,
          currency: "GP",
          effects: "You choose one object that you must touch throughout the casting of the spell. If it is a magic item or some other magic-imbued object, you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any. You learn whether any spells are affecting the item and what they are. If the item was created by a spell, you learn which spell created it. If you instead touch a creature throughout the casting, you learn what spells, if any, are currently affecting it.",
          pdpUrl: "scrollofidentify"
        },
        {
          id: 3,
          name: 'Scroll of Freedom of Movement',
          imageUrl: 'https://i.imgur.com/5yZDnqh.jpg',
          price: 600,
          currency: "GP",
          effects: "You touch a willing creature. For the duration, the target's movement is unaffected by difficult terrain, and spells and other magical effects can neither reduce the target's speed nor cause the target to be paralyzed or restrained.",
          pdpUrl: "scrolloffreedomofmovement"
        },
        {
          id: 4,
          name: 'Scroll of Gentle Repose',
          imageUrl: 'https://i.imgur.com/cpBlADs.jpg',
          price: 250,
          currency: "GP",
          effects: "You touch a corpse or other remains. For the duration, the target is protected from decay and can't become undead.",
          pdpUrl: "scrollofgentlerepose"
        },
        {
          id: 5,
          name: 'Scroll of Tiny Hut',
          imageUrl: 'https://i.imgur.com/yz1fkyR.jpg',
          price: 500,
          currency: "GP",
          effects: "A 10-foot-radius immobile dome of force springs into existence around and above you and remains stationary for the duration. The spell ends if you leave its area.",
          pdpUrl: "scrolloftinyhut"
        },
        {
          id: 6,
          name: 'Scroll of Augury',
          imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          price: 150,
          currency: "GP",
          effects: "By casting gem-inlaid sticks, rolling dragon bones, laying out ornate cards, or employing some other divining tool, you receive an omen from an otherworldly entity about the results of a specific course of action that you plan to take within the next 30 minutes. ",
          pdpUrl: "scrollofaugury"
        },
        {
          id: 7,
          name: 'Scroll of Polymorph',
          imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
          price: 1000,
          currency: "GP",
          effects: "This spell transforms a creature that you can see within range into a new form. An unwilling creature must make a Wisdom saving throw to avoid the effect. The spell has no effect on a shapechanger or a creature with 0 hit points.",
          pdpUrl: "scrollofpolymorph"
        }
      ]
    },
    {
      id: 5,
      title: 'Wondrous Items',
      routeName: 'wondrousitems',
      items: [
        {
          id: 1,
          name: 'Deck of Many Things',
          imageUrl: 'https://i.imgur.com/xegA44B.jpg',
          price: 500000,
          currency: "GP",
          rarity: "Wondrous",
          effects: "Usually found in a box or pouch, this deck contains a number of cards made of ivory or vellum. Most (75 percent) of these decks have only thirteen cards, but the rest have twenty-two.",
          pdpUrl: "deckofmanythings"
        },
        {
          id: 2,
          name: 'Alchemy Jug',
          imageUrl: 'https://i.imgur.com/jjT5OXf.jpg',
          price: 100,
          currency: "GP",
          rarity: "Uncommon",
          effects: "This ceramic jug appears to be able to hold a gallon of liquid and weighs 12 pounds whether full or empty. Sloshing sounds can be heard from within the jug when it is shaken, even if the jug is empty.",
          pdpUrl: "alchemyjug"
        },
        {
          id: 3,
          name: 'Amulet of the Drunkard',
          imageUrl: 'https://i.imgur.com/NTAU5yi.jpg',
          price: 150,
          currency: "GP",
          rarity: "Uncommon",
          effects: "This amulet smells of old, ale-stained wood. While wearing it, you can regain 4d4 + 4 hit points when you drink a pint of beer, ale, mead, or wine. Once the amulet has restored hit points, it can’t do so again until the next dawn.",
          pdpUrl: "amuletofthedrunkard"
        },
        {
          id: 4,
          name: 'Boots of Speed',
          imageUrl: 'https://i.imgur.com/btZI1qi.jpg',
          price: 3000,
          currency: "GP",
          rarity: "Rare",
          effects: "While you wear these boots, you can use a bonus action and click the boots' heels together. If you do, the boots double your walking speed, and any creature that makes an opportunity attack against you has disadvantage on the attack roll. If you click your heels together again, you end the effect.",
          pdpUrl: "bootsofspeed"
        },
        {
          id: 5,
          name: 'Cloak of Elvenkind',
          imageUrl: 'https://i.imgur.com/0v7ocdF.jpg',
          price: 500,
          currency: "GP",
          rarity: "Uncommon",
          effects: "While you wear this cloak with its hood up, Wisdom (Perception) checks made to see you have disadvantage, and you have advantage on Dexterity (Stealth) checks made to hide, as the cloak's color shifts to camouflage you. Pulling the hood up or down requires an action.",
          pdpUrl: "cloakofelvenkind"
        },
        {
          id: 6,
          name: 'Lantern of Revealing',
          imageUrl: 'https://i.imgur.com/2pZiJ19.jpg',
          price: 350,
          currency: "GP",
          rarity: "Uncommon",
          effects: "While lit, this hooded lantern burns for 6 hours on 1 pint of oil, shedding bright light in a 30-foot radius and dim light for an additional 30 feet. Invisible creatures and objects are visible as long as they are in the lantern's bright light. You can use an action to lower the hood, reducing the light to dim light in a 5-foot radius.",
          pdpUrl: "lanternofrevealing"
        }
      ]
    }
  ];

  export default SHOP_DATA;