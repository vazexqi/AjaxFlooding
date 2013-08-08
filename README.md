### Introduction

Tests whether browers will swap the request and response for AJAX when
we flood the calls.

### Prerequisites

1. install node (`sudo apt-get install node`)
1. install npm (`sudo apt-get install npm`)

### How to use

1. Clone this repository.
1. `cd` into the cloned repo.
1. `npm install` (do this only once) to setup the 'connect' framework.
1. `npm start`
1. Navigate to http://127.0.0.1:3000
1. Open up the chrome debugger and see if there are any swapping. If
   they are then it will also break at that point.

