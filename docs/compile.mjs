import fs from 'fs';
import path from 'path';
import { bundleMDX } from 'mdx-bundler';
import chokidar from 'chokidar';
import http from 'http';
import { glob } from 'glob';
import url from 'url';

const ROOT_DIR = new URL('.', import.meta.url).pathname;
const MDX_DIR = path.join(ROOT_DIR, 'buildship-app-mdx');
const OUTPUT_DIR = path.join(ROOT_DIR, 'buildship-app-js');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Function to bundle a single MDX file
async function bundleMdxFile(filePath) {
  const dirName = path.basename(path.dirname(filePath));
  const outputPath = path.join(OUTPUT_DIR, `${dirName}.js`);

  try {
    const result = await bundleMDX({
      file: filePath,
      cwd: path.dirname(filePath),
      globals: {
        '@mdx-js/react': {
          varName: 'MdxJsReact',
          namedExports: ['useMDXComponents'],
          defaultExport: false,
        },
      },
      mdxOptions(options) {
        return {
          ...options,
          providerImportSource: '@mdx-js/react',
        };
      },
    });

    fs.writeFileSync(outputPath, result.code);
    console.log(`Compiled MDX: ${filePath} → ${outputPath}`);
  } catch (error) {
    console.error(`Error bundling ${filePath}:`, error);
  }
}

// Function to bundle all MDX files
async function bundleAllMdxFiles() {
  const pattern = path.join(MDX_DIR, '*/index.mdx');
  const files = glob.sync(pattern);

  console.log(`Found ${files.length} MDX files to bundle`);

  for (const file of files) {
    await bundleMdxFile(file);
  }

  console.log('All MDX files bundled successfully');
}

// Simple file server with CORS support
function createServer() {
  const server = http.createServer((req, res) => {
    // Add CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle OPTIONS requests for CORS preflight
    if (req.method === 'OPTIONS') {
      res.writeHead(204);
      res.end();
      return;
    }

    // Parse the URL
    const parsedUrl = url.parse(req.url);
    let pathname = parsedUrl.pathname;

    // Serve files from OUTPUT_DIR
    const filePath = path.join(OUTPUT_DIR, pathname);

    fs.stat(filePath, (err, stats) => {
      if (err || !stats.isFile()) {
        res.writeHead(404);
        res.end('File not found');
        return;
      }

      const fileStream = fs.createReadStream(filePath);

      // Set content type based on file extension
      const ext = path.extname(filePath).toLowerCase();
      const contentType =
        {
          '.js': 'text/javascript',
          '.jsx': 'text/javascript',
          '.html': 'text/html',
          '.css': 'text/css',
          '.json': 'application/json',
        }[ext] || 'text/plain';

      res.writeHead(200, { 'Content-Type': contentType });
      fileStream.pipe(res);
    });
  });

  return server;
}

// Development mode with file watching and server
function startDevMode() {
  console.log('Starting development mode...');

  // Start the development server
  const PORT = 3030;
  createServer().listen(PORT, () => {
    console.log(`Development server running at http://localhost:${PORT}`);
  });

  // Initial bundle
  bundleAllMdxFiles();

  // Watch for changes
  const watcher = chokidar.watch(MDX_DIR, {
    ignored: /(^|[\/\\])\../,
    persistent: true,
  });

  console.log(`Watching for changes in ${MDX_DIR}`);

  watcher.on('change', async (filePath) => {
    console.log(`File changed: ${filePath}`);
    if (filePath.endsWith('.mdx')) {
      // If the changed file is index.mdx, bundle it
      if (path.basename(filePath) === 'index.mdx') {
        await bundleMdxFile(filePath);
      } else {
        // If another MDX file changed, bundle all (to handle imports between files)
        await bundleAllMdxFiles();
      }
    }
  });

  watcher.on('add', async (filePath) => {
    console.log(`File added: ${filePath}`);
    if (path.basename(filePath) === 'index.mdx') {
      await bundleMdxFile(filePath);
    }
  });
}

// Production mode - just bundle files
function startProdMode() {
  console.log('Starting production build...');
  bundleAllMdxFiles();
}

// Simple command line argument parsing without yargs
function parseArgs() {
  const args = process.argv.slice(2);
  return {
    dev: args.includes('--dev') || args.includes('-d'),
  };
}

// Execute the appropriate mode
const options = parseArgs();
if (options.dev) {
  startDevMode();
} else {
  startProdMode();
}
