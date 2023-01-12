/************************************************************\
*  Equip Random Pet & Mount, v 2.1 updated by @benniefolyfe  *
*            Script contributions by @eyeshield77            *
*                Original script by anonymous                *
\************************************************************/

// Add your user ID and API token in this section. Leave the quotation marks and remove the brackets.

const User_ID = "[User ID]"
const API_Token = "[API Token]" // Do not share this with anyone

/*************************************************************\
*  You can choose to fully randomize or limit randomization.  *
*   If you'd like to limit the selection, use this section.   *
***************************************************************
*            Insert 'Type1|Type2|Type3' and so on.            *
*       Types can be egg and/or hatching potion types.        *
*           Example: 'Fox|Amber|Aether|Desert|Bear'           *
*  See the full list of options at the bottom of this script. *
\*************************************************************/

var petLimit = new RegExp('Bear|Amber|Nudibranch') // Add your desired pet types here. This will only affect the "include" functions.
var mountLimit = new RegExp('Wolf|Fox|Base') // Add your desired mount types here. This will only affect the "include" functions.

var petExcept = new RegExp('Skeleton|Zombie|White|Shade') // Add pet types you do NOT wish to include here. This will only affect the "except" functions.
var mountExcept = new RegExp('Skeleton|Zombie|White|Shade') // Add mount types you do NOT wish to include here. This will only affect the "except" functions.

/*********************************************\
*  No need to edit anything below this line.  *
\*********************************************/

// Sets parameters.

const Script_Name = "Equip Random Pet & Mount (Script)"
const Author_ID = "377a4d3d-c55c-48b8-9bf8-59b97480daf8"

var params = {
  "headers": {
    "x-client": Author_ID + " - " + Script_Name,
    "x-api-user": User_ID,
    "x-api-key": API_Token
  }
}

function randomPetandMount() {

  /** get the pets and mounts owned */

  params.method = "get";
  var response = UrlFetchApp.fetch("https://habitica.com/api/v3/user" + "?userFields=" + "items", params)
  var parsed = JSON.parse(response);
  var items = parsed.data.items;
  var pets = Object.keys(items.pets).filter(p => items.pets[p]);
  var mounts = Object.keys(items.mounts).filter(m => items.mounts[m]);

  /** randomly change the pet */

  if (pets.length > 0) {
    // remove current pet from list of new pet candidates
    if (pets.includes(items.currentPet)) {
      var currentPetIndex = pets.indexOf(items.currentPet);
      pets.splice(currentPetIndex, 1);
    }
    var randomPet = pets[Math.floor(Math.random() * pets.length)];
    params.method = "post";
    UrlFetchApp.fetch("https://habitica.com/api/v3/user/equip/pet/" + randomPet, params)
  }

  /** randomly change the mount */
  
  if (mounts.length > 0) {
    // remove current mount from list of new mount candidates
    if (mounts.includes(items.currentMount)) {
      var currentMountIndex = mounts.indexOf(items.currentMount);
      mounts.splice(currentMountIndex, 1);
    }
    var randomMount = mounts[Math.floor(Math.random() * mounts.length)];
    params.method = "post";
    UrlFetchApp.fetch("https://habitica.com/api/v3/user/equip/mount/" + randomMount, params)
  }
}

function randomPet() {

  /** get the pets owned */

  params.method = "get";
  var response = UrlFetchApp.fetch("https://habitica.com/api/v3/user" + "?userFields=" + "items", params)
  var parsed = JSON.parse(response);
  var items = parsed.data.items;
  var pets = Object.keys(items.pets).filter(p => items.pets[p]);

  /** randomly change the pet */

  if (pets.length > 0) {
    // remove current pet from list of new pet candidates
    if (pets.includes(items.currentPet)) {
      var currentPetIndex = pets.indexOf(items.currentPet);
      pets.splice(currentPetIndex, 1);
    }
    var randomPet = pets[Math.floor(Math.random() * pets.length)];
    params.method = "post";
    UrlFetchApp.fetch("https://habitica.com/api/v3/user/equip/pet/" + randomPet, params)
  }
}

function randomMount() {

  /** get the mounts owned */

  params.method = "get";
  var response = UrlFetchApp.fetch("https://habitica.com/api/v3/user" + "?userFields=" + "items", params)
  var parsed = JSON.parse(response);
  var items = parsed.data.items;
  var mounts = Object.keys(items.mounts).filter(m => items.mounts[m]);

  /** randomly change the mount */
  
  if (mounts.length > 0) {
    // remove current mount from list of new mount candidates
    if (mounts.includes(items.currentMount)) {
      var currentMountIndex = mounts.indexOf(items.currentMount);
      mounts.splice(currentMountIndex, 1);
    }
    var randomMount = mounts[Math.floor(Math.random() * mounts.length)];
    params.method = "post";
    UrlFetchApp.fetch("https://habitica.com/api/v3/user/equip/mount/" + randomMount, params)
  }
}

