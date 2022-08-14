> **This is the most important file for you to read as a contributor.** This file will explain *everything* you need to know in order to successfully contribute to this project.

# Contributing

Thanks for your interest in contributing on this project! Please read carefully through our guidelines below to ensure that your contribution adheres to our project's standards.

## Code of Conduct

All project contributors are expected to follow our Code of Conduct in order to maintain a safe environment for all contributions. To learn more about what actions are acceptable and not, please read the [full text](CODE OF CONDUCT.md).

## Issue Tracking

We use [GitHub Issues](https://github.com/Pradumnasaraf/OctoUser/issues) to track all tasks related to this project.

## Style Guide

Coming Soon

## Build the project locally

In order to contribute to this project on GitHub, you must first clone a copy of the project locally on your computer.
There are five steps to building this project:

1. [Set up Git on your local computer](#set-up-git-on-your-local-computer)
1. [Fork the repository](#fork-the-repository)
1. [Clone your fork](#clone-your-fork)
1. [Install dependencies](#install-dependencies)
1. [Run the project](#run-the-project)

Once you successfully set up and clone the project on you local computer, begin fixing some [issues](https://github.com/Pradumnasaraf/OctoUser/issues).

### Set up Git on your local computer.

All GitHub projects are backed by a version control software called *Git*. You'll need to [set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git) in order to contribute to *this* project.


### Fork the repository

A *fork* is a copy of a repository. Forking a repository lets you to make changes to your copy without affecting any of the original code.

Click **Fork** (in the top-right corner of the page) to copy this repository to your GitHub account.

### Clone your fork

A *clone* is a downloaded version of a repository. Cloning the project fork lets you download a copy of the repository to your computer.

Use `git` to clone your fork

```
$ git clone https://github.com/YOUR-USERNAME/OctoUser
```

### Install dependencies
It is advisable to run the project before working on it. This specific project is written in JavaScript and can run on any web browser. So for now, a browser is all you need to run the project.

### Work on an Issue
See an issue you want to work on. Request to work on the issue and you will be assigned the issue.

You can create a new issue, if the fix or feature is not an issue yet.

## Submit a Pull Request

A *pull request* is a GitHub feature that lets you make changes to the original code instead of the one you are working with on your local computer.

There are three steps to submitting a pull request:
1. [Save your changes locally](#save-your-changes-locally)
2. [Send your changes to your fork](#send-your-changes-to-your-fork)
3. [Open a Pull Request](#open-a-pull-request)

### Save your changes locally

First, get a list of all the files you have changed.
```
$ git status
```

Next, *stage* the file you want to save. This will add the file to a new list that is ready to be saved.
```
$ git add src/index.js
```

Next, verify that the file has been staged correctly. Notice that the text color has changed, and your file is now in a list that says "Changes to be committed" instead of "Changes not staged for commit"
```
$ git status
```

Finally, commit your staged files.
```
$ git commit -m "Bug fixes on homepage"
```

### Send your changes to your fork

With one simple `git` command, you can send the changes you just committed locally to your *fork* on GitHub.

```
$ git push origin master
```

### Open a Pull Request

1. Find the [New Pull Request](https://github.com/omogidi/OctoUser/compare/) button
2. Select the option to **compare across forks**
3. Select **your username** in the `head fork` option
4. Select **your username** in the `base` option<sup>*</sup>
4. Click **Create Pull Request**

Soon after reviewing, all your changes will be merged into the master branch of this project. You will get a notification email once the changes have been merged.


## License
By contributing, you agree that your contributions will be licensed under its MIT license.