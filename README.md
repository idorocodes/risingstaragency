# Rising Star Agency

Website and Sanity CMS for Rising Star Agency.

## Project Structure

```text
risingstaragency/
├── src/                    # Website source code
├── public/                 # Website assets
├── package.json            # Website dependencies and scripts
├── vite.config.js          # Vite configuration
│
└── risingstaragency/       # Sanity Studio
    ├── schemaTypes/        # Sanity content schemas
    ├── static/             # Studio static files
    ├── sanity.config.js    # Sanity Studio configuration
    ├── sanity.cli.js       # Sanity CLI configuration
    └── package.json        # Sanity Studio dependencies
```

## Requirements

Install the following before working with the project:

* Node.js
* pnpm

Check the installed versions:

```bash
node --version
pnpm --version
```

## Website

The website is the outer project.

From the project root:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Build the website for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## Sanity Studio

The Sanity Studio is located inside the nested `risingstaragency` directory.

Enter the Studio directory:

```bash
cd risingstaragency
```

Install dependencies:

```bash
pnpm install
```

Start the Studio:

```bash
pnpm dev
```

The Studio will normally be available at:

```text
http://localhost:3333
```

Build the Studio:

```bash
pnpm build
```

Start a built Studio:

```bash
pnpm start
```

## Sanity Project

The Studio is connected to the existing Sanity project:

```text
Project ID: qv415lwq
Dataset:    production
```

Do not change the project ID or dataset unless intentionally migrating the CMS.

The current schema contains a `job` document type with fields for:

* Job Title
* Description
* Salary
* Location
* Requirement
* Category

## Sanity Deployment

After Sanity account/project ownership and permissions have been properly configured, the Studio can be deployed with:

```bash
pnpm deploy
```

Do not deploy a new Studio or create a new Sanity project unless this is specifically required.

## Content Management

Jobs are managed through the Sanity Studio.

The existing production dataset contains the Rising Star Agency job listings.

To edit jobs:

1. Start the Sanity Studio.
2. Open `http://localhost:3333`.
3. Sign in with an account that has access to the Sanity project.
4. Select **Job** from the Content section.
5. Create or edit the required job.
6. Publish the changes.

## Important

The Sanity `production` dataset contains the live CMS content.

Before making major changes to the project, schema, or dataset, create a backup.

Do not delete the `production` dataset.

Do not change the Sanity project ID:

```text
qv415lwq
```

## Backup

A backup of the Sanity production dataset is included separately with the project handover.

Keep the backup somewhere secure and do not commit it to GitHub if it contains private or client-owned content.

## Development Workflow

For website development:

```bash
cd risingstaragency
pnpm install
pnpm dev
```

For Sanity development:

```bash
cd risingstaragency/risingstaragency
pnpm install
pnpm dev
```

The website and Sanity Studio are separate applications.

## Handover

The project includes:

* Website source code
* Sanity Studio source code
* Sanity schema
* Existing Sanity production content
* Production dataset backup

The new owner should ensure that they have appropriate ownership/access to:

* The source-code repository
* The Sanity project
* The website hosting/deployment platform
* The website domain
* Any required third-party services
* Required environment variables and API credentials

Once ownership and access have been transferred, the previous owner's credentials should be removed where appropriate.
