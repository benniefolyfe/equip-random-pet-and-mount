function randomlyChangePetAndMount() {
  var habId = "#HabiticaUserID#";  // add here your User ID
  var habToken = "#HabiticaAPIToken#";  // add here your API Token
  var paramsTemplate = {
    "headers": {
      "x-api-user": habId,
      "x-api-key": habToken
    }
  }

  /* get the pets and mounts owned */
  paramsTemplate.method = "get";
  var response = UrlFetchApp.fetch("https://habitica.com/api/v3/user" + "?userFields=" + "items", paramsTemplate)
  var parsed = JSON.parse(response);
  var items = parsed.data.items;
  var pets = Object.keys(items.pets).filter(p => items.pets[p]);
  var mounts = Object.keys(items.mounts).filter(m => items.mounts[m]);

  /* randomly change the pet */
  if (pets.length > 1) {
    // remove current pet from list of new pet candidates
    if (pets.includes(items.currentPet)) {
      var currentPetIndex = pets.indexOf(items.currentPet);
      pets.splice(currentPetIndex, 1);
    }
    var randomPet = pets[Math.floor(Math.random() * pets.length)];
    paramsTemplate.method = "post";
    UrlFetchApp.fetch("https://habitica.com/api/v3/user/equip/pet/" + randomPet, paramsTemplate)
  }

  /* randomly change the mount */
  if (mounts.length > 1) {
    // remove current mount from list of new mount candidates
    if (mounts.includes(items.currentMount)) {
      var currentMountIndex = mounts.indexOf(items.currentMount);
      mounts.splice(currentMountIndex, 1);
    }
    var randomMount = mounts[Math.floor(Math.random() * mounts.length)];
    paramsTemplate.method = "post";
    UrlFetchApp.fetch("https://habitica.com/api/v3/user/equip/mount/" + randomMount, paramsTemplate)
  }
}
