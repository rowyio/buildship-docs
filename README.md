# BuildShip Docs

<img src="https://storage.googleapis.com/website-a1s39m.appspot.com/buildship-app-logos/OG.png" alt="BuildShip Docs" />
<br />

[BuildShip Documentation](https://docs.buildship.com/) source code

## About

[BuildShip](https://buildship.com/) is a lowcode visual backend builder that lets you ship APIs, scheduled jobs, backend cloud functions instantly. Powered by AI, create your own workflow nodes, connect to any tool, database and create scalable backend for your apps.


## Want to Contribute to BuildShip Docs?

We welcome contributions in the form of raised issues, improvements, updates, or new content additions to the
documentation such as guides, tutorials.

You can either submit the improvement needed to the docs [using this form](https://docs.google.com/forms/d/e/1FAIpQLSfI6wcST5ax4mIu34ksDj4WuftYVGkDekSbheM2Wr-o40Hriw/viewform) (or)

Submit directly submit a PR to this code repo by following the steps below.

### 1. Clone and Setup the repo locally in your dev environment

- **Fork this repo:** Click the "Fork" button at the top of the page. This action will create a copy of the repository
  in your GitHub account.
- **Clone your fork:** Open your terminal and run the following command to clone the repository to your local machine:
```bash
git clone https://github.com/your-username/buildship-docs.git
```

### 2. Set Up Remote

- **Set remotes:** Navigate into the cloned repository and set the remotes for easier collaboration. Run the following
  commands:

```bash
cd buildship-docs

git remote add upstream https://github.com/rowyio/buildship-docs.git

git remote add origin https://github.com/your-username/buildship-docs.git
```

- Confirm the remotes are set correctly with:

```bash
git remote -v
```

### 3. Install Dependencies

Run the following command to install project dependencies:

```bash
pnpm install
```

### 4. Start the Development Server

Execute the following command to start the development server:

```bash
pnpm dev
```

Visit `localhost:3000` in your browser to view the development environment.

### 5. Make the change to the docs submit PR

Once you have setup the Dev environment, make the necessary changes locally and then raise a PR to the main branch to propose the changes to the team.

Thanks to [Nextra](https://vercel.com/templates/next.js/documentation-starter-kit) for docs template 
