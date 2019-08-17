/**
 * server.js
 *
 * You can use the default server.js by simply running `next`,
 * but a custom one is required to do paramaterized urls like
 * blog/:slug.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * BENEVOLENT WEB LLC BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

const { createServer } = require('https');
const next = require('next');
const fs = require('fs');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const routes = require('./routes');

const options = {
  key: fs.readFileSync('private/key.pem'),
  cert: fs.readFileSync('private/cert.pem'),
};

const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  createServer(options, handler).listen(port, err => {
    if (err) throw err;
    // console.log(`> Ready on https://localhost:${port}`);
  });
});
