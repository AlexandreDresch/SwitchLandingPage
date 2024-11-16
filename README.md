# Switch Landing Page

![cover](.github/image.png?style=flat)

This is a landing page website dedicated to showcasing Nintendo Switch games, including Super Mario Odyssey, Pokemon Legends: Arceus, and The Legend of Zelda: Breath of the Wild. The site is designed with a focus on visual experience and interactivity to highlight games with details about their ratings, gameplay modes, trailers, and purchase links.

You can access the deployed version of this project [here](https://alexandredresch.github.io/SwitchLandingPage/).

## Technologies

- **HTML5**: Site structure and markup.
- **CSS3**: Styling and responsive design.
- **JavaScript**: Interactivity and DOM manipulation.
- **Swiper.js**: Slider library for content navigation.

## File Structure

```bash
├── index.html              # Main page
├── css/
│   └── index.css           # Main styles
├── images/
│   ├── icons/              # Icons used on the site
│   └── (other images)      # Images used on the site
└── scripts/
    └── app.js            # Scripts for functionality and interactivity
```

## Features

- **Interactive Sliders**: For browsing featured games.
- **Detail Modals**: Provide additional information about each game upon clicking "+" icon.

## Getting Started

### Prerequisites

- Live Server (if running locally), or just double click the `index.html` file to open in your browser.
- Docker installed (if running with Docker).

## Running the Application

You can run this application either with Docker or locally on your machine.

### Option 1: Running with Docker

1. Clone the repository:

```bash
  git clone https://github.com/AlexandreDresch/SwitchLandingPage.git
```

2. Navigate to the project directory:

```bash
  cd SwitchLandingPage
```

3. Build and start the Docker containers:

```bash
  docker-compose up --build
```

4. Open your browser and navigate to:

```bash
  http://localhost:8080
```

5. To stop the Docker containers:

```bash
  docker-compose down
```

### Option 2: Running Locally (Without Docker)

1. Clone the repository:

```bash
  git clone https://github.com/AlexandreDresch/SwitchLandingPage.git
```

2. Navigate to the project directory:

```bash
  cd SwitchLandingPage
```

3. Open project on Visual Studio Code:

```bash
  code .
```

4. Start Live Server, a new browser tab will open with the running project.