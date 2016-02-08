# 2048 with Rails
You have dealt with an understood some of the major challenges with creating a 2048 game. Now, we are going to take it a step further. We are going to integrate the open source 2048 code into our own Rails application to see how we can use these two pieces of knowledge together.

## Learning Goals
1. Use Rails and JavaScript knowledge together
1. Integrate two systems using API endpoints and AJAX
1. Utilize open source software

## Features
We want to incorporate a few fun features with the existing 2048 game that will make it more interactive. This will be done with a rails application which will contain some of the original 2048 source code.
1. Allow users to log in to the system
1. Allow users to view, resume, delete and save their games
1. Allow users to view the a leaderboard which will show them the highest scores of other users registered in the system

## How?
These features seem great, but how exactly are we going to do this?

1. Create API endpoints in the Rails app for:
  - Saving the data from the game
  - Loading and sending the saved data to the game
  - Return the leaderboard data
1. Update the "Storage Manager" feature in the game to integrate AJAX to:
  - Send game data to the rails API upon save
  - Load game data from the rails API when the users requests it
  - For some information about the current storage implementation, look [here](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)

## Added fun!
- Figure out how to update the leaderboard more often than  when a save occurs
- Add Tic Tac Toe as an available game to play as well as 2048
