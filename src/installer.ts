import * as core from '@actions/core';
import * as exec from '@actions/exec';
import * as fs from 'fs';
import * as path from 'path';

const COMPOSER_PATH = '/usr/bin/composer';
export async function installComposer() {
  if (process.platform === 'linux') {
    if (fs.existsSync(COMPOSER_PATH)) {
      await exec.exec(path.join(__dirname, 'update-composer.sh'));
    } else {
      await exec.exec(path.join(__dirname, 'install-composer.sh'));
    }
  } else if (process.platform === 'win32') {
    await exec.exec(
      'powershell -File ' + path.join(__dirname, 'install-composer.ps1')
    );
    core.addPath('C:\\ProgramData\\ComposerSetup\\bin');
  }
}
