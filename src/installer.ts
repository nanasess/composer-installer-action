import * as exec from '@actions/exec';
import * as path from 'path';

export async function installComposer() {
  if (process.platform === 'linux') {
    await exec.exec(path.join(__dirname, 'install-composer.sh'));
  }
}
