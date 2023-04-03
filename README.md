<a name="readme-top"></a>

<div align="center">

  <img src="murple_logo.png" alt="logo" width="140"  height="auto" />
  <br/>

  <h3><b>Microverse README Template</b></h3>

</div>

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ](#faq)
- [📝 License](#license)

# 📖 Space Travellers Hub <a name="about-project"></a>

**This is a web application developed using React library and Redux state management framework that allows users to display real data of the space traveller's data. Users can reserve rockets, cancel rocket reservation, join space traveller's mission and leave the mission. The web application also allows users to see their profile, the rockets they reserved and the missions they joined.**

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>


<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://redux-toolkit.js.org/">Redux</a></li>
    <li><a href="https://www.javascript.com
">JavaScript</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://www.npmjs.com/package/webpack-dev-server">webpack-dev-server/a></li>
  </ul>
</details>


### Key Features <a name="key-features"></a>


- **Fetch real Rocket and missions data from the Space Travellers Hub hosting API using `fetch` JS API and `createAsyncThunk` redux method**
- **Reserve rocket and cancel rocket reservation**
- **Join and leave space traveller's mission**
- **Allow customers to show the reserved rockets and joined missions**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🚀 Live Demo <a name="live-demo"></a>


- [Live Demo Link](https://stunning-crumble-1bf3cb.netlify.app/Profile)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:
- `sudo apt-get install node.js npm`
- `sudo apt-get install git`
- `npx create-react-app .` inside the root directory of your repository.
- `npx install @redux-toolkit`


### Setup

Clone this repository to your desired folder:

Use `git clone https://github.com/amare1990/space-travellers-hub.git` command to clone our repo in your local folder you want.

### Install

Install this project with:

`npm run build`

### Usage

To run the project, execute the following command:

`npm start`

### Run tests

To run tests, run the following command:

`npm run test`

### Deployment

- You can deploy this project using:
First install `netlify` using the command `npm install netlify-cli -g`

 - Run the command `netlify deploy` in your root directory.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 👥 Authors <a name="authors"></a>

👤 **Lucas Bermudez**

- GitHub: [@Oklukeok](https://github.com/Oklukeok)
- LinkedIn: [LinkedIn](https://linkedin.com/in/lucas-bermudez/)

👤 **Amare Kassa**

- GitHub: [@githubhandle](https://github.com/amare1990)
- Twitter: [@twitterhandle](https://twitter.com/@amaremek)
- LinkedIn: [LinkedIn](https://linkedin.com/in/amare-kassa-90)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🔭 Future Features <a name="future-features"></a>


- [ ] **Saving the rserved states of the rocket in the database**
- [ ] **Saving the joined states of missions in the database**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/amare1990/space-travellers-hub/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## ⭐️ Show your support <a name="support"></a>


If you like this project, feel free to modify it add new features.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🙏 Acknowledgments <a name="acknowledgements"></a>


I would like to thank my coding partner for his flexible approach to work.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## ❓ FAQ <a name="faq"></a>


- **Which way of fetching data is recommended?**

  - I recommend to use `createAsyncThunk` redux method to handle non-unit functions.

- **Is there a way of posting reserved states of rocket and joined states of missions**

  - No. You need to have permission from the space traveller's hub to post data to the hosting API.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 📝 License <a name="license"></a>

This project is [MIT](https://github.com/amare1990/space-travellers-hub/.LICENSE) licensed.



<p align="right">(<a href="#readme-top">back to top</a>)</p>
