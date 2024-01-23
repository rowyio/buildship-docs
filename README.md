# BuildShip Docs

<img src="https://storage.googleapis.com/website-a1s39m.appspot.com/buildship-app-logos/OG.png" alt="BuildShip Docs" />

<br />
The official [BuildShip Documentation](https://docs.buildship.com/) source code.

## Development Setup 🧑‍💻

Follow these steps to get started quickly:

### Fork and Clone

- **Fork this repo:** Click the "Fork" button at the top of the page. This action will create a copy of the repository
  in your GitHub account.

- **Clone your fork:** Open your terminal and run the following command to clone the repository to your local machine:

```bash
git clone https://github.com/your-username/buildship-docs.git
```

### Set Up Remotes

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

### Install Dependencies

Run the following command to install project dependencies:

```bash
pnpm install
```

### Start the Development Server

Execute the following command to start the development server:

```bash
pnpm dev
```

Visit `localhost:3000` in your browser to view the development environment.

## Contributing 🚀

We welcome contributions in the form of raised issues, improvements, updates, or new content additions to the
documentation. Here's how you can contribute:

- **Clone the repository:** Clone the repository to your local machine using the steps mentioned above.

- **Update, add, or fix docs:** Make the necessary changes to enhance the documentation content.

- **Raise a Pull Request (PR):** Once your changes are ready, create a pull request to propose the updates.

### About This Repo

This docs project uses [Nextra](https://nextra.vercel.app/), which explains the documentation structure and details.
