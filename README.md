# EGD_profiler_finalproject

superuser = amir
password = 123

password secret key
SECRET_KEY = 'django-insecure-*ma=d*m*cro$mr%%8+f$k1jr-inidh=uk)rd(klto8vbs^$g2b'

Actions for using github:

    git clone https://github.com/AmirFragman/EGD_profiler_finalproject.git

   

Create virtual enviroment:

    pip install virtualenv > env
    Create virtualenv in the directory you are in: virtualenv "env_name" (common used as venv)
    Activate virtualenv: "env_name"\Scripts\activate

    pip install -r requirements.txt

run the app:

    python manage.py runserver


# Table of Contents

    BACK:
    Project Structure
    Dependencies
    Database
    Scraping Tournaments
    Scraping Players
    Scraping Matches
    Main Function

    FRONT:
    EgdProfiler
    Development server
    Build

Project Structure

The scraper consists of several Python scripts that work together to collect data from the EGD website. Here is an overview of the project structure:

    scrapper.py: The main script that orchestrates the scraping process.
    requirements.txt: A file listing the Python libraries and dependencies required to run the scraper.
    ../egd_data.db: The SQLite database where scraped data is stored.

Dependencies

The scraper relies on the following Python libraries and modules:

    concurrent.futures.ThreadPoolExecutor: Used for concurrent execution of scraping tasks.
    sqlite3: To interact with the SQLite database.
    requests: For making HTTP requests to the EGD website.
    BeautifulSoup: Used for parsing and extracting data from HTML pages.
    itertools.count: Used for generating sequential numbers for pagination.
    Other standard Python libraries for data manipulation.

Please make sure to install these dependencies by running pip install -r requirements.txt before running the scraper.
Database

The SQLite database, ../egd_data_with_gor.db, is used to store the scraped data. The database schema includes three tables:

    players: Contains information about Go players.
    tournaments: Stores data related to Go tournaments.
    matches: Records match results between players in various tournaments.

The create_tables_if_not_exist function in scrapper.py initializes these tables if they do not already exist.
Scraping Tournaments

The get_tournaments_data function fetches data about Go tournaments from the EGD website. It paginates through the tournament listings and extracts details such as tournament code, date, description, city, country, tclass, number of rounds, and total players. The scraped data is then written to the tournaments table in the database using the write_tournaments_to_database function.
Scraping Players

The get_players_data function scrapes data about Go players from the EGD website. Similar to the tournament scraping, it paginates through player listings and retrieves information such as player PIN, last name, first name, country code, club, rank, GoR rating, tournaments played, and placement. The scraped player data is stored in the players table in the database using the write_players_to_database function.
Scraping Matches

The scrap_matches function scrapes match data for a specific tournament. It first fetches the placement index for players in the tournament using the get_player_placement_index function. Then, it extracts match details, including round, opponent, player color, handicap, result, GOR changes, and placement, using the get_match_data function. The matches are normalized to ensure that player1 is always the one with the smaller ID, and the data is written to the matches table in the database using the write_matches_to_database function.
Main Function

The main function serves as the entry point for the scraper. It can be run to initiate the scraping process for tournaments, players, and match results. By default, it fetches tournament codes from the database and uses multi-threading to scrape match data for multiple tournaments concurrently.

To run the scraper, uncomment the desired scraping functions in the main function and execute scrapper.py.

Please note that web scraping should be done responsibly and in accordance with the website's terms of service and robots.txt file. Be sure to check the website's usage policies and ensure that you are not causing excessive load on their servers.

# EgdProfiler

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