function limitPetandMount() {

  /** get the pets and mounts owned within the limits */

  params.method = "get";
  var response = UrlFetchApp.fetch("https://habitica.com/api/v3/user" + "?userFields=" + "items", params)
  var parsed = JSON.parse(response);
  var items = parsed.data.items;
  var pets = Object.keys(items.pets).filter(p => items.pets[p]);
      pets = pets.filter(name => name.match(petLimit)); 
  var mounts = Object.keys(items.mounts).filter(m => items.mounts[m]);
      mounts = mounts.filter(name => name.match(mountLimit)); 

  /** randomly change the pet within the limits */

  if (pets.length > 0) {
    // remove current pet from list of new pet candidates
    if (pets.includes(items.currentPet)) {
      var currentPetIndex = pets.indexOf(items.currentPet);
      pets.splice(currentPetIndex, 1);
    }
    var randomPet = pets[Math.floor(Math.random() * pets.length)];
    params.method = "post";
    UrlFetchApp.fetch("https://habitica.com/api/v3/user/equip/pet/" + randomPet, params)
  }

  /** randomly change the mount within the limits */
  
  if (mounts.length > 0) {
    // remove current mount from list of new mount candidates
    if (mounts.includes(items.currentMount)) {
      var currentMountIndex = mounts.indexOf(items.currentMount);
      mounts.splice(currentMountIndex, 1);
    }
    var randomMount = mounts[Math.floor(Math.random() * mounts.length)];
    params.method = "post";
    UrlFetchApp.fetch("https://habitica.com/api/v3/user/equip/mount/" + randomMount, params)
  }
}

function limitPet() {

  /** get the pets owned within the limits */

  params.method = "get";
  var response = UrlFetchApp.fetch("https://habitica.com/api/v3/user" + "?userFields=" + "items", params)
  var parsed = JSON.parse(response);
  var items = parsed.data.items;
  var pets = Object.keys(items.pets).filter(p => items.pets[p]);
      pets = pets.filter(name => name.match(petLimit)); 

  /** randomly change the pet within the limits */

  if (pets.length > 0) {
    // remove current pet from list of new pet candidates
    if (pets.includes(items.currentPet)) {
      var currentPetIndex = pets.indexOf(items.currentPet);
      pets.splice(currentPetIndex, 1);
    }
    var randomPet = pets[Math.floor(Math.random() * pets.length)];
    params.method = "post";
    UrlFetchApp.fetch("https://habitica.com/api/v3/user/equip/pet/" + randomPet, params)
  }
}

function limitMount() {

  /** get the mounts owned within the limits */

  params.method = "get";
  var response = UrlFetchApp.fetch("https://habitica.com/api/v3/user" + "?userFields=" + "items", params)
  var parsed = JSON.parse(response);
  var items = parsed.data.items;
  var mounts = Object.keys(items.mounts).filter(m => items.mounts[m]);
      mounts = mounts.filter(name => name.match(mountLimit)); 

  /** randomly change the mount within the limits */
  
  if (mounts.length > 0) {
    // remove current mount from list of new mount candidates
    if (mounts.includes(items.currentMount)) {
      var currentMountIndex = mounts.indexOf(items.currentMount);
      mounts.splice(currentMountIndex, 1);
    }
    var randomMount = mounts[Math.floor(Math.random() * mounts.length)];
    params.method = "post";
    UrlFetchApp.fetch("https://habitica.com/api/v3/user/equip/mount/" + randomMount, params)
  }
}

function exceptPetandMount() {

  /** get the pets and mounts owned minus the exceptions */

  params.method = "get";
  var response = UrlFetchApp.fetch("https://habitica.com/api/v3/user" + "?userFields=" + "items", params)
  var parsed = JSON.parse(response);
  var items = parsed.data.items;
  var pets = Object.keys(items.pets).filter(p => items.pets[p]);
      pets = pets.filter(name => !name.match(petExcept)); 
  var mounts = Object.keys(items.mounts).filter(m => items.mounts[m]);
      mounts = mounts.filter(name => !name.match(mountExcept)); 

  /** randomly change the pet minus the exceptions */

  if (pets.length > 0) {
    // remove current pet from list of new pet candidates
    if (pets.includes(items.currentPet)) {
      var currentPetIndex = pets.indexOf(items.currentPet);
      pets.splice(currentPetIndex, 1);
    }
    var randomPet = pets[Math.floor(Math.random() * pets.length)];
    params.method = "post";
    UrlFetchApp.fetch("https://habitica.com/api/v3/user/equip/pet/" + randomPet, params)
  }

  /** randomly change the mount minus the exceptions */
  
  if (mounts.length > 0) {
    // remove current mount from list of new mount candidates
    if (mounts.includes(items.currentMount)) {
      var currentMountIndex = mounts.indexOf(items.currentMount);
      mounts.splice(currentMountIndex, 1);
    }
    var randomMount = mounts[Math.floor(Math.random() * mounts.length)];
    params.method = "post";
    UrlFetchApp.fetch("https://habitica.com/api/v3/user/equip/mount/" + randomMount, params)
  }
}

