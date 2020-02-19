
codecovify -- Frontend
==========

## Introduction

This is a starting point for the codecov front end candidate exercise. 

Exercise goals and tasks can be found in the Issues section of this repository. 

The exercise is approximately four hours long, and roughly breaks down into the following segments:

* 15 minute onboarding and kick off (in Zoom)
* 3.5 hours of work on the exercise
* 15 minutes (or more if the candidate desires) of peer review on the exericse.

There will be at least one brief check in during the 3.5 hours of work on the exercise to explicitly check progress, answer any questions, etc. But you are welcome to reach out to Codecov staff at any time and as often as you'd like. 

## Making Progress
Excluding the issue, *Issue 0: Getting Started*, You should PR  _once_ per issue and tag @hootener for review on the PR. If you prefer to open a PR as you're working on an issue, feel free to do so, just mark the issue as "Draft" and remove the draft status after you feel like the issue is solved. A PR template is included in this repository for your convenience.

The PRs are used throughout the exercise as a rough indicator of progress, and to have a centralized location to discuss code. At any point during the exercise, on request, a member of the Codecov team is more than happy to review a PR to assess completeness or answer any questions you may have.

At the end of the exercise your submission will be discussed with members of the team in a peer review style format. 


## Development
To start the server, run:

`docker-compose up --build`

The app will be viewable at http://0.0.0.0:8000. The application itself hot reloads and should automatically reload the page as you save your changes. 

All work should be performed in the `frontend` folder. You're free to edit the `frontend/package.json` file to add and additional node packages you may need. 

## Handy References and Tips
Below are some references and tips that can help make your exercise successful.

### Codecov's API
It will be necessary to ingest data from Codecov's API during the course of this exercise. You can find the API reference here: 

https://docs.codecov.io/v4.4.0/reference

Of particular importance are the following:

* The Totals object. 
* The Repositories, Branches, and Commits Resources

### Zeplin
Front end wireframes are in a tool called Zeplin. You will be given access to this tool during this exercise. By double clicking on elements in the wireframes, you can expose their underlying CSS and HTML. This may be helpful during the exercise. 

### Slack Access
You will be admitted to a guest channel in our Slack. You are _highly encouraged_ to use members of the Codecov Team as a resource during the exercise. Ask questions, let us know if you're stuck and how we can unblock you, draw our attention to PRs, etc. If you'd made it this far in the interview process we're excited about working with you and we're ready to help :). 