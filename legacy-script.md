==== Auto Change Pet and Mount Randomly ===

''Maintained by [[User:Benniefolyfe|Benniefolyfe]]''

This script will change your pet and mount randomly. It will not do anything if you have only 1 or 0 pet / mount.
You just need to set your own User ID and API Token first in place of #HabiticaUserID# and #HabiticaAPIToken#, and then set the trigger with the interval you prefer. (I set it to daily change, during the night, so the morning gives me a new surprise).
If you want to change only the pet or only the mount, remove the block of code below the appropriate "randomly change the pet/mount" comment.

* Go to script.google.com. If this is your first script, this will automatically create a new Google script for you and open an editor for it. Otherwise, edit an existing project by clicking the pencil icon next to it, or create another.
* Paste the code snippet below into the editor, replacing the spaces marked #HabiticaUserID# and #HabiticaAPIToken# with [[API Options|Habitica User ID and API Token]] (leave the quotes). These can be found under the API tab in your Habitica settings.

  function randomlyChangePetAndMount() {
    var habId = "#HabiticaUserID#";  // add here your User ID
    var habToken = "#HabiticaAPIToken#";  // add here your API Token
    var paramsTemplate = {
      "headers": {
        "x-api-user": habId,
        "x-api-key": habToken
      }
    }
 
    // get the pets and mounts owned 
    paramsTemplate.method = "get";
    var response = UrlFetchApp.fetch("https://habitica.com/api/v3/user" + "?userFields=" + "items", paramsTemplate)
    var parsed = JSON.parse(response);
    var items = parsed.data.items;
    var pets = Object.keys(items.pets).filter(p => items.pets[p]);
    var mounts = Object.keys(items.mounts).filter(m => items.mounts[m]);
 
    // randomly change the pet
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
 
    // randomly change the mount
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

* If you are interested only to the change of the pet remove the block of code below "randomly change the mount". 
* If you are interested only to the change of the mount remove the block of code below "randomly change the pet.
* Now add a trigger. Under ''Edit'', select ''Current project's triggers''. Then add a trigger that make the script run on your preferred schedule.