function exceptPet() {

  /** get the pets owned within the limits */

  params.method = "get";
  var response = UrlFetchApp.fetch("https://habitica.com/api/v3/user" + "?userFields=" + "items", params)
  var parsed = JSON.parse(response);
  var items = parsed.data.items;
  var pets = Object.keys(items.pets).filter(p => items.pets[p]);
      pets = pets.filter(name => !name.match(petExcept)); 
  
  /** randomly change the pet within the limits */

  if (pets.length > 0) {
    // remove current pet from list of new pet candidates
    if (pets.includes(items.currentPet)) {
      var currentPetIndex = pets.indexOf(items.currentPet);
      pets.splice(currentPetIndex, 1);
    }
    var randomPet = pets[Math.floor(Math.random() * pets.length)];
    params.method = "post";
    UrlFetchApp.fetch("https://habitica.com/api/v3/user/equip/pet/" + randomPet, params)
  }
}

function exceptMount() {

  /** get the mounts owned within the limits */

  params.method = "get";
  var response = UrlFetchApp.fetch("https://habitica.com/api/v3/user" + "?userFields=" + "items", params)
  var parsed = JSON.parse(response);
  var items = parsed.data.items;
  var mounts = Object.keys(items.mounts).filter(m => items.mounts[m]);
      mounts = mounts.filter(name => !name.match(mountExcept)); 

  /** randomly change the mount within the limits */
  
  if (mounts.length > 0) {
    // remove current mount from list of new mount candidates
    if (mounts.includes(items.currentMount)) {
      var currentMountIndex = mounts.indexOf(items.currentMount);
      mounts.splice(currentMountIndex, 1);
    }
    var randomMount = mounts[Math.floor(Math.random() * mounts.length)];
    params.method = "post";
    UrlFetchApp.fetch("https://habitica.com/api/v3/user/equip/mount/" + randomMount, params)
  }
}

/***********************\

=== Generation 1 Eggs ===

BearCub
Cactus
Dragon
FlyingPig
Fox
LionCub
PandaCub
TigerCub
Wolf

=== Quest Eggs ===

Alligator
Armadillo
Axolotl
Badger
Beetle
Bunny
Butterfly
Cheetah
Cow
Cuttlefish
Deer
Dolphin
Egg
Falcon
Ferret
Frog
Gryphon
GuineaPig
Hedgehog
Hippo
Horse
Kangaroo
Monkey
Nudibranch
Octopus
Owl
Parrot
Peacock
Penguin
Pterodactyl
Rat
Robot
Rock
Rooster
Sabretooth
Seahorse
SeaSerpent
Sheep
Slime
Sloth
Snail
Snake
Spider
Squirrel
Treeling
TRex
Triceratops
Turtle
Unicorn
Velociraptor
Whale
Yarn

=== Special ===

Aether
Gryphon
Hippogriff
Jackalope
JackOLantern
MagicalBee
Mammoth
MantisShrimp
Orca
Phoenix
Turkey

=== Hatching Potions ===

Base
CottonCandyBlue
CottonCandyPink
Desert
Golden
Red
Shade
Skeleton
White
Zombie

=== Magic Potions ===

Amber
Aquatic
Aurora
AutumnLeaf
BirchBark
BlackPearl
Bronze
Celestial
Cerberus
Cupid
Dessert
Ember
Ethereal
Fairy
Floral
Fluorite
Frost
Ghost
Gilded
Glass
Glow
Gryphatrice
Holly
Hopeful
Hydra
IcySnow
Invisible
Moonglow
MossyStone
Onyx
Peppermint
Polar
PolkaDot
Porcelain
Rainbow
RoseQuartz
RoyalPurple
Ruby
SandSculpture
Shadow
Shimmer
Silver
SolarSystem
Spooky
StainedGlass
StarryNight
Sunset
Sunshine
Thunderstorm
Turquoise
Vampire
Veggie
Veteran
VirtualPet
Watery
Windup

\***********************/
