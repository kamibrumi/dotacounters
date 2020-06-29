# Dota 2 Counters

# Award Winning Project @ Data Day Grind'20 hosted by Major League Hacking.

[Devpost + Demo Video Link](https://devpost.com/software/dotacounters)
[Data Day Grind Closing Ceremony + Winners Announcement](https://youtu.be/GTk9msN4pTo?t=3919)

## Elevator Pitch
Dota 2 is a highly complex, highly acclaimed computer game. Before each game 10 players, distributed in two opposing teams, are involved in a several minutes-long drafting phase in which they choose heroes.

Both novice and expert players of this game struggle to learn new ability combos that will surprise their opponents and help them earn victories and game experience. We have developed a dataset and a visualization tool that is capable of rendering the over 7000 relationships between the 119 heroes and guide each one of the trillions of possible Dota 2 draft phases (Combinations(119, 10) = 10^14).

We focus on the hard problem omitted by other Dota 2 pickers which is "why a hero is more effective than another" rather than just create a ranking of possibly effective heroes.

## Problem
Dota 2 is a multiplayer online battle arena (MOBA) video game developed and published by Valve. It is an internationally acclaimed game for its rewarding gameplay and is regarded by many top-notch gaming magazines as one of the top games of all times.

Dota 2 has been criticized for its complexity and the steep learning curve required to master the game. One of its most complex parts is related to choosing a hero to play and identifying abilities that are effective against the enemy heroes. Before a match starts, there is a "drafting phase" when the 10 players choose what heroes to play taking turns. Usually the decision about what heroes to pick is guided by the user's prior experience on what heroes are effective against similar hero combos. Since there are 119 heroes to pick from, this is a daunting task, and very often the players don't have the opportunity discover during the drafting phase what abilities might work against other heroes during the drafting phase and much less during the game.

# Solution

The visualization tool "Dota 2 Counters" we have developed has the objective of not only instructing what heroes are effective against other heroes but more importantly WHY. The related work in Dota Counter Pickers is focused exclusivelly on sorting the best hero choices according to their statistical likelihood of victory against a particular enemy hero combo. However they don't instruct the player regarding which opponent heroes they should consistently target during the match and what tactics will be effective.

## Methodology

We have developed a graph-based Counters Picker technology that enables the user to pick a hero, quickly evaluate strategies that might or might not work and learn how to the game more effectivelly.

The Counter Picker graph has heroes in its nodes and abilities a hero can cast against enemy heroes. We had to build a dataset about how heroes are related to each other via their abilities. The existing Dota 2 datasets are already targeting the same problem of what heroes to pick via a win-lose ratio of some hero combos against other hero combos rather than explain these victory-loss ratios by atributting match characteristics to the usage of particular abilities.

The dataset was built using information on https://dota2.gamepedia.com.  An example of Dota 2 counters webpage for just one (Bristleback) of the 119 heroes is available https://dota2.gamepedia.com/Bristleback/Counters.

We have distilled the information on a subset of the heroes on dota2.gamepedia.com and organized the information in a graph fasion. We have used the d3 javascript visualization library to render the graph together with the library of heroes.

The graph is visible on the lower part of the screen while the user can directly access detailed information about each hero by clicking on the upper part of the screen.

## Future work

Support for all the heroes in Dota 2 is planned as well as edge and node occlusion for unselected heroes. This work was completely developed during this hackathon and it represents 100% original work.

## How to execute the code
Just clone the repo and double click on the html file (really!).
