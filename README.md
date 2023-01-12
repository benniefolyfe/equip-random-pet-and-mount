# Equip Random Pet & Mount
_Updated by [@benniefolyfe](https://habitica.com/profile/377a4d3d-c55c-48b8-9bf8-59b97480daf8)_, _code contribution by [@eyeshield77](https://habitica.com/profile/0a005b3a-3ec1-48ca-ae1f-78bcc0e59a2b)_

This script will change your pet and mount randomly if you have more than 1 pet. It can either be run manually or automatically using a trigger.

Please visit the [Equip Random Pet & Mount](https://habitica.fandom.com/wiki/Google_Apps_Script#Setup_Instructions) Habitica Wiki page for detailed setup instructions.

## Tips
* Set a trigger to change your pet daily during the night, so the morning gives you a new surprise.
* Use the <code>petLimit</code> and <code>mountLimit</code> variables and the <code>limit</code> functions to choose what types of pets and mounts you want to randomize.
* Use the <code>petExcept</code> and <code>mountExcept</code> variables and the <code>except</code> functions to exclude types of pets you don't want to randomize. This can be helpful in avoiding phobias.

## Code
You can find the code here: [Google Apps Script](https://script.google.com/home/projects/13ZTuRtnpVJfDgeZKYdaLEfu5Vgz6NjQdji7K9t0xgnrOXApgEBcOZsIm/edit) | [GitHub](https://github.com/benniefolyfe/equip-random-pet-and-mount/blob/main/script.js) | [raw code](https://raw.githubusercontent.com/benniefolyfe/equip-random-pet-and-mount/main/script.js)

## Modifications from prior version
 
* Added 8 function options
* Added options to (1) limit to or (2) exclude specific types of pets and mounts _([1] code contributed by [@eyeshield77](https://habitica.com/profile/0a005b3a-3ec1-48ca-ae1f-78bcc0e59a2b), [2] request made by [@Polyglottericus](https://habitica.com/profile/128c50f0-3f5c-47aa-94b9-f293a4920d0f))_
* Redesigned script and variable names to make use more intuitive
* Added a list of egg, potion, and special types to use in operating the script
* Updated instructions in the Wiki to be more comprehensive
