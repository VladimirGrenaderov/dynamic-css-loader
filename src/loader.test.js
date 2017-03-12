import fs from 'fs';
import path from 'path';
import { runLoaders } from 'loader-runner';

describe('Loader test', () => {
  it('should run', (cb) => {
    runLoader({}, cb);
  });

  it('should run', (cb) => {
    runLoader({}, (err, res) => {
      expect(res).toBeDefined();

      cb(err);
    });
  });
});

function runLoader(options, cb) {
  runLoaders({
    resource: path.join(__dirname, 'test.txt'),
    loaders: [
      {
        loader: path.join(__dirname, 'loader'),
        options,
      },
    ],
    context: {
      emitFile: () => {},
    },
    readResource: fs.readFile.bind(fs),
  },
  (err, res) => {
    if (err) {
      return cb(err);
    }

    return cb(null, res.result);
  },
  );
}
