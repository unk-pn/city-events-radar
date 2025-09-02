<p align="center"><h1 align="center">CITY-EVENTS-RADAR</h1></p>
<p align="center">
	<em>Discover amazing events happening in your city and beyond with this modern React-based events discovery platform</em>
</p>
<p align="center">
	<a href="https://city-events-radar.vercel.app/events" target="_blank">
		<img src="https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-4285f4?style=for-the-badge&logoColor=white" alt="Live Demo">
	</a>
</p>
<p align="center">
</p>
<br>

## Table of Contents

- [ Live Demo](#-live-demo)
- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
  - [ Project Index](#-project-index)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Testing](#-testing)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)

---

## Live Demo

**🚀 [Visit City Events Radar](https://city-events-radar.vercel.app/events)**

Experience the application live! Browse real events, test the filtering system, and explore the responsive design across different devices.

---

## Overview

City Events Radar is a modern Next.js web application that helps users discover and explore events happening in their city and beyond. Built with React, TypeScript, and Redux Toolkit, the application provides a seamless experience for browsing events with advanced filtering capabilities, detailed event information, and responsive design. The app integrates with the Ticketmaster API to provide real-time event data including concerts, sports, theater shows, and other entertainment events.

---

## Features

- 🎫 **Event Discovery**: Browse events from Ticketmaster API with comprehensive event details
- 🔍 **Advanced Filtering**: Filter events by keyword, city, date range, and category
- 📱 **Responsive Design**: Modern, mobile-first design with CSS modules
- 🏪 **Event Details**: Detailed event pages with venue information, pricing, and booking links
- 🗓️ **Date Management**: Smart date formatting and event scheduling with custom hooks
- ⚡ **State Management**: Efficient state management with Redux Toolkit
- 🚀 **Performance**: Built with Next.js for optimal performance and SEO
- 🎨 **Modern UI**: Clean, intuitive interface with loading states and error handling
- 📍 **Location-based**: Search events by city and location
- 🔄 **Real-time Data**: Live event data from Ticketmaster's extensive database

---

## Project Structure

```sh
└── city-events-radar/
    ├── README.md
    ├── eslint.config.mjs
    ├── next.config.ts
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── app
    │   ├── components
    │   ├── hooks
    │   ├── store
    │   └── types
    ├── tsconfig.json
    └── yarn.lock
```

### Project Index

<details open>
	<summary><b><code>CITY-EVENTS-RADAR/</code></b></summary>
	<details>
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/unk-pn/city-events-radar/blob/master/package-lock.json'>package-lock.json</a></b></td>
				<td>NPM dependency lock file ensuring consistent package versions</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/unk-pn/city-events-radar/blob/master/next.config.ts'>next.config.ts</a></b></td>
				<td>Next.js configuration file for build and runtime settings</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/unk-pn/city-events-radar/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
				<td>TypeScript compiler configuration</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/unk-pn/city-events-radar/blob/master/eslint.config.mjs'>eslint.config.mjs</a></b></td>
				<td>ESLint configuration for code quality and consistency</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/unk-pn/city-events-radar/blob/master/package.json'>package.json</a></b></td>
				<td>Project dependencies, scripts, and metadata configuration</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details>
		<summary><b>src</b></summary>
		<blockquote>
			<details>
				<summary><b>types</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/unk-pn/city-events-radar/blob/master/src/types/index.ts'>index.ts</a></b></td>
						<td>TypeScript type definitions for Event, API responses, and application interfaces</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>components</b></summary>
				<blockquote>
					<details>
						<summary><b>ReduxProvider</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/unk-pn/city-events-radar/blob/master/src/components/ReduxProvider/ReduxProvider.tsx'>ReduxProvider.tsx</a></b></td>
								<td>Redux store provider wrapper component for state management</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>EventItem</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/unk-pn/city-events-radar/blob/master/src/components/EventItem/EventItem.tsx'>EventItem.tsx</a></b></td>
								<td>Reusable event card component displaying event details and navigation</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/unk-pn/city-events-radar/blob/master/src/components/EventItem/EventItem.module.css'>EventItem.module.css</a></b></td>
								<td>CSS module styles for EventItem component</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Header</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/unk-pn/city-events-radar/blob/master/src/components/Header/Header.module.css'>Header.module.css</a></b></td>
								<td>CSS module styles for Header component</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/unk-pn/city-events-radar/blob/master/src/components/Header/Header.tsx'>Header.tsx</a></b></td>
								<td>Main navigation header component with logo and navigation menu</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Filters</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/unk-pn/city-events-radar/blob/master/src/components/Filters/Filters.module.css'>Filters.module.css</a></b></td>
								<td>CSS module styles for Filters component</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/unk-pn/city-events-radar/blob/master/src/components/Filters/Filters.tsx'>Filters.tsx</a></b></td>
								<td>Advanced filtering component for searching events by various criteria</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Navbar</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/unk-pn/city-events-radar/blob/master/src/components/Navbar/Navbar.module.css'>Navbar.module.css</a></b></td>
								<td>CSS module styles for Navbar component</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/unk-pn/city-events-radar/blob/master/src/components/Navbar/Navbar.tsx'>Navbar.tsx</a></b></td>
								<td>Navigation bar component for page routing and menu items</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>hooks</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/unk-pn/city-events-radar/blob/master/src/hooks/useDateTimeFormat.ts'>useDateTimeFormat.ts</a></b></td>
						<td>Custom hook for formatting dates and times in event displays</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/unk-pn/city-events-radar/blob/master/src/hooks/redux.ts'>redux.ts</a></b></td>
						<td>Typed Redux hooks for TypeScript integration with store</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>store</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/unk-pn/city-events-radar/blob/master/src/store/eventsSlice.ts'>eventsSlice.ts</a></b></td>
						<td>Redux slice for events state management with async actions</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/unk-pn/city-events-radar/blob/master/src/store/index.ts'>index.ts</a></b></td>
						<td>Redux store configuration and setup</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>app</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/unk-pn/city-events-radar/blob/master/src/app/page.module.css'>page.module.css</a></b></td>
						<td>CSS module styles for main homepage</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/unk-pn/city-events-radar/blob/master/src/app/layout.tsx'>layout.tsx</a></b></td>
						<td>Root layout component with global providers and header</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/unk-pn/city-events-radar/blob/master/src/app/globals.css'>globals.css</a></b></td>
						<td>Global CSS styles and reset for the application</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/unk-pn/city-events-radar/blob/master/src/app/page.tsx'>page.tsx</a></b></td>
						<td>Homepage component with welcome message and project introduction</td>
					</tr>
					</table>
					<details>
						<summary><b>events</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/unk-pn/city-events-radar/blob/master/src/app/events/events.module.css'>events.module.css</a></b></td>
								<td>CSS module styles for events listing page</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/unk-pn/city-events-radar/blob/master/src/app/events/page.tsx'>page.tsx</a></b></td>
								<td>Events listing page with filters and infinite scroll</td>
							</tr>
							</table>
							<details>
								<summary><b>[id]</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/unk-pn/city-events-radar/blob/master/src/app/events/[id]/page.tsx'>page.tsx</a></b></td>
										<td>Dynamic event detail page showing comprehensive event information</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/unk-pn/city-events-radar/blob/master/src/app/events/[id]/[id].module.css'>[id].module.css</a></b></td>
										<td>CSS module styles for individual event detail page</td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>api</b></summary>
						<blockquote>
							<details>
								<summary><b>events</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/unk-pn/city-events-radar/blob/master/src/app/api/events/route.ts'>route.ts</a></b></td>
										<td>API route for fetching events from Ticketmaster with filtering support</td>
									</tr>
									</table>
									<details>
										<summary><b>[id]</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/unk-pn/city-events-radar/blob/master/src/app/api/events/[id]/route.ts'>route.ts</a></b></td>
												<td>API route for fetching individual event details by ID</td>
											</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>info</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/unk-pn/city-events-radar/blob/master/src/app/info/page.tsx'>page.tsx</a></b></td>
								<td>Information page about the project and Ticketmaster acknowledgment</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/unk-pn/city-events-radar/blob/master/src/app/info/info.module.css'>info.module.css</a></b></td>
								<td>CSS module styles for info page</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---

## Getting Started

### Prerequisites

Before getting started with city-events-radar, ensure your runtime environment meets the following requirements:

- **Programming Language:** TypeScript
- **Package Manager:** Yarn, Npm

### Installation

Install city-events-radar using one of the following methods:

**Build from source:**

1. Clone the city-events-radar repository:

```sh
git clone https://github.com/unk-pn/city-events-radar
```

2. Navigate to the project directory:

```sh
cd city-events-radar
```

3. Install the project dependencies:

**Using `yarn`** &nbsp; [<img align="center" src="https://img.shields.io/badge/Yarn-2C8EBB.svg?style=flat&logo=yarn&logoColor=white" />](https://yarnpkg.com/)

```sh
yarn install
```

**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
npm install
```

### Usage

Run city-events-radar using the following command:
**Using `yarn`** &nbsp; [<img align="center" src="https://img.shields.io/badge/Yarn-2C8EBB.svg?style=flat&logo=yarn&logoColor=white" />](https://yarnpkg.com/)

```sh
yarn dev
```

**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**🌐 Or try the live demo**: [City Events Radar](https://city-events-radar.vercel.app/events)

**Environment Setup:**
Create a `.env.local` file in the root directory and add your Ticketmaster API configuration:

```env
TICKETMASTER_URL=https://app.ticketmaster.com/discovery/v2/events.json?apikey=YOUR_API_KEY
```

### Testing

Build the project for production using the following command:
**Using `yarn`** &nbsp; [<img align="center" src="https://img.shields.io/badge/Yarn-2C8EBB.svg?style=flat&logo=yarn&logoColor=white" />](https://yarnpkg.com/)

```sh
yarn build
```

**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
npm run build
```

Run the linter to check code quality:

```sh
yarn lint
# or
npm run lint
```

---

## Contributing

- **💬 [Join the Discussions](https://github.com/unk-pn/city-events-radar/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/unk-pn/city-events-radar/issues)**: Submit bugs found or log feature requests for the `city-events-radar` project.
- **💡 [Submit Pull Requests](https://github.com/unk-pn/city-events-radar/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/unk-pn/city-events-radar
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/unk-pn/city-events-radar/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=unk-pn/city-events-radar">
   </a>
</p>
</details>

---

## License

This project is open source and available under the [MIT License](https://choosealicense.com/licenses/mit/). Feel free to use, modify, and distribute this project in accordance with the license terms.

---

## Acknowledgments

- **[Ticketmaster](https://www.ticketmaster.com/)** - For providing the comprehensive events API that powers this application
- **[Next.js](https://nextjs.org/)** - The React framework that makes this project possible
- **[Redux Toolkit](https://redux-toolkit.js.org/)** - For efficient state management
- **[React](https://reactjs.org/)** - The foundation of our user interface
- **Special thanks** to the open-source community for the amazing tools and libraries

---

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 15.5.2
- **Language**: TypeScript
- **UI Library**: React 19.1.0
- **State Management**: Redux Toolkit with React-Redux
- **Styling**: CSS Modules
- **Code Quality**: ESLint
- **Package Manager**: Yarn/NPM
- **API Integration**: Ticketmaster Discovery API

---

## 📸 Screenshots

### 🏠 Homepage

[![Homepage - Welcome Screen](https://i.postimg.cc/gJZGN7cq/home-page.png)](https://postimg.cc/CBwyKmqz)

### 📋 Events Listing

[![Events Page with Filters](https://i.postimg.cc/HsG9Z8zQ/events-page.png)](https://postimg.cc/CdN8d1W1)

### 🎫 Event Details

[![Event Detail Page](https://i.postimg.cc/JnDjKRB6/event-id-page.png)](https://postimg.cc/2bYqSRGh)

### ❓ Information Page

[![Information Page](https://i.postimg.cc/RhC44ZQG/info-page.png)](https://postimg.cc/cgzVcZz8)

### 📱 Mobile Responsive

<div align="center">
  <img src="https://i.postimg.cc/Znvj9rcq/mobile-view.png" alt="Mobile View" width="300"/>
</div>

---

## 🤝 Support

If you found this project helpful, please consider:

- ⭐ Giving it a star on GitHub
- 🐛 Reporting bugs or requesting features
- 🔀 Contributing to the codebase
- 📢 Sharing it with others who might find it useful

---

## 📧 Contact

For questions, suggestions, or collaboration opportunities, feel free to reach out through:

- GitHub Issues: [Create an issue](https://github.com/unk-pn/city-events-radar/issues)
- GitHub Discussions: [Join the discussion](https://github.com/unk-pn/city-events-radar/discussions)

---
